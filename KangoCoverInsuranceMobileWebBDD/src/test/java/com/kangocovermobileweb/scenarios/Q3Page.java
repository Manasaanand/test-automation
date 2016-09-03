package com.kangocovermobileweb.scenarios;

import org.junit.Assert;
import org.openqa.selenium.By;

import com.kangocovermobileweb.utilities.WebConnector;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;


public class Q3Page {
	
	public static final By Title = By.id("title-P0");
	public static final By MyFirstname = By.id("firstName-P0");
	public static final By Lastname = By.id("lastName-P0");
	public static final By Dateofbirth = By.id("troupeForm.persons0.dob");
	public static final By Address = By.id("billing.address.line1");
	public static final By Suburb = By.id("billing..city");
	public static final By Postcode = By.id("policyHolder-postcode");
	public static final By Region = By.id("state_dropdownList");
	public static final By MobilePhone = By.id("phone-P0");
	public static final By Email = By.id("email-P0");
	public static final By Conf_email = By.xpath("//*[@id='verifyEmail']");
	public static final String TitleBeg = "//*[@id='title-P";
	public static final String TitleEnd = "']";
	public static final String FirstName_Beg="//*[@id='firstName-P";
	public static final String LastName_Beg="//*[@id='lastName-P";
	public static final String FirstName_End="__firstName']";
	public static final String LastName_End="__lastName']";
	public static final String dateOfBirth_Beg="//*[@id='troupeForm.persons";
	public static final String dateOfBirth_End=".dob']";
	public static final By CardNumber = By.id("cc_no");
	public static final By ExpiryMonth = By.id("cc_expiry_mm");
	public static final By ExpiryYear = By.id("cc_expiry_yy");
	public static final By CardHolderName = By.id("cc_holder");
	public static final By SecurityCode = By.id("cc_cvv");
	public static final By EditButton = By.cssSelector(".secondarybutton.editbutton");
	public static final By OptionTag = By.tagName("option");
	public static final By AgreeTerms = By.cssSelector(".checkbox.required");
	public static final By CompletePurchase = By.id("complete-button");
	public static final By TotalAmount = By.xpath("//*[@id='review-cost-amount-dollars']");
	public static final By WinterCoverCheckBox = By.xpath("//*[@id='Form_Mod_Anc_WinSpoCov']/div/div/div[1]/h2/span");
	public static final By SportsNActivityCoverCheckBox = By.xpath("//*[@id='Form_Mod_Anc_SpoActCov']/div/div/div[1]/h2/span");
	public static final By BusinessCoverCheckBox = By.xpath("//*[@id='Form_Mod_Anc_BusCov']/div/div/div[1]/h2/span");
	public static final By DoubleExcessCoverCheckBox = By.xpath("//*[@id='Form_Mod_Anc_DouExc']/div/div/div[1]/h2/span");
	public static final By YourExcessAmount = By.xpath("//div[@class='update-quote-info']/div[4]/div[1]");
	public static final By PaymentBox = By.id("card-details");
	public static final By PolicyHolderAgeError = By.id("policyholder-dob-error");
	public static final By QuotePriceOnTopLabel = By.xpath("//div[@class='container']/div[1]/div[6]/span");
	public static final By TravelersCount = By.xpath("//div[@class='container']/div[1]/div[3]/span");
	
	public static String ExcessAmountDetails;
	public static String QuotePriceOnTop;
	public static String TotalTravelers;
	
	WebConnector selenium = WebConnector.getInstance();
	
	@And("^I enter customer details for \"([^\"]*)\" years$")
	public void enterCustomerDetails(String age){
		System.out.println("I enter customer details for "+age+" years - Q3Page.java");
		selenium.enterCustomerDetails(age);
	
	}

	@And("^I enter creditcard details for Payment$")
	public void enterPaymentDetails(){
		System.out.println("I enter creditcard details for Payment - Q3Page.java");
		selenium.enterPayment();
	
	}
	
	@And("^I click on Complete Purchase$")
	public void clickPurchase(){
		System.out.println("I click on Complete Purchase - Q3Page.java");
		ExcessAmountDetails = selenium.getText(YourExcessAmount);
		QuotePriceOnTop = selenium.getText(QuotePriceOnTopLabel);
		TotalTravelers = selenium.getText(TravelersCount);
		selenium.click(CompletePurchase);
	
	
	}
	
	@And("^I agree to terms and conditions$")
	public void tickTerms(){
		System.out.println("I agree to terms and conditions - Q3Page.java");
		selenium.click(AgreeTerms);
		
	}
	
	@Then("^I validate Q3 Page$")
	public void i_validate_Q_Page(){
		System.out.println("I validate Q3 Page - Q3Page.java");
	    Assert.assertTrue("Q3Page is not displaying", selenium.elementExist(PaymentBox));
	
	}

	@Then("^I go back to Previous Page$")
	public void i_go_back_to_Previous_Page() {
		System.out.println("I go back to Previous Page - Q3Page.java");
		selenium.goBack();
	
	}
	
	@Then("^I validate that \"([^\"]*)\"$")
	public void i_validate_it_should_show_an_error_due_to_age(String errorMessage) {
		System.out.println("I validate it should show an error due to age - Q3Page.java");
		Assert.assertEquals(errorMessage, selenium.getText(PolicyHolderAgeError));
	
	}
	
	@And("^I click on Edit button$")
	public void i_click_on_Edit_button() {
		System.out.println("I click on Edit button - Q3Page.java");
		selenium.click(EditButton);
		
	}
	
	
	
	}
