Feature: ANNUAL 60 DAYS - INCLUDES WinterSports 
To Buy Annual 60 days (Includes Wintersports) Insurance on various conditions like age and number of travellers and validate
 the confirmation page against data displayed on Q2, Q3 pages.

In order to Buy Annual 60 days (Includes Wintersports) from kangoCover Website as a customer, I want to validate confirm page against
Q2 and Q3 Pages contents as per customer selection for various age group and Duration

Background: 
Given I am on KangoCover WebSite Home Page

Scenario: To Buy "Winter Sports Cover",  "Sports and Activity Cover" and "High Value Items" from Annual 60 days (Includes Wintersports) and validate values from Q2, Q3
and Confirmation Page

When I select Annual Travel Insurance
And I enter "69" as my Age
And I click on GetAQuote
Then I validate Q2 Page
And I select "Annual 60 days (Includes Wintersports)" and click next step
Then I validate Q2A Page
Then I validate that standard Excess is "$100"
When I select "Double the Standard Excess" Addon
When I select "Sports & Activity Cover" Addon
When I select "Business Cover" Addon
Then I validate that Standard Excess value is doubled
Then I validate that Additional Premium Amount adds on to the Current Quote Amount
And I click on Next Step on Q2A Page
And I enter customer details for "69" years
And I enter creditcard details for Payment
And I agree to terms and conditions
#And I click on Complete Purchase
#Then I validate Confirm Page
#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details


Scenario: To Buy "Winter Sports Cover", "Sports and Activity Cover"  and "High Value Items" from Annual 60 days (Includes Wintersports) and validate values from Q2, Q3
and Confirmation Page for Family of two with a dependent

When I select Annual Travel Insurance
And I enter "36,37,16" as my Age
And I click on GetAQuote
Then I validate Q2 Page
And I select "Annual 60 days (Includes Wintersports)" and click next step
Then I validate Q2A Page
Then I validate that standard Excess is "$100"
When I select "Double the Standard Excess" Addon
When I select "Sports & Activity Cover" Addon
When I select "Business Cover" Addon
Then I validate that Standard Excess value is doubled
Then I validate that Additional Premium Amount adds on to the Current Quote Amount
And I click on Next Step on Q2A Page
And I enter customer details for "36,37,16" years
And I enter creditcard details for Payment
And I agree to terms and conditions
#And I click on Complete Purchase
#Then I validate Confirm Page
#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details



Scenario: To Buy "Winter Sports Cover", "Sports and Activity Cover"  and "High Value Items" from Annual 60 days (Includes Wintersports) and validate values from Q2, Q3
and Confirmation Page for duo

When I select Annual Travel Insurance
And I enter "21,22" as my Age
And I click on GetAQuote
Then I validate Q2 Page
And I select "Annual 60 days (Includes Wintersports)" and click next step
Then I validate Q2A Page
Then I validate that standard Excess is "$100"
When I select "Double the Standard Excess" Addon
When I select "Sports & Activity Cover" Addon
When I select "Business Cover" Addon
Then I validate that Standard Excess value is doubled
Then I validate that Additional Premium Amount adds on to the Current Quote Amount
And I click on Next Step on Q2A Page
And I enter customer details for "21,22" years
And I enter creditcard details for Payment
And I agree to terms and conditions
#And I click on Complete Purchase
#Then I validate Confirm Page
#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details
