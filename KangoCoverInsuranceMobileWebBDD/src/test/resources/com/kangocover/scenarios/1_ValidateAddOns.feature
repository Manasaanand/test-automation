Feature: ADD ONS VALIDATION - 
To validate "Joey Cover" "Rock Wallaby Cover" "Wallaby Cover" "Eastern Grey Cover"
"Big Red Cover" Insurance and their Options are visible

In order to validate These Insurance Covers from kangoCover Website as a customer I want to 
go through each pages to validate Options for various age group and Duration

Background: 
Given I am on KangoCover WebSite Home Page

@validateaddons
Scenario: Verify that Products "Joey Cover" "Rock Wallaby Cover" "Wallaby Cover" "Eastern Grey Cover" 
"Big Red Cover" and their options are visible for traveller who is 45 years old


When I enter "India" as my destination
And I enter my Return Dates as "363" days from today
And I enter "45" as my Age
And I click on GetQuote
Then I validate Q2 Page
Then I validate that atleast one product should be selected by default which has a tag as most popular
Then I validate "L2-Rock Wallaby Cover" option is "visible" on Q2 Page
Then I validate "L3-Wallaby Cover" option is "visible" on Q2 Page
Then I validate "L4-Eastern Grey Cover" option is "visible" on Q2 Page
Then I validate "L5-Big Red Cover" option is "visible" on Q2 Page
Then I validate "L1-Joey Cover" option is "visible" on Q2 Page
And I select "L1-Joey Cover" and click next step
Then I validate Q2A Page
Then I validate that "Add Winter Sports Cover-Form_Mod_Anc_WinSpoCov" is "visible" and its price "greater than" zero
Then I validate that "Add Sports & Activities Cover-Form_Mod_Anc_SpoActCov" is "visible" and its price "greater than" zero
Then I validate that "Double The Excess And Save-Form_Mod_Anc_DouExc" is "visible" and its price "less than" zero
Then I validate that "Add Business Cover-Form_Mod_Anc_BusCov" is "not visible" and its price "is not considered" zero
Then I validate that "Add high value items" is "not present"
And I go back to Q2 Page
And I select "L2-Rock Wallaby Cover" and click next step
Then I validate Q2A Page
Then I validate that "Add Winter Sports Cover-Form_Mod_Anc_WinSpoCov" is "visible" and its price "greater than" zero
Then I validate that "Add Sports & Activities Cover-Form_Mod_Anc_SpoActCov" is "visible" and its price "greater than" zero
Then I validate that "Add high value items" is "present"
Then I validate that "Double The Excess And Save-Form_Mod_Anc_DouExc" is "visible" and its price "less than" zero
Then I validate that "Add Business Cover-Form_Mod_Anc_BusCov" is "not visible" and its price "is not considered" zero
And I go back to Q2 Page
And I select "L3-Wallaby Cover" and click next step
Then I validate Q2A Page
Then I validate that "Add Business Cover-Form_Mod_Anc_BusCov" is "not visible" and its price "is not considered" zero
Then I validate that "Add Winter Sports Cover-Form_Mod_Anc_WinSpoCov" is "visible" and its price "greater than" zero
Then I validate that "Add Sports & Activities Cover-Form_Mod_Anc_SpoActCov" is "visible" and its price "greater than" zero
Then I validate that "Add high value items" is "present"
Then I validate that "Double The Excess And Save-Form_Mod_Anc_DouExc" is "visible" and its price "less than" zero
And I go back to Q2 Page
And I select "L4-Eastern Grey Cover" and click next step
Then I validate Q2A Page
Then I validate that "Add Winter Sports Cover-Form_Mod_Anc_WinSpoCov" is "visible" and its price "greater than" zero
Then I validate that "Add Sports & Activities Cover-Form_Mod_Anc_SpoActCov" is "visible" and its price "greater than" zero
Then I validate that "Add high value items" is "present"
Then I validate that "Add Business Cover-Form_Mod_Anc_BusCov" is "visible" and its price "greater than" zero
Then I validate that "Double The Excess And Save-Form_Mod_Anc_DouExc" is "visible" and its price "less than" zero
And I go back to Q2 Page
And I select "L5-Big Red Cover" and click next step
Then I validate Q2A Page
Then I validate that "Add Winter Sports Cover-Form_Mod_Anc_WinSpoCov" is "visible" and its price "greater than" zero
Then I validate that "Add Sports & Activities Cover-Form_Mod_Anc_SpoActCov" is "visible" and its price "greater than" zero
Then I validate that "Add high value items" is "present"
Then I validate that "Add Business Cover-Form_Mod_Anc_BusCov" is "visible" and its price "greater than" zero
Then I validate that "Double The Excess And Save-Form_Mod_Anc_DouExc" is "visible" and its price "less than" zero

@verifyproductsfor64age
Scenario: Verify that Products "Joey Cover" "Eastern Grey Cover" "Big Red Cover" 
and their options are visible for traveller who is 64 years old

When I enter "India" as my destination
And I enter my Return Dates as "363" days from today
And I enter "64" as my Age
And I click on GetQuote
Then I validate Q2 Page
Then I validate "L1-Joey Cover" option is "visible" on Q2 Page
Then I validate "L2-Rock Wallaby Cover" option is "not visible" on Q2 Page
Then I validate "L3-Wallaby Cover" option is "not visible" on Q2 Page
Then I validate "L4-Eastern Grey Cover" option is "visible" on Q2 Page
Then I validate "L5-Big Red Cover" option is "visible" on Q2 Page

@verifyproductsfor65age
Scenario: Verify that Product "Big Red Cover" and its options are visible
for traveller who is 65 years old

When I enter "India" as my destination
And I enter my Return Dates as "363" days from today
And I enter "65" as my Age
And I click on GetQuote
Then I validate Q2 Page
Then I validate "L1-Joey Cover" option is "not visible" on Q2 Page
Then I validate "L2-Rock Wallaby Cover" option is "not visible" on Q2 Page
Then I validate "L3-Wallaby Cover" option is "not visible" on Q2 Page
Then I validate "L4-Eastern Grey Cover" option is "not visible" on Q2 Page
Then I validate "L5-Big Red Cover" option is "visible" on Q2 Page

@verify70age
Scenario: Verify that No Product and their options are visible for traveller who is 70 years old
When I enter "India" as my destination
And I enter my Return Dates as "363" days from today
And I enter "70" as my Age
And I click on GetQuote
Then I validate "Travellers over the age of 69 are not eligible for this product and have not been included in this quote."

@grouptravellersvalidation
Scenario: To validate that group travel Insurance is not applicable for Kango Cover Users

When I enter "India" as my destination
And I enter my Return Dates as "30" days from today
And I enter "21,22,24" as my Age
And I click on GetQuote
Then I validate Q2 Page