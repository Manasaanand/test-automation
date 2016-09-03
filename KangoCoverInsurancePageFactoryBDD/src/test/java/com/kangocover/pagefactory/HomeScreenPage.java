package com.kangocover.pagefactory;

import java.text.ParseException;
import java.util.Calendar;
import java.util.Date;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.kangocover.utilities.BrowserCommon;

public class HomeScreenPage {

	WebDriver driver;
	public final static By Destination = By.cssSelector(".ui-autocomplete-input");
	private final static By ReturnDate = By.cssSelector(".return");
	private static final By xpathMonthYearSection = By.cssSelector(".ui-datepicker-title");
	private final static By forwardArrow = By
			.xpath("//div[@class='ui-datepicker-group ui-datepicker-group-last']/div/a");
	private static final String LeftHandSideCalendar = "//div[@class='ui-datepicker-group ui-datepicker-group-first']/table/tbody/tr[";
	private static final String RightHandSideCalendar = "//div[@class='ui-datepicker-group ui-datepicker-group-last']/table/tbody/tr[";
	private final static By LeftCalendar_MonthYear = By.xpath(
			"//div[@class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all ui-datepicker-multi ui-datepicker-multi-2']/div[1]/div/div");
	private final static By RightCalendar_MonthYear = By.xpath(
			"//div[@class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all ui-datepicker-multi ui-datepicker-multi-2']/div[2]/div/div");
	private static String DateDisabled = "ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled";
	private static final By Age = By.cssSelector(".ageInputField.multiAgeField");
	private static final By GetQuoteButton = By.cssSelector(".primarybutton.getquote");
	private static final By DropdDownTravelInsurance = By.xpath("//ul[@class='header-menu unified-menu']/li[1]");
	private static final By AnnualInsuranceTab = By.xpath("//ul[@class='header-menu unified-menu']/li[1]/ul/li[1]/a");
	public static final By DropdDownFirstInput = By.cssSelector(".ui-corner-all.ui-state-focus");
	public static final By DependentsPopUp = By
			.xpath("//div[@class='confirm_dependants_are_valid ui-dialog-content ui-widget-content']/div/span/p");
	public static final By AgePopUp = By
			.xpath("//*[@class='confirm_ignore_elderly ui-dialog-content ui-widget-content']/div/p[1]");

	static int day;
	static int month;
	static int year;
	static Date HomePagereturndate;
	static String travelMonth;
	static int returnTable = 1;
	static String Calendar_Dates_part1;
	static String Calendar_Dates_part2;
	static String Calendar_Dates_part3;
	public static String months[] = { "January", "February", "March", "April", "May", "June", "July", "August",
			"September", "October", "November", "December" };

	
	public static void enterDestination(String destination) {
		BrowserCommon.click(Destination);
		if (destination.contains(",")) {
			String[] DestinationNumber = destination.split(",");

			for (int count = 0; count < DestinationNumber.length; count++) {
				BrowserCommon.clearAndEnterText(Destination, DestinationNumber[count]);// find(selector).sendKeys(DestinationNumber[count]);
				BrowserCommon.click(DropdDownFirstInput);
			}
		} else {
			BrowserCommon.clearAndEnterText(Destination, destination);
			BrowserCommon.click(DropdDownFirstInput);
		}

		
	}

	public static void enterAge(String destination) {

		BrowserCommon.find(Age).clear();
		BrowserCommon.find(Age).sendKeys(destination);

		
	}

	public static void enterReturnDate(int Duration) throws ParseException {
		BrowserCommon.click(ReturnDate);
		getReturnDate(Duration);

		
	}

	public static void clickOnGetQuote() {
		BrowserCommon.click(GetQuoteButton);

		
	}

	public static void selectAnnualInsurance() {

		BrowserCommon.click(DropdDownTravelInsurance);
		BrowserCommon.click(DropdDownTravelInsurance);
		BrowserCommon.click(AnnualInsuranceTab);

		
	}

	public void validateAgePopUp(String message) {
		if (BrowserCommon.elementDisplay(DependentsPopUp)) {
			Assert.assertEquals(message, BrowserCommon.getText(DependentsPopUp));
		} else {
			Assert.assertEquals(message, BrowserCommon.getText(AgePopUp));
		}

	}

	/**************************
	 * Functions to Implement for Local Page
	 ***********************************/
	private static void getReturnDate(int Duration) throws ParseException {
		Calendar rightNow = Calendar.getInstance();
		rightNow.add(Calendar.DAY_OF_MONTH, Duration);
		day = rightNow.get(Calendar.DAY_OF_MONTH);
		month = rightNow.get(Calendar.MONTH);
		year = rightNow.get(Calendar.YEAR);

		String StringHomePagereturndate = day + "/" + (month + 1) + "/" + year;
		HomePagereturndate = BrowserCommon.StringToDate(StringHomePagereturndate);
		travelMonth = months[month] + " " + year;

		BrowserCommon.click(ReturnDate);
		selectMonth(travelMonth);
		selectDay(travelMonth, day);

	}

	private static void selectDay(String travelMonth, int dayToBeSelected) {
		if (travelMonth.equalsIgnoreCase(BrowserCommon.getText(LeftCalendar_MonthYear))) {
			Calendar_Dates_part1 = LeftHandSideCalendar;
		} else {
			Calendar_Dates_part1 = RightHandSideCalendar;
		}
		Calendar_Dates_part2 = "]/td[";
		Calendar_Dates_part3 = "]";
		for (int rNum = 1; rNum <= 6; rNum++) {
			for (int cNum = 1; cNum <= 7; cNum++) {
				String className = BrowserCommon.getAttribute(
						By.xpath(Calendar_Dates_part1 + rNum + Calendar_Dates_part2 + cNum + Calendar_Dates_part3),
						"class");
				if (!className.contains(DateDisabled)) {
					String date = BrowserCommon.getText(
							By.xpath(Calendar_Dates_part1 + rNum + Calendar_Dates_part2 + cNum + Calendar_Dates_part3));
					int currentDay = Integer.parseInt(date);
					if (currentDay == dayToBeSelected) {
						BrowserCommon.click(By.xpath(
								Calendar_Dates_part1 + rNum + Calendar_Dates_part2 + cNum + Calendar_Dates_part3));
						return;
					}
				}
			}
		}

	}

	private static void selectMonth(String travelMonth) {
		while (!BrowserCommon.getText(xpathMonthYearSection).equals(travelMonth)) {
			if (BrowserCommon.getText(xpathMonthYearSection).contains(months[month - 1])
					&& BrowserCommon.getText(xpathMonthYearSection).contains(String.valueOf(year))) {
				returnTable = 2;
				break;
			} else {
				returnTable = 1;
				BrowserCommon.click(forwardArrow);
			}

		}

	}

}
