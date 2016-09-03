package com.kangocovermobileweb.utilities;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.ios.IOSDriver;

import java.io.File;
import java.io.FileInputStream;
import java.io.FilenameFilter;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collection;
import java.util.Date;
import java.util.List;
import java.util.Properties;

import org.apache.commons.io.FileUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.kangocovermobileweb.scenarios.HomePage;
import com.kangocovermobileweb.scenarios.Q2APage;
import com.kangocovermobileweb.scenarios.Q2Page;
import com.kangocovermobileweb.scenarios.Q3Page;

import cucumber.api.Scenario;


public class WebConnector {
	
	
	int time =1;
	public static IOSDriver driver=null;
//	public static WebDriver driver=null;
	public Properties ENV=null;
	public Properties OR=null;
	public Properties CONFIG=null;
	static WebConnector w;
	IOSDriver mozilla=null;
//	WebDriver mozilla=null;
	int day; 
	int month;
	int year;
	String travelMonth;
	static int returnTable = 1;
	public int StandardExcessBefore ;
	public Double QuoteAmountAfterCheck;
	public String StandardExcess;
	public ArrayList<Double> PriceBefore;
	public ArrayList<Double> PriceAfter;
	int customerAge;
	public Double YourQuoteAmountBeforePremiums;
	public Double WinterCoverPremiumValue = 0.00;
	public Double SportsCoverPremiumValue = 0.00;
	public Double BusinessCoverPremiumValue = 0.00;
	public Double DoubleExcessCoverPremiumValue = 0.00;
	public Double ExtraItemAmountPremium = 0.00;
	static int i= 1;
	public Date HomePagereturndate;
	public String months[] ={"January","February","March","April","May","June","July","August","September","October","November","December"};
	
