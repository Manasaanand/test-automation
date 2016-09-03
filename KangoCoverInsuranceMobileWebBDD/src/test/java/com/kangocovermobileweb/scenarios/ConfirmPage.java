package com.kangocovermobileweb.scenarios;

import org.junit.Assert;
import org.openqa.selenium.By;

import com.kangocovermobileweb.utilities.WebConnector;

import cucumber.api.java.en.Then;



public class ConfirmPage {
	
	public static final By PolicyValue = By.xpath("//div[@class='col-md-9 policy-details']/div[3]/div[2]");
	public static final By Duration = By.xpath("//div[@class='col-md-9 policy-details']/div[5]/div[2]");
	public static final By TravelersCount = By.xpath("//div[@class='col-md-9 policy-details']/div[6]/div[2]");
	public static final By ExcessAmount = By.xpath("//div[@class='col-md-9 policy-details']/div[7]/div[2]");
	public static final By PageTitle = By.xpath("html/body/div[2]/div/h1");
	
	WebConnector selenium = WebConnector.getInstance();
	
	
	@Then("^I validate Confirm Page$")
	public void I_validate_Confirm_Page(){
		System.out.println("I validate Confirm Page");
		Assert.assertEquals(selenium.getText(PageTitle), "Yay, you're now Kango covered");
	}
	
	
	
	@Then("^I validate HomePage, Q2Page, Q3Page and Confirm Page details$")
	public void validate_allPages() {
		while(selenium.elementExist(By.xpath("//*[@id='content']/div/div/img"))){
		System.out.println("I validate HomePage, Q2Page, Q3Page and Confirm Page details from ConfirmPage");
		System.out.println("Validating Confirm Page against Q3Page");
		
		Assert.assertEquals(selenium.getText(PolicyValue), Q3Page.QuotePriceOnTop);
		String DurationOnPage = selenium.getText(Duration);
		String[] dates = DurationOnPage.split(" - ");
		Assert.assertEquals(Q2APage.Q2APageDepartDate, dates[0]);
		Assert.assertTrue("Return Date is wrong compare to Q2APage", dates[1].contains(Q2APage.Q2APageReturnDate));
		Assert.assertEquals(Q3Page.TotalTravelers, selenium.getText(TravelersCount));
		Assert.assertEquals(Q3Page.ExcessAmountDetails, selenium.getText(ExcessAmount));
		
		Assert.assertEquals(HomePage.HomePageDepartDate, Q2Page.Q2PageDepartDate);
		Assert.assertEquals(HomePage.SelectedReturnDate, Q2Page.Q2PageReturnDate);
		Assert.assertEquals(HomePage.AgeEntered, Q2Page.Q2PageAge);
		
		Assert.assertEquals(Q2APage.Q2APageDepartDate, Q2Page.Q2PageDepartDate);
		Assert.assertEquals(Q2APage.Q2APageReturnDate, Q2Page.Q2PageReturnDate);
	
		System.out.println("All working fine");
		
		}	
	
	}
	
	@Then("^I validate that the prices are same as \"([^\"]*)\" from \"([^\"]*)\"$")
	public void i_validate_that_the_prices_are_same_as_from(String arg2, String arg3) throws Throwable {
	  System.out.println("I validate that the prices are same as "+arg2+" from "+arg3);
		String priceQuote = selenium.getQuotePriceFromPlanType(arg3);
		Assert.assertEquals("$"+arg2, priceQuote);
	}
	
	

}
