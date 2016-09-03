package com.kangocover.scenarios;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.kangocover.pagefactory.HomeScreenPage;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomePage {

	static WebDriver driver;
	
	public static HomeScreenPage homescreenpage = null;
	
	public static HomeScreenPage homescreenpage()
	{
		if (homescreenpage == null)
			homescreenpage = PageFactory.initElements(driver, HomeScreenPage.class);
		return homescreenpage;
	}

	

	@When("^I enter \"([^\"]*)\" as my destination$")
	public void i_enter_as_my_destination(String arg1) throws Throwable {
		homescreenpage.enterDestination(arg1);
		
	}

	@When("^I enter my Return Dates as \"([^\"]*)\" days from today$")
	public void i_enter_my_Return_Dates_as_days_from_today_date(int duration) throws Throwable {
		homescreenpage.enterReturnDate(duration);
	}

	@Then("^I enter \"([^\"]*)\" as my Age$")
	public void i_enter_as_my_Age(String arg1) throws Throwable {
		homescreenpage.enterAge(arg1);
	}

	@When("^I click on GetQuote$")
	public void i_click_on_GetQuote() throws Throwable {
		homescreenpage.clickOnGetQuote();
	}
	
	@When("^I select Annual Travel Insurance$")
	public void i_select_Annual_Travel_Insurance() throws Throwable {
		
		homescreenpage().selectAnnualInsurance();
	}
	
	@Then("^I validate \"([^\"]*)\"$")
	public void i_validate(String message)  {
		System.out.println("I validate "+message+" - HomePage.java");
		homescreenpage().validateAgePopUp(message);
	}

}
