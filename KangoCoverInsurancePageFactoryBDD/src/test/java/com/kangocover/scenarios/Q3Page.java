package com.kangocover.scenarios;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.kangocover.pagefactory.Q2AScreenPage;
import com.kangocover.pagefactory.Q3ScreenPage;

import cucumber.api.java.en.And;

public class Q3Page {
	
	static WebDriver driver;

	public static Q3ScreenPage q3screenpage = null;

	public static Q3ScreenPage q3screenpage() {
		if (q3screenpage == null)
			q3screenpage = PageFactory.initElements(driver, Q3ScreenPage.class);
		return q3screenpage;
	}
	
	
	@And("^I enter customer details for \"([^\"]*)\" years$")
	public void enterCustomerDetails(String age) {
		System.out.println("I enter customer details for " + age + " years - Q3Page.java");
		q3screenpage().enterCustomerDetails(age);

	}

	@And("^I enter creditcard details for Payment$")
	public void enterPaymentDetails() {
		System.out.println("I enter creditcard details for Payment - Q3Page.java");
		q3screenpage().enterPayment();

	}
	
	@And("^I agree to terms and conditions$")
	public void tickTerms(){
		System.out.println("I agree to terms and conditions - Q3Page.java");
		q3screenpage().agreeToTerms();
		
		
	}

}
