package com.kangocover.pagefactory;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import com.kangocover.scenarios.Q2APage;
import com.kangocover.scenarios.Q2Page;
import com.kangocover.utilities.BrowserCommon;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

public class Q2AScreenPage {

	WebDriver driver;
	public static final By Q2APageDestinationLabel = By.xpath("//div[@class='update-quote-info']/div[1]/span");
	public static final By Q2APageDepartDateLabel = By.xpath("//div[@class='update-quote-info']/div[2]/span[1]");
	public static final By Q2APageReturnDateLabel = By.xpath("//div[@class='info-col hidden-sm hidden-xs']/span[3]");
	public static final By YourQuoteAmount = By.xpath("//span[@class='quote-price-top']");
	public static final By HighValueItem = By.cssSelector("input[id='itemName']");
	public static final By EmailQuoteBox = By.cssSelector(".email-input");
	public static final By PreviousButton = By.cssSelector(".slick-prev");
	public static final By StandardExcess = By.cssSelector(".excess-value.price span");
	public static final By YourExcess = By.cssSelector(".excess-value.price");
	public static final By WinterCoverCheckBox = By.xpath("//*[@id='Form_Mod_Anc_WinSpoCov']/div/div/div[1]/h2/span");
	public static final By WinterCoverSportsPremium = By
			.xpath("//*[@id='Form_Mod_Anc_WinSpoCov']/div/div/div[2]/div/span");
	public static final By SportsNActivityCoverPremium = By
			.xpath("//*[@id='Form_Mod_Anc_SpoActCov']/div/div/div[2]/div");
	public static final By SportsNActivityCoverCheckBox = By
			.xpath("//*[@id='Form_Mod_Anc_SpoActCov']/div/div/div[1]/h2/span");
	public static final By SportsAndActivityCoverPremium = By
			.xpath("//*[@id='Form_Mod_Anc_SpoActCov']/div/div/div[2]/div/span");
	public static final By BusinessCoverPremium = By.xpath("//*[@id='Form_Mod_Anc_BusCov']/div/div/div[2]/div");
	public static final By BusinessCoverCheckBox = By.xpath("//*[@id='Form_Mod_Anc_BusCov']/div/div/div[1]/h2/span");
	public static final By DoubleExcessCoverCheckBox = By
			.xpath("//*[@id='Form_Mod_Anc_DouExc']/div/div/div[1]/h2/span");
	public static final By DoubleCoverPremium = By.xpath("//*[@id='Form_Mod_Anc_DouExc']/div/div/div[2]/div/span");
	public static final By HighValueItemBox = By.id("itemName");
	public static final By HighValueItemCostBox = By.id("itemValue");
	public static final By AddExtraCoverButton = By.xpath("//*[@id='extra-cover-items']/li[3]/button");
	public static final By AddExtraCoverPremium = By.xpath("//span[@class='money']");
	private static final By NextStepButton = By.xpath("//*[@id='cover-options']/div[1]/a");

	public String Q2APageDestination;
	public static String Q2APageDepartDate;
	public static String Q2APageReturnDate;
	static String AmountAfterAgeUpdate;
	static Double YourExcessBeforeDoubleExcess;
	Double QuoteAmountBeforeRefresh;
	public static Double QuoteValueBefore;
	public Double WinterCoverPremiumValue = 0.00;
	public Double SportsCoverPremiumValue = 0.00;
	public Double BusinessCoverPremiumValue = 0.00;
	public Double DoubleExcessCoverPremiumValue = 0.00;
	public Double ExtraItemAmountPremium = 0.00;
	static Double TotalQuoteIncludePremium;
	static Double TotalQuoteAmountAfterPremium;
	

	public void validateQ2APage() {
		 BrowserCommon.waitForElementVisible(Q2APageDestinationLabel, 10);
		 Q2APageDestination = BrowserCommon.getText(Q2APageDestinationLabel);
		 Q2APageDepartDate = BrowserCommon.getText(Q2APageDepartDateLabel);
		 Q2APageReturnDate = BrowserCommon.getText(Q2APageReturnDateLabel);
		 System.out.println(Q2APageDestination + " " + Q2APageDepartDate + " "
		 + Q2APageReturnDate);
		 QuoteValueBefore = convertPremium(YourQuoteAmount);

	}