		public WebConnector(){
		try{
				ENV=new Properties();
					FileInputStream fp=new FileInputStream(System.getProperty("user.dir")+"//src//test//java//com//kangocovermobileweb//config//ENV.properties");
					ENV.load(fp);
				OR=new Properties();
				if(ENV.getProperty("ENV").equalsIgnoreCase("STAGING")){
					fp=new FileInputStream(System.getProperty("user.dir")+"//src//test//java//com//kangocovermobileweb//config//Staging.properties");
					OR.load(fp);
				}else if(ENV.getProperty("ENV").equalsIgnoreCase("PRODUCTION")){
					fp=new FileInputStream(System.getProperty("user.dir")+"//src//test//java//com//kangocovermobileweb//config//production.properties");
					OR.load(fp);
				}else if(ENV.getProperty("ENV").equalsIgnoreCase("GLF_STAG")){
					fp=new FileInputStream(System.getProperty("user.dir")+"//src//test//java//com//kangocovermobileweb//config//GLF_STAGING.properties");
					OR.load(fp);
				}
			}catch(Exception e){
				e.getMessage();
			}
			
	}
		/*
		 * Get Instance of WebConnector
		 */
		public static WebConnector getInstance(){
			if(w==null)
				w= new WebConnector();
			return w;
	}
		/*               
		 *   Opening webbrowser based on type of browser and navigate to webURL based on type of Env
		 */
		public void openHomePage() throws MalformedURLException{
		openBrowser();
		navigate();
		
	}
	/*
	 	* Opening web Browser based on null and not null cases
	 * 
	 */
		public void openBrowser() throws MalformedURLException {
			 
			if(mozilla==null){
				 DesiredCapabilities capabilities = new DesiredCapabilities();
				
				
			        capabilities.setCapability("deviceName", "iPhone 6 Plus");
			        capabilities.setCapability("platformName", "iOS");
			        capabilities.setCapability("platformVersion", "9.3");
			     //   capabilities.setCapability("udid", "e1eabfd275d1997729847e6ccaffff4b3ba1b26a");
			        capabilities.setCapability("browserName", "safari");
			        driver = new IOSDriver(new URL("http://127.0.0.1:4723/wd/hub"),
			                capabilities);
//				 FirefoxProfile ffprofile = new FirefoxProfile();
//				 ffprofile.setPreference("general.useragent.override", "Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A543a Safari/419.3");
//			        driver = new FirefoxDriver(ffprofile);	
//			        driver.manage().window().setSize(new Dimension(750,920));
			
			 mozilla=driver;
				
				
			}else if(mozilla!=null){
	   		 driver=mozilla;
			}
		}
/*
 		* Navigating to webURL from OR property file
 */
		public void navigate() {
		driver.get(OR.getProperty("URL"));
		
	}
	/*
	 	* Wiating untill Object appears and then enter Text
	 */
		public void enter_destination(By selector, By country) {
		WebDriverWait wait=new WebDriverWait(driver, 5);
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(selector));
		click(selector);
		click(country);
		
	}
	/*
	 	* Enter return date based on Duration. This duration will be calculated based on
	 * Todays date by default
	 */
		public void enterReturnDate(int duration) throws java.text.ParseException {
		Calendar rightNow = Calendar.getInstance();
		//Adding Duration along with today's date
		rightNow.add(Calendar.DAY_OF_MONTH, duration);
//		Date returndate = new Date(rightNow.getTimeInMillis());
//		System.out.println(HomePagereturndate);
//		System.out.println(new SimpleDateFormat("dd/MM/yyyy").format(returndate));
		
		day = rightNow.get(Calendar.DAY_OF_MONTH);
		month=rightNow.get(Calendar.MONTH);
		year=rightNow.get(Calendar.YEAR);
/*		System.out.println("Date is "+day);
		System.out.println("Month is "+month);
		System.out.println(months[month]);
		System.out.println("Year is "+year);*/
		/*Date in String format as per dd/MM/yyyy*/
		String StringHomePagereturndate = day+"/"+(month+1)+"/"+year;
		HomePagereturndate = StringToDate(StringHomePagereturndate);
		/* This is how Month and year display on Calendar on Label, Months has been declared as an array on top */
		travelMonth=months[month]+" "+year;
		/* Click on Return date box Untill it appears  */
//		WebDriverWait wait=new WebDriverWait(driver, 5);
//		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(HomePage.ReturnDate));
		click(HomePage.ReturnDate);
		selectMonth(travelMonth);
		selectDay( day);
		
	}
		/*
		 * Select Month and Year as per calculations
		 */
		public void selectMonth(String monthtobeSelected){
			/*  Checking whether the Month and year we are going to select is same as what is calculated  */
		while(!getText(HomePage.xpathMonthYearSection).equals(monthtobeSelected)){ /*  Keep executing untill month and year is not same as Month and year is calculated */
			click(HomePage.forwardArrow);/* Keep clicking the forward button untill selected month and year is not appeared  */
			}
		
		}
		/*
		 *   Once month and year are appeared now go to each date element 
		 */
		public  void selectDay( int dayToBeSelected){
			String Calendar_dates_part1="//*[@id='ui-datepicker-div']/table/tbody/tr[";
			String Calendar_dates_part2="]/td[";
			String Calendar_dates_part3="]";
			for(int rNum=1;rNum<=6;rNum++){
				for(int cNum=1;cNum<=7;cNum++){
					String className=driver.findElement(By.xpath(Calendar_dates_part1+rNum+Calendar_dates_part2+cNum+Calendar_dates_part3)).getAttribute("class");
					if(!className.contains("ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled") || !className.contains("ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled")){ /* Skip if the date is disabled and if enabled check the text  */
						String date = driver.findElement(By.xpath(Calendar_dates_part1+rNum+Calendar_dates_part2+cNum+Calendar_dates_part3)).getText();
//					System.out.println(date+"a "+part1+rNum+part2+cNum+part3);
						if(!date.equals(" ")){
							int currentDay = Integer.parseInt(date);  /* Convert the date in strings into integer  */
								if(currentDay == dayToBeSelected){  /* If the date is same as the date calculated then click on that date and comeout  */
									click(By.xpath(Calendar_dates_part1+rNum+Calendar_dates_part2+cNum+Calendar_dates_part3));
									return;
								}
						}
					}
				}
			}
	}
	/*
	 	* Convert the date From String to date format dd/MM/yy format
	 * 
	 */
		public Date StringToDate(String date) throws java.text.ParseException {
		SimpleDateFormat df = new SimpleDateFormat("dd/MM/yy");
		return df.parse(date);
		
	}
	/*
	 	* Click on the object
	 */
		public void click(By selector){
//		WebDriverWait wait=new WebDriverWait(driver, 5);
//		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(selector));
		driver.findElement(selector).click();
		}
	/*
	 	* Get the text from the object
	 */
		public String getText(By titleheading) {
		WebDriverWait wait=new WebDriverWait(driver, 5);
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(titleheading));			
		return driver.findElement(titleheading).getText();
		
	}
	/*
	 	* clear and input field and enter the string mentioned
	 */
		public void clearAndEnterText(By selector, String inputValue) {
		WebDriverWait wait=new WebDriverWait(driver, 5);
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(selector));
		driver.findElement(selector).clear();
		driver.findElement(selector).sendKeys(inputValue);
		
	}
	/*
	 	* get the status of element whether it exists or not
	 */
		public boolean elementExist(By selector) {
		WebDriverWait wait=new WebDriverWait(driver, 5);
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(selector));
		return driver.findElement(selector).isEnabled();
		
	}
		public boolean elementDisplay(By selector) {
		
		return driver.findElements(selector).size()!=0;
		
	}
	/*
	 	* check whether the insurance type is visible or not, to validate it against cover type
	 */
		public String checkInsuranceVisibilityStatus(String cover) {
			String visibility = "not visible" ;

			if(driver.findElements(Q2Page.QuoteTables).size() >= 1){
			WebElement topPanel = driver.findElement(Q2Page.QuoteTables);
			List<WebElement> CoverCount = topPanel.findElements(By.tagName("h4"));
//			System.out.println("Value of CoverCount is "+CoverCount.size());
			for(int panel = 1; panel<=CoverCount.size(); panel++){
				
//				System.out.println(panel+" Panel Number");
				WebDriverWait wait=new WebDriverWait(driver, 5);
				wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath(Q2Page.PanelBeg+panel+Q2Page.PanelEnd)));	
					if(visibilityStatus(panel, cover)){
					 visibility = "visible";
					}
			}
				
		}else{
			
			if(!cover.equalsIgnoreCase("L5-Big Red Cover")){
			return visibility = "not visible";
			}else{
				return visibility = "visible";
			}
		}
		
		
		return visibility;
	}
		

	/*
	 	* to validate whether the visible or not
	 */
		public boolean visibilityStatus(int panel, String cover){
		return getText(By.xpath(Q2Page.PanelBeg+panel+Q2Page.PanelEnd)).equalsIgnoreCase(cover);
	}
	/*
	 	* Validate whether MostPopular is present or not
	 */
		public boolean mostPopularStatus(By selector){
		WebDriverWait wait=new WebDriverWait(driver, 5);
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(Q2Page.CoverSlickList));	
		WebElement topPanel = driver.findElement(Q2Page.CoverSlickList);
			return topPanel.findElements(selector).size() != 0;
	}
	/*
	 	* To click on next button to enable the insurance to see and click
	 */
		public void selectAndClickNextStepOnCover(String cover) {
				
			if(elementDisplay(Q2Page.QuoteTables)){
				WebElement topPanel = driver.findElement(Q2Page.QuoteTables);
				List<WebElement> CoverCount = topPanel.findElements(By.tagName("h4"));/* Getting Total number of counts */
					WebDriverWait wait ;
					
				//System.out.println("Value of CoverCount is "+CoverCount.size());
				for(int panel = 1; panel<=CoverCount.size(); panel++){
					wait=new WebDriverWait(driver, 5);
					wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath(Q2Page.PanelBeg+panel+Q2Page.PanelEnd)));	
					if(visibilityStatus(panel, cover)){	/*  If insurance type is visible click on the insurance type */
						if(driver.findElement(By.xpath(Q2Page.SelectAndNextStepButtonBeg+panel+Q2Page.SelectButtonEnd)).isDisplayed()){
//							Actions action = new Actions(driver);
//							action.moveToElement(driver.findElement(By.xpath(Q2Page.SelectAndNextStepButtonBeg+panel+Q2Page.SelectAndNextStepButtonEnd))).click().build().perform();
						click(By.xpath(Q2Page.SelectAndNextStepButtonBeg+panel+Q2Page.SelectButtonEnd));
						}
						wait=new WebDriverWait(driver, 5);
						wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath(Q2Page.SelectAndNextStepButtonBeg+panel+Q2Page.NextStepButtonEnd)));
						click(By.xpath(Q2Page.SelectAndNextStepButtonBeg+panel+Q2Page.NextStepButtonEnd));  /*  Come out of the loop after you click on it */
						break;
					}
				}
			}else{
				click(Q2Page.OnlyCoverSelectButton);
			}
		
	}
