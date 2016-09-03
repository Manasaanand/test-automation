package com.kangocover.pagefactory;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import com.kangocover.utilities.BrowserCommon;

public class Q3ScreenPage {
	WebDriver driver;
	public static final By MyFirstname = By.id("firstName-P0");
	public static final By Dateofbirth = By.id("troupeForm.persons0.dob");
	public static final String TitleBeg = "//*[@id='title-P";
	public static final String TitleEnd = "']";
	public static final String FirstName_Beg = "//*[@id='firstName-P";
	public static final String LastName_Beg = "//*[@id='lastName-P";
	public static final String FirstName_End = "__firstName']";
	public static final String LastName_End = "__lastName']";
	public static final String dateOfBirth_Beg = "//*[@id='troupeForm.persons";
	public static final String dateOfBirth_End = ".dob']";
	public static final By Lastname = By.id("lastName-P0");
	public static final By Address = By.id("billing.address.line1");
	public static final By Suburb = By.id("billing..city");
	public static final By Postcode = By.id("policyHolder-postcode");
	public static final By Region = By.id("state_dropdownList");
	public static final By MobilePhone = By.id("phone-P0");
	public static final By Email = By.id("email-P0");
	public static final By Title = By.id("title-P0");
	public static final By CardNumber = By.id("cc_no");
	public static final By ExpiryMonth = By.id("cc_expiry_mm");
	public static final By ExpiryYear = By.id("cc_expiry_yy");
	public static final By CardHolderName = By.id("cc_holder");
	public static final By SecurityCode = By.id("cc_cvv");
	public static final By OptionTag = By.tagName("option");
	public static final By AgreeTerms = By.cssSelector(".checkbox.required");
	int customerAge;

	public void enterCustomerDetails(String age) {
		BrowserCommon.waitForElementVisible(MyFirstname, 10);

		if (!age.contains(",")) {
			customerAge = Integer.parseInt(age);
			policyHolderDetails(customerAge);
			String dateOfBirth = getDateOfBirth(customerAge);
			BrowserCommon.enterDateofBirth(Dateofbirth, dateOfBirth);
		} else if (age.contains(",")) {
			String[] ages = age.split(",");
			policyHolderDetails(customerAge);
			for (int customerNum = 0; customerNum < ages.length; customerNum++) {
				customerAge = Integer.parseInt(ages[customerNum]);
				BrowserCommon.find(By.xpath(TitleBeg + customerNum + TitleEnd)).sendKeys("Mr");
				BrowserCommon.clearAndEnterText(By.xpath(FirstName_Beg + customerNum + TitleEnd),
						"Anand" + System.currentTimeMillis());
				BrowserCommon.clearAndEnterText(By.xpath(LastName_Beg + customerNum + TitleEnd),
						"Jois" + System.currentTimeMillis());
				String dateOfBirth = getDateOfBirth(customerAge);
				BrowserCommon.enterDateofBirth(By.xpath(dateOfBirth_Beg + customerNum + dateOfBirth_End), dateOfBirth);
				
			}
		}
	}

	public void enterPayment() {
		BrowserCommon.waitForElementVisible(CardNumber, 10);
		BrowserCommon.clearAndEnterText(CardNumber, "4242424242424242");
		chooseMonthFromDropDown();
		chooseYearFromDropDown();
		BrowserCommon.clearAndEnterText(CardHolderName, "Anand Jois");
		BrowserCommon.clearAndEnterText(SecurityCode, "111");
	}

	public void agreeToTerms() {
		BrowserCommon.click(AgreeTerms);

	}
	
	public void policyHolderDetails(int customerAge) {
		selectData(Title, "Mr");
		BrowserCommon.clearAndEnterText(MyFirstname, "Anand");
		BrowserCommon.clearAndEnterText(Lastname, "Jois");
		BrowserCommon.clearAndEnterText(Address, "307, Pitt St");
		BrowserCommon.clearAndEnterText(Suburb, "Sydney");
		BrowserCommon.clearAndEnterText(Postcode, "2000");
		selectData(Region, "NSW");
		BrowserCommon.clearAndEnterText(MobilePhone, "0400000000");
		BrowserCommon.clearAndEnterText(Email, "anand.jois@1cover.com.au");

	}
	
	/*********************Common Functions*******************************/
	private String getDateOfBirth(int customerAge) {
		// DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
		Date date = new Date();
		Calendar cal = Calendar.getInstance();
		cal.setTime(date);
		int day = cal.get(Calendar.DAY_OF_MONTH);
		int month = cal.get(Calendar.MONTH);
		int year = cal.get(Calendar.YEAR);
		int yearOfBirth = year - customerAge;
		// return day+"/"+month+"/"+yearOfBirth;
		return (day < 10 ? ("0" + day) : (day)) + "/" + (month < 10 ? ("0" + month) : (month)) + "/" + yearOfBirth;
	}
	
	public void selectData(By selector, String arg1) {
		BrowserCommon.find(selector).sendKeys(arg1);

	}
	public void chooseMonthFromDropDown() {
		// ElementFinder.waitUntilElementIsVisible(Q3Page_ExpiryMonth);
		WebElement Q3Page_ExpiryDate = BrowserCommon.find(ExpiryMonth);
		List<WebElement> Q3Page_Months = Q3Page_ExpiryDate.findElements(OptionTag);
		Q3Page_Months.get(2).click();
		;
	}
	
	public void chooseYearFromDropDown() {
		WebElement Q3Page_ExpiryDate = BrowserCommon.find(ExpiryYear);
		List<WebElement> Q3Page_Year = Q3Page_ExpiryDate.findElements(OptionTag);
		Q3Page_Year.get(2).click();
		;
	}

}
