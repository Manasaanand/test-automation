Feature: EASTERN GREY COVER - 
To Buy Eastern Grey Cover Insurance on various conditions like age and number of travellers and validate
 the confirmation page against data displayed on Q2, Q3 pages.

In order to Buy Eastern Grey Cover from kangoCover Website as a customer, I want to validate confirm page against
Q2 and Q3 Pages contents as per customer selection for various age group and Duration

Background: 
Given I am on KangoCover WebSite Home Page

@easterngreycover_singletraveller
Scenario: To Buy "Winter Sports Cover", "Sports and Activity Cover", "Business Cover" and "High Value Items" from Eastern Grey Cover and validate values from Q2, Q3
and Confirmation Page

When I enter "India" as my destination
And I enter my Return Dates as "363" days from today
And I enter "64" as my Age
And I click on GetQuote
Then I validate Q2 Page
And I select "L4-Eastern Grey Cover" and click next step
Then I validate Q2A Page
Then I validate that standard Excess is "$100"
When I select "Double the Standard Excess" Addon
When I select "Sports & Activity Cover" Addon
When I select "Winter Sports Cover" Addon
When I select "Business Cover" Addon
Then I validate that Standard Excess value is doubled
Then I validate that Additional Premium Amount adds on to the Current Quote Amount
And I click on Next Step on Q2A Page
And I enter customer details for "64" years
And I enter creditcard details for Payment
And I agree to terms and conditions
#And I click on Complete Purchase
#Then I validate Confirm Page
#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details


@easterngreycover_familytravellers
Scenario: To Buy "Winter Sports Cover", "Sports and Activity Cover", "Business Cover" and "High Value Items" from Eastern Grey Cover and validate values from Q2, Q3
and Confirmation Page for Family of two with a dependent

When I enter "India" as my destination
And I enter my Return Dates as "30" days from today
And I enter "36,37,16" as my Age
And I click on GetQuote
Then I validate Q2 Page
And I select "L4-Eastern Grey Cover" and click next step
Then I validate Q2A Page
Then I validate that standard Excess is "$100"
When I select "Double the Standard Excess" Addon
When I select "Sports & Activity Cover" Addon
When I select "Winter Sports Cover" Addon
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


@easterngreycover_duotravellers
Scenario: To Buy "Winter Sports Cover", "Sports and Activity Cover", "Business Cover" and "High Value Items" from Eastern Grey Cover and validate values from Q2, Q3
and Confirmation Page for duo

When I enter "India" as my destination
And I enter my Return Dates as "30" days from today
And I enter "21,22" as my Age
And I click on GetQuote
Then I validate Q2 Page
And I select "L4-Eastern Grey Cover" and click next step
Then I validate Q2A Page
Then I validate that standard Excess is "$100"
When I select "Double the Standard Excess" Addon
When I select "Sports & Activity Cover" Addon
When I select "Winter Sports Cover" Addon
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