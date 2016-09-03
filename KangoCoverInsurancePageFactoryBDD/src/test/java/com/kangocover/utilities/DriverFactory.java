package com.kangocover.utilities;

import org.openqa.selenium.Point;
import org.openqa.selenium.WebDriver;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.safari.SafariDriver;

public class DriverFactory {
	public static WebDriver driver = null;

	public static void setupDriver() {
		if (driver == null) {
			String browser = ConfigParser.getBrowser();
			if (browser.equalsIgnoreCase("safari")) {
				driver = new SafariDriver();
				;
			} else if (browser.equalsIgnoreCase("chrome")) {
				System.setProperty("webdriver.chrome.driver", "src/main/resources/chromedriver");
				driver = new ChromeDriver();
			} else {
				System.out.println("Using default browser as firefox");
				driver = new FirefoxDriver();
			}
			setupBrowser(driver);
		}
	}

	private static void setupBrowser(WebDriver driver) {
		driver.manage().window().setPosition(new Point(0, 0));
		// driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.manage().window().maximize();
	}

	public static WebDriver getWebDriver() {
		if (driver == null) {
			setupDriver();
		}

		return driver;
	}

}