	public void validateAddOnAndItsPremium(String AddOn, String status, String fluctuations) {
		String[] AddOnID = AddOn.split("-");
		if (status.equalsIgnoreCase("visible")) {
			System.out.println(AddOnID[1]);
			Assert.assertTrue(AddOn + " not present ", BrowserCommon.getCount(AddOnID[1]) != 0);
		} else if (status.equalsIgnoreCase("not visible")) {
			Assert.assertTrue(AddOn + " present ", !validateAddOnByID(AddOnID[1]));
		}
		if (fluctuations.equalsIgnoreCase("greater than")) {
			Assert.assertTrue(AddOn + " has -ve value", !validateDiscountOrAdditonalPremium(AddOnID[1]));
		} else if (fluctuations.equalsIgnoreCase("less than")) {
			Assert.assertTrue(AddOn + " has +ver value", validateDiscountOrAdditonalPremium(AddOnID[1]));
		}

	}

	@Then("^I validate that \"([^\"]*)\" is \"([^\"]*)\"$")
	public void i_validate_that_is_not_present(String AddOn, String status) throws Throwable {
		System.out.println("I validate that " + AddOn + " is " + status + " - Q2APage.java");
		if (status.equalsIgnoreCase("present")) {
			Assert.assertTrue("High Value Item is not present", BrowserCommon.elementDisplay(HighValueItem));
		} else {
			Assert.assertTrue("High Value Item is present", !BrowserCommon.elementDisplay(HighValueItem));
		}

	}

	@Then("^I go back to Q(\\d+) Page$")
	public void i_go_back_to_Q_Page(int arg1) {
		System.out.println("I go back to Q2 Page - Q2Page.java");
		BrowserCommon.goBack();
		Assert.assertTrue("Q2 Page does not Open", BrowserCommon.elementExist(EmailQuoteBox));
		BrowserCommon.click(PreviousButton);

	}

	public void validateHighValueItems(String addOn, String status) {
		if (status.equalsIgnoreCase("present")) {
			Assert.assertTrue("High Value Item is not present", BrowserCommon.elementExist(HighValueItem));
		} else if (status.equalsIgnoreCase("not present")) {
			Assert.assertTrue("High Value Item is present", !BrowserCommon.elementDisplay(HighValueItem));
		}

	}

	public void goBackToQ2Page() {
		Assert.assertTrue("Q2 Page does not Open", BrowserCommon.elementExist(EmailQuoteBox));
		BrowserCommon.click(PreviousButton);

	}

	public void validateStandardExcess(String amount) {
		Assert.assertEquals(amount, BrowserCommon.getText(StandardExcess));

	}

	public void clickOnAddOns(String coverType) {
		if (coverType.equalsIgnoreCase("Double the Standard Excess")) {
			YourExcessBeforeDoubleExcess = convertPremium(YourExcess);
		}
		chooseAddOnType(coverType);

	}

	public void validateStandardAccessIsDoubled() {
		BrowserCommon.refresh();
		Double YourExcessAfterDoubleExcess = convertPremium(YourExcess);

		Double CheckYourExcessAfterDoubleExcess = 2 * YourExcessBeforeDoubleExcess;
		Assert.assertEquals(YourExcessAfterDoubleExcess, CheckYourExcessAfterDoubleExcess);

	}

	public void validatePremiumsAddedToTotalQuote() {
		System.out.println(QuoteValueBefore + " " + ExtraItemAmountPremium + " " + WinterCoverPremiumValue + " "
				+ SportsCoverPremiumValue + " " + BusinessCoverPremiumValue + " " + DoubleExcessCoverPremiumValue);
		TotalQuoteIncludePremium = (QuoteValueBefore + ExtraItemAmountPremium + WinterCoverPremiumValue
				+ SportsCoverPremiumValue + BusinessCoverPremiumValue) - (DoubleExcessCoverPremiumValue);

		TotalQuoteAmountAfterPremium = convertPremium(YourQuoteAmount);

		Assert.assertTrue(TotalQuoteIncludePremium + "Difference between actual total premium and calculated Premium"
				+ TotalQuoteAmountAfterPremium, (TotalQuoteAmountAfterPremium - TotalQuoteIncludePremium) <= 1);

	}

