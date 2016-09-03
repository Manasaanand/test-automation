package com.kangocovermobileweb.scenarios;

import org.junit.Assert;
import org.openqa.selenium.By;

import com.kangocovermobileweb.utilities.WebConnector;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Q2Page {
	public static final By ProductContainer = By.cssSelector(".product-container");
	public static final By EditQuoteButton = By.cssSelector(".edit-quote.secondarybutton");
	public static final By QuoteTables = By.cssSelector(".mobile-quote-table.visible-xs");
	public static final By EmailQuoteBox = By.cssSelector(".email-input");
	public static final By CoverSlickList = By.cssSelector("div[class='slick-list draggable']");
	public static final By FirstCoverPanel = By.xpath("html/body/div[2]/section[2]/div/div/div/div[3]/div/div/ul[1]");
	public static final By PreviousButton = By.cssSelector(".slick-prev");
	public static final By NextButton = By.cssSelector(".slick-next");
	public static final By FirstCoverPriceQuoted = By.xpath("//div[@class='mobile-quote-table visible-xs']/div[1]/div/span");
	public static final String PanelBeg = "//div[@class='mobile-quote-table visible-xs']/div[";
	public static final String PanelEnd = "]/div/h4";
	public static final By MostPopular = By.xpath("//div[@class='most-popular']");
	public static final String SelectAndNextStepButtonBeg = "//div[@class='mobile-quote-table visible-xs']/div[";
	public static final String PlanQuotePriceEnd = "]/div/span";
	public static final String SelectAndNextStepButtonEnd = "]/div/div/div";
	public static final By OnlyCover = By.xpath("html/body/div[2]/section[2]/div/div/div/div[3]/ul/li[1]/div/h4");
	public static final String SelectButtonEnd = "]/div/div/div";
	public static final String NextStepButtonEnd = "]/div/div/a";
	public static final By EditQuote = By.cssSelector(".edit-quote.secondarybutton");
	public static final String BeforeCampaignPriceLabelEnd = "]/div/span";
	public static final String AfterCampaignPriceLabelEnd = "]/li[1]/div/span/span[2]";
	public static final By ContentTable = By.cssSelector("div[class='quote-table']");
	public static final By TableHeading = By.cssSelector("li[class='quote-head-row'] h5");
	public static final By CampaignCodeCheckBox = By.cssSelector("input[id='toggleCampaignCode']");
	public static final By CampaignCodeTextBox = By.cssSelector("input[id='campaignCode']");
	public static final By CampaignCodeApplyButton = By.cssSelector("input[class='secondarybutton small']");
	public static final By CampaignCodeMessage = By.cssSelector("span[id='campaignCodeMessage']");
	public static final By FirstCoverPrice = By.cssSelector("span[id='q87889final']");
	public static final By CampaignCodeError = By.id("campaignCodeField-error");
	public static final By SaveQuote = By.xpath("//div[@class='visible-xs mobile-quote-actions']/div/div[2]/a");
	public static final By Q2PageDepartDateBox = By.name("travel.leaving");
	public static final By  Q2PageReturnDateBox = By.name("travel.returning");
	public static final By  Q2PageDestinationBox = By.xpath("//input[@class='ageInputField multiAgeField']");
	public static final By  PlansPanel = By.xpath("//div[@class='quote-products hidden-xs slick-initialized slick-slider']");
	public static final By  FirstCoverAmount = By.xpath("//div[@class='mobile-quote-table visible-xs']/div[1]/div/span");
	public static final By  UpdateGetQuote = By.xpath("//input[@class='primarybutton getquote']");
	public static final By  OnlyCoverSelectButton = By.xpath("//a[@class='primarybutton select buy']");
	public static By UpdateQuoteButton = By.xpath("//input[@class='primarybutton getquote']");
	
	String FirstCoverQuoteAmount;
	public static String Q2PageDepartDate;
	public static String Q2PageReturnDate;
	public static String Q2PageAge;
	public String Q2Pagedestination;
	String AmountBeforeAgeUpdate;
	String CheckPriceAfterUpdate;
	static String AmountAfterAgeUpdate;
	
	
	WebConnector selenium = WebConnector.getInstance();
	
	@Then("^I validate Q2 Page$")
	public void i_validate_Q_Page() {
		System.out.println("I validate Q2 Page - Q2Page.java");
		
		Assert.assertTrue("Q2 Page does not display", selenium.elementExist(EditQuoteButton));
		
		
	}

	@Then("^I validate \"([^\"]*)\" option is \"([^\"]*)\" on Q2 Page$")
	public void i_validate_option_is_on_Q_Page(String CoverType, String VisibleStatus){
		System.out.println("I validate "+CoverType+" option is "+VisibleStatus+" on Q2 Page.java");
		String actualVisibility = selenium.checkInsuranceVisibilityStatus(CoverType);
		
		Assert.assertEquals(VisibleStatus, actualVisibility);
		
	}
	
	@Then("^I validate \"([^\"]*)\" option is only \"([^\"]*)\" on Q2 Page$")
	public void i_validate_option_is_only_on_Q_Page(String CoverType, String VisibleStatus){
		System.out.println("I validate "+CoverType+" option is "+VisibleStatus+" - Q2Page.java");
		Assert.assertEquals("not visible", selenium.checkInsuranceVisibilityStatus(CoverType));
		Assert.assertEquals(CoverType, selenium.getText(OnlyCover));
	
	}
	
	@When("^I click on Update Quote from Q2Page$")
	public void i_click_on_Update_Quote() throws Throwable {
		System.out.println("I click on Update Quote from Q2Page - Q2APage.java");
		selenium.click(UpdateQuoteButton);
		
		
		
	}

	@Then("^I validate that atleast one product should be selected by default which has a tag as most popular$")
	public void i_validate_that_atleast_one_product_should_be_selected_by_default_which_has_a_tag_as_most_popular() {
		System.out.println("I validate that atleast one product should be selected by default which has a tag as most popular - Q2Page.java");
		Assert.assertTrue("Atleast One Product Presend here", selenium.elementExist(ProductContainer));
		
	}

	@Then("^I select \"([^\"]*)\" and click next step$")
	public void i_select_and_click_next_step(String cover) {
		System.out.println("I select "+cover+" and click next step - Q2Page.java");
	    selenium.selectAndClickNextStepOnCover(cover);
		
	}
	
	@And("^I go back to Q2 Page$")
	public void I_go_back_to_Q2_Page() {
		System.out.println("I go back to Q2 Page - Q2Page.java");
		selenium.goBack();
		Assert.assertTrue("Q2 Page does not Open", selenium.elementExist(ProductContainer));
	    Assert.assertTrue("Edit Quote Does not exist", selenium.elementExist(EditQuoteButton));
	
	}


	@Then("^I click on Campaign code checkbox$")
	public void i_click_on_Campaign_code_checkbox(){
		System.out.println("I click on Campaign code checkbox - Q2Page.java");
		selenium.getPriceBeforeCampaign();
		selenium.click(CampaignCodeCheckBox);
	
	}
	


	@Then("^I validate Campaign code text box display$")
	public void i_validate_Campaign_code_text_box_display()  {
		System.out.println("I validate Campaign code text box display - Q2Page.java");
		Assert.assertTrue("Campaign Code Text Box does not displau", selenium.elementExist(CampaignCodeTextBox));
	
	}

	@Then("^I enter campaign code as \"([^\"]*)\"$")
	public void i_enter_campaign_code_as(String inputValue){
		System.out.println("I enter campaign code as "+inputValue+" - Q2Page.java");
		selenium.clearAndEnterText(CampaignCodeTextBox, inputValue);
	
	}

	@Then("^I click on Apply$")
	public void i_click_on_Apply(){
		selenium.click(CampaignCodeApplyButton);
	
	}
	
	@And("^I click on Edit Button$")
	public void edit_button_click(){
		FirstCoverQuoteAmount = selenium.getText(FirstCoverPriceQuoted) ;
		selenium.click(EditQuote);
	}

	@Then("^I validate \"([^\"]*)\" has displayed$")
	public void i_validate_has_displayed(String expectedMessage){
		System.out.println("I validate "+expectedMessage+" has displayed - Q2Page.java");
		if(expectedMessage.contains("Sorry")){
		Assert.assertEquals(expectedMessage, selenium.getText(CampaignCodeError));
		}else{
		Assert.assertEquals(expectedMessage, selenium.getText(CampaignCodeMessage));
		}
		
	}

	@Then("^I validate that the price of covers are reduced$")
	public void i_validate_that_the_price_of_covers_are_reduced() {
		System.out.println("I validate that the price of covers are reduced - Q2Page.java");
		selenium.getPriceAfterCampaign();
		System.out.println(selenium.PriceBefore);
		System.out.println(selenium.PriceAfter);
		for(int index=0; index<selenium.PriceAfter.size();index++){
			Assert.assertTrue(selenium.PriceBefore.get(index) > selenium.PriceAfter.get(index));	
		}
	
	}
		
	@Then("^I validate that the price of covers are not reduced$")
		public void i_validate_that_the_price_of_covers_are_not_reduced(){
		System.out.println("I validate that the price of covers are not reduced - Q2Page.java");
		Assert.assertTrue("Display Updated Amount even Campaign Code is not used", selenium.elementExist(By.xpath(PanelBeg+1+BeforeCampaignPriceLabelEnd)));
		
	}
	
	@Then("^I validate that the price not changed after Age update$")
	public void i_validate_that_the_price_of_covers_are_not_reduced_after_Age_Update(){
	System.out.println("I validate that the price not changed after Age update - Q2Page.java");
	CheckPriceAfterUpdate = selenium.getText(FirstCoverAmount);
	Assert.assertEquals(AmountBeforeAgeUpdate, CheckPriceAfterUpdate);
	
	}

	@Then("^I update \"([^\"]*)\" as my Age$")
	public void i_update_as_my_Age(String age)  {
	  System.out.println("I update "+age+" as my Age - Q2Page.java");
	  AmountBeforeAgeUpdate  = selenium.getText(FirstCoverAmount);
	  selenium.clearAndEnterText(HomePage.Age, age);
	   
	}
	
	@Then("^I validate that the prices are same as (\\d+)\\.(\\d+)$")
	public void i_validate_that_the_prices_are_same_as_$(int arg1, int arg2) {
	   System.out.println("I validate that the prices are same as"+arg1+"."+arg2);
		String Amount = selenium.getText(FirstCoverAmount);
		String[] Price = Amount.split("$");
		
		Assert.assertEquals(Price[0], arg1+"."+arg2);
	}
	
	@Then("^I validate that Most Popular product is \"([^\"]*)\"$")
	public void i_validate_that_Most_Popular_product_is(String arg1) {
		System.out.println("I validate that Most Popular product is "+arg1);
		Assert.assertTrue("Most popular is does not present", selenium.elementDisplay(MostPopular));
	}
	
	@When("^I click on Update Quote$")
	public void i_click_on_Update_Quote_age() throws Throwable {
		System.out.println("I click on Update Quote - Q2APage.java");
		selenium.click(UpdateQuoteButton);
		AmountAfterAgeUpdate  = selenium.getText(FirstCoverPriceQuoted);
		
	}
	@When("^I click on Edit Quote$")
	public void i_click_on_Edit_Quote() throws Throwable {
	  System.out.println("I click on Edit Quote - Q2APage.java");
	  selenium.click(EditQuoteButton);
		
	}

	@Then("^I validate that amount of Cover is changed$")
	public void i_validate_that_amount_of_Cover_is_changed()  {
		CheckPriceAfterUpdate = selenium.getText(FirstCoverAmount);
		Assert.assertNotEquals(AmountBeforeAgeUpdate, CheckPriceAfterUpdate);
	}

}
