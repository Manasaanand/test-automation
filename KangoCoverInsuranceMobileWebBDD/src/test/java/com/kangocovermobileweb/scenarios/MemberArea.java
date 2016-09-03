package com.kangocovermobileweb.scenarios;

import org.junit.Assert;
import org.openqa.selenium.By;

import com.kangocovermobileweb.utilities.WebConnector;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class MemberArea {
	
	public static final By MemberArea = By.xpath("html/body/div[1]/nav/ul[2]/li/a");
	public static final By MemberUsername = By.id("formElementUsernameMainLogin");
	public static final By MemberPassword = By.id("formElementPasswordMainLogin");
	public static final By LoginButton = By.id("loginButton");
	public static final By MembersHome = By.id("//*[@id='Tabs']/h1");
	public static final By MyPolicy = By.id("ui-id-1");
	public static final By MyQuotes = By.id("ui-id-2");
	public static final By MyDetails = By.id("ui-id-3");
	public static final By EmailID = By.className("col-md-8");
	public static final By Header = By.xpath("//div[@class='global-nav clearfix hidden-xs']");
	
	WebConnector selenium = WebConnector.getInstance();
	
	@When("^I click on Members login$")
	public void i_click_on_Members_login() {
		System.out.println("I click on Members login - MemberArea.java");
		selenium.click(MemberArea);

	}

	@And("^I enter my username as \"([^\"]*)\"$")
	public void i_enter_my_username_as(String arg1) {
		System.out.println("I enter my username as "+arg1+" - MemberArea.java");
		selenium.clearAndEnterText(MemberUsername, arg1);
		
	}

	@And("^I enter my password as \"([^\"]*)\"$")
	public void i_enter_my_password_as(String arg1) {
		System.out.println("I enter my password as "+arg1+" - MemberArea.java");
		selenium.clearAndEnterText(MemberPassword, arg1);
	}

	@And("^I click on Login$")
	public void i_click_on_Login() {
		System.out.println("I click on Login");
		selenium.click(LoginButton);
		
	}

	@Then("^I validate that user logged in$")
	public void i_validate_that_user_logged_in() {
		System.out.println("I validate that user logged in - MemberArea.java");
		Assert.assertEquals("Members Home", selenium.getText(MembersHome));
	}

	@And("^I click on My Policy Tab$")
	public void i_click_on_My_Policy_Tab() {
		System.out.println("I click on My Policy Tab - MemberArea.java");
		selenium.click(MyPolicy);
		
	}

	@Then("^I validate I have atleast one Policy$")
	public void i_validate_I_have_atleast_one_Policy() {
		System.out.println("I validate I have atleast one Policy - MemberArea.java");
		Assert.assertTrue("Yet to implement", 1==2);
	
	}

	@And("^I click on My Quotes Tab$")
	public void i_click_on_My_Quotes_Tab() {
		System.out.println("I click on My Quotes Tab - MemberArea.java");
		selenium.click(MyQuotes);
	
	}

	@Then("^I validate I have atleast one Quote$")
	public void i_validate_I_have_atleast_one_Quote(){
		System.out.println("I validate I have atleast one Quote - MemberArea.java");
		Assert.assertTrue("Yet to implement", 1==2);
		
	}

	@And("^I click on My Details Tab$")
	public void i_click_on_My_Details_Tab() {
		System.out.println("I click on My Details Tab - MemberArea.java");
		selenium.click(MyDetails);
		
	}

	@Then("^I validate I have my Email ID$")
	public void i_validate_I_have_my_Email_ID(){
		System.out.println("I validate I have my Email ID - MemberArea.java");
		Assert.assertEquals("anand.jois@1cover.com.au", selenium.getText(EmailID));
		
	}


}
