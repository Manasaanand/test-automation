package com.kangocover.scenarios;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.kangocover.pagefactory.Q2ScreenPage;

import cucumber.api.java.en.Then;

public class Q2Page {

	static WebDriver driver;

	public static Q2ScreenPage q2screenpage = null;

	public static Q2ScreenPage q2screenpage() {
		if (q2screenpage == null)
			q2screenpage = PageFactory.initElements(driver, Q2ScreenPage.class);
		return q2screenpage;
	}

	@Then("^I validate Q(\\d+) Page$")
	public void i_validate_Q_Page(int arg1) throws Throwable {
		q2screenpage().validateQ2Page();
	}

	@Then("^I validate that atleast one product should be selected by default which has a tag as most popular$")
	public void i_validate_that_atleast_one_product_should_be_selected_by_default_which_has_a_tag_as_most_popular() {
		System.out.println(
				"I validate that atleast one product should be selected by default which has a tag as most popular - Q2Page.java");
		q2screenpage.validateMostPopular();

	}

	@Then("^I validate \"([^\"]*)\" option is \"([^\"]*)\" on Q2 Page$")
	public void i_validate_option_is_on_Q_Page(String CoverType, String VisibleStatus) {
		System.out.println("I validate " + CoverType + " option is " + VisibleStatus + " on Q2 Page.java");
		q2screenpage.validateCovertypeVisibility(CoverType, VisibleStatus);

	}
	
	@Then("^I select \"([^\"]*)\" and click next step$")
	public void i_select_and_click_next_step(String cover) {
		System.out.println("I select "+cover+" and click next step - Q2Page.java");
	    q2screenpage.selectCoverType(cover);
		
	}

}
