package com.kangocover.scenarios;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

 @CucumberOptions(strict = false, features = "C:\\Users\\Anand Jois\\Desktop\\Test Automation\\KangoCoverInsurancePageFactoryBDD\\src\\test\\resources\\com\\kangocover\\scenarios", plugin = "html:target/cucumber-html-reports",
			format = { "pretty",
		"html:target/site/cucumber-pretty",
		"json:target/cucumber.json",
		}, tags = { "~@ignore" })
public class RunTest {

}
