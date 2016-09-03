package com.kangocover.scenarios;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.kangocover.utilities.BrowserCommon;
import com.kangocover.utilities.ConfigParser;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class BasePage {

	static WebDriver driver;

	BrowserCommon browsercommon = new BrowserCommon();

	@Given("^I am on KangoCover WebSite Home Page$")
	public void i_am_on_Simply_Travel_Insurance_WebSite_Home_Page() throws Throwable {
		String URL = ConfigParser.getDomain();
		browsercommon.loadPage(URL);
		browsercommon.verifyPageTitle("Great Value Travel Insurance | Kango Cover");

	}

}
