package com.kangocover.utilities;

import java.io.FileInputStream;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Properties;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class WebConnector {
	public static WebDriver driver = null;
	public Properties ENV = null;
	public static Properties OR = null;
	public Properties CONFIG = null;
	static WebConnector w;
	WebDriver mozilla = null;

	public String months[] = { "January", "February", "March", "April", "May", "June", "July", "August", "September",
			"October", "November", "December" };

	public WebConnector() {
		try {

			ENV = new Properties();
			FileInputStream fp = new FileInputStream(
					System.getProperty("user.dir") + "\\src\\test\\java\\com\\kangocover\\config\\ENV.properties");
			ENV.load(fp);
			OR = new Properties();
			if (ENV.getProperty("ENV").equalsIgnoreCase("STAGING")) {
				fp = new FileInputStream(System.getProperty("user.dir")
						+ "\\src\\test\\java\\com\\kangocover\\config\\Staging.properties");
				OR.load(fp);
			} else if (ENV.getProperty("ENV").equalsIgnoreCase("PRODUCTION")) {
				fp = new FileInputStream(System.getProperty("user.dir")
						+ "\\src\\test\\java\\com\\kangocover\\config\\production.properties");
				OR.load(fp);
			} else if (ENV.getProperty("ENV").equalsIgnoreCase("GLF_STAG")) {
				fp = new FileInputStream(System.getProperty("user.dir")
						+ "\\src\\test\\java\\com\\kangocover\\config\\GLF_STAGING.properties");
				OR.load(fp);
			}
		} catch (Exception e) {
			e.getMessage();
		}
		
		

	}

	/*
	 * Get Instance of WebConnector
	 */
	public static WebConnector getInstance() {
		if (w == null)
			w = new WebConnector();
		return w;
	}

	public static WebElement find(By selector) {

		return driver.findElement(selector);
	}

	public static void click(By selector) {
//		waitUntilAllElementIsVisible(selector);
		find(selector).click();
	}

	public static Date StringToDate(String date) throws ParseException {
		SimpleDateFormat df = new SimpleDateFormat("dd/MM/yy");
		return df.parse(date);
	}

	public static void waitUntilAllElementIsVisible(By selector) {
		waitUntil(ExpectedConditions.visibilityOfAllElementsLocatedBy(selector));
	}
	
	public static void waitUntilElementIsVisible(By selector) {
		waitUntil(ExpectedConditions.visibilityOfElementLocated(selector));
	}

	public static void waitUntil(ExpectedCondition<?> condition) {
		(new WebDriverWait(driver, 10)).until(condition);
	}

	public static String getText(By selector) {
		waitUntilElementIsVisible(selector);
		return find(selector).getText();

	}

	public static String getAttribute(By selector, String attribute) {
		waitUntilElementIsVisible(selector);
		return find(selector).getAttribute(attribute);

	}

	public static boolean elementDisplay(By selector) {

		return findAll(selector).size() != 0;

	}

	public static List<WebElement> findAll(By selector) {
		return driver.findElements(selector);
	}

}