	public void clickNextButton() {
		BrowserCommon.click(NextStepButton);

	}

	
	
	
	

	/************** Common Functionalities *******************************/

	public static Double convertPremium(By Premiums) {
		String PremiumValue = BrowserCommon.getText(Premiums);
		String[] Amount = PremiumValue.split("\\$");
		Double AmountValue = Double.parseDouble(Amount[1]);
		return AmountValue;
	}

	public static boolean validateAddOnByID(String addOn) {
		return BrowserCommon.findAll(By.id(addOn)).size() >= 1;
	}

	public boolean validateDiscountOrAdditonalPremium(String addOn) {
		boolean status = false;
		if (BrowserCommon.find(By.xpath("//*[@id='" + addOn + "']/div/div/div[2]/div")).getText().contains("-")) {
			status = true;
		} else {
			status = false;
		}
		return status;
	}

	public void chooseAddOnType(String coverType) {

		if (coverType.equalsIgnoreCase("Winter Sports Cover")) {
			while (!BrowserCommon.getAttribute(WinterCoverCheckBox, "class").equalsIgnoreCase("checkbox checked")) {
				BrowserCommon.click(WinterCoverCheckBox);
				WinterCoverPremiumValue = convertPremium(WinterCoverSportsPremium);
				if (!BrowserCommon.getAttribute(WinterCoverCheckBox, "class").equalsIgnoreCase("checkbox checked"))
					BrowserCommon.refresh();
			}

		} else if (coverType.equalsIgnoreCase("Sports & Activity Cover")) {
			while (!BrowserCommon.getAttribute(SportsNActivityCoverCheckBox, "class")
					.equalsIgnoreCase("checkbox checked")) {
				BrowserCommon.click(SportsNActivityCoverCheckBox);
				SportsCoverPremiumValue = convertPremium(SportsAndActivityCoverPremium);
				if (!BrowserCommon.getAttribute(SportsNActivityCoverCheckBox, "class")
						.equalsIgnoreCase("checkbox checked"))
					BrowserCommon.refresh();
			}

		} else if (coverType.equalsIgnoreCase("Business Cover")) {
			while (!BrowserCommon.getAttribute(BusinessCoverCheckBox, "class").equalsIgnoreCase("checkbox checked")) {
				BrowserCommon.refresh();
				BrowserCommon.click(BusinessCoverCheckBox);
				BusinessCoverPremiumValue = convertPremium(BusinessCoverPremium);
				if (!BrowserCommon.getAttribute(BusinessCoverCheckBox, "class").equalsIgnoreCase("checkbox checked"))
					BrowserCommon.refresh();
			}
		} else if (coverType.equalsIgnoreCase("Double the Standard Excess")) {
			while (!BrowserCommon.getAttribute(DoubleExcessCoverCheckBox, "class")
					.equalsIgnoreCase("checkbox checked")) {
				BrowserCommon.click(DoubleExcessCoverCheckBox);
				String DoubleAccessPrice = BrowserCommon.getText(DoubleCoverPremium);
				String[] Price = DoubleAccessPrice.split("\\$-");
				DoubleExcessCoverPremiumValue = Double.parseDouble(Price[1]);
				if (!BrowserCommon.getAttribute(DoubleExcessCoverCheckBox, "class")
						.equalsIgnoreCase("checkbox checked"))
					BrowserCommon.refresh();
			}
		} else if (coverType.equalsIgnoreCase("High Value Items")) {
			BrowserCommon.clearAndEnterText(HighValueItemBox, "Camera");
			BrowserCommon.clearAndEnterText(HighValueItemCostBox, "5000");
			BrowserCommon.click(AddExtraCoverButton);

			ExtraItemAmountPremium = convertPremium(AddExtraCoverPremium);
		}
	}

	

	

}