/*
 		* To get total number of counts of add ons present
 */
		public int checkAddonCountFromframe() {
		int blockCount=0;
		WebDriverWait wait=new WebDriverWait(driver, 5);
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(Q2APage.AddOnPanel));	
		WebElement WebElement =    driver.findElement(Q2APage.AddOnPanel);
        // Create an IList and intialize it with all the elements of div under div with **class as facetContainerDiv**
		List<WebElement> AllCheckBoxes = WebElement.findElements(By.tagName("form"));
        System.out.println(AllCheckBoxes.size());
/*
 * Since all add on panels are similar xpath except counts we are validating by counts
 */
		for(int i=1;i<(AllCheckBoxes.size());i++){
		//	System.out.println(blocks+"1    "+i);
		String premiums = driver.findElement(By.xpath(Q2APage.AddOnPanelBeg+i+Q2APage.AddOnPanelEnd)).getText();
		//System.out.println(premiums+"1    "+i);
			if(premiums.contains("premium")){
				blockCount++;
			}
		}
		//System.out.println("Block Count is "+blockCount);
		return blockCount;
	}
	/*
	 	* Then I validate that "Add Winter Sports Cover" is "visible" and its price "greater than" 0
	 */
		public boolean validateAddOn(String addOn) {
				return driver.findElements(By.id(addOn)).size()>=1;
		}
		public boolean checkAddOnDisplay(By Selector) {
			return driver.findElements(Selector).size()>=1;
		}
