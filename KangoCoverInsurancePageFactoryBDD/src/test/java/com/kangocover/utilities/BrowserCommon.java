package com.kangocover.utilities;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class BrowserCommon {

	private static WebDriver currentDriver;

	public synchronized static WebDriver getCurrentDriver() {

		if (currentDriver == null) {
			try {
				currentDriver = DriverFactory.getWebDriver();
			} catch (Exception e) {
				System.out.println(e.getMessage());
			}
		}
		return currentDriver;
	}

	public static void close() {
		try {
			getCurrentDriver().quit();
			currentDriver = null;
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	public static class BrowserCleanup implements Runnable {
		public void run() {
			close();
		}
	}

	public static void loadPage(String URL) {
		getCurrentDriver().get(URL);
	}

	public static void reopenAndLoadPage(String URL) {
		currentDriver = null;
		getCurrentDriver();
		loadPage(URL);
	}

	public static void verifyPageTitle(String expectedTitle) {

		Assert.assertEquals(getCurrentDriver().getTitle(), expectedTitle);
	}

	public static WebElement waitForElement(WebElement elementWaitFor) {
		return waitForElement(elementWaitFor);

	}

	public static WebElement waitForElement(By selector, Integer waitTimeInSeconds) {
		WebElement elementWaitFor = find(selector);
		if (waitTimeInSeconds == null) {
			waitTimeInSeconds = 10;
		}
		WebDriverWait wait = new WebDriverWait(getCurrentDriver(), waitTimeInSeconds);
		return wait.until(ExpectedConditions.visibilityOf(elementWaitFor));
	}
	
	public static List<WebElement> waitForElementVisible(By selector, Integer waitTimeInSeconds){
	WebDriverWait wait = new WebDriverWait(getCurrentDriver(), 5);
	return wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(selector));
	}


	public static WebElement find(By selector) {
		return getCurrentDriver().findElement(selector);
	}

	public static void clearAndEnterText(By selector, String string) {
		waitForElement(selector, 10);
		find(selector).clear();
		find(selector).sendKeys(string);
	}

	public static void click(By selector) {
		waitForElement(selector, 10);
		find(selector).click();
	}

	public static Date StringToDate(String date) throws ParseException {
		SimpleDateFormat df = new SimpleDateFormat("dd/MM/yy");
		return df.parse(date);
	}

	public static String getText(By selector) {
		waitForElementVisible(selector, 5);
		return find(selector).getText();

	}
	
	public static String getAttribute(By selector, String attribute) {
		waitForElement(selector, 10);
		return find(selector).getAttribute(attribute);

	}
	
	public static boolean elementDisplay(By selector) {
		return findAll(selector).size() != 0;

	}
	
	public static List<WebElement> findAll(By selector) {
		return getCurrentDriver().findElements(selector);
	}

	

	public static boolean elementExist(By selector) {
		waitForElementVisible(selector, 10);
		return find(selector).isEnabled();

	}
	
	public static int getCount(String coverID) {
		waitForElementVisible(By.id(coverID), 10);
		return findAll(By.id(coverID)).size();

	}

	public static void goBack() {
		getCurrentDriver().navigate().back();
	}

	public static void refresh() {
		getCurrentDriver().navigate().refresh();
		
	}

	public static void enterDateofBirth(By selector, String date) {
		Actions action = new Actions(getCurrentDriver());
		action.sendKeys(Keys.DELETE);
		action.sendKeys(BrowserCommon.find(selector), date).build().perform();
		
	}

	

	


}



