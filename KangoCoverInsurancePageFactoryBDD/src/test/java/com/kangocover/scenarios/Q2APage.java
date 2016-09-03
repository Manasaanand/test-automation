package com.kangocover.scenarios;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.kangocover.pagefactory.Q2AScreenPage;
import com.kangocover.pagefactory.Q2ScreenPage;
import com.kangocover.utilities.BrowserCommon;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Q2APage {

	static WebDriver driver;

	public static Q2AScreenPage q2ascreenpage = null;

	public static Q2AScreenPage q2ascreenpage() {
		if (q2ascreenpage == null)
			q2ascreenpage = PageFactory.initElements(driver, Q2AScreenPage.class);
		return q2ascreenpage;
	}

	@Then("^I validate Q2A Page$")
	public void i_validate_Q_A_Page() {
		System.out.println("I validate Q2A Page - Q2APage.java");
		q2ascreenpage().validateQ2APage();

	}

	@Then("^I validate that \"([^\"]*)\" is \"([^\"]*)\" and its price \"([^\"]*)\" zero$")
	public void i_validate_that_is_visible_and_its_price(String AddOn, String status, String fluctuation) {
		System.out.println("I validate that " + AddOn + " is " + status + " and its price " + fluctuation
				+ " zero - ValidateAddOns.java");
		q2ascreenpage().validateAddOnAndItsPremium(AddOn, status, fluctuation);

	}

	@Then("^I validate that \"([^\"]*)\" is \"([^\"]*)\"$")
	public void i_validate_that_is_not_present(String AddOn, String status) throws Throwable {
		System.out.println("I validate that " + AddOn + " is " + status + " - Q2APage.java");
		q2ascreenpage().validateHighValueItems(AddOn, status);

	}

	@And("^I go back to Q2 Page$")
	public void I_go_back_to_Q2_Page() {
		System.out.println("I go back to Q2 Page - Q2Page.java");
		BrowserCommon.goBack();
		q2ascreenpage().goBackToQ2Page();

	}

	@Then("^I validate that standard Excess is \"([^\"]*)\"$")
	public void i_validate_that_standard_Excess_is(String Amount) {
		System.out.println("I validate that standard Excess is " + Amount + " - Q2APage.java");
		q2ascreenpage().validateStandardExcess(Amount);

	}

	@When("^I select \"([^\"]*)\" Addon$")
	public void i_select_Addon(String CoverType) {
		System.out.println("I select " + CoverType + " Addon - Q2APage.java");
		q2ascreenpage().clickOnAddOns(CoverType);

	}

	@Then("^I validate that Standard Excess value is doubled$")
	public void I_validate_that_Standard_access_value_is_doubled() throws InterruptedException {
		System.out.println("I validate that Standard Excess value is doubled -EasternGreyCover.java");
		q2ascreenpage().validateStandardAccessIsDoubled();

	}

	@Then("^I validate that Additional Premium Amount adds on to the Current Quote Amount$")
	public void I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount() {
		System.out.println(
				"I validate that Additional Premium Amount adds on to the Current Quote Amount -EasternGreyCover.java");
		q2ascreenpage().validatePremiumsAddedToTotalQuote();

	}

	@Then("^I click on Next Step on Q2A Page$")
	public void i_click_on_Next_Step_on_Q_APage() {
		System.out.println("I click on Next Step on Q2A Page - Q2APage.java");
		q2ascreenpage().clickNextButton();

	}



}
