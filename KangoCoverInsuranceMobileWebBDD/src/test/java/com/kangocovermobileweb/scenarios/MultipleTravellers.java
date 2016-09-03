package com.kangocovermobileweb.scenarios;


import org.junit.Assert;

import com.kangocovermobileweb.utilities.WebConnector;

import cucumber.api.java.en.Then;

public class MultipleTravellers {
	
	WebConnector selenium = WebConnector.getInstance();
	
	
	@Then("^I validate \"([^\"]*)\" for \"([^\"]*)\" case$")
	public void validateMinors(String validationMessage, String case_Type){
		System.out.println("I validate "+validationMessage+" for "+case_Type+" case - MultipleTravellers.java");
		if(case_Type.equalsIgnoreCase("Negative")){
			Assert.assertEquals(validationMessage, selenium.getTextFromFrame(HomePage.AgeValidationFrame, HomePage.ValidateMinorMessage));
			selenium.clickfromFrame(HomePage.AgeValidationFrame, HomePage.ApproveMinorMessageAsYes);
		}

	}
	


}
