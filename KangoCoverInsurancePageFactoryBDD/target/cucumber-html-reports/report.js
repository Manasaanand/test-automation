$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("2_JoeyCover.feature");
formatter.feature({
  "id": "joey-cover--",
  "description": "To Buy Joey Cover Insurance on various conditions like age and number of travellers and validate\r\nthe confirmation page against data displayed on Q2, Q3 pages.\r\n\r\nIn order to Buy Joey Cover from kangoCover Website as a customer, I want to validate confirm page against\r\nQ2 and Q3 Pages contents as per customer selection for various age group and Duration",
  "name": "JOEY COVER -",
  "keyword": "Feature",
  "line": 1
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 8,
  "type": "background"
});
formatter.step({
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given ",
  "line": 9
});
formatter.match({
  "location": "BasePage.i_am_on_Simply_Travel_Insurance_WebSite_Home_Page()"
});
formatter.result({
  "duration": 7102728352,
  "status": "passed"
});
formatter.scenario({
  "id": "joey-cover--;to-buy-\"winter-sports-cover\"-and-\"sports-and-activity-cover\"-from-joey-cover-and-validate-values-from-q2,-q3",
  "tags": [
    {
      "name": "@joecover_singletraveller",
      "line": 11
    }
  ],
  "description": "and Confirmation Page",
  "name": "To Buy \"Winter Sports Cover\" and \"Sports and Activity Cover\" from Joey Cover and validate values from Q2, Q3",
  "keyword": "Scenario",
  "line": 12,
  "type": "scenario"
});
formatter.step({
  "name": "I enter \"India\" as my destination",
  "keyword": "When ",
  "line": 15
});
formatter.step({
  "name": "I enter my Return Dates as \"30\" days from today",
  "keyword": "And ",
  "line": 16
});
formatter.step({
  "name": "I enter \"64\" as my Age",
  "keyword": "And ",
  "line": 17
});
formatter.step({
  "name": "I click on GetQuote",
  "keyword": "And ",
  "line": 18
});
formatter.step({
  "name": "I validate Q2 Page",
  "keyword": "Then ",
  "line": 19
});
formatter.step({
  "name": "I select \"L1-Joey Cover\" and click next step",
  "keyword": "And ",
  "line": 20
});
formatter.step({
  "name": "I validate Q2A Page",
  "keyword": "Then ",
  "line": 21
});
formatter.step({
  "name": "I validate that standard Excess is \"$250\"",
  "keyword": "Then ",
  "line": 22
});
formatter.step({
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When ",
  "line": 23
});
formatter.step({
  "name": "I select \"Winter Sports Cover\" Addon",
  "keyword": "When ",
  "line": 24
});
formatter.step({
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When ",
  "line": 25
});
formatter.step({
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then ",
  "line": 26
});
formatter.step({
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then ",
  "line": 27
});
formatter.step({
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And ",
  "line": 28
});
formatter.step({
  "name": "I enter customer details for \"64\" years",
  "keyword": "And ",
  "line": 29
});
formatter.step({
  "name": "I enter creditcard details for Payment",
  "keyword": "And ",
  "line": 30
});
formatter.step({
  "name": "I agree to terms and conditions",
  "keyword": "And ",
  "line": 31
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_destination(String)"
});
formatter.result({
  "duration": 602297147,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 28
    }
  ],
  "location": "HomePage.i_enter_my_Return_Dates_as_days_from_today_date(int)"
});
formatter.result({
  "duration": 1484803965,
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
  "duration": 110806703,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 2244423381,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "Q2Page.i_validate_Q_Page(int)"
});
formatter.result({
  "duration": 148508892,
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
  "duration": 1097178071,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 1888207727,
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
  "duration": 120762617,
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
  "duration": 534670166,
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
  "duration": 445735261,
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
  "duration": 490401336,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2153824327,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 91373625,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 150310386,
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
  "duration": 2602942824,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 983109178,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 140543437,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 8,
  "type": "background"
});
formatter.step({
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given ",
  "line": 9
});
formatter.match({
  "location": "BasePage.i_am_on_Simply_Travel_Insurance_WebSite_Home_Page()"
});
formatter.result({
  "duration": 1513013896,
  "status": "passed"
});
formatter.scenario({
  "id": "joey-cover--;to-buy-\"winter-sports-cover\"-and-\"sports-and-activity-cover\"-from-joey-cover-and-validate-values-from-q2,-q3",
  "tags": [
    {
      "name": "@joecover_familytravellers",
      "line": 36
    }
  ],
  "description": "and Confirmation Page for Family of two with a dependent",
  "name": "To Buy \"Winter Sports Cover\" and \"Sports and Activity Cover\" from Joey Cover and validate values from Q2, Q3",
  "keyword": "Scenario",
  "line": 37,
  "type": "scenario",
  "comments": [
    {
      "value": "#And I click on Complete Purchase",
      "line": 32
    },
    {
      "value": "#Then I validate Confirm Page",
      "line": 33
    },
    {
      "value": "#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details",
      "line": 34
    }
  ]
});
formatter.step({
  "name": "I enter \"India\" as my destination",
  "keyword": "When ",
  "line": 40
});
formatter.step({
  "name": "I enter my Return Dates as \"30\" days from today",
  "keyword": "And ",
  "line": 41
});
formatter.step({
  "name": "I enter \"36,37,16\" as my Age",
  "keyword": "And ",
  "line": 42
});
formatter.step({
  "name": "I click on GetQuote",
  "keyword": "And ",
  "line": 43
});
formatter.step({
  "name": "I validate Q2 Page",
  "keyword": "Then ",
  "line": 44
});
formatter.step({
  "name": "I select \"L1-Joey Cover\" and click next step",
  "keyword": "And ",
  "line": 45
});
formatter.step({
  "name": "I validate Q2A Page",
  "keyword": "Then ",
  "line": 46
});
formatter.step({
  "name": "I validate that standard Excess is \"$250\"",
  "keyword": "Then ",
  "line": 47
});
formatter.step({
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When ",
  "line": 48
});
formatter.step({
  "name": "I select \"Winter Sports Cover\" Addon",
  "keyword": "When ",
  "line": 49
});
formatter.step({
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When ",
  "line": 50
});
formatter.step({
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then ",
  "line": 51
});
formatter.step({
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then ",
  "line": 52
});
formatter.step({
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And ",
  "line": 53
});
formatter.step({
  "name": "I enter customer details for \"36,37,16\" years",
  "keyword": "And ",
  "line": 54
});
formatter.step({
  "name": "I enter creditcard details for Payment",
  "keyword": "And ",
  "line": 55
});
formatter.step({
  "name": "I agree to terms and conditions",
  "keyword": "And ",
  "line": 56
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_destination(String)"
});
formatter.result({
  "duration": 509944292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 28
    }
  ],
  "location": "HomePage.i_enter_my_Return_Dates_as_days_from_today_date(int)"
});
formatter.result({
  "duration": 1712712640,
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
  "duration": 133927593,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 2533558117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "Q2Page.i_validate_Q_Page(int)"
});
formatter.result({
  "duration": 45394462,
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
  "duration": 1840204600,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 4940378018,
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
  "duration": 166579681,
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
  "duration": 585657472,
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
  "duration": 436178102,
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
  "duration": 428308337,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2333828583,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 95366615,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 134497805,
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
  "duration": 4634094974,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 816012413,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 136573387,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 8,
  "type": "background"
});
formatter.step({
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given ",
  "line": 9
});
formatter.match({
  "location": "BasePage.i_am_on_Simply_Travel_Insurance_WebSite_Home_Page()"
});
formatter.result({
  "duration": 1125136554,
  "status": "passed"
});
formatter.scenario({
  "id": "joey-cover--;to-buy-\"winter-sports-cover\"-and-\"sports-and-activity-cover\"-from-joey-cover-and-validate-values-from-q2,-q3",
  "tags": [
    {
      "name": "@joecover_duotravellers",
      "line": 62
    }
  ],
  "description": "and Confirmation Page for duo",
  "name": "To Buy \"Winter Sports Cover\" and \"Sports and Activity Cover\" from Joey Cover and validate values from Q2, Q3",
  "keyword": "Scenario",
  "line": 63,
  "type": "scenario",
  "comments": [
    {
      "value": "#And I click on Complete Purchase",
      "line": 57
    },
    {
      "value": "#Then I validate Confirm Page",
      "line": 58
    },
    {
      "value": "#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details",
      "line": 59
    }
  ]
});
formatter.step({
  "name": "I enter \"India\" as my destination",
  "keyword": "When ",
  "line": 66
});
formatter.step({
  "name": "I enter my Return Dates as \"30\" days from today",
  "keyword": "And ",
  "line": 67
});
formatter.step({
  "name": "I enter \"21,22\" as my Age",
  "keyword": "And ",
  "line": 68
});
formatter.step({
  "name": "I click on GetQuote",
  "keyword": "And ",
  "line": 69
});
formatter.step({
  "name": "I validate Q2 Page",
  "keyword": "Then ",
  "line": 70
});
formatter.step({
  "name": "I select \"L1-Joey Cover\" and click next step",
  "keyword": "And ",
  "line": 71
});
formatter.step({
  "name": "I validate Q2A Page",
  "keyword": "Then ",
  "line": 72
});
formatter.step({
  "name": "I validate that standard Excess is \"$250\"",
  "keyword": "Then ",
  "line": 73
});
formatter.step({
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When ",
  "line": 74
});
formatter.step({
  "name": "I select \"Winter Sports Cover\" Addon",
  "keyword": "When ",
  "line": 75
});
formatter.step({
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When ",
  "line": 76
});
formatter.step({
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then ",
  "line": 77
});
formatter.step({
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then ",
  "line": 78
});
formatter.step({
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And ",
  "line": 79
});
formatter.step({
  "name": "I enter customer details for \"21,22\" years",
  "keyword": "And ",
  "line": 80
});
formatter.step({
  "name": "I enter creditcard details for Payment",
  "keyword": "And ",
  "line": 81
});
formatter.step({
  "name": "I agree to terms and conditions",
  "keyword": "And ",
  "line": 82
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_destination(String)"
});
formatter.result({
  "duration": 435594308,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 28
    }
  ],
  "location": "HomePage.i_enter_my_Return_Dates_as_days_from_today_date(int)"
});
formatter.result({
  "duration": 1640855106,
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
  "duration": 257404526,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 2494636418,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "Q2Page.i_validate_Q_Page(int)"
});
formatter.result({
  "duration": 43455018,
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
  "duration": 1653864022,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 1585296146,
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
  "duration": 135714901,
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
  "duration": 768689977,
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
  "duration": 471578315,
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
  "duration": 432715176,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2911523316,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 103739882,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 148663746,
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
  "duration": 3894706148,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 885248906,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 132962248,
  "status": "passed"
});
formatter.uri("3_RockWallabyCover.feature");
formatter.feature({
  "id": "rockwallaby-cover--",
  "description": "To Buy Rock Wallaby Cover Insurance on various conditions like age and number of travellers and validate\r\nthe confirmation page against data displayed on Q2, Q3 pages.\r\n\r\nIn order to Buy Rock Wallaby Cover from kangoCover Website as a customer, I want to validate confirm page against\r\nQ2 and Q3 Pages contents as per customer selection for various age group and Duration",
  "name": "ROCKWALLABY COVER -",
  "keyword": "Feature",
  "line": 1
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 8,
  "type": "background"
});
formatter.step({
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given ",
  "line": 9
});
formatter.match({
  "location": "BasePage.i_am_on_Simply_Travel_Insurance_WebSite_Home_Page()"
});
formatter.result({
  "duration": 1276309955,
  "status": "passed"
});
formatter.scenario({
  "id": "rockwallaby-cover--;to-buy-\"winter-sports-cover\",-\"sports-and-activity-cover\"-and-\"high-value-items\"-from-rock-wallaby-cover-and-validate-values-from-q2,-q3",
  "tags": [
    {
      "name": "@rockwallaby_singletraveller",
      "line": 11
    }
  ],
  "description": "and Confirmation Page",
  "name": "To Buy \"Winter Sports Cover\", \"Sports and Activity Cover\" and \"High Value Items\" from Rock Wallaby Cover and validate values from Q2, Q3",
  "keyword": "Scenario",
  "line": 12,
  "type": "scenario"
});
formatter.step({
  "name": "I enter \"India\" as my destination",
  "keyword": "When ",
  "line": 15
});
formatter.step({
  "name": "I enter my Return Dates as \"30\" days from today",
  "keyword": "And ",
  "line": 16
});
formatter.step({
  "name": "I enter \"45\" as my Age",
  "keyword": "And ",
  "line": 17
});
formatter.step({
  "name": "I click on GetQuote",
  "keyword": "And ",
  "line": 18
});
formatter.step({
  "name": "I validate Q2 Page",
  "keyword": "Then ",
  "line": 19
});
formatter.step({
  "name": "I select \"L2-Rock Wallaby Cover\" and click next step",
  "keyword": "And ",
  "line": 20
});
formatter.step({
  "name": "I validate Q2A Page",
  "keyword": "Then ",
  "line": 21
});
formatter.step({
  "name": "I validate that standard Excess is \"$150\"",
  "keyword": "Then ",
  "line": 22
});
formatter.step({
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When ",
  "line": 23
});
formatter.step({
  "name": "I select \"Winter Sports Cover\" Addon",
  "keyword": "When ",
  "line": 24
});
formatter.step({
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When ",
  "line": 25
});
formatter.step({
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then ",
  "line": 26
});
formatter.step({
  "name": "I select \"High Value Items\" Addon",
  "keyword": "When ",
  "line": 27
});
formatter.step({
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then ",
  "line": 28
});
formatter.step({
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And ",
  "line": 29
});
formatter.step({
  "name": "I enter customer details for \"45\" years",
  "keyword": "And ",
  "line": 30
});
formatter.step({
  "name": "I enter creditcard details for Payment",
  "keyword": "And ",
  "line": 31
});
formatter.step({
  "name": "I agree to terms and conditions",
  "keyword": "And ",
  "line": 32
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_destination(String)"
});
formatter.result({
  "duration": 436897735,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 28
    }
  ],
  "location": "HomePage.i_enter_my_Return_Dates_as_days_from_today_date(int)"
});
formatter.result({
  "duration": 1696744601,
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
  "duration": 228381085,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 2963682137,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "Q2Page.i_validate_Q_Page(int)"
});
formatter.result({
  "duration": 48084629,
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
  "duration": 1346776221,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 1571544657,
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
  "duration": 167318934,
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
  "duration": 649257653,
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
  "duration": 570662022,
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
  "duration": 433804284,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2495090113,
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
  "duration": 1060153858,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 104939771,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 149716026,
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
  "duration": 2645944449,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 876296673,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 135873075,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 8,
  "type": "background"
});
formatter.step({
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given ",
  "line": 9
});
formatter.match({
  "location": "BasePage.i_am_on_Simply_Travel_Insurance_WebSite_Home_Page()"
});
formatter.result({
  "duration": 6280403163,
  "status": "passed"
});
formatter.scenario({
  "id": "rockwallaby-cover--;to-buy-\"winter-sports-cover\",-\"sports-and-activity-cover\"-and-\"high-value-items\"-from-rock-wallaby-cover-and-validate-values-from-q2,-q3",
  "tags": [
    {
      "name": "@rockwallaby_familytravellers",
      "line": 38
    }
  ],
  "description": "and Confirmation Page for Family of two with a dependent",
  "name": "To Buy \"Winter Sports Cover\", \"Sports and Activity Cover\" and \"High Value Items\" from Rock Wallaby Cover and validate values from Q2, Q3",
  "keyword": "Scenario",
  "line": 39,
  "type": "scenario",
  "comments": [
    {
      "value": "#And I click on Complete Purchase",
      "line": 33
    },
    {
      "value": "#Then I validate Confirm Page",
      "line": 34
    },
    {
      "value": "#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details",
      "line": 35
    }
  ]
});
formatter.step({
  "name": "I enter \"India\" as my destination",
  "keyword": "When ",
  "line": 42
});
formatter.step({
  "name": "I enter my Return Dates as \"30\" days from today",
  "keyword": "And ",
  "line": 43
});
formatter.step({
  "name": "I enter \"36,37,16\" as my Age",
  "keyword": "And ",
  "line": 44
});
formatter.step({
  "name": "I click on GetQuote",
  "keyword": "And ",
  "line": 45
});
formatter.step({
  "name": "I validate Q2 Page",
  "keyword": "Then ",
  "line": 46
});
formatter.step({
  "name": "I select \"L2-Rock Wallaby Cover\" and click next step",
  "keyword": "And ",
  "line": 47
});
formatter.step({
  "name": "I validate Q2A Page",
  "keyword": "Then ",
  "line": 48
});
formatter.step({
  "name": "I validate that standard Excess is \"$150\"",
  "keyword": "Then ",
  "line": 49
});
formatter.step({
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When ",
  "line": 50
});
formatter.step({
  "name": "I select \"Winter Sports Cover\" Addon",
  "keyword": "When ",
  "line": 51
});
formatter.step({
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When ",
  "line": 52
});
formatter.step({
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then ",
  "line": 53
});
formatter.step({
  "name": "I select \"High Value Items\" Addon",
  "keyword": "When ",
  "line": 54
});
formatter.step({
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then ",
  "line": 55
});
formatter.step({
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And ",
  "line": 56
});
formatter.step({
  "name": "I enter customer details for \"36,37,16\" years",
  "keyword": "And ",
  "line": 57
});
formatter.step({
  "name": "I enter creditcard details for Payment",
  "keyword": "And ",
  "line": 58
});
formatter.step({
  "name": "I agree to terms and conditions",
  "keyword": "And ",
  "line": 59
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_destination(String)"
});
formatter.result({
  "duration": 533026242,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 28
    }
  ],
  "location": "HomePage.i_enter_my_Return_Dates_as_days_from_today_date(int)"
});
formatter.result({
  "duration": 1627815703,
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
  "duration": 135409419,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 2888035366,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "Q2Page.i_validate_Q_Page(int)"
});
formatter.result({
  "duration": 47393372,
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
  "duration": 1378491037,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 1467362552,
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
  "duration": 122171392,
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
  "duration": 519854323,
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
  "duration": 430707512,
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
  "duration": 433053862,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2539044405,
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
  "duration": 1116345514,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 93204098,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 143991573,
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
  "duration": 4826003644,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 843447773,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 141867994,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 8,
  "type": "background"
});
formatter.step({
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given ",
  "line": 9
});
formatter.match({
  "location": "BasePage.i_am_on_Simply_Travel_Insurance_WebSite_Home_Page()"
});
formatter.result({
  "duration": 1497696363,
  "status": "passed"
});
formatter.scenario({
  "id": "rockwallaby-cover--;to-buy-\"winter-sports-cover\",-\"sports-and-activity-cover\"-and-\"high-value-items\"-from-rock-wallaby-cover-and-validate-values-from-q2,-q3",
  "tags": [
    {
      "name": "@rockwallaby_duotravellers",
      "line": 65
    }
  ],
  "description": "and Confirmation Page for duo",
  "name": "To Buy \"Winter Sports Cover\", \"Sports and Activity Cover\" and \"High Value Items\" from Rock Wallaby Cover and validate values from Q2, Q3",
  "keyword": "Scenario",
  "line": 66,
  "type": "scenario",
  "comments": [
    {
      "value": "#And I click on Complete Purchase",
      "line": 60
    },
    {
      "value": "#Then I validate Confirm Page",
      "line": 61
    },
    {
      "value": "#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details",
      "line": 62
    }
  ]
});
formatter.step({
  "name": "I enter \"India\" as my destination",
  "keyword": "When ",
  "line": 69
});
formatter.step({
  "name": "I enter my Return Dates as \"30\" days from today",
  "keyword": "And ",
  "line": 70
});
formatter.step({
  "name": "I enter \"21,22\" as my Age",
  "keyword": "And ",
  "line": 71
});
formatter.step({
  "name": "I click on GetQuote",
  "keyword": "And ",
  "line": 72
});
formatter.step({
  "name": "I validate Q2 Page",
  "keyword": "Then ",
  "line": 73
});
formatter.step({
  "name": "I select \"L2-Rock Wallaby Cover\" and click next step",
  "keyword": "And ",
  "line": 74
});
formatter.step({
  "name": "I validate Q2A Page",
  "keyword": "Then ",
  "line": 75
});
formatter.step({
  "name": "I validate that standard Excess is \"$150\"",
  "keyword": "Then ",
  "line": 76
});
formatter.step({
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When ",
  "line": 77
});
formatter.step({
  "name": "I select \"Winter Sports Cover\" Addon",
  "keyword": "When ",
  "line": 78
});
formatter.step({
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When ",
  "line": 79
});
formatter.step({
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then ",
  "line": 80
});
formatter.step({
  "name": "I select \"High Value Items\" Addon",
  "keyword": "When ",
  "line": 81
});
formatter.step({
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then ",
  "line": 82
});
formatter.step({
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And ",
  "line": 83
});
formatter.step({
  "name": "I enter customer details for \"21,22\" years",
  "keyword": "And ",
  "line": 84
});
formatter.step({
  "name": "I enter creditcard details for Payment",
  "keyword": "And ",
  "line": 85
});
formatter.step({
  "name": "I agree to terms and conditions",
  "keyword": "And ",
  "line": 86
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_destination(String)"
});
formatter.result({
  "duration": 452461585,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 28
    }
  ],
  "location": "HomePage.i_enter_my_Return_Dates_as_days_from_today_date(int)"
});
formatter.result({
  "duration": 1772385335,
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
  "duration": 143534557,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 2501823078,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "Q2Page.i_validate_Q_Page(int)"
});
formatter.result({
  "duration": 49530836,
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
  "duration": 1326125142,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 2465696593,
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
  "duration": 111971577,
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
  "duration": 450679409,
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
  "duration": 370269605,
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
  "duration": 370840119,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 3285572498,
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
  "duration": 991885729,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 73325173,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 120548900,
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
  "duration": 3605289476,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 703190499,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 115458048,
  "status": "passed"
});
formatter.uri("4_WallabyCover.feature");
formatter.feature({
  "id": "wallaby-cover--",
  "description": "To Buy Wallaby Cover Insurance on various conditions like age and number of travellers and validate\r\nthe confirmation page against data displayed on Q2, Q3 pages.\r\n\r\nIn order to Buy Wallaby Cover from kangoCover Website as a customer, I want to validate confirm page against\r\nQ2 and Q3 Pages contents as per customer selection for various age group and Duration",
  "name": "WALLABY COVER -",
  "keyword": "Feature",
  "line": 1
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 8,
  "type": "background"
});
formatter.step({
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given ",
  "line": 9
});
formatter.match({
  "location": "BasePage.i_am_on_Simply_Travel_Insurance_WebSite_Home_Page()"
});
formatter.result({
  "duration": 1624043070,
  "status": "passed"
});
formatter.scenario({
  "id": "wallaby-cover--;to-buy-\"winter-sports-cover\",-\"sports-and-activity-cover\"-and-\"high-value-items\"-from-wallaby-cover-and-validate-values-from-q2,-q3",
  "tags": [
    {
      "name": "@wallabycover_singletraveller",
      "line": 11
    }
  ],
  "description": "and Confirmation Page",
  "name": "To Buy \"Winter Sports Cover\", \"Sports and Activity Cover\" and \"High Value Items\" from Wallaby Cover and validate values from Q2, Q3",
  "keyword": "Scenario",
  "line": 12,
  "type": "scenario"
});
formatter.step({
  "name": "I enter \"India\" as my destination",
  "keyword": "When ",
  "line": 15
});
formatter.step({
  "name": "I enter my Return Dates as \"30\" days from today",
  "keyword": "And ",
  "line": 16
});
formatter.step({
  "name": "I enter \"45\" as my Age",
  "keyword": "And ",
  "line": 17
});
formatter.step({
  "name": "I click on GetQuote",
  "keyword": "And ",
  "line": 18
});
formatter.step({
  "name": "I validate Q2 Page",
  "keyword": "Then ",
  "line": 19
});
formatter.step({
  "name": "I select \"L3-Wallaby Cover\" and click next step",
  "keyword": "And ",
  "line": 20
});
formatter.step({
  "name": "I validate Q2A Page",
  "keyword": "Then ",
  "line": 21
});
formatter.step({
  "name": "I validate that standard Excess is \"$150\"",
  "keyword": "Then ",
  "line": 22
});
formatter.step({
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When ",
  "line": 23
});
formatter.step({
  "name": "I select \"Winter Sports Cover\" Addon",
  "keyword": "When ",
  "line": 24
});
formatter.step({
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When ",
  "line": 25
});
formatter.step({
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then ",
  "line": 26
});
formatter.step({
  "name": "I select \"High Value Items\" Addon",
  "keyword": "When ",
  "line": 27
});
formatter.step({
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then ",
  "line": 28
});
formatter.step({
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And ",
  "line": 29
});
formatter.step({
  "name": "I enter customer details for \"45\" years",
  "keyword": "And ",
  "line": 30
});
formatter.step({
  "name": "I enter creditcard details for Payment",
  "keyword": "And ",
  "line": 31
});
formatter.step({
  "name": "I agree to terms and conditions",
  "keyword": "And ",
  "line": 32
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_destination(String)"
});
formatter.result({
  "duration": 397591166,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 28
    }
  ],
  "location": "HomePage.i_enter_my_Return_Dates_as_days_from_today_date(int)"
});
formatter.result({
  "duration": 1571072852,
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
  "duration": 101549895,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 2845831855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "Q2Page.i_validate_Q_Page(int)"
});
formatter.result({
  "duration": 40568944,
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
  "duration": 861552672,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 1906229917,
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
  "duration": 104439591,
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
  "duration": 420805933,
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
  "duration": 386358690,
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
  "duration": 372369940,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 3340949437,
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
  "duration": 1110685054,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 88179957,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 134244545,
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
  "duration": 3107360982,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 715298064,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 113825897,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 8,
  "type": "background"
});
formatter.step({
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given ",
  "line": 9
});
formatter.match({
  "location": "BasePage.i_am_on_Simply_Travel_Insurance_WebSite_Home_Page()"
});
formatter.result({
  "duration": 1264585148,
  "status": "passed"
});
formatter.scenario({
  "id": "wallaby-cover--;to-buy-\"winter-sports-cover\",-\"sports-and-activity-cover\"-and-\"high-value-items\"-from-wallaby-cover-and-validate-values-from-q2,-q3",
  "tags": [
    {
      "name": "@wallabycover_familytravellers",
      "line": 38
    }
  ],
  "description": "and Confirmation Page for Family of two with a dependent",
  "name": "To Buy \"Winter Sports Cover\", \"Sports and Activity Cover\" and \"High Value Items\" from Wallaby Cover and validate values from Q2, Q3",
  "keyword": "Scenario",
  "line": 39,
  "type": "scenario",
  "comments": [
    {
      "value": "#And I click on Complete Purchase",
      "line": 33
    },
    {
      "value": "#Then I validate Confirm Page",
      "line": 34
    },
    {
      "value": "#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details",
      "line": 35
    }
  ]
});
formatter.step({
  "name": "I enter \"India\" as my destination",
  "keyword": "When ",
  "line": 42
});
formatter.step({
  "name": "I enter my Return Dates as \"30\" days from today",
  "keyword": "And ",
  "line": 43
});
formatter.step({
  "name": "I enter \"36,37,16\" as my Age",
  "keyword": "And ",
  "line": 44
});
formatter.step({
  "name": "I click on GetQuote",
  "keyword": "And ",
  "line": 45
});
formatter.step({
  "name": "I validate Q2 Page",
  "keyword": "Then ",
  "line": 46
});
formatter.step({
  "name": "I select \"L3-Wallaby Cover\" and click next step",
  "keyword": "And ",
  "line": 47
});
formatter.step({
  "name": "I validate Q2A Page",
  "keyword": "Then ",
  "line": 48
});
formatter.step({
  "name": "I validate that standard Excess is \"$150\"",
  "keyword": "Then ",
  "line": 49
});
formatter.step({
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When ",
  "line": 50
});
formatter.step({
  "name": "I select \"Winter Sports Cover\" Addon",
  "keyword": "When ",
  "line": 51
});
formatter.step({
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When ",
  "line": 52
});
formatter.step({
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then ",
  "line": 53
});
formatter.step({
  "name": "I select \"High Value Items\" Addon",
  "keyword": "When ",
  "line": 54
});
formatter.step({
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then ",
  "line": 55
});
formatter.step({
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And ",
  "line": 56
});
formatter.step({
  "name": "I enter customer details for \"36,37,16\" years",
  "keyword": "And ",
  "line": 57
});
formatter.step({
  "name": "I enter creditcard details for Payment",
  "keyword": "And ",
  "line": 58
});
formatter.step({
  "name": "I agree to terms and conditions",
  "keyword": "And ",
  "line": 59
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_destination(String)"
});
formatter.result({
  "duration": 392272711,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 28
    }
  ],
  "location": "HomePage.i_enter_my_Return_Dates_as_days_from_today_date(int)"
});
formatter.result({
  "duration": 1539213144,
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
  "duration": 118719635,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 3404125809,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "Q2Page.i_validate_Q_Page(int)"
});
formatter.result({
  "duration": 43669035,
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
  "duration": 834799512,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 1531442388,
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
  "duration": 104774956,
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
  "duration": 421577787,
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
  "duration": 382543494,
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
  "duration": 360949407,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2303899566,
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
  "duration": 1034097087,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 100329781,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 116140854,
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
  "duration": 3841927611,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 702905846,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 126523293,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 8,
  "type": "background"
});
formatter.step({
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given ",
  "line": 9
});
formatter.match({
  "location": "BasePage.i_am_on_Simply_Travel_Insurance_WebSite_Home_Page()"
});
formatter.result({
  "duration": 1255443348,
  "status": "passed"
});
formatter.scenario({
  "id": "wallaby-cover--;to-buy-\"winter-sports-cover\",-\"sports-and-activity-cover\"-and-\"high-value-items\"-from-wallaby-cover-and-validate-values-from-q2,-q3",
  "tags": [
    {
      "name": "@wallabycover_duotravellers",
      "line": 65
    }
  ],
  "description": "and Confirmation Page for duo",
  "name": "To Buy \"Winter Sports Cover\", \"Sports and Activity Cover\" and \"High Value Items\" from Wallaby Cover and validate values from Q2, Q3",
  "keyword": "Scenario",
  "line": 66,
  "type": "scenario",
  "comments": [
    {
      "value": "#And I click on Complete Purchase",
      "line": 60
    },
    {
      "value": "#Then I validate Confirm Page",
      "line": 61
    },
    {
      "value": "#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details",
      "line": 62
    }
  ]
});
formatter.step({
  "name": "I enter \"India\" as my destination",
  "keyword": "When ",
  "line": 69
});
formatter.step({
  "name": "I enter my Return Dates as \"30\" days from today",
  "keyword": "And ",
  "line": 70
});
formatter.step({
  "name": "I enter \"21,22\" as my Age",
  "keyword": "And ",
  "line": 71
});
formatter.step({
  "name": "I click on GetQuote",
  "keyword": "And ",
  "line": 72
});
formatter.step({
  "name": "I validate Q2 Page",
  "keyword": "Then ",
  "line": 73
});
formatter.step({
  "name": "I select \"L3-Wallaby Cover\" and click next step",
  "keyword": "And ",
  "line": 74
});
formatter.step({
  "name": "I validate Q2A Page",
  "keyword": "Then ",
  "line": 75
});
formatter.step({
  "name": "I validate that standard Excess is \"$150\"",
  "keyword": "Then ",
  "line": 76
});
formatter.step({
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When ",
  "line": 77
});
formatter.step({
  "name": "I select \"Winter Sports Cover\" Addon",
  "keyword": "When ",
  "line": 78
});
formatter.step({
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When ",
  "line": 79
});
formatter.step({
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then ",
  "line": 80
});
formatter.step({
  "name": "I select \"High Value Items\" Addon",
  "keyword": "When ",
  "line": 81
});
formatter.step({
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then ",
  "line": 82
});
formatter.step({
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And ",
  "line": 83
});
formatter.step({
  "name": "I enter customer details for \"21,22\" years",
  "keyword": "And ",
  "line": 84
});
formatter.step({
  "name": "I enter creditcard details for Payment",
  "keyword": "And ",
  "line": 85
});
formatter.step({
  "name": "I agree to terms and conditions",
  "keyword": "And ",
  "line": 86
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_destination(String)"
});
formatter.result({
  "duration": 404536337,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 28
    }
  ],
  "location": "HomePage.i_enter_my_Return_Dates_as_days_from_today_date(int)"
});
formatter.result({
  "duration": 1595951165,
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
  "duration": 108635733,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 2404620555,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "Q2Page.i_validate_Q_Page(int)"
});
formatter.result({
  "duration": 49302027,
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
  "duration": 825486257,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 1464775620,
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
  "duration": 98123191,
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
  "duration": 531127247,
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
  "duration": 523586809,
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
  "duration": 372219011,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2253135334,
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
  "duration": 1081297873,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 87306678,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 128971672,
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
  "duration": 3830159035,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 754937282,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 121889154,
  "status": "passed"
});
formatter.uri("5_EasternGreyCover.feature");
formatter.feature({
  "id": "eastern-grey-cover--",
  "description": "To Buy L4-Eastern Grey Cover Insurance on various conditions like age and number of travellers and validate\r\nthe confirmation page against data displayed on Q2, Q3 pages.\r\n\r\nIn order to Buy Annual 60 days (Excludes Wintersports) Cover from kangoCover Website as a customer, I want to validate confirm page against\r\nQ2 and Q3 Pages contents as per customer selection for various age group and Duration",
  "name": "EASTERN GREY COVER -",
  "keyword": "Feature",
  "line": 1
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 8,
  "type": "background"
});
formatter.step({
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given ",
  "line": 9
});
formatter.match({
  "location": "BasePage.i_am_on_Simply_Travel_Insurance_WebSite_Home_Page()"
});
formatter.result({
  "duration": 1246790560,
  "status": "passed"
});
formatter.scenario({
  "id": "eastern-grey-cover--;to-buy-\"winter-sports-cover\",-\"sports-and-activity-cover\",-\"business-cover\"-and-\"high-value-items\"-from-annual-60-days-(excludes-wintersports)-cover-and-validate-values-from-q2,-q3",
  "tags": [
    {
      "name": "@easterngreycover_singletraveller",
      "line": 11
    }
  ],
  "description": "and Confirmation Page",
  "name": "To Buy \"Winter Sports Cover\", \"Sports and Activity Cover\", \"Business Cover\" and \"High Value Items\" from Annual 60 days (Excludes Wintersports) Cover and validate values from Q2, Q3",
  "keyword": "Scenario",
  "line": 12,
  "type": "scenario"
});
formatter.step({
  "name": "I enter \"India\" as my destination",
  "keyword": "When ",
  "line": 15
});
formatter.step({
  "name": "I enter my Return Dates as \"60\" days from today",
  "keyword": "And ",
  "line": 16
});
formatter.step({
  "name": "I enter \"64\" as my Age",
  "keyword": "And ",
  "line": 17
});
formatter.step({
  "name": "I click on GetQuote",
  "keyword": "And ",
  "line": 18
});
formatter.step({
  "name": "I validate Q2 Page",
  "keyword": "Then ",
  "line": 19
});
formatter.step({
  "name": "I select \"L4-Eastern Grey Cover\" and click next step",
  "keyword": "And ",
  "line": 20
});
formatter.step({
  "name": "I validate Q2A Page",
  "keyword": "Then ",
  "line": 21
});
formatter.step({
  "name": "I validate that standard Excess is \"$100\"",
  "keyword": "Then ",
  "line": 22
});
formatter.step({
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When ",
  "line": 23
});
formatter.step({
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When ",
  "line": 24
});
formatter.step({
  "name": "I select \"Winter Sports Cover\" Addon",
  "keyword": "When ",
  "line": 25
});
formatter.step({
  "name": "I select \"Business Cover\" Addon",
  "keyword": "When ",
  "line": 26
});
formatter.step({
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then ",
  "line": 27
});
formatter.step({
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then ",
  "line": 28
});
formatter.step({
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And ",
  "line": 29
});
formatter.step({
  "name": "I enter customer details for \"64\" years",
  "keyword": "And ",
  "line": 30
});
formatter.step({
  "name": "I enter creditcard details for Payment",
  "keyword": "And ",
  "line": 31
});
formatter.step({
  "name": "I agree to terms and conditions",
  "keyword": "And ",
  "line": 32
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_destination(String)"
});
formatter.result({
  "duration": 395896227,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60",
      "offset": 28
    }
  ],
  "location": "HomePage.i_enter_my_Return_Dates_as_days_from_today_date(int)"
});
formatter.result({
  "duration": 1291294537,
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
  "duration": 98021767,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 3545123544,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "Q2Page.i_validate_Q_Page(int)"
});
formatter.result({
  "duration": 41803547,
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
  "duration": 703244230,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 1608053297,
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
  "duration": 99973588,
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
  "duration": 421162429,
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
  "duration": 404645308,
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
  "duration": 564830408,
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
  "duration": 2743653188,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2713677382,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 73952135,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 143217606,
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
  "duration": 2768082335,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 766560363,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 115193922,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 8,
  "type": "background"
});
formatter.step({
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given ",
  "line": 9
});
formatter.match({
  "location": "BasePage.i_am_on_Simply_Travel_Insurance_WebSite_Home_Page()"
});
formatter.result({
  "duration": 1219901563,
  "status": "passed"
});
formatter.scenario({
  "id": "eastern-grey-cover--;to-buy-\"winter-sports-cover\",-\"sports-and-activity-cover\",-\"business-cover\"-and-\"high-value-items\"-from-annual-60-days-(excludes-wintersports)-cover-and-validate-values-from-q2,-q3",
  "tags": [
    {
      "name": "@easterngreycover_familytravellers",
      "line": 38
    }
  ],
  "description": "and Confirmation Page for Family of two with a dependent",
  "name": "To Buy \"Winter Sports Cover\", \"Sports and Activity Cover\", \"Business Cover\" and \"High Value Items\" from Annual 60 days (Excludes Wintersports) Cover and validate values from Q2, Q3",
  "keyword": "Scenario",
  "line": 39,
  "type": "scenario",
  "comments": [
    {
      "value": "#And I click on Complete Purchase",
      "line": 33
    },
    {
      "value": "#Then I validate Confirm Page",
      "line": 34
    },
    {
      "value": "#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details",
      "line": 35
    }
  ]
});
formatter.step({
  "name": "I enter \"India\" as my destination",
  "keyword": "When ",
  "line": 42
});
formatter.step({
  "name": "I enter my Return Dates as \"60\" days from today",
  "keyword": "And ",
  "line": 43
});
formatter.step({
  "name": "I enter \"36,37,16\" as my Age",
  "keyword": "And ",
  "line": 44
});
formatter.step({
  "name": "I click on GetQuote",
  "keyword": "And ",
  "line": 45
});
formatter.step({
  "name": "I validate Q2 Page",
  "keyword": "Then ",
  "line": 46
});
formatter.step({
  "name": "I select \"L4-Eastern Grey Cover\" and click next step",
  "keyword": "And ",
  "line": 47
});
formatter.step({
  "name": "I validate Q2A Page",
  "keyword": "Then ",
  "line": 48
});
formatter.step({
  "name": "I validate that standard Excess is \"$100\"",
  "keyword": "Then ",
  "line": 49
});
formatter.step({
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When ",
  "line": 50
});
formatter.step({
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When ",
  "line": 51
});
formatter.step({
  "name": "I select \"Winter Sports Cover\" Addon",
  "keyword": "When ",
  "line": 52
});
formatter.step({
  "name": "I select \"Business Cover\" Addon",
  "keyword": "When ",
  "line": 53
});
formatter.step({
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then ",
  "line": 54
});
formatter.step({
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then ",
  "line": 55
});
formatter.step({
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And ",
  "line": 56
});
formatter.step({
  "name": "I enter customer details for \"36,37,16\" years",
  "keyword": "And ",
  "line": 57
});
formatter.step({
  "name": "I enter creditcard details for Payment",
  "keyword": "And ",
  "line": 58
});
formatter.step({
  "name": "I agree to terms and conditions",
  "keyword": "And ",
  "line": 59
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_destination(String)"
});
formatter.result({
  "duration": 397255800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60",
      "offset": 28
    }
  ],
  "location": "HomePage.i_enter_my_Return_Dates_as_days_from_today_date(int)"
});
formatter.result({
  "duration": 1293491769,
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
  "duration": 228912357,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 2813842046,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "Q2Page.i_validate_Q_Page(int)"
});
formatter.result({
  "duration": 41294009,
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
  "duration": 763576184,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 1438808200,
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
  "duration": 104632781,
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
  "duration": 489004635,
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
  "duration": 364775771,
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
  "duration": 365437144,
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
  "duration": 2847630331,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2239641331,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 74974531,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 121849309,
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
  "duration": 4484283258,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 758226639,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 136833287,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 8,
  "type": "background"
});
formatter.step({
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given ",
  "line": 9
});
formatter.match({
  "location": "BasePage.i_am_on_Simply_Travel_Insurance_WebSite_Home_Page()"
});
formatter.result({
  "duration": 1295484340,
  "status": "passed"
});
formatter.scenario({
  "id": "eastern-grey-cover--;to-buy-\"winter-sports-cover\",-\"sports-and-activity-cover\",-\"business-cover\"-and-\"high-value-items\"-from-annual-60-days-(excludes-wintersports)-cover-and-validate-values-from-q2,-q3",
  "tags": [
    {
      "name": "@easterngreycover_duotravellers",
      "line": 65
    }
  ],
  "description": "and Confirmation Page for duo",
  "name": "To Buy \"Winter Sports Cover\", \"Sports and Activity Cover\", \"Business Cover\" and \"High Value Items\" from Annual 60 days (Excludes Wintersports) Cover and validate values from Q2, Q3",
  "keyword": "Scenario",
  "line": 66,
  "type": "scenario",
  "comments": [
    {
      "value": "#And I click on Complete Purchase",
      "line": 60
    },
    {
      "value": "#Then I validate Confirm Page",
      "line": 61
    },
    {
      "value": "#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details",
      "line": 62
    }
  ]
});
formatter.step({
  "name": "I enter \"India\" as my destination",
  "keyword": "When ",
  "line": 69
});
formatter.step({
  "name": "I enter my Return Dates as \"60\" days from today",
  "keyword": "And ",
  "line": 70
});
formatter.step({
  "name": "I enter \"21,22\" as my Age",
  "keyword": "And ",
  "line": 71
});
formatter.step({
  "name": "I click on GetQuote",
  "keyword": "And ",
  "line": 72
});
formatter.step({
  "name": "I validate Q2 Page",
  "keyword": "Then ",
  "line": 73
});
formatter.step({
  "name": "I select \"L4-Eastern Grey Cover\" and click next step",
  "keyword": "And ",
  "line": 74
});
formatter.step({
  "name": "I validate Q2A Page",
  "keyword": "Then ",
  "line": 75
});
formatter.step({
  "name": "I validate that standard Excess is \"$100\"",
  "keyword": "Then ",
  "line": 76
});
formatter.step({
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When ",
  "line": 77
});
formatter.step({
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When ",
  "line": 78
});
formatter.step({
  "name": "I select \"Winter Sports Cover\" Addon",
  "keyword": "When ",
  "line": 79
});
formatter.step({
  "name": "I select \"Business Cover\" Addon",
  "keyword": "When ",
  "line": 80
});
formatter.step({
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then ",
  "line": 81
});
formatter.step({
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then ",
  "line": 82
});
formatter.step({
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And ",
  "line": 83
});
formatter.step({
  "name": "I enter customer details for \"21,22\" years",
  "keyword": "And ",
  "line": 84
});
formatter.step({
  "name": "I enter creditcard details for Payment",
  "keyword": "And ",
  "line": 85
});
formatter.step({
  "name": "I agree to terms and conditions",
  "keyword": "And ",
  "line": 86
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_destination(String)"
});
formatter.result({
  "duration": 403359087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60",
      "offset": 28
    }
  ],
  "location": "HomePage.i_enter_my_Return_Dates_as_days_from_today_date(int)"
});
formatter.result({
  "duration": 1533245090,
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
  "duration": 109814794,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 2451363421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "Q2Page.i_validate_Q_Page(int)"
});
formatter.result({
  "duration": 40223617,
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
  "duration": 720442344,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 1371139563,
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
  "duration": 103843419,
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
  "duration": 422437783,
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
  "duration": 464917797,
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
  "duration": 518430152,
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
  "duration": 3664780752,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2352663982,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 85568272,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 154429856,
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
  "duration": 3820050078,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 727380875,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 167439979,
  "status": "passed"
});
formatter.uri("6_BigRedCover.feature");
formatter.feature({
  "id": "big-red-cover--",
  "description": "To Buy Big Red Cover Insurance on various conditions like age and number of travellers and validate\r\nthe confirmation page against data displayed on Q2, Q3 pages.\r\n\r\nIn order to Buy Big Red Cover from kangoCover Website as a customer, I want to validate confirm page against\r\nQ2 and Q3 Pages contents as per customer selection for various age group and Duration",
  "name": "BIG RED COVER -",
  "keyword": "Feature",
  "line": 1
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 8,
  "type": "background"
});
formatter.step({
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given ",
  "line": 9
});
formatter.match({
  "location": "BasePage.i_am_on_Simply_Travel_Insurance_WebSite_Home_Page()"
});
formatter.result({
  "duration": 4235498920,
  "status": "passed"
});
formatter.scenario({
  "id": "big-red-cover--;to-buy-\"winter-sports-cover\"-and-\"sports-and-activity-cover\"-from-joey-cover-and-validate-values-from-q2,-q3",
  "tags": [
    {
      "name": "@bigredcover_singletraveller",
      "line": 11
    }
  ],
  "description": "and Confirmation Page for duo",
  "name": "To Buy \"Winter Sports Cover\" and \"Sports and Activity Cover\" from Joey Cover and validate values from Q2, Q3",
  "keyword": "Scenario",
  "line": 12,
  "type": "scenario"
});
formatter.step({
  "name": "I enter \"India\" as my destination",
  "keyword": "When ",
  "line": 15
});
formatter.step({
  "name": "I enter my Return Dates as \"30\" days from today",
  "keyword": "And ",
  "line": 16
});
formatter.step({
  "name": "I enter \"21,22\" as my Age",
  "keyword": "And ",
  "line": 17
});
formatter.step({
  "name": "I click on GetQuote",
  "keyword": "And ",
  "line": 18
});
formatter.step({
  "name": "I validate Q2 Page",
  "keyword": "Then ",
  "line": 19
});
formatter.step({
  "name": "I select \"L5-Big Red Cover\" and click next step",
  "keyword": "And ",
  "line": 20
});
formatter.step({
  "name": "I validate Q2A Page",
  "keyword": "Then ",
  "line": 21
});
formatter.step({
  "name": "I validate that standard Excess is \"$100\"",
  "keyword": "Then ",
  "line": 22
});
formatter.step({
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When ",
  "line": 23
});
formatter.step({
  "name": "I select \"Winter Sports Cover\" Addon",
  "keyword": "When ",
  "line": 24
});
formatter.step({
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When ",
  "line": 25
});
formatter.step({
  "name": "I select \"Business Cover\" Addon",
  "keyword": "When ",
  "line": 26
});
formatter.step({
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then ",
  "line": 27
});
formatter.step({
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then ",
  "line": 28
});
formatter.step({
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And ",
  "line": 29
});
formatter.step({
  "name": "I enter customer details for \"21,22\" years",
  "keyword": "And ",
  "line": 30
});
formatter.step({
  "name": "I enter creditcard details for Payment",
  "keyword": "And ",
  "line": 31
});
formatter.step({
  "name": "I agree to terms and conditions",
  "keyword": "And ",
  "line": 32
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_destination(String)"
});
formatter.result({
  "duration": 469035757,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 28
    }
  ],
  "location": "HomePage.i_enter_my_Return_Dates_as_days_from_today_date(int)"
});
formatter.result({
  "duration": 3406095741,
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
  "duration": 119339351,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 2476490768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "Q2Page.i_validate_Q_Page(int)"
});
formatter.result({
  "duration": 35768178,
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
  "duration": 517788399,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 1662009988,
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
  "duration": 134849471,
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
  "duration": 602573046,
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
  "duration": 395855778,
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
  "duration": 392324933,
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
  "duration": 3670725865,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2412985672,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 102165084,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 163383296,
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
  "duration": 3801933407,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 790381263,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 132065123,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 8,
  "type": "background"
});
formatter.step({
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given ",
  "line": 9
});
formatter.match({
  "location": "BasePage.i_am_on_Simply_Travel_Insurance_WebSite_Home_Page()"
});
formatter.result({
  "duration": 1355548244,
  "status": "passed"
});
formatter.scenario({
  "id": "big-red-cover--;to-buy-\"winter-sports-cover\"-and-\"sports-and-activity-cover\"-from-big-red-cover-and-validate-values-from-q2,-q3",
  "tags": [
    {
      "name": "@bigredcover_familytraveller",
      "line": 37
    }
  ],
  "description": "and Confirmation Page",
  "name": "To Buy \"Winter Sports Cover\" and \"Sports and Activity Cover\" from Big Red Cover and validate values from Q2, Q3",
  "keyword": "Scenario",
  "line": 38,
  "type": "scenario",
  "comments": [
    {
      "value": "#And I click on Complete Purchase",
      "line": 33
    },
    {
      "value": "#Then I validate Confirm Page",
      "line": 34
    },
    {
      "value": "#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details",
      "line": 35
    }
  ]
});
formatter.step({
  "name": "I enter \"India\" as my destination",
  "keyword": "When ",
  "line": 41
});
formatter.step({
  "name": "I enter my Return Dates as \"30\" days from today",
  "keyword": "And ",
  "line": 42
});
formatter.step({
  "name": "I enter \"69\" as my Age",
  "keyword": "And ",
  "line": 43
});
formatter.step({
  "name": "I click on GetQuote",
  "keyword": "And ",
  "line": 44
});
formatter.step({
  "name": "I validate Q2 Page",
  "keyword": "Then ",
  "line": 45
});
formatter.step({
  "name": "I select \"L5-Big Red Cover\" and click next step",
  "keyword": "And ",
  "line": 46
});
formatter.step({
  "name": "I validate Q2A Page",
  "keyword": "Then ",
  "line": 47
});
formatter.step({
  "name": "I validate that standard Excess is \"$100\"",
  "keyword": "Then ",
  "line": 48
});
formatter.step({
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When ",
  "line": 49
});
formatter.step({
  "name": "I select \"Winter Sports Cover\" Addon",
  "keyword": "When ",
  "line": 50
});
formatter.step({
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When ",
  "line": 51
});
formatter.step({
  "name": "I select \"Business Cover\" Addon",
  "keyword": "When ",
  "line": 52
});
formatter.step({
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then ",
  "line": 53
});
formatter.step({
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then ",
  "line": 54
});
formatter.step({
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And ",
  "line": 55
});
formatter.step({
  "name": "I enter customer details for \"69\" years",
  "keyword": "And ",
  "line": 56
});
formatter.step({
  "name": "I enter creditcard details for Payment",
  "keyword": "And ",
  "line": 57
});
formatter.step({
  "name": "I agree to terms and conditions",
  "keyword": "And ",
  "line": 58
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_destination(String)"
});
formatter.result({
  "duration": 515998979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 28
    }
  ],
  "location": "HomePage.i_enter_my_Return_Dates_as_days_from_today_date(int)"
});
formatter.result({
  "duration": 1578222382,
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
  "duration": 120402499,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 1918660470,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "Q2Page.i_validate_Q_Page(int)"
});
formatter.result({
  "duration": 39599071,
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
  "duration": 135551897,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 1587371427,
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
  "duration": 113719945,
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
  "duration": 463820539,
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
  "duration": 417311311,
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
  "duration": 382841127,
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
  "duration": 2366702236,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2419610270,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 91141193,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 140371981,
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
  "duration": 7144968086,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 750867618,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 128020213,
  "status": "passed"
});
formatter.background({
  "description": "",
  "name": "",
  "keyword": "Background",
  "line": 8,
  "type": "background"
});
formatter.step({
  "name": "I am on KangoCover WebSite Home Page",
  "keyword": "Given ",
  "line": 9
});
formatter.match({
  "location": "BasePage.i_am_on_Simply_Travel_Insurance_WebSite_Home_Page()"
});
formatter.result({
  "duration": 4906209390,
  "status": "passed"
});
formatter.scenario({
  "id": "big-red-cover--;to-buy-\"winter-sports-cover\"-and-\"sports-and-activity-cover\"-from-joey-cover-and-validate-values-from-q2,-q3",
  "tags": [
    {
      "name": "@bigredcover_duotraveller",
      "line": 63
    }
  ],
  "description": "and Confirmation Page for Family of two with a dependent",
  "name": "To Buy \"Winter Sports Cover\" and \"Sports and Activity Cover\" from Joey Cover and validate values from Q2, Q3",
  "keyword": "Scenario",
  "line": 64,
  "type": "scenario",
  "comments": [
    {
      "value": "#And I click on Complete Purchase",
      "line": 59
    },
    {
      "value": "#Then I validate Confirm Page",
      "line": 60
    },
    {
      "value": "#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details",
      "line": 61
    }
  ]
});
formatter.step({
  "name": "I enter \"India\" as my destination",
  "keyword": "When ",
  "line": 67
});
formatter.step({
  "name": "I enter my Return Dates as \"30\" days from today",
  "keyword": "And ",
  "line": 68
});
formatter.step({
  "name": "I enter \"36,37,16\" as my Age",
  "keyword": "And ",
  "line": 69
});
formatter.step({
  "name": "I click on GetQuote",
  "keyword": "And ",
  "line": 70
});
formatter.step({
  "name": "I validate Q2 Page",
  "keyword": "Then ",
  "line": 71
});
formatter.step({
  "name": "I select \"L5-Big Red Cover\" and click next step",
  "keyword": "And ",
  "line": 72
});
formatter.step({
  "name": "I validate Q2A Page",
  "keyword": "Then ",
  "line": 73
});
formatter.step({
  "name": "I validate that standard Excess is \"$100\"",
  "keyword": "Then ",
  "line": 74
});
formatter.step({
  "name": "I select \"Double the Standard Excess\" Addon",
  "keyword": "When ",
  "line": 75
});
formatter.step({
  "name": "I select \"Winter Sports Cover\" Addon",
  "keyword": "When ",
  "line": 76
});
formatter.step({
  "name": "I select \"Sports \u0026 Activity Cover\" Addon",
  "keyword": "When ",
  "line": 77
});
formatter.step({
  "name": "I select \"Business Cover\" Addon",
  "keyword": "When ",
  "line": 78
});
formatter.step({
  "name": "I validate that Standard Excess value is doubled",
  "keyword": "Then ",
  "line": 79
});
formatter.step({
  "name": "I validate that Additional Premium Amount adds on to the Current Quote Amount",
  "keyword": "Then ",
  "line": 80
});
formatter.step({
  "name": "I click on Next Step on Q2A Page",
  "keyword": "And ",
  "line": 81
});
formatter.step({
  "name": "I enter customer details for \"36,37,16\" years",
  "keyword": "And ",
  "line": 82
});
formatter.step({
  "name": "I enter creditcard details for Payment",
  "keyword": "And ",
  "line": 83
});
formatter.step({
  "name": "I agree to terms and conditions",
  "keyword": "And ",
  "line": 84
});
formatter.match({
  "arguments": [
    {
      "val": "India",
      "offset": 9
    }
  ],
  "location": "HomePage.i_enter_as_my_destination(String)"
});
formatter.result({
  "duration": 453407007,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30",
      "offset": 28
    }
  ],
  "location": "HomePage.i_enter_my_Return_Dates_as_days_from_today_date(int)"
});
formatter.result({
  "duration": 1814270988,
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
  "duration": 126665168,
  "status": "passed"
});
formatter.match({
  "location": "HomePage.i_click_on_GetQuote()"
});
formatter.result({
  "duration": 2724724516,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 12
    }
  ],
  "location": "Q2Page.i_validate_Q_Page(int)"
});
formatter.result({
  "duration": 43832039,
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
  "duration": 456973169,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_validate_Q_A_Page()"
});
formatter.result({
  "duration": 1563528792,
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
  "duration": 114145867,
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
  "duration": 466858448,
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
  "duration": 416696123,
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
  "duration": 435701166,
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
  "duration": 2448344832,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.I_validate_that_Standard_access_value_is_doubled()"
});
formatter.result({
  "duration": 2769324787,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.I_validate_that_Additional_Premium_Amount_adds_on_to_the_Current_Quote_Amount()"
});
formatter.result({
  "duration": 83913180,
  "status": "passed"
});
formatter.match({
  "location": "Q2APage.i_click_on_Next_Step_on_Q_APage()"
});
formatter.result({
  "duration": 140216825,
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
  "duration": 4732341928,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.enterPaymentDetails()"
});
formatter.result({
  "duration": 1065423410,
  "status": "passed"
});
formatter.match({
  "location": "Q3Page.tickTerms()"
});
formatter.result({
  "duration": 145141655,
  "status": "passed"
});
});