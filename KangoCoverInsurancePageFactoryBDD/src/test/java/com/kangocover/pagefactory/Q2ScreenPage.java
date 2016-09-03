package com.kangocover.pagefactory;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import com.kangocover.utilities.BrowserCommon;

public class Q2ScreenPage {

	WebDriver driver;

	private static final By EmailQuoteBox = By.cssSelector(".email-input");
	private static final By MostPopular = By.xpath("//div[@class='most-popular']");
	private static final By CoverSlickList = By.cssSelector(".slick-list.draggable");
	public static final By NextButton = By.cssSelector(".slick-next");
	public static final String PanelBeg = "//div[@class='slick-track']/ul[";
	public static final String PanelEnd = "]/li[1]/div/h4";
	public static final By PreviousButton = By.cssSelector(".slick-prev");
	public static final String SelectAndNextStepButtonBeg = "//div[@class='slick-track']/ul[";
	public static final String SelectButtonEnd = "]/li[1]/div/button";
	public static final String MostPopularEnd = "]/div";
	public static final String NextStepButtonEnd = "]/li[1]/div/a";
	public static final By OnlyCoverSelectButton = By.cssSelector(".primarybutton.select.buy");

	public static void validateQ2Page() {
		Assert.assertTrue("Does not display Q2Page", BrowserCommon.elementDisplay(EmailQuoteBox));

	}

	public void validateMostPopular() {
		Assert.assertTrue("Most popular Does not visible", BrowserCommon.elementDisplay(MostPopular));

	}

	public void validateCovertypeVisibility(String CoverType, String VisibleStatus) {
		String actualVisibility = checkInsuranceVisibilityStatus(CoverType);
		Assert.assertEquals(VisibleStatus, actualVisibility);

	}

	public void selectCoverType(String cover) {
		if (BrowserCommon.elementDisplay(CoverSlickList)) {
			WebElement topPanel = BrowserCommon.find(CoverSlickList);
			List<WebElement> CoverCount = topPanel.findElements(By.tagName("ul"));
			if (CoverCount.size() > 3) {
				while (!BrowserCommon.elementExist(PreviousButton)) {
					BrowserCommon.click(PreviousButton);
				}
			}
			for (int panel = 1; panel <= CoverCount.size(); panel++) {
				if (CoverCount.size() > 3 && panel > 3) {
					BrowserCommon.click(NextButton);
				}
				BrowserCommon.waitForElementVisible(By.xpath(PanelBeg + panel + PanelEnd), 10);

				if (visibilityStatus(By.xpath(PanelBeg + panel + PanelEnd), cover)) {
					if (BrowserCommon.elementDisplay(By.xpath(SelectAndNextStepButtonBeg + panel + SelectButtonEnd)) && 
							!BrowserCommon.elementDisplay(By.xpath(SelectAndNextStepButtonBeg + panel + MostPopularEnd)))  {
						BrowserCommon.click(By.xpath(SelectAndNextStepButtonBeg + panel + SelectButtonEnd));
					}
					BrowserCommon.waitForElementVisible(
							By.xpath(SelectAndNextStepButtonBeg + panel + NextStepButtonEnd), 10);
					BrowserCommon.click(By.xpath(SelectAndNextStepButtonBeg + panel + NextStepButtonEnd));
					break;
				}
			}
		} else {
			BrowserCommon.click(OnlyCoverSelectButton);
		}

	}

	/*************** Common Functions ******************************/


	public String checkInsuranceVisibilityStatus(String cover) {
		String visibility = "not visible";

		if (BrowserCommon.findAll(CoverSlickList).size() >= 1) {
			WebElement topPanel = BrowserCommon.find(CoverSlickList);
			List<WebElement> CoverCount = topPanel.findElements(By.tagName("ul"));
			for (int panel = 1; panel <= CoverCount.size(); panel++) {
				if (CoverCount.size() > 3 && panel > 3) {
					BrowserCommon.click(NextButton);
				}
				BrowserCommon.waitForElementVisible(By.xpath(PanelBeg + panel + PanelEnd), 10);
				if (visibilityStatus(By.xpath(PanelBeg + panel + PanelEnd), cover)) {
					visibility = "visible";
				}
			}

		} else {

			if (!cover.equalsIgnoreCase("L5-Big Red Cover")) {
				return visibility = "not visible";
			} else {
				return visibility = "visible";
			}
		}
		while (BrowserCommon.elementDisplay(PreviousButton)
				&& BrowserCommon.getAttribute(PreviousButton, "class").equalsIgnoreCase("slick-prev")) {
			BrowserCommon.click(PreviousButton);
		}

		return visibility;
	}

	public boolean visibilityStatus(By selector, String cover) {
		return BrowserCommon.getText(selector).equalsIgnoreCase(cover);
	}

}
