package com.kangocovermobileweb.scenarios;

import java.net.MalformedURLException;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.junit.Assert;
import org.openqa.selenium.By;

import com.kangocovermobileweb.utilities.WebConnector;



import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class HomePage {
	
	public static final By Where = By.cssSelector(".ui-autocomplete-input");
	public static final By ReturnDate = By.xpath("//li[@class='return']/input");
	public static final By xpathMonthYearSection = By.xpath("//div[@class='ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all']/div");
	public static final By forwardArrow = By.cssSelector(".ui-icon.ui-icon-circle-triangle-e");
	public static final By Age = By.cssSelector(".ageInputField.multiAgeField");
	public static final By GetQuoteButton = By.cssSelector(".primarybutton.getquote");
	public static final By AgePopUp = By.xpath("//div[@class='confirm_ignore_elderly ui-dialog-content ui-widget-content']/div/p[1]");
	public static final By AgeValidationFrame = By.cssSelector(".confirm_dependants_are_valid.ui-dialog-content.ui-widget-content");
	public static final By ApproveMinorMessageAsYes = By.xpath("//*[@id='small_quote_more_travellers_div']/p[2]/a[1]");
	public static final By ValidateMinorMessage = By.xpath(".confirm_dependants_are_valid.ui-dialog-content.ui-widget-content > div > p:nth-of-type(2)");
	public static final By TravelInsuranceMenu = By.xpath("//div[@class='container']/ul/li[2]/ul/li[1]");
	public static final By MainMenu = By.cssSelector(".mobile-menu-switch.visible-xs");
	public static final By AnnualInsurance = By.xpath("//div[@class='container']/ul/li[2]/ul/li[1]/ul/li[1]/a");
	public static final By YesButton = By.cssSelector(".btn-yes.secondarybutton.dark");
	public static final By NoButton = By.cssSelector(".btn-no.secondarybutton.dark");
	public static final By DropdDownFirstInput = By.cssSelector(".ui-corner-all.ui-state-focus");
	public static final By GetAnnualQuoteButton= By.cssSelector(".primarybutton");
	public static String HomePageDepartDate;
	public static final By MainTab = By.cssSelector(".mobile-menu-switch.visible-xs");
	public static final By SubTab = By.cssSelector(".header-menu.unified-menu > li > a");
	public static final By AnnualCover = By.xpath("//a[@href='/annual-travel-insurance-direct/']");
	public static final By chosenDestination = By.xpath("//span[@class='selected-item']");
	public static String returnDate;
	public String age;
	public static String destination;
	DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
	Date date = new Date();
	static String SelectedReturnDate;
	static String AgeEntered;
	
	WebConnector selenium = WebConnector.getInstance();

	
	@Given("^I am on KangoCover WebSite Home Page$")
	public void goToWebsite() throws MalformedURLException{
		System.out.println("I am on KangoCover WebSite Home Page");
		selenium.openHomePage();
		
	}
	
	
	@When("^I enter \"([^\"]*)\" as my destination$")
	public void myDestinationasSelected(String destination){
		System.out.println("I enter India as my destination - HomePage.java");
		selenium.enter_destinationSelected(Where, destination);
		
	}
	
	
	
	@And("^I enter my Return Dates as \"([^\"]*)\" days from today$")
	public void returnDate(int duration) throws ParseException{
		System.out.println("I enter my Return Dates as "+duration+" days from today - HomePage.java");
		selenium.enterReturnDate(duration);
		
	}
	
	@And("^I enter \"([^\"]*)\" as my Age$")
	public void i_enter_as_my_Age(String age) throws Throwable {
		System.out.println("I enter "+age+" as my Age - HomePage.java");
		selenium.clearAndEnterText(Age, age);
		
	}

	@And("^I click on GetQuote$")
	public void i_click_on_GetQuote() throws Throwable {
		System.out.println("I click on GetQuote - HomePage.java");
//		System.out.println(dateFormat.format(date));
		HomePageDepartDate = dateFormat.format(date);
		SelectedReturnDate =  dateFormat.format(selenium.HomePagereturndate);
//		System.out.println(ReturnDate);
		AgeEntered = selenium.getText(Age);
//		System.out.println(AgeEntered);
		
	    selenium.click(GetQuoteButton);
	}
	
	@Then("^I validate \"([^\"]*)\"$")
	public void i_validate(String message)  {
		System.out.println("I validate "+message+" - HomePage.java");
		Assert.assertEquals(message, selenium.getTextFromFrame(AgePopUp));
	}

	@When("^I select Annual Policy from Travel Insurance$")
	public void i_select_WorldWide_as_my_destination(){
		System.out.println("I select Annual Policy from Travel Insurance - HomePage.java");
	   selenium.selectAnnualPolicy();
	}
	
	@Then("^I validate that the Region is selected on Destination input box$")
	public void i_validate_that_the_Region_is_not_selected_on_Destination_input_box() {
		System.out.println("I validate that the Region is not selected on Destination input box - HomePage.java");
		Assert.assertTrue("Worldwide is not selected", selenium.getText(chosenDestination).contains("World Wide"));
		
	}
	
	@And("^I click on \"([^\"]*)\"$")
	public void i_click_on(String Button){
		System.out.println("I click on "+Button+" - HomePage.java");
		if(Button.equalsIgnoreCase("Yes")){
			click(YesButton);
		}else if(Button.equalsIgnoreCase("No")){
			click(NoButton);
		}else{
			Assert.assertTrue("Unable to identify whether Yes or No Button", false);
		}

	}
	
	private void click(By yesbutton2) {
		// TODO Auto-generated method stub
		
	}


	@When("^I select Annual Travel Insurance$")
	public void i_select_Annual_Travel_Insurance() {
		System.out.println("I select Annual Travel Insurance");
		selenium.click(MainTab);
		selenium.click(SubTab);
		selenium.click(AnnualCover);
		

		
	}
	
	@And("^I click on GetAQuote$")
	public void i_click_on_GetAQuote() throws Throwable {
		System.out.println("I click on GetAQuote - HomePage.java");

	    selenium.click(GetAnnualQuoteButton);
	}
	
	
	

}
