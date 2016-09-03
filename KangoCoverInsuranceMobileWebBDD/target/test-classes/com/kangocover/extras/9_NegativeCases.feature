Feature: NEGATIVE CASES - 
To Validate various negative scenarios to make sure application is behaving as expected

In order to buy a Kango Cover travel insurance from Kango Cover Website

Background: 
Given I am on KangoCover WebSite Home Page


@checksamepricebetweenq2atoq2whengoback
Scenario: Going back from Q3 to Q2A page to see if all the additional options are retained ie checked or unchecked
 If premium and the added amount is retained by going back and forth between Q3 and Q2A.


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
Then I validate Q3 Page
And I go back to Previous Page
Then I validate Q2A Page
Then I validate that all addons are checked
Then I validate that all premiums are added

@checksamepriceonQ2whenrefreshed
Scenario: Refreshing Q2A page should either give away all the additional options or retain all of them.

When I enter "India" as my destination
And I enter my Return Dates as "363" days from today
And I enter "63" as my Age
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
And I refresh the page
Then I validate that all addons are checked
Then I validate that all premiums are added after refresh

@errorwhendobenteredofdifferentcustomer
Scenario: There should be an error when a user aged 64 years selects Eastern Grey product of age limit 64 and on details and payment page enters himself as 69 years.

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
And I enter customer details for "69" years
And I enter creditcard details for Payment
And I agree to terms and conditions
#And I click on Complete Purchase
#Then I validate that "The Date of Birth is not valid for the given age range."

@editbuttonworks
Scenario: To verify that edit button works on Q3.

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
Then I validate Q3 Page
And I click on Edit button
Then I validate Q2 Page


@updatebuttonworks
Scenario: To verify that update button works on Q2 Page.

When I enter "India" as my destination
And I enter my Return Dates as "363" days from today
And I enter "45" as my Age
And I click on GetQuote
Then I validate Q2 Page
And I click on Edit Button
And I update "46" as my Age
And I click on Update Quote
Then I validate that amount of Cover is changed 

@regionnotclickable
Scenario: Regions should be clickable when quoting for single trip policies from the destination picker on Q1 and Q2. 
Typing of regions shouldn’t yield any result nor on Q1 nor on Q2.

When I enter "World wide" as my destination
Then I validate that the Region is selected on Destination input box
When I enter "India" as my destination
And I enter my Return Dates as "363" days from today
And I enter "45" as my Age
Then I validate that the Region is selected on Destination input box
