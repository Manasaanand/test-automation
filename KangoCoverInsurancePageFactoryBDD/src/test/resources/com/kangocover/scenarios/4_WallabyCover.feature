Feature: WALLABY COVER - 
To Buy Wallaby Cover Insurance on various conditions like age and number of travellers and validate
 the confirmation page against data displayed on Q2, Q3 pages.

In order to Buy Wallaby Cover from kangoCover Website as a customer, I want to validate confirm page against
Q2 and Q3 Pages contents as per customer selection for various age group and Duration

Background: 
Given I am on KangoCover WebSite Home Page

@wallabycover_singletraveller
Scenario: To Buy "Winter Sports Cover", "Sports and Activity Cover" and "High Value Items" from Wallaby Cover and validate values from Q2, Q3
and Confirmation Page

When I enter "India" as my destination
And I enter my Return Dates as "30" days from today
And I enter "45" as my Age
And I click on GetQuote
Then I validate Q2 Page
And I select "L3-Wallaby Cover" and click next step
Then I validate Q2A Page
Then I validate that standard Excess is "$150"
When I select "Double the Standard Excess" Addon
When I select "Winter Sports Cover" Addon
When I select "Sports & Activity Cover" Addon
Then I validate that Standard Excess value is doubled
When I select "High Value Items" Addon
Then I validate that Additional Premium Amount adds on to the Current Quote Amount
And I click on Next Step on Q2A Page
And I enter customer details for "45" years
And I enter creditcard details for Payment
And I agree to terms and conditions
#And I click on Complete Purchase
#Then I validate Confirm Page
#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details


@wallabycover_familytravellers
Scenario: To Buy "Winter Sports Cover", "Sports and Activity Cover" and "High Value Items" from Wallaby Cover and validate values from Q2, Q3
and Confirmation Page for Family of two with a dependent

When I enter "India" as my destination
And I enter my Return Dates as "30" days from today
And I enter "36,37,16" as my Age
And I click on GetQuote
Then I validate Q2 Page
And I select "L3-Wallaby Cover" and click next step
Then I validate Q2A Page
Then I validate that standard Excess is "$150"
When I select "Double the Standard Excess" Addon
When I select "Winter Sports Cover" Addon
When I select "Sports & Activity Cover" Addon
Then I validate that Standard Excess value is doubled
When I select "High Value Items" Addon
Then I validate that Additional Premium Amount adds on to the Current Quote Amount
And I click on Next Step on Q2A Page
And I enter customer details for "36,37,16" years
And I enter creditcard details for Payment
And I agree to terms and conditions
#And I click on Complete Purchase
#Then I validate Confirm Page
#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details


@wallabycover_duotravellers
Scenario: To Buy "Winter Sports Cover", "Sports and Activity Cover" and "High Value Items" from Wallaby Cover and validate values from Q2, Q3
and Confirmation Page for duo

When I enter "India" as my destination
And I enter my Return Dates as "30" days from today
And I enter "21,22" as my Age
And I click on GetQuote
Then I validate Q2 Page
And I select "L3-Wallaby Cover" and click next step
Then I validate Q2A Page
Then I validate that standard Excess is "$150"
When I select "Double the Standard Excess" Addon
When I select "Winter Sports Cover" Addon
When I select "Sports & Activity Cover" Addon
Then I validate that Standard Excess value is doubled
When I select "High Value Items" Addon
Then I validate that Additional Premium Amount adds on to the Current Quote Amount
And I click on Next Step on Q2A Page
And I enter customer details for "21,22" years
And I enter creditcard details for Payment
And I agree to terms and conditions
#And I click on Complete Purchase
#Then I validate Confirm Page
#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details