/*
 		* To validate whether the premium value is in -ve or +ve to calculate 
 */
		public boolean validateDiscountOrAdditonalPremium(String addOn) {
		boolean status = false;	
		if(driver.findElement(By.xpath("//*[@id='"+addOn+"']/div/div/div[2]/div")).getText().contains("-")){
			status = true;
		}else{
			status = false;
		}
		return status;
	}
	/*
	 	* Getting the Quote value from top, which is just above Next button
	 */
		public Double returnQuoteValue(){
		String QuotePriceBeforeCheck = getText(Q2APage.QuotePriceTop);
		String[] QuotePriceBeforeCheckNumber =QuotePriceBeforeCheck.split("\\$");
		String TotalQuoteAmount = QuotePriceBeforeCheckNumber[1];
			if(QuotePriceBeforeCheckNumber[1].contains(",")){
				String[] QuotePriceBeforeCheckNumberForComma = QuotePriceBeforeCheckNumber[1].split(",");
				TotalQuoteAmount = QuotePriceBeforeCheckNumberForComma[0]+""+QuotePriceBeforeCheckNumberForComma[1];
				System.out.println("Total Quote Amount Without Comma is "+TotalQuoteAmount);
			}
		Double Roundoff = Double.parseDouble(TotalQuoteAmount);
		return Roundoff;
	}
/*
 		* To go back to previous page
 */
		public void goBack() {
		driver.navigate().back();
	}
	/*
	 	* To close the browsers
	 */
		public void closeBrowser() {
		driver.close();
	}
	/*
	 	* To validate the amount on page same as amount expected
	 */
		public boolean verifyTextAmount(By selector, String value) {
		String Value = getText(selector);
		if(Value.contains(Value)){
			return true;
		}else{
			return false;
		}
	}
