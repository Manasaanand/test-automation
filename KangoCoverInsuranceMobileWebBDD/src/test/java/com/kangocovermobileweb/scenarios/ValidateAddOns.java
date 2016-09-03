package com.kangocovermobileweb.scenarios;


import org.junit.Assert;

import com.kangocovermobileweb.utilities.WebConnector;

import cucumber.api.java.en.Then;

public class ValidateAddOns {
	
	WebConnector selenium = WebConnector.getInstance();
	
	
	@Then("^I validate that \"([^\"]*)\" is \"([^\"]*)\" and its price \"([^\"]*)\" zero$")
	public void i_validate_that_is_visible_and_its_price(String AddOn, String status, String fluctuation){
		System.out.println("I validate that "+AddOn+" is "+status+" and its price "+fluctuation+" zero - ValidateAddOns.java");
		String[] AddOnID = AddOn.split("-");
		if(status.equalsIgnoreCase("visible")){
		Assert.assertTrue(AddOn+" not present ", selenium.validateAddOn(AddOnID[1]));
		}else if(status.equalsIgnoreCase("not visible")){
			Assert.assertTrue(AddOn+" present ", !selenium.validateAddOn(AddOnID[1]));
		}
		if(fluctuation.equalsIgnoreCase("greater than")){
			Assert.assertTrue(AddOn+" has -ve value", !selenium.validateDiscountOrAdditonalPremium(AddOnID[1]));
		}else if (fluctuation.equalsIgnoreCase("less than")){
			Assert.assertTrue(AddOn+" has +ver value", selenium.validateDiscountOrAdditonalPremium(AddOnID[1]));
		}

	}


}
