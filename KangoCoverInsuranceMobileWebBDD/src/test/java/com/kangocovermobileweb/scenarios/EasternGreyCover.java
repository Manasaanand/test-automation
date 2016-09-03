package com.kangocovermobileweb.scenarios;

import org.junit.Assert;

import com.kangocovermobileweb.utilities.WebConnector;

import cucumber.api.java.en.Then;


public class EasternGreyCover {
	
			  int ExcessAmountAfterDoubleExcess;
	static Double TotalQuoteAmountActual ;
	static Double TotalQuoteIncludePremium;
	static Double TotalQuoteAmountAfterPremium;

	WebConnector selenium = WebConnector.getInstance();
	
	@Then("^I validate that Standard Excess value is doubled$")
	public void I_validate_that_Standard_access_value_is_doubled() throws InterruptedException{
		System.out.println("I validate that Standard Excess value is doubled -EasternGreyCover.java");
		selenium.refresh();
		Double YourExcessAfterDoubleExcess = selenium.convertPremium(Q2APage.YourExcess);
		
		Double CheckYourExcessAfterDoubleExcess = 2*Q2APage.YourExcessBeforeDoubleExcess;
		
		Assert.assertEquals(YourExcessAfterDoubleExcess, CheckYourExcessAfterDoubleExcess);
	
	}
	
	
	@Then("^I validate that Additional Premium Amount adds on to the Current Quote Amount$")
	public void I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount(){
		System.out.println("I validate that Additional Premium Amount adds on to the Current Quote Amount -EasternGreyCover.java");
		System.out.println(Q2APage.QuoteValueBefore+" "+
										  selenium.ExtraItemAmountPremium+" "+
										  selenium.WinterCoverPremiumValue+" "+
										  selenium.SportsCoverPremiumValue+" "+
										  selenium.BusinessCoverPremiumValue+" "+
										  selenium.DoubleExcessCoverPremiumValue);
		TotalQuoteIncludePremium = (Q2APage.QuoteValueBefore+
										  selenium.ExtraItemAmountPremium+
										  selenium.WinterCoverPremiumValue+
										  selenium.SportsCoverPremiumValue+
										  selenium.BusinessCoverPremiumValue) -
										  selenium.DoubleExcessCoverPremiumValue;
				
		TotalQuoteAmountAfterPremium =  selenium.convertPremium(Q2APage.YourQuoteAmount);
//		System.out.println(TotalQuoteAmountAfterPremium);
		Assert.assertTrue(TotalQuoteIncludePremium+"Difference between actual total premium and calculated Premium"+TotalQuoteAmountAfterPremium, (TotalQuoteAmountAfterPremium - TotalQuoteIncludePremium)<=1);
	}

}
