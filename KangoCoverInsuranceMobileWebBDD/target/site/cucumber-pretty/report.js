$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("10_AnnualPolicy.feature");
formatter.feature({
  "line": 1,
  "name": "ANNUAL POLICY -",
  "description": "To buy \"Annual 35 days\" from Kango Cover Insurance using an annual Policy\r\nIn order to buy \"Annual 35 days\" Kango Cover travel insurance from Kango Cover Website for an Annual Policy",
  "id": "annual-policy--",
  "keyword": "Feature"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 50308498160,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Buying \"Annual 35 days\" Kango Cover travel insurance as a Multiple travellers who have dependents for annual policy",
  "description": "",
  "id": "annual-policy--;buying-\"annual-35-days\"-kango-cover-travel-insurance-as-a-multiple-travellers-who-have-dependents-for-annual-policy",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@annualformultitravellers"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I select Annual Policy from Travel Insurance",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter \"64\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on GetAQuote",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I select \"Annual 35 days (Excludes Wintersports)\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I validate that standard Excess is \"$100\"",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I select \"Business Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I select \"High Value Items\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter customer details for \"64\" years",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter creditcard details for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I agree to terms and conditions",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.i_select_WorldWide_as_my_destination()"
});
formatter.result({
  "duration": 3063837391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "64",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3567237400,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetAQuote()"
});
formatter.result({
  "duration": 1018120897,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3047393306,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Annual 35 days (Excludes Wintersports)",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 7648086552,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2033594223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100",
      "offset": 36
    }
  ],
  "location": "Q2APage.i_validate_that_standard_Excess_is(String)"
});
formatter.result({
  "duration": 2035862152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5601403832,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sports \u0026 Activity Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5620285951,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double the Standard Excess",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 7624206027,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2536207565,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "High Value Items",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 10171341568,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 2038985707,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 1018960213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "64",
      "offset": 30
    }
  ],
  "location": "Q3Page.enterCustomerDetails(String)"
});
formatter.result({
  "duration": 18267577790,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 14789549640,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 1020551937,
  "status": "passed"
});
formatter.after({
  "duration": 174790,
  "status": "passed"
});
formatter.uri("11_MemberArea.feature");
formatter.feature({
  "line": 1,
  "name": "MEMBERS AREA -",
  "description": "To Validate various Quotes,policies and Details in Member area\r\nIn order to make sure that bought and saved policies are in customer accounts",
  "id": "members-area--",
  "keyword": "Feature"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 1583446026,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "To login to Member area and see the policies bought or saved",
  "description": "",
  "id": "members-area--;to-login-to-member-area-and-see-the-policies-bought-or-saved",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I click on Members login",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter my username as \"anand.jois@1cover.com.au\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter my password as \"anandjn\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I validate that user logged in",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I click on My Policy Tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I validate I have atleast one Policy",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I click on My Quotes Tab",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I validate I have atleast one Quote",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I click on My Details Tab",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I validate I have my Email ID",
  "keyword": "Then "
});
formatter.match({
  "location": "MemberArea.i_click_on_Members_login()"
});
formatter.result({
  "duration": 1020623171,
  "error_message": "org.openqa.selenium.WebDriverException: Element is not currently visible and may not be manipulated (status: 11) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 511 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Anands-iMac\u0027, ip: \u002710.1.1.2\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.11.6\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: io.appium.java_client.ios.IOSDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, orientation\u003d, databaseEnabled\u003dfalse, deviceName\u003diPhone 6 Plus, fullReset\u003dtrue, platform\u003dMAC, showIOSLog\u003dtrue, nativeInstrumentsLib\u003dtrue, desired\u003d{showIOSLog\u003dtrue, orientation\u003d, nativeInstrumentsLib\u003dtrue, platformVersion\u003d9.3, browserName\u003dsafari, platformName\u003diOS, deviceName\u003diPhone 6 Plus, fullReset\u003dtrue}, platformVersion\u003d9.3, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, browserName\u003dsafari, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003diOS}]\nSession ID: 6b2d2c73-8abe-4af2-89bd-99ee9067a857\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:40)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.ios.IOSDriver.execute(IOSDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:327)\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:33)\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\n\tat io.appium.java_client.ios.IOSElement.execute(IOSElement.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:85)\n\tat com.kangocovermobileweb.utilities.WebConnector.click(WebConnector.java:243)\n\tat com.kangocovermobileweb.scenarios.MemberArea.i_click_on_Members_login(MemberArea.java:31)\n\tat ✽.When I click on Members login(11_MemberArea.feature:10)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "anand.jois@1cover.com.au",
      "offset": 24
    }
  ],
  "location": "MemberArea.i_enter_my_username_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "anandjn",
      "offset": 24
    }
  ],
  "location": "MemberArea.i_enter_my_password_as(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MemberArea.i_click_on_Login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MemberArea.i_validate_that_user_logged_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MemberArea.i_click_on_My_Policy_Tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MemberArea.i_validate_I_have_atleast_one_Policy()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MemberArea.i_click_on_My_Quotes_Tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MemberArea.i_validate_I_have_atleast_one_Quote()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MemberArea.i_click_on_My_Details_Tab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MemberArea.i_validate_I_have_my_Email_ID()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 12865099919,
  "status": "passed"
});
formatter.uri("12_HighValueItems.feature");
formatter.feature({
  "line": 1,
  "name": "HIGH VALUE ITEMS -",
  "description": "To Buy Verify that High Value Items Premium Prices change for every $1000 when tried to buy a policy from Rock Wallaby Cover Insurance",
  "id": "high-value-items--",
  "keyword": "Feature"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 1075218623,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "To verify Premium Price increase for every $1000 for high value Items",
  "description": "",
  "id": "high-value-items--;to-verify-premium-price-increase-for-every-$1000-for-high-value-items",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@highvalueitemsvalidation"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter \"India\" as my destination",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter my Return Dates as \"30\" days from today",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"45\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on GetQuote",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I select \"L2-Rock Wallaby Cover\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I validate that standard Excess is \"$150\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I select \"Winter Sports Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I select High Value Items Addon as $\"1000\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I validate that the amount is  $\"40\"",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I select High Value Items Addon as $\"1000\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I validate that the amount is  $\"80\"",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I select High Value Items Addon as $\"1000\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I validate that the amount is  $\"120\"",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I select High Value Items Addon as $\"1000\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I validate that the amount is  $\"160\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I select High Value Items Addon as $\"1000\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I validate that the amount is  $\"200\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.myDestinationasSelected(String)"
});
formatter.result({
  "duration": 4576594233,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 28
    }
  ],
  "location": "HomePage.returnDate(int)"
});
formatter.result({
  "duration": 24422466062,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3559433225,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 3083866520,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3038793716,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L2-Rock Wallaby Cover",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 17801306117,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2030463073,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$150",
      "offset": 36
    }
  ],
  "location": "Q2APage.i_validate_that_standard_Excess_is(String)"
});
formatter.result({
  "duration": 2036331289,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double the Standard Excess",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 7627612300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Winter Sports Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5587796987,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sports \u0026 Activity Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5588626182,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2538853864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 37
    }
  ],
  "location": "HighValueItems.i_select_High_Value_Items_Addon_as_$(String)"
});
formatter.result({
  "duration": 8142053213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 33
    }
  ],
  "location": "HighValueItems.I_Validate_that_the_Amount(String)"
});
formatter.result({
  "duration": 111993,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 37
    }
  ],
  "location": "HighValueItems.i_select_High_Value_Items_Addon_as_$(String)"
});
formatter.result({
  "duration": 8114617116,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "80",
      "offset": 33
    }
  ],
  "location": "HighValueItems.I_Validate_that_the_Amount(String)"
});
formatter.result({
  "duration": 82915,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 37
    }
  ],
  "location": "HighValueItems.i_select_High_Value_Items_Addon_as_$(String)"
});
formatter.result({
  "duration": 8119266139,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "120",
      "offset": 33
    }
  ],
  "location": "HighValueItems.I_Validate_that_the_Amount(String)"
});
formatter.result({
  "duration": 127519,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 37
    }
  ],
  "location": "HighValueItems.i_select_High_Value_Items_Addon_as_$(String)"
});
formatter.result({
  "duration": 8127544110,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "160",
      "offset": 33
    }
  ],
  "location": "HighValueItems.I_Validate_that_the_Amount(String)"
});
formatter.result({
  "duration": 93453,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 37
    }
  ],
  "location": "HighValueItems.i_select_High_Value_Items_Addon_as_$(String)"
});
formatter.result({
  "duration": 8132985726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 33
    }
  ],
  "location": "HighValueItems.I_Validate_that_the_Amount(String)"
});
formatter.result({
  "duration": 85102,
  "status": "passed"
});
formatter.after({
  "duration": 95980,
  "status": "passed"
});
formatter.uri("1_ValidateAddOns.feature");
formatter.feature({
  "line": 1,
  "name": "ADD ONS VALIDATION -",
  "description": "To validate \"Joey Cover\" \"Rock Wallaby Cover\" \"Wallaby Cover\" \"Eastern Grey Cover\"\r\n\"Big Red Cover\" Insurance and their Options are visible\r\n\r\nIn order to validate These Insurance Covers from kangoCover Website as a customer I want to \r\ngo through each pages to validate Options for various age group and Duration",
  "id": "add-ons-validation--",
  "keyword": "Feature"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 1118429109,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify that Products \"Joey Cover\" \"Rock Wallaby Cover\" \"Wallaby Cover\" \"Eastern Grey Cover\"",
  "description": "\"Big Red Cover\" and their options are visible for traveller who is 45 years old",
  "id": "add-ons-validation--;verify-that-products-\"joey-cover\"-\"rock-wallaby-cover\"-\"wallaby-cover\"-\"eastern-grey-cover\"",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@validateaddons"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I enter \"India\" as my destination",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I enter my Return Dates as \"363\" days from today",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \"45\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on GetQuote",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I validate that atleast one product should be selected by default which has a tag as most popular",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I validate \"L2-Rock Wallaby Cover\" option is \"visible\" on Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I validate \"L3-Wallaby Cover\" option is \"visible\" on Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I validate \"L4-Eastern Grey Cover\" option is \"visible\" on Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I validate \"L5-Big Red Cover\" option is \"visible\" on Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I validate \"L1-Joey Cover\" option is \"visible\" on Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I select \"L1-Joey Cover\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I validate that \"Add Winter Sports Cover-Form_Mod_Anc_WinSpoCov\" is \"visible\" and its price \"greater than\" zero",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I validate that \"Add Sports \u0026 Activities Cover-Form_Mod_Anc_SpoActCov\" is \"visible\" and its price \"greater than\" zero",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I validate that \"Double The Excess And Save-Form_Mod_Anc_DouExc\" is \"visible\" and its price \"less than\" zero",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "I validate that \"Add Business Cover-Form_Mod_Anc_BusCov\" is \"not visible\" and its price \"is not considered\" zero",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I validate that \"Add high value items\" is \"not present\"",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I go back to Q2 Page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select \"L2-Rock Wallaby Cover\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I validate that \"Add Winter Sports Cover-Form_Mod_Anc_WinSpoCov\" is \"visible\" and its price \"greater than\" zero",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "I validate that \"Add Sports \u0026 Activities Cover-Form_Mod_Anc_SpoActCov\" is \"visible\" and its price \"greater than\" zero",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I validate that \"Add high value items\" is \"present\"",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I validate that \"Double The Excess And Save-Form_Mod_Anc_DouExc\" is \"visible\" and its price \"less than\" zero",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I validate that \"Add Business Cover-Form_Mod_Anc_BusCov\" is \"not visible\" and its price \"is not considered\" zero",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I go back to Q2 Page",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I select \"L3-Wallaby Cover\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I validate that \"Add Business Cover-Form_Mod_Anc_BusCov\" is \"not visible\" and its price \"is not considered\" zero",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I validate that \"Add Winter Sports Cover-Form_Mod_Anc_WinSpoCov\" is \"visible\" and its price \"greater than\" zero",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I validate that \"Add Sports \u0026 Activities Cover-Form_Mod_Anc_SpoActCov\" is \"visible\" and its price \"greater than\" zero",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I validate that \"Add high value items\" is \"present\"",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "I validate that \"Double The Excess And Save-Form_Mod_Anc_DouExc\" is \"visible\" and its price \"less than\" zero",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "I go back to Q2 Page",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "I select \"L4-Eastern Grey Cover\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "I validate that \"Add Winter Sports Cover-Form_Mod_Anc_WinSpoCov\" is \"visible\" and its price \"greater than\" zero",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I validate that \"Add Sports \u0026 Activities Cover-Form_Mod_Anc_SpoActCov\" is \"visible\" and its price \"greater than\" zero",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "I validate that \"Add high value items\" is \"present\"",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "I validate that \"Add Business Cover-Form_Mod_Anc_BusCov\" is \"visible\" and its price \"greater than\" zero",
  "keyword": "Then "
});
formatter.step({
  "line": 57,
  "name": "I validate that \"Double The Excess And Save-Form_Mod_Anc_DouExc\" is \"visible\" and its price \"less than\" zero",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "I go back to Q2 Page",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I select \"L5-Big Red Cover\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "I validate that \"Add Winter Sports Cover-Form_Mod_Anc_WinSpoCov\" is \"visible\" and its price \"greater than\" zero",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "I validate that \"Add Sports \u0026 Activities Cover-Form_Mod_Anc_SpoActCov\" is \"visible\" and its price \"greater than\" zero",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "I validate that \"Add high value items\" is \"present\"",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "I validate that \"Add Business Cover-Form_Mod_Anc_BusCov\" is \"visible\" and its price \"greater than\" zero",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "I validate that \"Double The Excess And Save-Form_Mod_Anc_DouExc\" is \"visible\" and its price \"less than\" zero",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.myDestinationasSelected(String)"
});
formatter.result({
  "duration": 4570997124,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "363",
      "offset": 28
    }
  ],
  "location": "HomePage.returnDate(int)"
});
formatter.result({
  "duration": 51841984282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3549644214,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 3041617841,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3066870548,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_that_atleast_one_product_should_be_selected_by_default_which_has_a_tag_as_most_popular()"
});
formatter.result({
  "duration": 4057720219,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L2-Rock Wallaby Cover",
      "offset": 12
    },
    {
      "val": "visible",
      "offset": 46
    }
  ],
  "location": "Q2Page.i_validate_option_is_on_Q_Page(String,String)"
});
formatter.result({
  "duration": 16756525983,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L3-Wallaby Cover",
      "offset": 12
    },
    {
      "val": "visible",
      "offset": 41
    }
  ],
  "location": "Q2Page.i_validate_option_is_on_Q_Page(String,String)"
});
formatter.result({
  "duration": 16765498836,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L4-Eastern Grey Cover",
      "offset": 12
    },
    {
      "val": "visible",
      "offset": 46
    }
  ],
  "location": "Q2Page.i_validate_option_is_on_Q_Page(String,String)"
});
formatter.result({
  "duration": 16761976450,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L5-Big Red Cover",
      "offset": 12
    },
    {
      "val": "visible",
      "offset": 41
    }
  ],
  "location": "Q2Page.i_validate_option_is_on_Q_Page(String,String)"
});
formatter.result({
  "duration": 16789590441,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L1-Joey Cover",
      "offset": 12
    },
    {
      "val": "visible",
      "offset": 38
    }
  ],
  "location": "Q2Page.i_validate_option_is_on_Q_Page(String,String)"
});
formatter.result({
  "duration": 16758104271,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L1-Joey Cover",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 20824990119,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2038379172,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Winter Sports Cover-Form_Mod_Anc_WinSpoCov",
      "offset": 17
    },
    {
      "val": "visible",
      "offset": 69
    },
    {
      "val": "greater than",
      "offset": 93
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 1524656689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Sports \u0026 Activities Cover-Form_Mod_Anc_SpoActCov",
      "offset": 17
    },
    {
      "val": "visible",
      "offset": 75
    },
    {
      "val": "greater than",
      "offset": 99
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 1527221061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double The Excess And Save-Form_Mod_Anc_DouExc",
      "offset": 17
    },
    {
      "val": "visible",
      "offset": 69
    },
    {
      "val": "less than",
      "offset": 93
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 1525275008,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Business Cover-Form_Mod_Anc_BusCov",
      "offset": 17
    },
    {
      "val": "not visible",
      "offset": 61
    },
    {
      "val": "is not considered",
      "offset": 89
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 510799856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add high value items",
      "offset": 17
    },
    {
      "val": "not present",
      "offset": 43
    }
  ],
  "location": "Q2APage.i_validate_that_is_not_present(String,String)"
});
formatter.result({
  "duration": 506708408,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.I_go_back_to_Q2_Page()"
});
formatter.result({
  "duration": 6610185885,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L2-Rock Wallaby Cover",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 17783961530,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2033052168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Winter Sports Cover-Form_Mod_Anc_WinSpoCov",
      "offset": 17
    },
    {
      "val": "visible",
      "offset": 69
    },
    {
      "val": "greater than",
      "offset": 93
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 1520651464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Sports \u0026 Activities Cover-Form_Mod_Anc_SpoActCov",
      "offset": 17
    },
    {
      "val": "visible",
      "offset": 75
    },
    {
      "val": "greater than",
      "offset": 99
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 1522198538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add high value items",
      "offset": 17
    },
    {
      "val": "present",
      "offset": 43
    }
  ],
  "location": "Q2APage.i_validate_that_is_not_present(String,String)"
});
formatter.result({
  "duration": 2037456335,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double The Excess And Save-Form_Mod_Anc_DouExc",
      "offset": 17
    },
    {
      "val": "visible",
      "offset": 69
    },
    {
      "val": "less than",
      "offset": 93
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 1516420850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Business Cover-Form_Mod_Anc_BusCov",
      "offset": 17
    },
    {
      "val": "not visible",
      "offset": 61
    },
    {
      "val": "is not considered",
      "offset": 89
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 507676179,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.I_go_back_to_Q2_Page()"
});
formatter.result({
  "duration": 6588194584,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L3-Wallaby Cover",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 14760794143,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2049368690,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Business Cover-Form_Mod_Anc_BusCov",
      "offset": 17
    },
    {
      "val": "not visible",
      "offset": 61
    },
    {
      "val": "is not considered",
      "offset": 89
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 505905793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Winter Sports Cover-Form_Mod_Anc_WinSpoCov",
      "offset": 17
    },
    {
      "val": "visible",
      "offset": 69
    },
    {
      "val": "greater than",
      "offset": 93
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 1524729555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Sports \u0026 Activities Cover-Form_Mod_Anc_SpoActCov",
      "offset": 17
    },
    {
      "val": "visible",
      "offset": 75
    },
    {
      "val": "greater than",
      "offset": 99
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 1537539980,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add high value items",
      "offset": 17
    },
    {
      "val": "present",
      "offset": 43
    }
  ],
  "location": "Q2APage.i_validate_that_is_not_present(String,String)"
});
formatter.result({
  "duration": 2039650136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double The Excess And Save-Form_Mod_Anc_DouExc",
      "offset": 17
    },
    {
      "val": "visible",
      "offset": 69
    },
    {
      "val": "less than",
      "offset": 93
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 1535861348,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.I_go_back_to_Q2_Page()"
});
formatter.result({
  "duration": 6640838689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L4-Eastern Grey Cover",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 11756341649,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2043144331,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Winter Sports Cover-Form_Mod_Anc_WinSpoCov",
      "offset": 17
    },
    {
      "val": "visible",
      "offset": 69
    },
    {
      "val": "greater than",
      "offset": 93
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 1522780991,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Sports \u0026 Activities Cover-Form_Mod_Anc_SpoActCov",
      "offset": 17
    },
    {
      "val": "visible",
      "offset": 75
    },
    {
      "val": "greater than",
      "offset": 99
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 1533367193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add high value items",
      "offset": 17
    },
    {
      "val": "present",
      "offset": 43
    }
  ],
  "location": "Q2APage.i_validate_that_is_not_present(String,String)"
});
formatter.result({
  "duration": 2049275618,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Business Cover-Form_Mod_Anc_BusCov",
      "offset": 17
    },
    {
      "val": "visible",
      "offset": 61
    },
    {
      "val": "greater than",
      "offset": 85
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 1538210379,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double The Excess And Save-Form_Mod_Anc_DouExc",
      "offset": 17
    },
    {
      "val": "visible",
      "offset": 69
    },
    {
      "val": "less than",
      "offset": 93
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 1540289361,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.I_go_back_to_Q2_Page()"
});
formatter.result({
  "duration": 6649455554,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L5-Big Red Cover",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 8665969421,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2044384652,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Winter Sports Cover-Form_Mod_Anc_WinSpoCov",
      "offset": 17
    },
    {
      "val": "visible",
      "offset": 69
    },
    {
      "val": "greater than",
      "offset": 93
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 1537951540,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Sports \u0026 Activities Cover-Form_Mod_Anc_SpoActCov",
      "offset": 17
    },
    {
      "val": "visible",
      "offset": 75
    },
    {
      "val": "greater than",
      "offset": 99
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 1549466564,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add high value items",
      "offset": 17
    },
    {
      "val": "present",
      "offset": 43
    }
  ],
  "location": "Q2APage.i_validate_that_is_not_present(String,String)"
});
formatter.result({
  "duration": 2049441608,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Business Cover-Form_Mod_Anc_BusCov",
      "offset": 17
    },
    {
      "val": "visible",
      "offset": 61
    },
    {
      "val": "greater than",
      "offset": 85
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 1528330148,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double The Excess And Save-Form_Mod_Anc_DouExc",
      "offset": 17
    },
    {
      "val": "visible",
      "offset": 69
    },
    {
      "val": "less than",
      "offset": 93
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 1532806231,
  "status": "passed"
});
formatter.after({
  "duration": 84712,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 1586496020,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "Verify that Products \"Joey Cover\" \"Eastern Grey Cover\" \"Big Red Cover\"",
  "description": "and their options are visible for traveller who is 64 years old",
  "id": "add-ons-validation--;verify-that-products-\"joey-cover\"-\"eastern-grey-cover\"-\"big-red-cover\"",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 67,
      "name": "@verifyproductsfor64age"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "I enter \"India\" as my destination",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "I enter my Return Dates as \"363\" days from today",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I enter \"64\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "I click on GetQuote",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "I validate \"L1-Joey Cover\" option is \"visible\" on Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "I validate \"L2-Rock Wallaby Cover\" option is \"not visible\" on Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "I validate \"L3-Wallaby Cover\" option is \"not visible\" on Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "I validate \"L4-Eastern Grey Cover\" option is \"visible\" on Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "I validate \"L5-Big Red Cover\" option is \"visible\" on Q2 Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.myDestinationasSelected(String)"
});
formatter.result({
  "duration": 4602365433,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "363",
      "offset": 28
    }
  ],
  "location": "HomePage.returnDate(int)"
});
formatter.result({
  "duration": 52128442152,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "64",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3615981052,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 3064626763,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3071669607,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L1-Joey Cover",
      "offset": 12
    },
    {
      "val": "visible",
      "offset": 38
    }
  ],
  "location": "Q2Page.i_validate_option_is_on_Q_Page(String,String)"
});
formatter.result({
  "duration": 10750699485,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L2-Rock Wallaby Cover",
      "offset": 12
    },
    {
      "val": "not visible",
      "offset": 46
    }
  ],
  "location": "Q2Page.i_validate_option_is_on_Q_Page(String,String)"
});
formatter.result({
  "duration": 10746518563,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L3-Wallaby Cover",
      "offset": 12
    },
    {
      "val": "not visible",
      "offset": 41
    }
  ],
  "location": "Q2Page.i_validate_option_is_on_Q_Page(String,String)"
});
formatter.result({
  "duration": 10733511035,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L4-Eastern Grey Cover",
      "offset": 12
    },
    {
      "val": "visible",
      "offset": 46
    }
  ],
  "location": "Q2Page.i_validate_option_is_on_Q_Page(String,String)"
});
formatter.result({
  "duration": 10734593456,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L5-Big Red Cover",
      "offset": 12
    },
    {
      "val": "visible",
      "offset": 41
    }
  ],
  "location": "Q2Page.i_validate_option_is_on_Q_Page(String,String)"
});
formatter.result({
  "duration": 10755701343,
  "status": "passed"
});
formatter.after({
  "duration": 77130,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 1603039004,
  "status": "passed"
});
formatter.scenario({
  "line": 83,
  "name": "Verify that Product \"Big Red Cover\" and its options are visible",
  "description": "for traveller who is 65 years old",
  "id": "add-ons-validation--;verify-that-product-\"big-red-cover\"-and-its-options-are-visible",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 82,
      "name": "@verifyproductsfor65age"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "I enter \"India\" as my destination",
  "keyword": "When "
});
formatter.step({
  "line": 87,
  "name": "I enter my Return Dates as \"363\" days from today",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "I enter \"65\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "I click on GetQuote",
  "keyword": "And "
});
formatter.step({
  "line": 90,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 91,
  "name": "I validate \"L1-Joey Cover\" option is \"not visible\" on Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 92,
  "name": "I validate \"L2-Rock Wallaby Cover\" option is \"not visible\" on Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 93,
  "name": "I validate \"L3-Wallaby Cover\" option is \"not visible\" on Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 94,
  "name": "I validate \"L4-Eastern Grey Cover\" option is \"not visible\" on Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "I validate \"L5-Big Red Cover\" option is \"visible\" on Q2 Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.myDestinationasSelected(String)"
});
formatter.result({
  "duration": 4596294252,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "363",
      "offset": 28
    }
  ],
  "location": "HomePage.returnDate(int)"
});
formatter.result({
  "duration": 52185922425,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "65",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3565657025,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 3063956888,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 2038899611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L1-Joey Cover",
      "offset": 12
    },
    {
      "val": "not visible",
      "offset": 38
    }
  ],
  "location": "Q2Page.i_validate_option_is_on_Q_Page(String,String)"
});
formatter.result({
  "duration": 4600064689,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L2-Rock Wallaby Cover",
      "offset": 12
    },
    {
      "val": "not visible",
      "offset": 46
    }
  ],
  "location": "Q2Page.i_validate_option_is_on_Q_Page(String,String)"
});
formatter.result({
  "duration": 4598422436,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L3-Wallaby Cover",
      "offset": 12
    },
    {
      "val": "not visible",
      "offset": 41
    }
  ],
  "location": "Q2Page.i_validate_option_is_on_Q_Page(String,String)"
});
formatter.result({
  "duration": 4609622579,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L4-Eastern Grey Cover",
      "offset": 12
    },
    {
      "val": "not visible",
      "offset": 46
    }
  ],
  "location": "Q2Page.i_validate_option_is_on_Q_Page(String,String)"
});
formatter.result({
  "duration": 4595166298,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L5-Big Red Cover",
      "offset": 12
    },
    {
      "val": "visible",
      "offset": 41
    }
  ],
  "location": "Q2Page.i_validate_option_is_on_Q_Page(String,String)"
});
formatter.result({
  "duration": 4586744262,
  "status": "passed"
});
formatter.after({
  "duration": 72035,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 1067516803,
  "status": "passed"
});
formatter.scenario({
  "line": 98,
  "name": "Verify that No Product and their options are visible for traveller who is 70 years old",
  "description": "",
  "id": "add-ons-validation--;verify-that-no-product-and-their-options-are-visible-for-traveller-who-is-70-years-old",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 97,
      "name": "@verify70age"
    }
  ]
});
formatter.step({
  "line": 99,
  "name": "I enter \"India\" as my destination",
  "keyword": "When "
});
formatter.step({
  "line": 100,
  "name": "I enter my Return Dates as \"363\" days from today",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "I enter \"70\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 102,
  "name": "I click on GetQuote",
  "keyword": "And "
});
formatter.step({
  "line": 103,
  "name": "I validate \"Travellers over the age of 69 are not eligible for this product and have not been included in this quote.\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.myDestinationasSelected(String)"
});
formatter.result({
  "duration": 4593216526,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "363",
      "offset": 28
    }
  ],
  "location": "HomePage.returnDate(int)"
});
formatter.result({
  "duration": 52119213030,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "70",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3558677430,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 3071319730,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Travellers over the age of 69 are not eligible for this product and have not been included in this quote.",
      "offset": 12
    }
  ],
  "location": "HomePage.i_validate(String)"
});
formatter.result({
  "duration": 1022900129,
  "status": "passed"
});
formatter.after({
  "duration": 62361,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 1625708583,
  "status": "passed"
});
formatter.scenario({
  "line": 106,
  "name": "To validate that group travel Insurance is not applicable for Kango Cover Users",
  "description": "",
  "id": "add-ons-validation--;to-validate-that-group-travel-insurance-is-not-applicable-for-kango-cover-users",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 105,
      "name": "@grouptravellersvalidation"
    }
  ]
});
formatter.step({
  "line": 108,
  "name": "I enter \"India\" as my destination",
  "keyword": "When "
});
formatter.step({
  "line": 109,
  "name": "I enter my Return Dates as \"30\" days from today",
  "keyword": "And "
});
formatter.step({
  "line": 110,
  "name": "I enter \"21,22,24\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 111,
  "name": "I click on GetQuote",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.myDestinationasSelected(String)"
});
formatter.result({
  "duration": 4608600471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 28
    }
  ],
  "location": "HomePage.returnDate(int)"
});
formatter.result({
  "duration": 24528809236,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21,22,24",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3566647914,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 3060101414,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3055892585,
  "status": "passed"
});
formatter.after({
  "duration": 64665,
  "status": "passed"
});
formatter.uri("1_ValidateAddOns_Annual.feature");
formatter.feature({
  "line": 1,
  "name": "ANNUAL POLICY ADD ONS VALIDATION -",
  "description": "To validate \"Annual 35 days (Excludes Wintersports)\" \"Annual 35 days (Includes Wintersports)\" \"Annual 60 days (Excludes Wintersports)\" \r\n\"Annual 60 days (Includes Wintersports)\" Insurance and their Options are visible\r\n\r\nIn order to validate These Annual Insurance Covers from kangoCover Website as a customer I want to \r\ngo through each pages to validate Options for various age group and Duration",
  "id": "annual-policy-add-ons-validation--",
  "keyword": "Feature"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 1557519052,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify that Products \"Annual 35 days (Excludes Wintersports)\" \"Annual 35 days (Includes Wintersports)\" \"Annual 60 days (Excludes Wintersports)\"",
  "description": "\"Annual 60 days (Includes Wintersports)\"  and their options are visible for traveller who is 45 years old",
  "id": "annual-policy-add-ons-validation--;verify-that-products-\"annual-35-days-(excludes-wintersports)\"-\"annual-35-days-(includes-wintersports)\"-\"annual-60-days-(excludes-wintersports)\"",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@validateaddsonsannual"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I select Annual Travel Insurance",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter \"45\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on GetAQuote",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I validate that atleast one product should be selected by default which has a tag as most popular",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I validate \"Annual 35 days (Excludes Wintersports)\" option is \"visible\" on Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I validate \"Annual 35 days (Includes Wintersports)\" option is \"visible\" on Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I validate \"Annual 60 days (Excludes Wintersports)\" option is \"visible\" on Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I validate \"Annual 60 days (Includes Wintersports)\" option is \"visible\" on Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "I select \"Annual 35 days (Excludes Wintersports)\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I validate that \"Add Sports \u0026 Activities Cover-Form_Mod_Anc_SpoActCov\" is \"visible\" and its price \"greater than\" zero",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I validate that \"Double The Excess And Save-Form_Mod_Anc_DouExc\" is \"visible\" and its price \"less than\" zero",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I validate that \"Add Business Cover-Form_Mod_Anc_BusCov\" is \"visible\" and its price \"is not considered\" zero",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I validate that \"Add high value items\" is \"present\"",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I go back to Q2 Page",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I select \"Annual 35 days (Includes Wintersports)\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I validate that \"Add Sports \u0026 Activities Cover-Form_Mod_Anc_SpoActCov\" is \"visible\" and its price \"greater than\" zero",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I validate that \"Add high value items\" is \"present\"",
  "keyword": "Then "
});
formatter.step({
  "line": 35,
  "name": "I validate that \"Double The Excess And Save-Form_Mod_Anc_DouExc\" is \"visible\" and its price \"less than\" zero",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "I validate that \"Add Business Cover-Form_Mod_Anc_BusCov\" is \"visible\" and its price \"is not considered\" zero",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "I go back to Q2 Page",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I select \"Annual 60 days (Excludes Wintersports)\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "I validate that \"Add Business Cover-Form_Mod_Anc_BusCov\" is \"visible\" and its price \"is not considered\" zero",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I validate that \"Add Sports \u0026 Activities Cover-Form_Mod_Anc_SpoActCov\" is \"visible\" and its price \"greater than\" zero",
  "keyword": "Then "
});
formatter.step({
  "line": 42,
  "name": "I validate that \"Add high value items\" is \"present\"",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I validate that \"Double The Excess And Save-Form_Mod_Anc_DouExc\" is \"visible\" and its price \"less than\" zero",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "I go back to Q2 Page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I select \"Annual 60 days (Includes Wintersports)\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I validate that \"Add Sports \u0026 Activities Cover-Form_Mod_Anc_SpoActCov\" is \"visible\" and its price \"greater than\" zero",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I validate that \"Add high value items\" is \"present\"",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "I validate that \"Add Business Cover-Form_Mod_Anc_BusCov\" is \"visible\" and its price \"greater than\" zero",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "I validate that \"Double The Excess And Save-Form_Mod_Anc_DouExc\" is \"visible\" and its price \"less than\" zero",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage.i_select_Annual_Travel_Insurance()"
});
formatter.result({
  "duration": 3074040069,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3575352117,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetAQuote()"
});
formatter.result({
  "duration": 1019496027,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3072277534,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_that_atleast_one_product_should_be_selected_by_default_which_has_a_tag_as_most_popular()"
});
formatter.result({
  "duration": 3569911392,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Annual 35 days (Excludes Wintersports)",
      "offset": 12
    },
    {
      "val": "visible",
      "offset": 63
    }
  ],
  "location": "Q2Page.i_validate_option_is_on_Q_Page(String,String)"
});
formatter.result({
  "duration": 13850924054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Annual 35 days (Includes Wintersports)",
      "offset": 12
    },
    {
      "val": "visible",
      "offset": 63
    }
  ],
  "location": "Q2Page.i_validate_option_is_on_Q_Page(String,String)"
});
formatter.result({
  "duration": 13798276471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Annual 60 days (Excludes Wintersports)",
      "offset": 12
    },
    {
      "val": "visible",
      "offset": 63
    }
  ],
  "location": "Q2Page.i_validate_option_is_on_Q_Page(String,String)"
});
formatter.result({
  "duration": 13781751212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Annual 60 days (Includes Wintersports)",
      "offset": 12
    },
    {
      "val": "visible",
      "offset": 63
    }
  ],
  "location": "Q2Page.i_validate_option_is_on_Q_Page(String,String)"
});
formatter.result({
  "duration": 13765853325,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Annual 35 days (Excludes Wintersports)",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 7652323902,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2039714301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Sports \u0026 Activities Cover-Form_Mod_Anc_SpoActCov",
      "offset": 17
    },
    {
      "val": "visible",
      "offset": 75
    },
    {
      "val": "greater than",
      "offset": 99
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 1525198718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double The Excess And Save-Form_Mod_Anc_DouExc",
      "offset": 17
    },
    {
      "val": "visible",
      "offset": 69
    },
    {
      "val": "less than",
      "offset": 93
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 1532852387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Business Cover-Form_Mod_Anc_BusCov",
      "offset": 17
    },
    {
      "val": "visible",
      "offset": 61
    },
    {
      "val": "is not considered",
      "offset": 85
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 509691778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add high value items",
      "offset": 17
    },
    {
      "val": "present",
      "offset": 43
    }
  ],
  "location": "Q2APage.i_validate_that_is_not_present(String,String)"
});
formatter.result({
  "duration": 2046145763,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.I_go_back_to_Q2_Page()"
});
formatter.result({
  "duration": 6133548768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Annual 35 days (Includes Wintersports)",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 14809260949,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2048912747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Sports \u0026 Activities Cover-Form_Mod_Anc_SpoActCov",
      "offset": 17
    },
    {
      "val": "visible",
      "offset": 75
    },
    {
      "val": "greater than",
      "offset": 99
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 1538075680,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add high value items",
      "offset": 17
    },
    {
      "val": "present",
      "offset": 43
    }
  ],
  "location": "Q2APage.i_validate_that_is_not_present(String,String)"
});
formatter.result({
  "duration": 2036038282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double The Excess And Save-Form_Mod_Anc_DouExc",
      "offset": 17
    },
    {
      "val": "visible",
      "offset": 69
    },
    {
      "val": "less than",
      "offset": 93
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 1532846867,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Business Cover-Form_Mod_Anc_BusCov",
      "offset": 17
    },
    {
      "val": "visible",
      "offset": 61
    },
    {
      "val": "is not considered",
      "offset": 85
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 506265963,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.I_go_back_to_Q2_Page()"
});
formatter.result({
  "duration": 6148643435,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Annual 60 days (Excludes Wintersports)",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 17901139606,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2046735649,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Business Cover-Form_Mod_Anc_BusCov",
      "offset": 17
    },
    {
      "val": "visible",
      "offset": 61
    },
    {
      "val": "is not considered",
      "offset": 85
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 514652795,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Sports \u0026 Activities Cover-Form_Mod_Anc_SpoActCov",
      "offset": 17
    },
    {
      "val": "visible",
      "offset": 75
    },
    {
      "val": "greater than",
      "offset": 99
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 1536824918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add high value items",
      "offset": 17
    },
    {
      "val": "present",
      "offset": 43
    }
  ],
  "location": "Q2APage.i_validate_that_is_not_present(String,String)"
});
formatter.result({
  "duration": 2041589538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double The Excess And Save-Form_Mod_Anc_DouExc",
      "offset": 17
    },
    {
      "val": "visible",
      "offset": 69
    },
    {
      "val": "less than",
      "offset": 93
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 1533485709,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.I_go_back_to_Q2_Page()"
});
formatter.result({
  "duration": 6158648133,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Annual 60 days (Includes Wintersports)",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 11749592123,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2043180550,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Sports \u0026 Activities Cover-Form_Mod_Anc_SpoActCov",
      "offset": 17
    },
    {
      "val": "visible",
      "offset": 75
    },
    {
      "val": "greater than",
      "offset": 99
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 1530999643,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add high value items",
      "offset": 17
    },
    {
      "val": "present",
      "offset": 43
    }
  ],
  "location": "Q2APage.i_validate_that_is_not_present(String,String)"
});
formatter.result({
  "duration": 2045934211,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Add Business Cover-Form_Mod_Anc_BusCov",
      "offset": 17
    },
    {
      "val": "visible",
      "offset": 61
    },
    {
      "val": "greater than",
      "offset": 85
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 1533388493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double The Excess And Save-Form_Mod_Anc_DouExc",
      "offset": 17
    },
    {
      "val": "visible",
      "offset": 69
    },
    {
      "val": "less than",
      "offset": 93
    }
  ],
  "location": "ValidateAddOns.i_validate_that_is_visible_and_its_price(String,String,String)"
});
formatter.result({
  "duration": 1527312742,
  "status": "passed"
});
formatter.after({
  "duration": 69972,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 1601727139,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Verify that No Product and their options are visible for traveller who is 70 years old",
  "description": "",
  "id": "annual-policy-add-ons-validation--;verify-that-no-product-and-their-options-are-visible-for-traveller-who-is-70-years-old",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 52,
      "name": "@validate70yearsage"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "I select Annual Travel Insurance",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I enter \"70\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I click on GetAQuote",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I validate \"Travellers over the age of 69 are not eligible for this product and have not been included in this quote.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage.i_select_Annual_Travel_Insurance()"
});
formatter.result({
  "duration": 3063017194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "70",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3564931540,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetAQuote()"
});
formatter.result({
  "duration": 1023116729,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Travellers over the age of 69 are not eligible for this product and have not been included in this quote.",
      "offset": 12
    }
  ],
  "location": "HomePage.i_validate(String)"
});
formatter.result({
  "duration": 1022209123,
  "status": "passed"
});
formatter.after({
  "duration": 79289,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 1070792228,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "To validate that group travel Insurance is applicable for Kango Cover Annual Users",
  "description": "",
  "id": "annual-policy-add-ons-validation--;to-validate-that-group-travel-insurance-is-applicable-for-kango-cover-annual-users",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 59,
      "name": "@grouptravellersforannualinsurance"
    }
  ]
});
formatter.step({
  "line": 61,
  "name": "I select Annual Travel Insurance",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "I enter \"21,22,24\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I click on GetAQuote",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePage.i_select_Annual_Travel_Insurance()"
});
formatter.result({
  "duration": 3066584562,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21,22,24",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3556349925,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetAQuote()"
});
formatter.result({
  "duration": 1019590222,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3060996778,
  "status": "passed"
});
formatter.after({
  "duration": 62275,
  "status": "passed"
});
formatter.uri("2_Annual 35 days (Excludes Wintersports).feature");
formatter.feature({
  "line": 1,
  "name": "ANNUAL 35 DAYS - EXCLUDES Wintersports",
  "description": "To Buy Annual 35 days (Excludes Wintersports) Insurance on various conditions like age and number of travellers and validate\r\nthe confirmation page against data displayed on Q2, Q3 pages.\r\n\r\nIn order to Buy Annual 35 days (Excludes Wintersports) from kangoCover Website as a customer, I want to validate confirm page against\r\nQ2 and Q3 Pages contents as per customer selection for various age group and Duration",
  "id": "annual-35-days---excludes-wintersports",
  "keyword": "Feature"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 1577170170,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "To Buy \"Winter Sports Cover\",  \"Sports and Activity Cover\" and \"High Value Items\" from Annual 35 days (Excludes Wintersports) and validate values from Q2, Q3",
  "description": "and Confirmation Page",
  "id": "annual-35-days---excludes-wintersports;to-buy-\"winter-sports-cover\",--\"sports-and-activity-cover\"-and-\"high-value-items\"-from-annual-35-days-(excludes-wintersports)-and-validate-values-from-q2,-q3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@ANNUAL35DAYS_EXCLUDES_Wintersports_singletraveller"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I select Annual Travel Insurance",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter \"69\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on GetAQuote",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I select \"Annual 35 days (Excludes Wintersports)\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I validate that standard Excess is \"$100\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I select \"Business Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter customer details for \"69\" years",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter creditcard details for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I agree to terms and conditions",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.i_select_Annual_Travel_Insurance()"
});
formatter.result({
  "duration": 3068979986,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "69",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3583453768,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetAQuote()"
});
formatter.result({
  "duration": 1017864512,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3058613084,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Annual 35 days (Excludes Wintersports)",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 7675090549,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2034101317,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100",
      "offset": 36
    }
  ],
  "location": "Q2APage.i_validate_that_standard_Excess_is(String)"
});
formatter.result({
  "duration": 2039903883,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double the Standard Excess",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 7654922988,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sports \u0026 Activity Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5638621256,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5610834269,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2556383437,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 2049004124,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 1024764420,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "69",
      "offset": 30
    }
  ],
  "location": "Q3Page.enterCustomerDetails(String)"
});
formatter.result({
  "duration": 18377115525,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 14764032790,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 1022748091,
  "status": "passed"
});
formatter.after({
  "duration": 64475,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 1110309528,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 31,
      "value": "#And I click on Complete Purchase"
    },
    {
      "line": 32,
      "value": "#Then I validate Confirm Page"
    },
    {
      "line": 33,
      "value": "#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details"
    }
  ],
  "line": 36,
  "name": "To Buy \"Winter Sports Cover\", \"Sports and Activity Cover\"  and \"High Value Items\" from Annual 35 days (Excludes Wintersports)and validate values from Q2, Q3",
  "description": "and Confirmation Page for Family of two with a dependent",
  "id": "annual-35-days---excludes-wintersports;to-buy-\"winter-sports-cover\",-\"sports-and-activity-cover\"--and-\"high-value-items\"-from-annual-35-days-(excludes-wintersports)and-validate-values-from-q2,-q3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@ANNUAL35DAYS_EXCLUDES_Wintersports_familyravellers"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I select Annual Travel Insurance",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I enter \"36,37,16\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on GetAQuote",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I select \"Annual 35 days (Excludes Wintersports)\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I validate that standard Excess is \"$100\"",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I select \"Business Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I enter customer details for \"36,37,16\" years",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I enter creditcard details for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I agree to terms and conditions",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.i_select_Annual_Travel_Insurance()"
});
formatter.result({
  "duration": 3051916942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "36,37,16",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3542369441,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetAQuote()"
});
formatter.result({
  "duration": 1013825105,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3036919767,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Annual 35 days (Excludes Wintersports)",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 7615497474,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2030299725,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100",
      "offset": 36
    }
  ],
  "location": "Q2APage.i_validate_that_standard_Excess_is(String)"
});
formatter.result({
  "duration": 2028578934,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double the Standard Excess",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 7631113827,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sports \u0026 Activity Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5587926853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5570738479,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2552541937,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 2030321093,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 1013642445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "36,37,16",
      "offset": 30
    }
  ],
  "location": "Q3Page.enterCustomerDetails(String)"
});
formatter.result({
  "duration": 51265470368,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 14710109344,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 1016875775,
  "status": "passed"
});
formatter.after({
  "duration": 66672,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 2085821925,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 55,
      "value": "#And I click on Complete Purchase"
    },
    {
      "line": 56,
      "value": "#Then I validate Confirm Page"
    },
    {
      "line": 57,
      "value": "#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details"
    }
  ],
  "line": 60,
  "name": "To Buy \"Winter Sports Cover\", \"Sports and Activity Cover\"  and \"High Value Items\" from Annual 35 days (Excludes Wintersports)and validate values from Q2, Q3",
  "description": "and Confirmation Page for duo",
  "id": "annual-35-days---excludes-wintersports;to-buy-\"winter-sports-cover\",-\"sports-and-activity-cover\"--and-\"high-value-items\"-from-annual-35-days-(excludes-wintersports)and-validate-values-from-q2,-q3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 59,
      "name": "@ANNUAL35DAYS_EXCLUDES_Wintersports_duotravellers"
    }
  ]
});
formatter.step({
  "line": 63,
  "name": "I select Annual Travel Insurance",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "I enter \"21,22\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I click on GetAQuote",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "I select \"Annual 35 days (Excludes Wintersports)\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 69,
  "name": "I validate that standard Excess is \"$100\"",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 71,
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "I select \"Business Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "I enter customer details for \"21,22\" years",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I enter creditcard details for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I agree to terms and conditions",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.i_select_Annual_Travel_Insurance()"
});
formatter.result({
  "duration": 3052908273,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21,22",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3561197056,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetAQuote()"
});
formatter.result({
  "duration": 1017385981,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3045841899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Annual 35 days (Excludes Wintersports)",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 13702108522,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2028977032,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100",
      "offset": 36
    }
  ],
  "location": "Q2APage.i_validate_that_standard_Excess_is(String)"
});
formatter.result({
  "duration": 2060389307,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double the Standard Excess",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 7596491099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sports \u0026 Activity Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5580513397,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5576616502,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2540663291,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 2027104836,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 1014383400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21,22",
      "offset": 30
    }
  ],
  "location": "Q3Page.enterCustomerDetails(String)"
});
formatter.result({
  "duration": 38998482505,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 14701198386,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 1012156963,
  "status": "passed"
});
formatter.after({
  "duration": 87476,
  "status": "passed"
});
formatter.uri("2_Annual 35 days (Includes Wintersports).feature");
formatter.feature({
  "line": 1,
  "name": "ANNUAL 35 DAYS - INCLUDES WinterSports",
  "description": "To Buy Annual 35 days (Includes Wintersports) Insurance on various conditions like age and number of travellers and validate\r\nthe confirmation page against data displayed on Q2, Q3 pages.\r\n\r\nIn order to Buy Annual 35 days (Excludes Wintersports) from kangoCover Website as a customer, I want to validate confirm page against\r\nQ2 and Q3 Pages contents as per customer selection for various age group and Duration",
  "id": "annual-35-days---includes-wintersports",
  "keyword": "Feature"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 1141534024,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "To Buy \"Winter Sports Cover\",  \"Sports and Activity Cover\" and \"High Value Items\" from Annual 35 days (Includes Wintersports) and validate values from Q2, Q3",
  "description": "and Confirmation Page",
  "id": "annual-35-days---includes-wintersports;to-buy-\"winter-sports-cover\",--\"sports-and-activity-cover\"-and-\"high-value-items\"-from-annual-35-days-(includes-wintersports)-and-validate-values-from-q2,-q3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@ANNUAL35DAYS_INCLUDES_Wintersports_singletraveller"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I select Annual Travel Insurance",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter \"69\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on GetAQuote",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I select \"Annual 35 days (Includes Wintersports)\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I validate that standard Excess is \"$100\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I select \"Business Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter customer details for \"69\" years",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter creditcard details for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I agree to terms and conditions",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.i_select_Annual_Travel_Insurance()"
});
formatter.result({
  "duration": 3050089867,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "69",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3560793824,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetAQuote()"
});
formatter.result({
  "duration": 1015323903,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3043383650,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Annual 35 days (Includes Wintersports)",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 14730133373,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2033883918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100",
      "offset": 36
    }
  ],
  "location": "Q2APage.i_validate_that_standard_Excess_is(String)"
});
formatter.result({
  "duration": 2050410930,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double the Standard Excess",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 7617982583,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sports \u0026 Activity Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5580027443,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5577301080,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2538463983,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 2034425448,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 1012516488,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "69",
      "offset": 30
    }
  ],
  "location": "Q3Page.enterCustomerDetails(String)"
});
formatter.result({
  "duration": 18254720105,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 14723178878,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 1011469409,
  "status": "passed"
});
formatter.after({
  "duration": 68074,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 2576413822,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 31,
      "value": "#And I click on Complete Purchase"
    },
    {
      "line": 32,
      "value": "#Then I validate Confirm Page"
    },
    {
      "line": 33,
      "value": "#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details"
    }
  ],
  "line": 36,
  "name": "To Buy \"Winter Sports Cover\", \"Sports and Activity Cover\"  and \"High Value Items\" from Annual 35 days (Includes Wintersports)and validate values from Q2, Q3",
  "description": "and Confirmation Page for Family of two with a dependent",
  "id": "annual-35-days---includes-wintersports;to-buy-\"winter-sports-cover\",-\"sports-and-activity-cover\"--and-\"high-value-items\"-from-annual-35-days-(includes-wintersports)and-validate-values-from-q2,-q3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@ANNUAL35DAYS_INCLUDES_Wintersports_familytravellers"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I select Annual Travel Insurance",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I enter \"36,37,16\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on GetAQuote",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I select \"Annual 35 days (Includes Wintersports)\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I validate that standard Excess is \"$100\"",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I select \"Business Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I enter customer details for \"36,37,16\" years",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I enter creditcard details for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I agree to terms and conditions",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.i_select_Annual_Travel_Insurance()"
});
formatter.result({
  "duration": 3071360486,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "36,37,16",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3548394315,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetAQuote()"
});
formatter.result({
  "duration": 1014334188,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3040689605,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Annual 35 days (Includes Wintersports)",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 14734823879,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2025865413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100",
      "offset": 36
    }
  ],
  "location": "Q2APage.i_validate_that_standard_Excess_is(String)"
});
formatter.result({
  "duration": 2026334086,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double the Standard Excess",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 7621236103,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sports \u0026 Activity Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5589929709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5580661852,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2534133229,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 2034297958,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 1013379504,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "36,37,16",
      "offset": 30
    }
  ],
  "location": "Q3Page.enterCustomerDetails(String)"
});
formatter.result({
  "duration": 51205418406,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 14768760616,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 1010889200,
  "status": "passed"
});
formatter.after({
  "duration": 508312,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 3118070466,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 55,
      "value": "#And I click on Complete Purchase"
    },
    {
      "line": 56,
      "value": "#Then I validate Confirm Page"
    },
    {
      "line": 57,
      "value": "#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details"
    }
  ],
  "line": 61,
  "name": "To Buy \"Winter Sports Cover\", \"Sports and Activity Cover\"  and \"High Value Items\" from Annual 35 days (Includes Wintersports)and validate values from Q2, Q3",
  "description": "and Confirmation Page for duo",
  "id": "annual-35-days---includes-wintersports;to-buy-\"winter-sports-cover\",-\"sports-and-activity-cover\"--and-\"high-value-items\"-from-annual-35-days-(includes-wintersports)and-validate-values-from-q2,-q3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 60,
      "name": "@ANNUAL35DAYS_INCLUDES_Wintersports_duotravellers"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "I select Annual Travel Insurance",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "I enter \"21,22\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I click on GetAQuote",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "I select \"Annual 35 days (Includes Wintersports)\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "I validate that standard Excess is \"$100\"",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "I select \"Business Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I enter customer details for \"21,22\" years",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I enter creditcard details for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I agree to terms and conditions",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.i_select_Annual_Travel_Insurance()"
});
formatter.result({
  "duration": 3047027793,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21,22",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3550696889,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetAQuote()"
});
formatter.result({
  "duration": 1015512759,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3034861257,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Annual 35 days (Includes Wintersports)",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 14718996146,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2030151539,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100",
      "offset": 36
    }
  ],
  "location": "Q2APage.i_validate_that_standard_Excess_is(String)"
});
formatter.result({
  "duration": 2029506632,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double the Standard Excess",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 7619019484,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sports \u0026 Activity Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5580378732,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5583168189,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2538418675,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 2027262418,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 1014720192,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21,22",
      "offset": 30
    }
  ],
  "location": "Q3Page.enterCustomerDetails(String)"
});
formatter.result({
  "duration": 39241078495,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 14858235599,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 1019508156,
  "status": "passed"
});
formatter.after({
  "duration": 151201,
  "status": "passed"
});
formatter.uri("2_Annual 60 days (Excludes Wintersports).feature");
formatter.feature({
  "line": 1,
  "name": "ANNUAL 60 DAYS - EXCLUDES  WinterSports",
  "description": "To Buy Annual 60 days (Excludes Wintersports) Insurance on various conditions like age and number of travellers and validate\r\nthe confirmation page against data displayed on Q2, Q3 pages.\r\n\r\nIn order to Buy Annual 35 days (Excludes Wintersports) from kangoCover Website as a customer, I want to validate confirm page against\r\nQ2 and Q3 Pages contents as per customer selection for various age group and Duration",
  "id": "annual-60-days---excludes--wintersports",
  "keyword": "Feature"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 1602257575,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "To Buy \"Winter Sports Cover\",  \"Sports and Activity Cover\" and \"High Value Items\" from Annual 60 days (Excludes Wintersports) and validate values from Q2, Q3",
  "description": "and Confirmation Page",
  "id": "annual-60-days---excludes--wintersports;to-buy-\"winter-sports-cover\",--\"sports-and-activity-cover\"-and-\"high-value-items\"-from-annual-60-days-(excludes-wintersports)-and-validate-values-from-q2,-q3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@ANNUAL60DAYS_EXCLUDES_Wintersports_singletraveller"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I select Annual Travel Insurance",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter \"69\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on GetAQuote",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I select \"Annual 35 days (Excludes Wintersports)\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I validate that standard Excess is \"$100\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I select \"Business Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter customer details for \"69\" years",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter creditcard details for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I agree to terms and conditions",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.i_select_Annual_Travel_Insurance()"
});
formatter.result({
  "duration": 3074226858,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "69",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3573630739,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetAQuote()"
});
formatter.result({
  "duration": 1024385573,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3062180295,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Annual 35 days (Excludes Wintersports)",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 7675193459,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2049138081,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100",
      "offset": 36
    }
  ],
  "location": "Q2APage.i_validate_that_standard_Excess_is(String)"
});
formatter.result({
  "duration": 2034741435,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double the Standard Excess",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 7664726871,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sports \u0026 Activity Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5635752260,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5611019904,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2555755322,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 2046180261,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 1026809327,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "69",
      "offset": 30
    }
  ],
  "location": "Q3Page.enterCustomerDetails(String)"
});
formatter.result({
  "duration": 18419984342,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 14814858717,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 1027038976,
  "status": "passed"
});
formatter.after({
  "duration": 86494,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 1590942978,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 31,
      "value": "#And I click on Complete Purchase"
    },
    {
      "line": 32,
      "value": "#Then I validate Confirm Page"
    },
    {
      "line": 33,
      "value": "#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details"
    }
  ],
  "line": 36,
  "name": "To Buy \"Winter Sports Cover\", \"Sports and Activity Cover\"  and \"High Value Items\" from Annual 60 days (Excludes Wintersports) and validate values from Q2, Q3",
  "description": "and Confirmation Page for Family of two with a dependent",
  "id": "annual-60-days---excludes--wintersports;to-buy-\"winter-sports-cover\",-\"sports-and-activity-cover\"--and-\"high-value-items\"-from-annual-60-days-(excludes-wintersports)-and-validate-values-from-q2,-q3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@ANNUAL60DAYS_EXCLUDES_Wintersports_familytraveller"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I select Annual Travel Insurance",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I enter \"36,37,16\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on GetAQuote",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I select \"Annual 35 days (Excludes Wintersports)\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I validate that standard Excess is \"$100\"",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I select \"Business Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I enter customer details for \"36,37,16\" years",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I enter creditcard details for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I agree to terms and conditions",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.i_select_Annual_Travel_Insurance()"
});
formatter.result({
  "duration": 3079574334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "36,37,16",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3571508250,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetAQuote()"
});
formatter.result({
  "duration": 1026278849,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3066706876,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Annual 35 days (Excludes Wintersports)",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 13805760792,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2040143826,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100",
      "offset": 36
    }
  ],
  "location": "Q2APage.i_validate_that_standard_Excess_is(String)"
});
formatter.result({
  "duration": 2049705585,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double the Standard Excess",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 7677598509,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sports \u0026 Activity Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5631439068,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5615423184,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2549027055,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 2032506293,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 1022336861,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "36,37,16",
      "offset": 30
    }
  ],
  "location": "Q3Page.enterCustomerDetails(String)"
});
formatter.result({
  "duration": 51406582427,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 14681210194,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 1013528723,
  "status": "passed"
});
formatter.after({
  "duration": 65381,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 2109286010,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 55,
      "value": "#And I click on Complete Purchase"
    },
    {
      "line": 56,
      "value": "#Then I validate Confirm Page"
    },
    {
      "line": 57,
      "value": "#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details"
    }
  ],
  "line": 61,
  "name": "To Buy \"Winter Sports Cover\", \"Sports and Activity Cover\"  and \"High Value Items\" from Annual 60 days (Excludes Wintersports) and validate values from Q2, Q3",
  "description": "and Confirmation Page for duo",
  "id": "annual-60-days---excludes--wintersports;to-buy-\"winter-sports-cover\",-\"sports-and-activity-cover\"--and-\"high-value-items\"-from-annual-60-days-(excludes-wintersports)-and-validate-values-from-q2,-q3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 60,
      "name": "@ANNUAL60DAYS_EXCLUDES_Wintersports_duotraveller"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "I select Annual Travel Insurance",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "I enter \"21,22\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I click on GetAQuote",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "I select \"Annual 35 days (Excludes Wintersports)\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "I validate that standard Excess is \"$100\"",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "I select \"Business Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I enter customer details for \"21,22\" years",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I enter creditcard details for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I agree to terms and conditions",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.i_select_Annual_Travel_Insurance()"
});
formatter.result({
  "duration": 3039657784,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21,22",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3547988289,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetAQuote()"
});
formatter.result({
  "duration": 1017530332,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3041054613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Annual 35 days (Excludes Wintersports)",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 10666285265,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2027713475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100",
      "offset": 36
    }
  ],
  "location": "Q2APage.i_validate_that_standard_Excess_is(String)"
});
formatter.result({
  "duration": 2030276748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double the Standard Excess",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 7616830324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sports \u0026 Activity Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5587484467,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5598827184,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2533792738,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 2031770203,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 1015898193,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21,22",
      "offset": 30
    }
  ],
  "location": "Q3Page.enterCustomerDetails(String)"
});
formatter.result({
  "duration": 39053548385,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 14726262639,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 1015857339,
  "status": "passed"
});
formatter.after({
  "duration": 70887,
  "status": "passed"
});
formatter.uri("2_Annual 60 days (Includes Wintersports).feature");
formatter.feature({
  "line": 1,
  "name": "ANNUAL 60 DAYS - INCLUDES WinterSports",
  "description": "To Buy Annual 60 days (Includes Wintersports) Insurance on various conditions like age and number of travellers and validate\r\nthe confirmation page against data displayed on Q2, Q3 pages.\r\n\r\nIn order to Buy Annual 60 days (Includes Wintersports) from kangoCover Website as a customer, I want to validate confirm page against\r\nQ2 and Q3 Pages contents as per customer selection for various age group and Duration",
  "id": "annual-60-days---includes-wintersports",
  "keyword": "Feature"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 1585460919,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "To Buy \"Winter Sports Cover\",  \"Sports and Activity Cover\" and \"High Value Items\" from Annual 60 days (Includes Wintersports) and validate values from Q2, Q3",
  "description": "and Confirmation Page",
  "id": "annual-60-days---includes-wintersports;to-buy-\"winter-sports-cover\",--\"sports-and-activity-cover\"-and-\"high-value-items\"-from-annual-60-days-(includes-wintersports)-and-validate-values-from-q2,-q3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@ANNUAL60DAYS_INCLUDES_Wintersports_singletraveller"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I select Annual Travel Insurance",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter \"69\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on GetAQuote",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I select \"Annual 60 days (Includes Wintersports)\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "I validate that standard Excess is \"$100\"",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I select \"Business Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter customer details for \"69\" years",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter creditcard details for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I agree to terms and conditions",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.i_select_Annual_Travel_Insurance()"
});
formatter.result({
  "duration": 3049750068,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "69",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3540505735,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetAQuote()"
});
formatter.result({
  "duration": 1016615736,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3036017535,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Annual 60 days (Includes Wintersports)",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 8640258231,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2034793415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100",
      "offset": 36
    }
  ],
  "location": "Q2APage.i_validate_that_standard_Excess_is(String)"
});
formatter.result({
  "duration": 2065700146,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double the Standard Excess",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 7609013098,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sports \u0026 Activity Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5573814413,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5583077811,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2534363195,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 2024874012,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 1015226834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "69",
      "offset": 30
    }
  ],
  "location": "Q3Page.enterCustomerDetails(String)"
});
formatter.result({
  "duration": 18253238665,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 14744612471,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 1019844571,
  "status": "passed"
});
formatter.after({
  "duration": 62438,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 1604852420,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 31,
      "value": "#And I click on Complete Purchase"
    },
    {
      "line": 32,
      "value": "#Then I validate Confirm Page"
    },
    {
      "line": 33,
      "value": "#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details"
    }
  ],
  "line": 36,
  "name": "To Buy \"Winter Sports Cover\", \"Sports and Activity Cover\"  and \"High Value Items\" from Annual 60 days (Includes Wintersports) and validate values from Q2, Q3",
  "description": "and Confirmation Page for Family of two with a dependent",
  "id": "annual-60-days---includes-wintersports;to-buy-\"winter-sports-cover\",-\"sports-and-activity-cover\"--and-\"high-value-items\"-from-annual-60-days-(includes-wintersports)-and-validate-values-from-q2,-q3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 35,
      "name": "@ANNUAL60DAYS_INCLUDES_Wintersports_familytravellers"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "I select Annual Travel Insurance",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "I enter \"36,37,16\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on GetAQuote",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I select \"Annual 60 days (Includes Wintersports)\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I validate that standard Excess is \"$100\"",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "I select \"Business Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "I enter customer details for \"36,37,16\" years",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I enter creditcard details for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I agree to terms and conditions",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.i_select_Annual_Travel_Insurance()"
});
formatter.result({
  "duration": 3046925491,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "36,37,16",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3550148066,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetAQuote()"
});
formatter.result({
  "duration": 1012970177,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3043547839,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Annual 60 days (Includes Wintersports)",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 11670524613,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2031577063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100",
      "offset": 36
    }
  ],
  "location": "Q2APage.i_validate_that_standard_Excess_is(String)"
});
formatter.result({
  "duration": 2035554624,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double the Standard Excess",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 7630843608,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sports \u0026 Activity Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5592859346,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5590213693,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2534986787,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 2029457641,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 1014410510,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "36,37,16",
      "offset": 30
    }
  ],
  "location": "Q3Page.enterCustomerDetails(String)"
});
formatter.result({
  "duration": 51321752695,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 14815065548,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 1016934056,
  "status": "passed"
});
formatter.after({
  "duration": 120248,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 1598257846,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 55,
      "value": "#And I click on Complete Purchase"
    },
    {
      "line": 56,
      "value": "#Then I validate Confirm Page"
    },
    {
      "line": 57,
      "value": "#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details"
    }
  ],
  "line": 61,
  "name": "To Buy \"Winter Sports Cover\", \"Sports and Activity Cover\"  and \"High Value Items\" from Annual 60 days (Includes Wintersports) and validate values from Q2, Q3",
  "description": "and Confirmation Page for duo",
  "id": "annual-60-days---includes-wintersports;to-buy-\"winter-sports-cover\",-\"sports-and-activity-cover\"--and-\"high-value-items\"-from-annual-60-days-(includes-wintersports)-and-validate-values-from-q2,-q3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 60,
      "name": "@ANNUAL60DAYS_INCLUDES_Wintersports_duotravellers"
    }
  ]
});
formatter.step({
  "line": 64,
  "name": "I select Annual Travel Insurance",
  "keyword": "When "
});
formatter.step({
  "line": 65,
  "name": "I enter \"21,22\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "I click on GetAQuote",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 68,
  "name": "I select \"Annual 60 days (Includes Wintersports)\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 70,
  "name": "I validate that standard Excess is \"$100\"",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "I select \"Business Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "I enter customer details for \"21,22\" years",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "I enter creditcard details for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "I agree to terms and conditions",
  "keyword": "And "
});
formatter.match({
  "location": "HomePage.i_select_Annual_Travel_Insurance()"
});
formatter.result({
  "duration": 3076645022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21,22",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3564774599,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetAQuote()"
});
formatter.result({
  "duration": 1014899694,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3056541922,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Annual 60 days (Includes Wintersports)",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 8683534461,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2047563636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100",
      "offset": 36
    }
  ],
  "location": "Q2APage.i_validate_that_standard_Excess_is(String)"
});
formatter.result({
  "duration": 2048735611,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double the Standard Excess",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 7658677268,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sports \u0026 Activity Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5647762378,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5638542865,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2563984608,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 2049060869,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 1026413288,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21,22",
      "offset": 30
    }
  ],
  "location": "Q3Page.enterCustomerDetails(String)"
});
formatter.result({
  "duration": 39350050158,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 14826635891,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 1019519493,
  "status": "passed"
});
formatter.after({
  "duration": 75265,
  "status": "passed"
});
formatter.uri("2_JoeyCover.feature");
formatter.feature({
  "line": 1,
  "name": "JOEY COVER -",
  "description": "To Buy Joey Cover Insurance on various conditions like age and number of travellers and validate\r\nthe confirmation page against data displayed on Q2, Q3 pages.\r\n\r\nIn order to Buy Joey Cover from kangoCover Website as a customer, I want to validate confirm page against\r\nQ2 and Q3 Pages contents as per customer selection for various age group and Duration",
  "id": "joey-cover--",
  "keyword": "Feature"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 1568233385,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "To Buy \"Winter Sports Cover\" and \"Sports and Activity Cover\" from Joey Cover and validate values from Q2, Q3",
  "description": "and Confirmation Page",
  "id": "joey-cover--;to-buy-\"winter-sports-cover\"-and-\"sports-and-activity-cover\"-from-joey-cover-and-validate-values-from-q2,-q3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@joecover_singletraveller"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I enter \"India\" as my destination",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter my Return Dates as \"30\" days from today",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter \"64\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on GetQuote",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I select \"L1-Joey Cover\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I validate that standard Excess is \"$250\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I select \"Winter Sports Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter customer details for \"64\" years",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter creditcard details for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I agree to terms and conditions",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.myDestinationasSelected(String)"
});
formatter.result({
  "duration": 4620417775,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 28
    }
  ],
  "location": "HomePage.returnDate(int)"
});
formatter.result({
  "duration": 24586008123,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "64",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3575990625,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 3058632022,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3072725355,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L1-Joey Cover",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 14802586118,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2037422026,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$250",
      "offset": 36
    }
  ],
  "location": "Q2APage.i_validate_that_standard_Excess_is(String)"
});
formatter.result({
  "duration": 2046521907,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double the Standard Excess",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 7667333233,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Winter Sports Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5629420856,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sports \u0026 Activity Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5626784120,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2562838390,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 2031252043,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 1018867023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "64",
      "offset": 30
    }
  ],
  "location": "Q3Page.enterCustomerDetails(String)"
});
formatter.result({
  "duration": 18386313055,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 14815540961,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 1021739021,
  "status": "passed"
});
formatter.after({
  "duration": 58098,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 1579423574,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 32,
      "value": "#And I click on Complete Purchase"
    },
    {
      "line": 33,
      "value": "#Then I validate Confirm Page"
    },
    {
      "line": 34,
      "value": "#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details"
    }
  ],
  "line": 37,
  "name": "To Buy \"Winter Sports Cover\" and \"Sports and Activity Cover\" from Joey Cover and validate values from Q2, Q3",
  "description": "and Confirmation Page for Family of two with a dependent",
  "id": "joey-cover--;to-buy-\"winter-sports-cover\"-and-\"sports-and-activity-cover\"-from-joey-cover-and-validate-values-from-q2,-q3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@joecover_familytravellers"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "I enter \"India\" as my destination",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "I enter my Return Dates as \"30\" days from today",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I enter \"36,37,16\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I click on GetQuote",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 45,
  "name": "I select \"L1-Joey Cover\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I validate that standard Excess is \"$250\"",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "I select \"Winter Sports Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I enter customer details for \"36,37,16\" years",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I enter creditcard details for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I agree to terms and conditions",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.myDestinationasSelected(String)"
});
formatter.result({
  "duration": 4622262441,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 28
    }
  ],
  "location": "HomePage.returnDate(int)"
});
formatter.result({
  "duration": 24545973937,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "36,37,16",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3571085093,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 3065680912,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3062152235,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L1-Joey Cover",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 20969016590,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2043272138,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$250",
      "offset": 36
    }
  ],
  "location": "Q2APage.i_validate_that_standard_Excess_is(String)"
});
formatter.result({
  "duration": 2052887820,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double the Standard Excess",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 7671194878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Winter Sports Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5625454231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sports \u0026 Activity Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5624762249,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2561312877,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 2054859749,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 1019712586,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "36,37,16",
      "offset": 30
    }
  ],
  "location": "Q3Page.enterCustomerDetails(String)"
});
formatter.result({
  "duration": 51586864477,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 14823609797,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 1026444502,
  "status": "passed"
});
formatter.after({
  "duration": 65991,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 1577756871,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 57,
      "value": "#And I click on Complete Purchase"
    },
    {
      "line": 58,
      "value": "#Then I validate Confirm Page"
    },
    {
      "line": 59,
      "value": "#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details"
    }
  ],
  "line": 63,
  "name": "To Buy \"Winter Sports Cover\" and \"Sports and Activity Cover\" from Joey Cover and validate values from Q2, Q3",
  "description": "and Confirmation Page for duo",
  "id": "joey-cover--;to-buy-\"winter-sports-cover\"-and-\"sports-and-activity-cover\"-from-joey-cover-and-validate-values-from-q2,-q3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 62,
      "name": "@joecover_duotravellers"
    }
  ]
});
formatter.step({
  "line": 66,
  "name": "I enter \"India\" as my destination",
  "keyword": "When "
});
formatter.step({
  "line": 67,
  "name": "I enter my Return Dates as \"30\" days from today",
  "keyword": "And "
});
formatter.step({
  "line": 68,
  "name": "I enter \"21,22\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I click on GetQuote",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 71,
  "name": "I select \"L1-Joey Cover\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "I validate that standard Excess is \"$250\"",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 75,
  "name": "I select \"Winter Sports Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then "
});
formatter.step({
  "line": 79,
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And "
});
formatter.step({
  "line": 80,
  "name": "I enter customer details for \"21,22\" years",
  "keyword": "And "
});
formatter.step({
  "line": 81,
  "name": "I enter creditcard details for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I agree to terms and conditions",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.myDestinationasSelected(String)"
});
formatter.result({
  "duration": 4607040174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 28
    }
  ],
  "location": "HomePage.returnDate(int)"
});
formatter.result({
  "duration": 24567639729,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21,22",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3574964762,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 3064423750,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3053020468,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L1-Joey Cover",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 20967261332,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2050511776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$250",
      "offset": 36
    }
  ],
  "location": "Q2APage.i_validate_that_standard_Excess_is(String)"
});
formatter.result({
  "duration": 2043545120,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double the Standard Excess",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 7681684752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Winter Sports Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5619280567,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sports \u0026 Activity Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5606804978,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2545808294,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 2050562432,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 1025989021,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21,22",
      "offset": 30
    }
  ],
  "location": "Q3Page.enterCustomerDetails(String)"
});
formatter.result({
  "duration": 39384259465,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 14818579638,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 1015976980,
  "status": "passed"
});
formatter.after({
  "duration": 69409,
  "status": "passed"
});
formatter.uri("3_RockWallabyCover.feature");
formatter.feature({
  "line": 1,
  "name": "ROCKWALLABY COVER -",
  "description": "To Buy Rock Wallaby Cover Insurance on various conditions like age and number of travellers and validate\r\nthe confirmation page against data displayed on Q2, Q3 pages.\r\n\r\nIn order to Buy Rock Wallaby Cover from kangoCover Website as a customer, I want to validate confirm page against\r\nQ2 and Q3 Pages contents as per customer selection for various age group and Duration",
  "id": "rockwallaby-cover--",
  "keyword": "Feature"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 1626124172,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "To Buy \"Winter Sports Cover\", \"Sports and Activity Cover\" and \"High Value Items\" from Rock Wallaby Cover and validate values from Q2, Q3",
  "description": "and Confirmation Page",
  "id": "rockwallaby-cover--;to-buy-\"winter-sports-cover\",-\"sports-and-activity-cover\"-and-\"high-value-items\"-from-rock-wallaby-cover-and-validate-values-from-q2,-q3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@rockwallaby_singletraveller"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I enter \"India\" as my destination",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter my Return Dates as \"30\" days from today",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter \"45\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on GetQuote",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I select \"L2-Rock Wallaby Cover\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I validate that standard Excess is \"$150\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I select \"Winter Sports Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I select \"High Value Items\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter customer details for \"45\" years",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter creditcard details for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I agree to terms and conditions",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.myDestinationasSelected(String)"
});
formatter.result({
  "duration": 4596196846,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 28
    }
  ],
  "location": "HomePage.returnDate(int)"
});
formatter.result({
  "duration": 24512370825,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3567092055,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 3070058075,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3062206543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L2-Rock Wallaby Cover",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 17896959892,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2054278881,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$150",
      "offset": 36
    }
  ],
  "location": "Q2APage.i_validate_that_standard_Excess_is(String)"
});
formatter.result({
  "duration": 2046659860,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double the Standard Excess",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 7675666626,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Winter Sports Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5629578893,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sports \u0026 Activity Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5631299139,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2551141340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "High Value Items",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 10236512800,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 2049201473,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 1023036817,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45",
      "offset": 30
    }
  ],
  "location": "Q3Page.enterCustomerDetails(String)"
});
formatter.result({
  "duration": 18372944454,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 14795827566,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 1020838148,
  "status": "passed"
});
formatter.after({
  "duration": 70463,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 3114471073,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 33,
      "value": "#And I click on Complete Purchase"
    },
    {
      "line": 34,
      "value": "#Then I validate Confirm Page"
    },
    {
      "line": 35,
      "value": "#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details"
    }
  ],
  "line": 39,
  "name": "To Buy \"Winter Sports Cover\", \"Sports and Activity Cover\" and \"High Value Items\" from Rock Wallaby Cover and validate values from Q2, Q3",
  "description": "and Confirmation Page for Family of two with a dependent",
  "id": "rockwallaby-cover--;to-buy-\"winter-sports-cover\",-\"sports-and-activity-cover\"-and-\"high-value-items\"-from-rock-wallaby-cover-and-validate-values-from-q2,-q3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@rockwallaby_familytravellers"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "I enter \"India\" as my destination",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I enter my Return Dates as \"30\" days from today",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I enter \"36,37,16\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on GetQuote",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I select \"L2-Rock Wallaby Cover\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "I validate that standard Excess is \"$150\"",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "I select \"Winter Sports Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I select \"High Value Items\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I enter customer details for \"36,37,16\" years",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I enter creditcard details for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I agree to terms and conditions",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.myDestinationasSelected(String)"
});
formatter.result({
  "duration": 4603210305,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 28
    }
  ],
  "location": "HomePage.returnDate(int)"
});
formatter.result({
  "duration": 24564880631,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "36,37,16",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3581471648,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 3062012680,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3054021285,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L2-Rock Wallaby Cover",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 17853254763,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2041560956,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$150",
      "offset": 36
    }
  ],
  "location": "Q2APage.i_validate_that_standard_Excess_is(String)"
});
formatter.result({
  "duration": 2039838847,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double the Standard Excess",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 7661341805,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Winter Sports Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5626882343,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sports \u0026 Activity Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5616458682,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2564546498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "High Value Items",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 10184923726,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 2033800517,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 1024469474,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "36,37,16",
      "offset": 30
    }
  ],
  "location": "Q3Page.enterCustomerDetails(String)"
});
formatter.result({
  "duration": 51625382369,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 14797291921,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 1017369882,
  "status": "passed"
});
formatter.after({
  "duration": 58598,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 1603250551,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 60,
      "value": "#And I click on Complete Purchase"
    },
    {
      "line": 61,
      "value": "#Then I validate Confirm Page"
    },
    {
      "line": 62,
      "value": "#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details"
    }
  ],
  "line": 66,
  "name": "To Buy \"Winter Sports Cover\", \"Sports and Activity Cover\" and \"High Value Items\" from Rock Wallaby Cover and validate values from Q2, Q3",
  "description": "and Confirmation Page for duo",
  "id": "rockwallaby-cover--;to-buy-\"winter-sports-cover\",-\"sports-and-activity-cover\"-and-\"high-value-items\"-from-rock-wallaby-cover-and-validate-values-from-q2,-q3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 65,
      "name": "@rockwallaby_duotravellers"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "I enter \"India\" as my destination",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "I enter my Return Dates as \"30\" days from today",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I enter \"21,22\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I click on GetQuote",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "I select \"L2-Rock Wallaby Cover\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "I validate that standard Excess is \"$150\"",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "I select \"Winter Sports Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "I select \"High Value Items\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then "
});
formatter.step({
  "line": 83,
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "I enter customer details for \"21,22\" years",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I enter creditcard details for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I agree to terms and conditions",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.myDestinationasSelected(String)"
});
formatter.result({
  "duration": 4584704348,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 28
    }
  ],
  "location": "HomePage.returnDate(int)"
});
formatter.result({
  "duration": 24522196195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21,22",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3571550278,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 3065048628,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3074940194,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L2-Rock Wallaby Cover",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 17906298670,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2042999718,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$150",
      "offset": 36
    }
  ],
  "location": "Q2APage.i_validate_that_standard_Excess_is(String)"
});
formatter.result({
  "duration": 2040067168,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double the Standard Excess",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 7671870510,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Winter Sports Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5627100609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sports \u0026 Activity Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5635329785,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2560539060,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "High Value Items",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 10256948295,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 2040966707,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 1029041859,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21,22",
      "offset": 30
    }
  ],
  "location": "Q3Page.enterCustomerDetails(String)"
});
formatter.result({
  "duration": 39356938729,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 14823378930,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 1026977509,
  "status": "passed"
});
formatter.after({
  "duration": 80144,
  "status": "passed"
});
formatter.uri("4_WallabyCover.feature");
formatter.feature({
  "line": 1,
  "name": "WALLABY COVER -",
  "description": "To Buy Wallaby Cover Insurance on various conditions like age and number of travellers and validate\r\nthe confirmation page against data displayed on Q2, Q3 pages.\r\n\r\nIn order to Buy Wallaby Cover from kangoCover Website as a customer, I want to validate confirm page against\r\nQ2 and Q3 Pages contents as per customer selection for various age group and Duration",
  "id": "wallaby-cover--",
  "keyword": "Feature"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 1796253815,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "To Buy \"Winter Sports Cover\", \"Sports and Activity Cover\" and \"High Value Items\" from Wallaby Cover and validate values from Q2, Q3",
  "description": "and Confirmation Page",
  "id": "wallaby-cover--;to-buy-\"winter-sports-cover\",-\"sports-and-activity-cover\"-and-\"high-value-items\"-from-wallaby-cover-and-validate-values-from-q2,-q3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@wallabycover_singletraveller"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I enter \"India\" as my destination",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter my Return Dates as \"30\" days from today",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter \"45\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on GetQuote",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I select \"L3-Wallaby Cover\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I validate that standard Excess is \"$150\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I select \"Winter Sports Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I select \"High Value Items\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter customer details for \"45\" years",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter creditcard details for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I agree to terms and conditions",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.myDestinationasSelected(String)"
});
formatter.result({
  "duration": 4578354558,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 28
    }
  ],
  "location": "HomePage.returnDate(int)"
});
formatter.result({
  "duration": 24529568878,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3579891191,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 3064681741,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3047002937,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L3-Wallaby Cover",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 14832590625,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2049713157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$150",
      "offset": 36
    }
  ],
  "location": "Q2APage.i_validate_that_standard_Excess_is(String)"
});
formatter.result({
  "duration": 2044667886,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double the Standard Excess",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 7724832348,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Winter Sports Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5617300788,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sports \u0026 Activity Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5633090442,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 1539361266,
  "error_message": "org.openqa.selenium.WebDriverException: Element does not exist in cache (status: 10) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 515 milliseconds\nBuild info: version: \u00272.53.1\u0027, revision: \u0027a36b8b1cd5757287168e54b817830adce9b0158d\u0027, time: \u00272016-06-30 19:26:09\u0027\nSystem info: host: \u0027Anands-iMac\u0027, ip: \u002710.1.1.2\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.11.6\u0027, java.version: \u00271.8.0_60\u0027\nDriver info: io.appium.java_client.ios.IOSDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, orientation\u003d, databaseEnabled\u003dfalse, deviceName\u003diPhone 6 Plus, fullReset\u003dtrue, platform\u003dMAC, showIOSLog\u003dtrue, nativeInstrumentsLib\u003dtrue, desired\u003d{showIOSLog\u003dtrue, orientation\u003d, nativeInstrumentsLib\u003dtrue, platformVersion\u003d9.3, browserName\u003dsafari, platformName\u003diOS, deviceName\u003diPhone 6 Plus, fullReset\u003dtrue}, platformVersion\u003d9.3, webStorageEnabled\u003dfalse, locationContextEnabled\u003dfalse, browserName\u003dsafari, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003diOS}]\nSession ID: 6b2d2c73-8abe-4af2-89bd-99ee9067a857\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:422)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:678)\n\tat io.appium.java_client.DefaultGenericMobileDriver.execute(DefaultGenericMobileDriver.java:40)\n\tat io.appium.java_client.AppiumDriver.execute(AppiumDriver.java:1)\n\tat io.appium.java_client.ios.IOSDriver.execute(IOSDriver.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:327)\n\tat io.appium.java_client.DefaultGenericMobileElement.execute(DefaultGenericMobileElement.java:33)\n\tat io.appium.java_client.MobileElement.execute(MobileElement.java:1)\n\tat io.appium.java_client.ios.IOSElement.execute(IOSElement.java:1)\n\tat org.openqa.selenium.remote.RemoteWebElement.isDisplayed(RemoteWebElement.java:368)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$8.apply(ExpectedConditions.java:233)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$8.apply(ExpectedConditions.java:228)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:238)\n\tat com.kangocovermobileweb.utilities.WebConnector.getText(WebConnector.java:250)\n\tat com.kangocovermobileweb.utilities.WebConnector.convertPremium(WebConnector.java:767)\n\tat com.kangocovermobileweb.scenarios.EasternGreyCover.I_validate_that_Standard_access_value_is_doubled(EasternGreyCover.java:23)\n\tat ✽.Then I validate that Standard Excess value is doubled(4_WallabyCover.feature:26)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "High Value Items",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "45",
      "offset": 30
    }
  ],
  "location": "Q3Page.enterCustomerDetails(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 12823907521,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 6180945841,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 33,
      "value": "#And I click on Complete Purchase"
    },
    {
      "line": 34,
      "value": "#Then I validate Confirm Page"
    },
    {
      "line": 35,
      "value": "#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details"
    }
  ],
  "line": 39,
  "name": "To Buy \"Winter Sports Cover\", \"Sports and Activity Cover\" and \"High Value Items\" from Wallaby Cover and validate values from Q2, Q3",
  "description": "and Confirmation Page for Family of two with a dependent",
  "id": "wallaby-cover--;to-buy-\"winter-sports-cover\",-\"sports-and-activity-cover\"-and-\"high-value-items\"-from-wallaby-cover-and-validate-values-from-q2,-q3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@wallabycover_familytravellers"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "I enter \"India\" as my destination",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I enter my Return Dates as \"30\" days from today",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I enter \"36,37,16\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on GetQuote",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I select \"L3-Wallaby Cover\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "I validate that standard Excess is \"$150\"",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "I select \"Winter Sports Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I select \"High Value Items\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I enter customer details for \"36,37,16\" years",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I enter creditcard details for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I agree to terms and conditions",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.myDestinationasSelected(String)"
});
formatter.result({
  "duration": 4611268129,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 28
    }
  ],
  "location": "HomePage.returnDate(int)"
});
formatter.result({
  "duration": 24540894258,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "36,37,16",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3583750618,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 3065470083,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3096321772,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L3-Wallaby Cover",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 14822131124,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2054783539,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$150",
      "offset": 36
    }
  ],
  "location": "Q2APage.i_validate_that_standard_Excess_is(String)"
});
formatter.result({
  "duration": 2054673543,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double the Standard Excess",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 7656964328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Winter Sports Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5612845214,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sports \u0026 Activity Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5624540119,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2561684022,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "High Value Items",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 10232814014,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 2050291294,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 1025577808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "36,37,16",
      "offset": 30
    }
  ],
  "location": "Q3Page.enterCustomerDetails(String)"
});
formatter.result({
  "duration": 51640919732,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 14813900906,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 1017914733,
  "status": "passed"
});
formatter.after({
  "duration": 61570,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 1621067277,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 60,
      "value": "#And I click on Complete Purchase"
    },
    {
      "line": 61,
      "value": "#Then I validate Confirm Page"
    },
    {
      "line": 62,
      "value": "#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details"
    }
  ],
  "line": 66,
  "name": "To Buy \"Winter Sports Cover\", \"Sports and Activity Cover\" and \"High Value Items\" from Wallaby Cover and validate values from Q2, Q3",
  "description": "and Confirmation Page for duo",
  "id": "wallaby-cover--;to-buy-\"winter-sports-cover\",-\"sports-and-activity-cover\"-and-\"high-value-items\"-from-wallaby-cover-and-validate-values-from-q2,-q3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 65,
      "name": "@wallabycover_duotravellers"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "I enter \"India\" as my destination",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "I enter my Return Dates as \"30\" days from today",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I enter \"21,22\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I click on GetQuote",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "I select \"L3-Wallaby Cover\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "I validate that standard Excess is \"$150\"",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "I select \"Winter Sports Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "I select \"High Value Items\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 82,
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then "
});
formatter.step({
  "line": 83,
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "I enter customer details for \"21,22\" years",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I enter creditcard details for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I agree to terms and conditions",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.myDestinationasSelected(String)"
});
formatter.result({
  "duration": 4600426754,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 28
    }
  ],
  "location": "HomePage.returnDate(int)"
});
formatter.result({
  "duration": 24530919850,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21,22",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3593340276,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 3065621544,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3056655235,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L3-Wallaby Cover",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 14829063141,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2045856717,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$150",
      "offset": 36
    }
  ],
  "location": "Q2APage.i_validate_that_standard_Excess_is(String)"
});
formatter.result({
  "duration": 2053918285,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double the Standard Excess",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 7665915223,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Winter Sports Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5620845099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sports \u0026 Activity Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5616836944,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2560836739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "High Value Items",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 10213003887,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 2039579825,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 1021852188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21,22",
      "offset": 30
    }
  ],
  "location": "Q3Page.enterCustomerDetails(String)"
});
formatter.result({
  "duration": 39302524699,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 14825691398,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 1017566561,
  "status": "passed"
});
formatter.after({
  "duration": 112043,
  "status": "passed"
});
formatter.uri("5_EasternGreyCover.feature");
formatter.feature({
  "line": 1,
  "name": "EASTERN GREY COVER -",
  "description": "To Buy Eastern Grey Cover Insurance on various conditions like age and number of travellers and validate\r\nthe confirmation page against data displayed on Q2, Q3 pages.\r\n\r\nIn order to Buy Eastern Grey Cover from kangoCover Website as a customer, I want to validate confirm page against\r\nQ2 and Q3 Pages contents as per customer selection for various age group and Duration",
  "id": "eastern-grey-cover--",
  "keyword": "Feature"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 1621843929,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "To Buy \"Winter Sports Cover\", \"Sports and Activity Cover\", \"Business Cover\" and \"High Value Items\" from Eastern Grey Cover and validate values from Q2, Q3",
  "description": "and Confirmation Page",
  "id": "eastern-grey-cover--;to-buy-\"winter-sports-cover\",-\"sports-and-activity-cover\",-\"business-cover\"-and-\"high-value-items\"-from-eastern-grey-cover-and-validate-values-from-q2,-q3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@easterngreycover_singletraveller"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I enter \"India\" as my destination",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter my Return Dates as \"363\" days from today",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter \"64\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on GetQuote",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I select \"L4-Eastern Grey Cover\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I validate that standard Excess is \"$100\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I select \"Winter Sports Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I select \"Business Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter customer details for \"64\" years",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter creditcard details for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I agree to terms and conditions",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.myDestinationasSelected(String)"
});
formatter.result({
  "duration": 4610691259,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "363",
      "offset": 28
    }
  ],
  "location": "HomePage.returnDate(int)"
});
formatter.result({
  "duration": 52095925848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "64",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3588290584,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 3060096378,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3060902709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L4-Eastern Grey Cover",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 11775435239,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2048864092,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100",
      "offset": 36
    }
  ],
  "location": "Q2APage.i_validate_that_standard_Excess_is(String)"
});
formatter.result({
  "duration": 2033701982,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double the Standard Excess",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 7681004977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sports \u0026 Activity Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5628787440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Winter Sports Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5641830295,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5649897056,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2550827790,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 2048949394,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 1024232535,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "64",
      "offset": 30
    }
  ],
  "location": "Q3Page.enterCustomerDetails(String)"
});
formatter.result({
  "duration": 18381380752,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 14822800134,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 1022850916,
  "status": "passed"
});
formatter.after({
  "duration": 60968,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 1614990702,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 33,
      "value": "#And I click on Complete Purchase"
    },
    {
      "line": 34,
      "value": "#Then I validate Confirm Page"
    },
    {
      "line": 35,
      "value": "#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details"
    }
  ],
  "line": 39,
  "name": "To Buy \"Winter Sports Cover\", \"Sports and Activity Cover\", \"Business Cover\" and \"High Value Items\" from Eastern Grey Cover and validate values from Q2, Q3",
  "description": "and Confirmation Page for Family of two with a dependent",
  "id": "eastern-grey-cover--;to-buy-\"winter-sports-cover\",-\"sports-and-activity-cover\",-\"business-cover\"-and-\"high-value-items\"-from-eastern-grey-cover-and-validate-values-from-q2,-q3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 38,
      "name": "@easterngreycover_familytravellers"
    }
  ]
});
formatter.step({
  "line": 42,
  "name": "I enter \"India\" as my destination",
  "keyword": "When "
});
formatter.step({
  "line": 43,
  "name": "I enter my Return Dates as \"30\" days from today",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I enter \"36,37,16\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I click on GetQuote",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 47,
  "name": "I select \"L4-Eastern Grey Cover\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "I validate that standard Excess is \"$100\"",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I select \"Winter Sports Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "I select \"Business Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then "
});
formatter.step({
  "line": 56,
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I enter customer details for \"36,37,16\" years",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I enter creditcard details for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I agree to terms and conditions",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.myDestinationasSelected(String)"
});
formatter.result({
  "duration": 4618307879,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 28
    }
  ],
  "location": "HomePage.returnDate(int)"
});
formatter.result({
  "duration": 24515452705,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "36,37,16",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3612867744,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 3064468337,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3055923510,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L4-Eastern Grey Cover",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 11768165839,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2038097200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100",
      "offset": 36
    }
  ],
  "location": "Q2APage.i_validate_that_standard_Excess_is(String)"
});
formatter.result({
  "duration": 2043021863,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double the Standard Excess",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 7682284520,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sports \u0026 Activity Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5629720509,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Winter Sports Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5618731310,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5611355484,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2550879532,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 2043355135,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 1022072497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "36,37,16",
      "offset": 30
    }
  ],
  "location": "Q3Page.enterCustomerDetails(String)"
});
formatter.result({
  "duration": 51614313534,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 14849658394,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 1017435811,
  "status": "passed"
});
formatter.after({
  "duration": 58955,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 1588157314,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 60,
      "value": "#And I click on Complete Purchase"
    },
    {
      "line": 61,
      "value": "#Then I validate Confirm Page"
    },
    {
      "line": 62,
      "value": "#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details"
    }
  ],
  "line": 66,
  "name": "To Buy \"Winter Sports Cover\", \"Sports and Activity Cover\", \"Business Cover\" and \"High Value Items\" from Eastern Grey Cover and validate values from Q2, Q3",
  "description": "and Confirmation Page for duo",
  "id": "eastern-grey-cover--;to-buy-\"winter-sports-cover\",-\"sports-and-activity-cover\",-\"business-cover\"-and-\"high-value-items\"-from-eastern-grey-cover-and-validate-values-from-q2,-q3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 65,
      "name": "@easterngreycover_duotravellers"
    }
  ]
});
formatter.step({
  "line": 69,
  "name": "I enter \"India\" as my destination",
  "keyword": "When "
});
formatter.step({
  "line": 70,
  "name": "I enter my Return Dates as \"30\" days from today",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I enter \"21,22\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I click on GetQuote",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "I select \"L4-Eastern Grey Cover\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 75,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 76,
  "name": "I validate that standard Excess is \"$100\"",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "I select \"Winter Sports Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "I select \"Business Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 81,
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then "
});
formatter.step({
  "line": 82,
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then "
});
formatter.step({
  "line": 83,
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "I enter customer details for \"21,22\" years",
  "keyword": "And "
});
formatter.step({
  "line": 85,
  "name": "I enter creditcard details for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "I agree to terms and conditions",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.myDestinationasSelected(String)"
});
formatter.result({
  "duration": 4594592538,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 28
    }
  ],
  "location": "HomePage.returnDate(int)"
});
formatter.result({
  "duration": 24547012524,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21,22",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3564357422,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 3053022904,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3055466044,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L4-Eastern Grey Cover",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 11757389052,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2054209319,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100",
      "offset": 36
    }
  ],
  "location": "Q2APage.i_validate_that_standard_Excess_is(String)"
});
formatter.result({
  "duration": 2052589550,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double the Standard Excess",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 7673904619,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sports \u0026 Activity Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5622275760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Winter Sports Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5611967489,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5615627481,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2563595808,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 2047219059,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 1024691763,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21,22",
      "offset": 30
    }
  ],
  "location": "Q3Page.enterCustomerDetails(String)"
});
formatter.result({
  "duration": 39344708920,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 14711542423,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 1011679637,
  "status": "passed"
});
formatter.after({
  "duration": 60394,
  "status": "passed"
});
formatter.uri("6_BigRedCover.feature");
formatter.feature({
  "line": 1,
  "name": "BIG RED COVER -",
  "description": "To Buy Big Red Cover Insurance on various conditions like age and number of travellers and validate\r\nthe confirmation page against data displayed on Q2, Q3 pages.\r\n\r\nIn order to Buy Big Red Cover from kangoCover Website as a customer, I want to validate confirm page against\r\nQ2 and Q3 Pages contents as per customer selection for various age group and Duration",
  "id": "big-red-cover--",
  "keyword": "Feature"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 1569008769,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "To Buy \"Winter Sports Cover\" and \"Sports and Activity Cover\" from Joey Cover and validate values from Q2, Q3",
  "description": "and Confirmation Page for duo",
  "id": "big-red-cover--;to-buy-\"winter-sports-cover\"-and-\"sports-and-activity-cover\"-from-joey-cover-and-validate-values-from-q2,-q3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@bigredcover_singletraveller"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I enter \"India\" as my destination",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter my Return Dates as \"30\" days from today",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter \"21,22\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on GetQuote",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "I select \"L5-Big Red Cover\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "I validate that standard Excess is \"$100\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I select \"Winter Sports Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I select \"Business Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter customer details for \"21,22\" years",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter creditcard details for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I agree to terms and conditions",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.myDestinationasSelected(String)"
});
formatter.result({
  "duration": 4568988657,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 28
    }
  ],
  "location": "HomePage.returnDate(int)"
});
formatter.result({
  "duration": 24388050295,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21,22",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3552121658,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 3044256316,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3035425847,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L5-Big Red Cover",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 7615215054,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2029118072,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100",
      "offset": 36
    }
  ],
  "location": "Q2APage.i_validate_that_standard_Excess_is(String)"
});
formatter.result({
  "duration": 2026708752,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double the Standard Excess",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 7621107982,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Winter Sports Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5582673575,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sports \u0026 Activity Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5593201092,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5592906277,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2537151967,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 2032877764,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 1019759582,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21,22",
      "offset": 30
    }
  ],
  "location": "Q3Page.enterCustomerDetails(String)"
});
formatter.result({
  "duration": 39020707852,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 14708130482,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 1020314359,
  "status": "passed"
});
formatter.after({
  "duration": 92320,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 1681648698,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 33,
      "value": "#And I click on Complete Purchase"
    },
    {
      "line": 34,
      "value": "#Then I validate Confirm Page"
    },
    {
      "line": 35,
      "value": "#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details"
    }
  ],
  "line": 38,
  "name": "To Buy \"Winter Sports Cover\" and \"Sports and Activity Cover\" from Big Red Cover and validate values from Q2, Q3",
  "description": "and Confirmation Page",
  "id": "big-red-cover--;to-buy-\"winter-sports-cover\"-and-\"sports-and-activity-cover\"-from-big-red-cover-and-validate-values-from-q2,-q3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@bigredcover_familytraveller"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "I enter \"India\" as my destination",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "I enter my Return Dates as \"30\" days from today",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I enter \"69\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I click on GetQuote",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I select \"L5-Big Red Cover\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I validate that standard Excess is \"$100\"",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "I select \"Winter Sports Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "I select \"Business Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then "
});
formatter.step({
  "line": 55,
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I enter customer details for \"69\" years",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I enter creditcard details for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I agree to terms and conditions",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.myDestinationasSelected(String)"
});
formatter.result({
  "duration": 4566862959,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 28
    }
  ],
  "location": "HomePage.returnDate(int)"
});
formatter.result({
  "duration": 24373461503,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "69",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3545051320,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 3037143592,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 2034021862,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L5-Big Red Cover",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 7612123436,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2032696176,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100",
      "offset": 36
    }
  ],
  "location": "Q2APage.i_validate_that_standard_Excess_is(String)"
});
formatter.result({
  "duration": 2026585240,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double the Standard Excess",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 7611746108,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Winter Sports Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5589774697,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sports \u0026 Activity Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5583070577,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5584782215,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2540591607,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 2029298641,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 1014600930,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "69",
      "offset": 30
    }
  ],
  "location": "Q3Page.enterCustomerDetails(String)"
});
formatter.result({
  "duration": 18239376879,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 14711382915,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 1017673565,
  "status": "passed"
});
formatter.after({
  "duration": 71033,
  "status": "passed"
});
formatter.background({
  "line": 8,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePage.goToWebsite()"
});
formatter.result({
  "duration": 1635529064,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 59,
      "value": "#And I click on Complete Purchase"
    },
    {
      "line": 60,
      "value": "#Then I validate Confirm Page"
    },
    {
      "line": 61,
      "value": "#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details"
    }
  ],
  "line": 64,
  "name": "To Buy \"Winter Sports Cover\" and \"Sports and Activity Cover\" from Joey Cover and validate values from Q2, Q3",
  "description": "and Confirmation Page for Family of two with a dependent",
  "id": "big-red-cover--;to-buy-\"winter-sports-cover\"-and-\"sports-and-activity-cover\"-from-joey-cover-and-validate-values-from-q2,-q3",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 63,
      "name": "@bigredcover_duotraveller"
    }
  ]
});
formatter.step({
  "line": 67,
  "name": "I enter \"India\" as my destination",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "I enter my Return Dates as \"30\" days from today",
  "keyword": "And "
});
formatter.step({
  "line": 69,
  "name": "I enter \"36,37,16\" as my Age",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I click on GetQuote",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I validate Q2 Page",
  "keyword": "Then "
});
formatter.step({
  "line": 72,
  "name": "I select \"L5-Big Red Cover\" and click next step",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "I validate Q2A Page",
  "keyword": "Then "
});
formatter.step({
  "line": 74,
  "name": "I validate that standard Excess is \"$100\"",
  "keyword": "Then "
});
formatter.step({
  "line": 75,
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 76,
  "name": "I select \"Winter Sports Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 77,
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 78,
  "name": "I select \"Business Cover\" Addon",
  "keyword": "When "
});
formatter.step({
  "line": 79,
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "I enter customer details for \"36,37,16\" years",
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "I enter creditcard details for Payment",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "I agree to terms and conditions",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.myDestinationasSelected(String)"
});
formatter.result({
  "duration": 4585492448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 28
    }
  ],
  "location": "HomePage.returnDate(int)"
});
formatter.result({
  "duration": 24395123809,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "36,37,16",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_Age(String)"
});
formatter.result({
  "duration": 3552804196,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 3041714758,
  "status": "passed"
});
formatter.match({
  "location": "Q2Page.i_validate_Q_Page()"
});
formatter.result({
  "duration": 3038477455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L5-Big Red Cover",
      "offset": 10
    }
  ],
  "location": "Q2Page.i_select_and_click_next_step(String)"
});
formatter.result({
  "duration": 7594681379,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2033864435,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$100",
      "offset": 36
    }
  ],
  "location": "Q2APage.i_validate_that_standard_Excess_is(String)"
});
formatter.result({
  "duration": 2029937747,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Double the Standard Excess",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 7608514947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Winter Sports Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5579005342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sports \u0026 Activity Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5582350285,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Business Cover",
      "offset": 10
    }
  ],
  "location": "Q2APage.i_select_Addon(String)"
});
formatter.result({
  "duration": 5581417223,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2531352643,
  "status": "passed"
});
formatter.match({
  "location": "EasternGreyCover.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 2024287600,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 1015447471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "36,37,16",
      "offset": 30
    }
  ],
  "location": "Q3Page.enterCustomerDetails(String)"
});
formatter.result({
  "duration": 51560211148,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 14725432848,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 1010982271,
  "status": "passed"
});
formatter.after({
  "duration": 67613,
  "status": "passed"
});
});