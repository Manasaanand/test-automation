Feature: ANNUAL POLICY ADD ONS VALIDATION - 
To validate "Annual 35 days (Excludes Wintersports)" "Annual 35 days (Includes Wintersports)" "Annual 60 days (Excludes Wintersports)" 
"Annual 60 days (Includes Wintersports)" Insurance and their Options are visible

In order to validate These Annual Insurance Covers from kangoCover Website as a customer I want to 
go through each pages to validate Options for various age group and Duration

Background: 
Given I am on KangoCover WebSite Home Page

@validateaddsonsannual
Scenario: Verify that Products "Annual 35 days (Excludes Wintersports)" "Annual 35 days (Includes Wintersports)" "Annual 60 days (Excludes Wintersports)" 
"Annual 60 days (Includes Wintersports)"  and their options are visible for traveller who is 45 years old

When I select Annual Travel Insurance
And I enter "45" as my Age
And I click on GetAQuote
Then I validate Q2 Page
Then I validate that atleast one product should be selected by default which has a tag as most popular
Then I validate "Annual 35 days (Excludes Wintersports)" option is "visible" on Q2 Page
Then I validate "Annual 35 days (Includes Wintersports)" option is "visible" on Q2 Page
Then I validate "Annual 60 days (Excludes Wintersports)" option is "visible" on Q2 Page
Then I validate "Annual 60 days (Includes Wintersports)" option is "visible" on Q2 Page
And I select "Annual 35 days (Excludes Wintersports)" and click next step
Then I validate Q2A Page
Then I validate that "Add Sports & Activities Cover-Form_Mod_Anc_SpoActCov" is "visible" and its price "greater than" zero
Then I validate that "Double The Excess And Save-Form_Mod_Anc_DouExc" is "visible" and its price "less than" zero
Then I validate that "Add Business Cover-Form_Mod_Anc_BusCov" is "visible" and its price "is not considered" zero
Then I validate that "Add high value items" is "present"
And I go back to Q2 Page
And I select "Annual 35 days (Includes Wintersports)" and click next step
Then I validate Q2A Page
Then I validate that "Add Sports & Activities Cover-Form_Mod_Anc_SpoActCov" is "visible" and its price "greater than" zero
Then I validate that "Add high value items" is "present"
Then I validate that "Double The Excess And Save-Form_Mod_Anc_DouExc" is "visible" and its price "less than" zero
Then I validate that "Add Business Cover-Form_Mod_Anc_BusCov" is "visible" and its price "is not considered" zero
And I go back to Q2 Page
And I select "Annual 60 days (Excludes Wintersports)" and click next step
Then I validate Q2A Page
Then I validate that "Add Business Cover-Form_Mod_Anc_BusCov" is "visible" and its price "is not considered" zero
Then I validate that "Add Sports & Activities Cover-Form_Mod_Anc_SpoActCov" is "visible" and its price "greater than" zero
Then I validate that "Add high value items" is "present"
Then I validate that "Double The Excess And Save-Form_Mod_Anc_DouExc" is "visible" and its price "less than" zero
And I go back to Q2 Page
And I select "Annual 60 days (Includes Wintersports)" and click next step
Then I validate Q2A Page
Then I validate that "Add Sports & Activities Cover-Form_Mod_Anc_SpoActCov" is "visible" and its price "greater than" zero
Then I validate that "Add high value items" is "present"
Then I validate that "Add Business Cover-Form_Mod_Anc_BusCov" is "visible" and its price "greater than" zero
Then I validate that "Double The Excess And Save-Form_Mod_Anc_DouExc" is "visible" and its price "less than" zero

@validate70yearsage
Scenario: Verify that No Product and their options are visible for traveller who is 70 years old
When I select Annual Travel Insurance
And I enter "70" as my Age
And I click on GetAQuote
Then I validate "Travellers over the age of 69 are not eligible for this product and have not been included in this quote."

@grouptravellersforannualinsurance
Scenario: To validate that group travel Insurance is applicable for Kango Cover Annual Users
When I select Annual Travel Insurance
And I enter "21,22,24" as my Age
And I click on GetAQuote
Then I validate Q2 Page