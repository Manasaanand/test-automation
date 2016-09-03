package com.kangocovermobileweb.scenarios;

import cucumber.api.java.After;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import com.kangocovermobileweb.utilities.WebConnector;

import cucumber.api.Scenario;


public class SimpleTest {
	
	WebConnector selenium = WebConnector.getInstance();
	
	@After
    public void tearDown(Scenario scenario) {
     
         if (scenario.isFailed()) {  
        	 if (scenario.isFailed()) {
        		 byte[] screenshot = ((TakesScreenshot) selenium.driver).getScreenshotAs(OutputType.BYTES);
        		 scenario.embed(screenshot, "image/png");
        		 }
         }
	}
	
	

}