/*
 		* Getting excess amount from Header	
 */
		public int getExcessAmount(){
	StandardExcess = getText(Q2APage.StandardExcess);
//	System.out.println("StandardExcess"+StandardExcess);
	String[] StandardExcessAmount = StandardExcess.split("\\n");
//	System.out.println(StandardExcessAmount[0]+"1  *******   1");//+StandardExcessAmount[1]+"        "+StandardExcessAmount[2]);
	String[] StandardExcessAmount_1 = StandardExcessAmount[0].split("\\$");
	int Excessamount = Integer.parseInt(StandardExcessAmount_1[1]);
		return Excessamount; 
	}
	/*
	 	* Hardcoding teh user details and differentiated by Time Millsvalues
	 */
		public  void enterCustomerDetails(String age) {
		WebDriverWait wait=new WebDriverWait(driver, 5);
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(Q3Page.MyFirstname));
		if(!age.contains(",")){
			customerAge = Integer.parseInt(age);
			policyHolderDetails(customerAge);
			String dateOfBirth = getDateOfBirth(customerAge);
			clearAndEnterText(Q3Page.Dateofbirth, dateOfBirth);
//			Actions action = new Actions(driver); 
//			action.sendKeys(Keys.DELETE);
//			action.sendKeys(driver.findElement(Q3Page.Dateofbirth), dateOfBirth).build().perform();
		}else if(age.contains(",")){
			String[] ages = age.split(",");
			policyHolderDetails(customerAge);
			for(int customerNum=0;customerNum<ages.length;customerNum++){
				 customerAge = Integer.parseInt(ages[customerNum]);
				 driver.findElement(By.xpath(Q3Page.TitleBeg+customerNum+Q3Page.TitleEnd)).sendKeys("Mr");
				clearAndEnterText(By.xpath(Q3Page.FirstName_Beg+customerNum+Q3Page.TitleEnd), "Anand"+System.currentTimeMillis());
				clearAndEnterText(By.xpath(Q3Page.LastName_Beg+customerNum+Q3Page.TitleEnd), "Jois"+System.currentTimeMillis());
				String dateOfBirth = getDateOfBirth(customerAge);
//				Actions action = new Actions(driver); 
//				action.sendKeys(Keys.DELETE);
//				action.sendKeys(driver.findElement(By.xpath(Q3Page.dateOfBirth_Beg+customerNum+Q3Page.dateOfBirth_End)), dateOfBirth).build().perform();
				clearAndEnterText(Q3Page.Dateofbirth, dateOfBirth);
			}
		}
	}
/*
 		* Entering Policy Holder names	
 */
		public void policyHolderDetails(int customerAge){
		driver.findElement(Q3Page.Title).sendKeys("Mr");
		driver.findElement(Q3Page.MyFirstname).sendKeys("Anand");
		driver.findElement(Q3Page.Lastname).sendKeys("Jois");
		driver.findElement(Q3Page.Address).sendKeys("307, Pitt St");
		driver.findElement(Q3Page.Suburb).sendKeys("Sydney");
		driver.findElement(Q3Page.Postcode).sendKeys("2000");
		driver.findElement(Q3Page.Region).sendKeys("NSW");
		driver.findElement(Q3Page.MobilePhone).sendKeys("0400000000");
		driver.findElement(Q3Page.Email).sendKeys("anand.jois@1cover.com.au");
	}
