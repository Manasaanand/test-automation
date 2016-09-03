Feature: ANNUAL POLICY - 
To buy "Annual 35 days" from Kango Cover Insurance using an annual Policy
In order to buy "Annual 35 days" Kango Cover travel insurance from Kango Cover Website for an Annual Policy

Background: 
Given I am on KangoCover WebSite Home Page


@annualformultitravellers
Scenario: Buying "Annual 35 days" Kango Cover travel insurance as a Multiple travellers who have dependents for annual policy

When I select Annual Policy from Travel Insurance 
And I enter "64" as my Age
And I click on GetAQuote
Then I validate Q2 Page
And I select "Annual 35 days (Excludes Wintersports)" and click next step
Then I validate Q2A Page
Then I validate that standard Excess is "$100"
When I select "Business Cover" Addon
When I select "Sports & Activity Cover" Addon
When I select "Double the Standard Excess" Addon
Then I validate that Standard Excess value is doubled
When I select "High Value Items" Addon
Then I validate that Additional Premium Amount adds on to the Current Quote Amount
And I click on Next Step on Q2A Page
And I enter customer details for "64" years
And I enter creditcard details for Payment
And I agree to terms and conditions
#And I click on Complete Purchase
#Then I validate Confirm Page
#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details