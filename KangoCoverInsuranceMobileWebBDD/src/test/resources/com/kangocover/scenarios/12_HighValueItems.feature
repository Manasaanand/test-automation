Feature: HIGH VALUE ITEMS - 
To Buy Verify that High Value Items Premium Prices change for every $1000 when tried to buy a policy from Rock Wallaby Cover Insurance

Background: 
Given I am on KangoCover WebSite Home Page

@highvalueitemsvalidation
Scenario: To verify Premium Price increase for every $1000 for high value Items 

When I enter "India" as my destination
And I enter my Return Dates as "30" days from today
And I enter "45" as my Age
And I click on GetQuote
Then I validate Q2 Page
And I select "L2-Rock Wallaby Cover" and click next step
Then I validate Q2A Page
Then I validate that standard Excess is "$150"
When I select "Double the Standard Excess" Addon
When I select "Winter Sports Cover" Addon
When I select "Sports & Activity Cover" Addon
Then I validate that Standard Excess value is doubled
When I select High Value Items Addon as $"1000"
Then I validate that the amount is  $"40"
When I select High Value Items Addon as $"1000"
Then I validate that the amount is  $"80"
When I select High Value Items Addon as $"1000"
Then I validate that the amount is  $"120"
When I select High Value Items Addon as $"1000"
Then I validate that the amount is  $"160"
When I select High Value Items Addon as $"1000"
Then I validate that the amount is  $"200"