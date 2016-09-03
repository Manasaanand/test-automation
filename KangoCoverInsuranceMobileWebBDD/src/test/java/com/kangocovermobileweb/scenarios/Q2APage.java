package com.kangocovermobileweb.scenarios;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.kangocovermobileweb.utilities.WebConnector;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Q2APage {
	
	

	public static final By NextButton = By.cssSelector("a[class='primarybutton strech big buy-policy']");
	public static final By AddonFrame = By.cssSelector("div[id='cover-options']");
	public static final By AddOnPanel = By.cssSelector(".cmsfragment");
	public static final By HighValueItem = By.cssSelector("input[id='itemName']");
	public static final By StandardExcess = By.cssSelector(".excess-value.price");
	private static final By NextStepButton = By.cssSelector(".primarybutton.strech.big.buy-policy");
	public static final By WinterCoverSportsPremium = By.xpath("//*[@id='Form_Mod_Anc_WinSpoCov']/div/div/div[2]/div/span");
	public static final By SportsAndActivityCoverPremium = By.xpath("//*[@id='Form_Mod_Anc_SpoActCov']/div/div/div[2]/div/span");
	public static final By DoubleCoverPremium = By.xpath("//*[@id='Form_Mod_Anc_DouExc']/div/div/div[2]/div/span");
	public static final By YourQuoteAmount = By.cssSelector(".price.small-cents.quote-price-top");
	public static final By Q2APageDestinationLabel = By.xpath("//div[@class='update-quote-info']/div[1]/span");
	public static final By Q2APageDepartDateLabel = By.xpath("//div[@class='update-quote-info']/div[2]/span[1]");
	public static final By Q2APageReturnDateLabel = By.xpath("//div[@class='info-col hidden-sm hidden-xs']/span[3]");
	public static final By HighValueItemBox = By.id("itemName");
	public static final By HighValueItemCostBox = By.id("itemValue");
	public static final By AddExtraCoverButton = By.xpath("//*[@id='extra-cover-items']/li[3]/button");
	public static final By AddExtraCoverPremium = By.xpath("//span[@class='money']");
	public static final By TravellersDetails = By.xpath("//div[@class='update-quote-info']/div[3]/span");
	public static final By HighValueItemPremium = By.xpath("//*[@id='Form_Mod_Anc_PerIte']/div[2]/div[2]/div[1]/div/span/span/span[3]");
	public static final By YourExcess = By.cssSelector(".excess-value.price");
	public static final By DoublePremiumAmount = By.xpath("//form[@id='Form_Mod_Anc_DouExc']/div/div/div[2]/div/span");
	public static final By QuotePriceTop = By.className("quote-price-top");
	public static final By WinterCoverPremium = By.xpath("//*[@id='Form_Mod_Anc_WinSpoCov']/div/div/div[2]/div");
	public static final By WinterCoverCheckBox = By.xpath("//*[@id='Form_Mod_Anc_WinSpoCov']/div/div/div[1]/h2/span");
	public static Double WinterCoverPremiumAmount;
	public static final By BusinessCoverPremium = By.xpath("//*[@id='Form_Mod_Anc_BusCov']/div/div/div[2]/div");
	public static final By BusinessCoverCheckBox = By.xpath("//*[@id='Form_Mod_Anc_BusCov']/div/div/div[1]/h2/span");
	public static Double BusinessCoverPremiumAmount;
	public static final By SportsNActivityCoverPremium = By.xpath("//*[@id='Form_Mod_Anc_SpoActCov']/div/div/div[2]/div");
	public static final By SportsNActivityCoverCheckBox = By.xpath("//*[@id='Form_Mod_Anc_SpoActCov']/div/div/div[1]/h2/span");
	public static final By DoubleExcessCoverCheckBox = By.xpath("//*[@id='Form_Mod_Anc_DouExc']/div/div/div[1]/h2/span");
	public static Double SportsNActivityCoverPremiumAmount;
	public static final By DoubleExcessCoverPremium = By.xpath("");
	public static Double DoubleExcessCoverPremiumAmount = 0.00;
	public static final By QuotePriceOnTop = By.className("quote-price-top");
	public static final String PremiumLabelBeg ="//*[@id='sb-site']/div[4]/div[";
	public static final String PremiumLabelEnd ="]/div[2]/div";
	public static final String AddOnPanelBeg = "html/body/div[2]/section/div/div[2]/div[";
	public static final String AddOnPanelEnd = "]/div/form/div/div/div[2]/div";
	public static final String AddOnPanelEnd_GLF = "]/div/form/div/div";
	public static final String AddOnLabelBeg ="html/body/div[2]/section/div/div[2]/div[";
	public static final String AddOnLabelEnd ="]/div/form/div/div/div[1]/h2";
	public static final String CheckBoxEnd ="]/div/form/div/div/div[1]/h2/span";
	public static Double QuotePriceOnTopAmount;
	public static int ExcessAmountBeforeDoubleExcess;
	public static Double QuoteValueBefore;
	public static	Double QuoteAmountAfterSelectingAllAddOns;
	public String Q2APageDestination;
	public static String Q2APageDepartDate;
	public static String Q2APageReturnDate;
	static Double YourExcessBeforeDoubleExcess;
	Double QuoteAmountBeforeRefresh;
	
	
	WebConnector selenium = WebConnector.getInstance();
	
	@Then("^I validate Q2A Page$")
	public void i_validate_Q_A_Page() {
		System.out.println("I validate Q2A Page - Q2APage.java");
		QuoteValueBefore = selenium.convertPremium(YourQuoteAmount);
		
	}
	
	@Then("^I validate that \"([^\"]*)\" is \"([^\"]*)\"$")
	public void i_validate_that_is_not_present(String AddOn, String status) throws Throwable {
		System.out.println("I validate that "+AddOn+" is "+status+" - Q2APage.java");
	    if(status.equalsIgnoreCase("present")){
	    	Assert.assertTrue("High Value Item is not present", selenium.elementExist(HighValueItem));
	    }else if(status.equalsIgnoreCase("not present")){
	    	Assert.assertTrue("High Value Item is present", !selenium.elementDisplay(HighValueItem));
	    }
	
	}
	
	@Then("^I validate that standard Excess is \"([^\"]*)\"$")
	public void i_validate_that_standard_Excess_is(String Amount) {
		System.out.println("I validate that standard Excess is "+Amount+" - Q2APage.java");
		Assert.assertEquals(Amount, selenium.getText(StandardExcess));

	}

	@Then("^I click on Next Step on Q2A Page$")
	public void i_click_on_Next_Step_on_Q_APage() {
		System.out.println("I click on Next Step on Q2A Page - Q2APage.java");
	    selenium.click(NextStepButton );
	
	}
		
	@When("^I select \"([^\"]*)\" Addon$")
	public void i_select_Addon(String CoverType){
		System.out.println("I select "+CoverType+" Addon - Q2APage.java");
		if(CoverType.equalsIgnoreCase("Double the Standard Excess")){
			
			YourExcessBeforeDoubleExcess = selenium.convertPremium(YourExcess);
		}
		selenium.chooseAddOnType(CoverType);
		
	}
	
	@Then("^I validate that all addons are unchecked$")
	public void i_validate_that_all_addons_are_unchecked(){
		System.out.println("I validate that all addons are unchecked - Q2APage.java");
		WebDriverWait wait=new WebDriverWait(selenium.driver, 5);
		String CheckStatus;
		if(selenium.elementExist(By.id("Form_Mod_Anc_WinSpoCov"))){
			CheckStatus = selenium.getAttribute(WinterCoverCheckBox, "class");
			Assert.assertEquals("checkbox", CheckStatus);
		}else if(selenium.elementExist(By.id("Form_Mod_Anc_BusCov"))){
			CheckStatus = selenium.getAttribute(BusinessCoverCheckBox, "class");
			Assert.assertEquals("checkbox", CheckStatus);
		}else if(selenium.elementExist(By.id("Form_Mod_Anc_SpoActCov"))){
			CheckStatus = selenium.getAttribute(SportsNActivityCoverCheckBox, "class");
			Assert.assertEquals("checkbox", CheckStatus);
		}
	
	}

	@Then("^I validate that all premiums are not added$")
	public void i_validate_that_all_premiums_are_not_added() {
		System.out.println("I validate that all premiums are not added - Q2APage.java");
		Assert.assertTrue("Difference between actual total premium and calculated Premium", (EasternGreyCover.TotalQuoteAmountAfterPremium - EasternGreyCover.TotalQuoteIncludePremium)<=1);
	
	}
	
	@Then("^I validate that all addons are checked$")
	public void i_validate_that_all_addons_are_checked(){
		System.out.println("I validate that all addons are checked - Q2APage.java");
		String CheckStatus;
		if(selenium.elementExist(By.id("Form_Mod_Anc_WinSpoCov"))){
			CheckStatus = selenium.getAttribute(WinterCoverCheckBox, "class");
			Assert.assertEquals("checkbox checked", CheckStatus);
		}else if(selenium.elementExist(By.id("Form_Mod_Anc_BusCov"))){
			CheckStatus = selenium.getAttribute(BusinessCoverCheckBox, "class");
			Assert.assertEquals("checkbox checked", CheckStatus);
		}else if(selenium.elementExist(By.id("Form_Mod_Anc_SpoActCov"))){
			CheckStatus = selenium.getAttribute(SportsNActivityCoverCheckBox, "class");
			Assert.assertEquals("checkbox checked", CheckStatus);
		}else if(selenium.elementExist(By.id("Form_Mod_Anc_DouExc"))){
			CheckStatus = selenium.getAttribute(DoubleExcessCoverCheckBox, "class");
			Assert.assertEquals("checkbox checked", CheckStatus);
		}
	
	}

	@Then("^I validate that all premiums are added$")
	public void i_validate_that_all_premiums_are_added() throws InterruptedException {
		System.out.println("I validate that all premiums are added - Q2APage.java");
		
		Assert.assertEquals(EasternGreyCover.TotalQuoteIncludePremium, selenium.convertPremium(YourQuoteAmount));
		
	}
	
	@Then("^I validate that all premiums are added after refresh$")
	public void I_validate_all_Premium_after_refresh(){
		Double QuoteAmountAfrerRefresh = selenium.convertPremium(YourQuoteAmount);
		Assert.assertEquals(QuoteAmountBeforeRefresh, QuoteAmountAfrerRefresh);
	}
	
	@When("^I refresh the page$")
	public void i_refresh_the_page() {
		System.out.println("I refresh the page - Q2APage.java");
		QuoteAmountBeforeRefresh = selenium.convertPremium(YourQuoteAmount);
		selenium.refresh();
	
	}

	
	
}
