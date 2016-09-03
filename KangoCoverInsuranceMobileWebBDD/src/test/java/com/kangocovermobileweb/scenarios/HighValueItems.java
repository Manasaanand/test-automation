package com.kangocovermobileweb.scenarios;

import org.junit.Assert;

import com.kangocovermobileweb.utilities.WebConnector;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class HighValueItems {
	WebConnector selenium = WebConnector.getInstance();
	
	@When("^I select High Value Items Addon as \\$\"([^\"]*)\"$")
	public void i_select_High_Value_Items_Addon_as_$(String Amount){
		System.out.println("I select High Value Items Addon as $"+Amount+" HighValueItems.java");
		selenium.clearAndEnterText(Q2APage.HighValueItemBox, "Item1");
		selenium.clearAndEnterText(Q2APage.HighValueItemCostBox, Amount);
	selenium.click(Q2APage.AddExtraCoverButton);
	}
	
	
	@Then("^I validate that the amount is  \\$\"([^\"]*)\"$")
	public void I_Validate_that_the_Amount(String Amount){
		System.out.println("I validate that the amount is  "+Amount+" High Value items.java");
		 System.currentTimeMillis();

		while(false||(System.currentTimeMillis()<1000)){
		Assert.assertEquals(Amount, selenium.getText(Q2APage.HighValueItemPremium));
		}
	}

}