/*
 		* Getting the date of birth of the user based on the age entered
 */
		private String getDateOfBirth(int customerAge) {
	//	  DateFormat dateFormat = new SimpleDateFormat("dd/MM/yyyy");
		  Date date = new Date();
		  Calendar cal = Calendar.getInstance();
		  cal.setTime(date);
		  int day = cal.get(Calendar.DAY_OF_MONTH);
		  int month=cal.get(Calendar.MONTH);
		  int year=cal.get(Calendar.YEAR);
			int yearOfBirth = year-customerAge;
		//	return day+"/"+month+"/"+yearOfBirth;
				return (day<10?("0"+day):(day))+"/"+(month<10?("0"+month):(month))+"/"+yearOfBirth;
	}
	/*
	 	* Enter the crditcard details
	 */
		public void enterPayment() {
		WebDriverWait wait=new WebDriverWait(driver, 5);
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(Q3Page.CardNumber));
		clearAndEnterText(Q3Page.CardNumber , "4242424242424242");
		chooseMonthFromDropDown();
		chooseYearFromDropDown();
		clearAndEnterText(Q3Page.CardHolderName, "Anand Jois");
		clearAndEnterText(Q3Page.SecurityCode , "111");
	  } 
	/*
	 	* Choose month from Drop down
	 */
	  	public void chooseMonthFromDropDown() {
		//   ElementFinder.waitUntilElementIsVisible(Q3Page_ExpiryMonth);
		   WebElement Q3Page_ExpiryDate = driver.findElement(Q3Page.ExpiryMonth);
		   List<WebElement> Q3Page_Months= Q3Page_ExpiryDate.findElements(Q3Page.OptionTag);
		   Q3Page_Months.get(2).click();;
	  }
	 /*
	  	* Choose year from dropdown 
	  */
	  	public void chooseYearFromDropDown() {
		   WebElement Q3Page_ExpiryDate = driver.findElement(Q3Page.ExpiryYear);
		   List<WebElement> Q3Page_Year= Q3Page_ExpiryDate.findElements(Q3Page.OptionTag);
		   Q3Page_Year.get(2).click();;
	   }
		/*
		 * get the price before clicking the campaing Code
		 */
	  	public void getPriceBeforeCampaign() {
		WebDriverWait wait=new WebDriverWait(driver, 5);
		wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(Q2Page.ProductContainer));	
		WebElement topPanel = driver.findElement(Q2Page.ProductContainer);
		List<WebElement> CoverCount = topPanel.findElements(By.tagName("h4"));
		//System.out.println("Value of CoverCount is "+CoverCount.size());
		PriceBefore = new ArrayList<Double>();
		for(int panel = 1; panel<=CoverCount.size(); panel++){
			
			wait=new WebDriverWait(driver, 5);
			wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath(Q2Page.PanelBeg+panel+Q2Page.PanelEnd)));	
			String PriceValue = getText(By.xpath(Q2Page.PanelBeg+panel+Q2Page.BeforeCampaignPriceLabelEnd));
			String[] JustPrice = PriceValue.split("\\$");
			double Prices = Double.parseDouble(JustPrice[1]);
			PriceBefore.add(Prices);
		}
	}
		/*
		 * Get the price of the covers after click in Campaign Code	
		 */
		public void getPriceAfterCampaign() {
			WebDriverWait wait=new WebDriverWait(driver, 5);
			wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(Q2Page.CoverSlickList));	
			WebElement topPanel = driver.findElement(Q2Page.CoverSlickList);
			List<WebElement> CoverCount = topPanel.findElements(By.tagName("ul"));
			//System.out.println("Value of CoverCount is "+CoverCount.size());
			PriceAfter = new ArrayList<Double>();
			for(int panel = 1; panel<=CoverCount.size(); panel++){
				if(CoverCount.size()>3 && panel>3){
					click(Q2Page.NextButton);
				}
				wait=new WebDriverWait(driver, 5);
				wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath(Q2Page.PanelBeg+panel+Q2Page.PanelEnd)));	
				String PriceValue = getText(By.xpath(Q2Page.PanelBeg+panel+Q2Page.AfterCampaignPriceLabelEnd));
				String[] JustPrice = PriceValue.split("\\$");
				double Prices = Double.parseDouble(JustPrice[1]);
				PriceAfter.add(Prices);
			}
		}
		/*
		 * Get the texts from the frame 
		 */
		public String getTextFromFrame(By agepopup) {
			
			return driver.findElement(agepopup).getText();
		} 
		/*
		 * Get text from frame and selector
		 */
		public String getTextFromFrame(By frame, By selector) {
			WebElement Frame= driver.findElement(frame);
			return Frame.findElement(selector).getText();
		}
		
		public void clickFromFrame(By frame, By selector) {
			WebDriverWait wait=new WebDriverWait(driver, 5);
			wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(frame));	
			WebElement Frame= driver.findElement(frame);
			 Frame.findElement(selector).click();
		}
		
		/*
		 * To click on Frame
		 */
		public void clickfromFrame(By frame, By selector) {
			WebElement Frame= driver.findElement(frame);
			Frame.findElement(selector).click();
		}
		/*
		 * To quit the browser
		 */
		public static void quit() {
		driver.quit();
		}
		/*
		 * To click on add on types
		 */
		public void chooseAddOnType(String coverType) {
			
			if(coverType.equalsIgnoreCase("Winter Sports Cover")){
				while(!getAttribute(Q2APage.WinterCoverCheckBox, "class").equalsIgnoreCase("checkbox checked")){
				click(Q3Page.WinterCoverCheckBox);
				WinterCoverPremiumValue = convertPremium(Q2APage.WinterCoverSportsPremium);
//				System.out.println("Winter Cover Premium Amount is "+WinterCoverPremiumValue);
				refresh();
				}
			}else if(coverType.equalsIgnoreCase("Sports & Activity Cover")){
				while(!getAttribute(Q2APage.SportsNActivityCoverCheckBox, "class").equalsIgnoreCase("checkbox checked")){
				click(Q3Page.SportsNActivityCoverCheckBox);
				SportsCoverPremiumValue = convertPremium(Q2APage.SportsAndActivityCoverPremium);
//				System.out.println("Sports and Activity Cover Premium Amount is "+SportsCoverPremiumValue);
				refresh();
				}
			}else if(coverType.equalsIgnoreCase("Business Cover")){
				while(!getAttribute(Q2APage.BusinessCoverCheckBox, "class").equalsIgnoreCase("checkbox checked")){
				click(Q3Page.BusinessCoverCheckBox);
				BusinessCoverPremiumValue = convertPremium(Q2APage.BusinessCoverPremium);
				//				System.out.println("Business Cover Premium Amount is "+BusinessCoverPremiumValue);
				refresh();
				}
			}else if(coverType.equalsIgnoreCase("Double the Standard Excess")){
				while(!getAttribute(Q2APage.DoubleExcessCoverCheckBox, "class").equalsIgnoreCase("checkbox checked")){
				//Assert.assertTrue("Yet to be implemented", 1==2);
				click(Q3Page.DoubleExcessCoverCheckBox);
				DoubleExcessCoverPremiumValue = convertPremium(Q2APage.DoubleCoverPremium);
//				System.out.println("Double Excess Cover Premium Amount is "+DoubleExcessCoverPremiumValue);
				refresh();
				}
			}else if(coverType.equalsIgnoreCase("High Value Items")){
				clearAndEnterText(Q2APage.HighValueItemBox, "Camera");
				clearAndEnterText(Q2APage.HighValueItemCostBox, "5000");
				click(Q2APage.AddExtraCoverButton);
				
				ExtraItemAmountPremium = convertPremium(Q2APage.AddExtraCoverPremium);
			}
		}
		/*
		 * Get the Premium amount 
		 */
		public Double getPremiumAmount(By selector) {
			
			if(checkAddOnDisplay(selector)){
				String PremiumDetails = getText(selector);
				String[] Amount = PremiumDetails.split("\\$");
				Double Premium = Double.parseDouble(Amount[1]);
				return Premium;
			}else{
				return 0.00;	
			}
			
		}
		public static void ClearBrowserCache() throws InterruptedException{
			driver.manage().deleteAllCookies(); //delete all cookies
			Thread.sleep(5000); //wait 5 seconds to clear cookies.
		}
		/*
		 * Deleting the screesnhots before starting any test execution
		 */
		public static void deleteScreenshots(){
			File file = new File(System.getProperty("user.dir")+"\\screenshots");      
		       String[] myFiles;    
		           
		       if(file.isDirectory()){
		               myFiles = file.list();
		               
		               if((myFiles.length) != 0){
		               for (int i=0; i<myFiles.length; i++) {
		                   File myFile = new File(file, myFiles[i]); 
		                   myFile.delete();
		               }
		           }
		           String[] NewFolder = {System.getProperty("user.dir")+"\\target\\cucumber-html-reports", System.getProperty("user.dir")+"\\target\\cucumber-html-reports\\embeddings"};
		          for(int i = 0;i<NewFolder.length;i++){
		           File folder = new File(NewFolder[i]);
	                File fList[] = folder.listFiles();

	                for (File f : fList) {
	                    if (f.getName().endsWith(".png")) {
	                        f.delete(); 
	                    }}
		          }
		          File folder = new File(System.getProperty("user.dir"));
		          File fList[] = folder.listFiles();
		          for (File f : fList) {
	                    if (f.getName().endsWith(".zip")) {
	                        f.delete(); 
	                    }
	                    
		          }
		      }
		          
		        
		            
		}
		/*
		 * Taking screenshots when the scenario fails
		 */
		public static void takeScreenShot(Scenario scenario) {
			 if (scenario.isFailed()) {
			File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		    try {
		    	  if (scenario.isFailed()) 
				FileUtils.copyFile(scrFile, new File(System.getProperty("user.dir")+"\\screenshots\\"+scenario+".jpg"));
			} catch (IOException e) {
				// TODO Auto-generated catch block
				System.out.println("Check against screenshot "+i);
				e.printStackTrace();
			} finally {
	      //     driver.close();
			}
			 }
		    
		    }
		
		public static void takeScreenShot() {
			 
			File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
		    try {
		    	
		    	FileUtils.copyFile(scrFile, new File(System.getProperty("user.dir")+"\\screenshots\\"+i+".jpg"));
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} finally {
	      //     driver.close();
			}
		    i++;
		}
		
		
		public static void deleteDir(File Reportfile) {
			 File[] contents = Reportfile.listFiles();
			    if (contents != null) {
			        for (File f : contents) {
			            deleteDir(f);
			        }
			    }
			    Reportfile.delete();
		
		}
		
		public Double convertPremium(By Premiums){
			String PremiumValue = getText(Premiums);
			String[] Amount = PremiumValue.split("\\$");
			Double AmountValue = Double.parseDouble(Amount[1]);
			return AmountValue;
		
		}
		
		public String getAttribute(By selector, String attribute){
			return driver.findElement(selector).getAttribute(attribute);
		
		}
		public void selectAnnualPolicy() {
			click(HomePage.MainMenu);
			click(HomePage.TravelInsuranceMenu);
			click(HomePage.AnnualInsurance);
		
		}
		
		
		public void enter_destinationSelected(By selector, String destination) {
			WebDriverWait wait=new WebDriverWait(driver, 5);
			wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(selector));
			click(selector);
			if(destination.contains(",")){
			String[] DestinationNumber = destination.split(",");
			
			for(int count=0;count<DestinationNumber.length;count++){
			driver.findElement(selector).sendKeys(DestinationNumber[count]);
			click(HomePage.DropdDownFirstInput);
			}
			}else{
				driver.findElement(selector).sendKeys(destination);
				click(HomePage.DropdDownFirstInput);
			}
		}
		public void refresh() {
			driver.navigate().refresh();
			
		}
		public String getQuotePriceFromPlanType(String cover) {
			String QuotePrice = null;
			if(elementDisplay(Q2Page.CoverSlickList)){
				WebElement topPanel = driver.findElement(Q2Page.CoverSlickList);
				List<WebElement> CoverCount = topPanel.findElements(By.tagName("ul"));/* Getting Total number of counts */
					WebDriverWait wait ;
					
				//System.out.println("Value of CoverCount is "+CoverCount.size());
				for(int panel = 1; panel<=CoverCount.size(); panel++){
				
					wait=new WebDriverWait(driver, 5);
					wait.until(ExpectedConditions.visibilityOfAllElementsLocatedBy(By.xpath(Q2Page.PanelBeg+panel+Q2Page.PanelEnd)));	
					if(visibilityStatus(panel, cover)){	/*  If insurance type is visible click on the insurance type */
						Actions action = new Actions(driver);
						action.moveToElement(driver.findElement(By.xpath(Q2Page.PanelBeg+panel+Q2Page.PlanQuotePriceEnd))).build().perform();
						QuotePrice = getText(By.xpath(Q2Page.PanelBeg+panel+Q2Page.PlanQuotePriceEnd));
						break;
					}
				}
			}else{
				Assert.assertTrue("No Quote Price ", false);
			}
			return QuotePrice;
		}
		   
}

