Feature: CAMPAIGN CODE FEATURE - 
To create a quote using Campaign Code

In order to create a quote on Kango Cover Insurance from kangoCover Website as a customer I want to 
enter valid details and create a quote

Background: 
Given I am on KangoCover WebSite Home Page


@validcampaingcode
Scenario: To validate that campaign code is invalid and prices are not changed

When I enter "India" as my destination
And I enter my Return Dates as "363" days from today
And I enter "45" as my Age
And I click on GetQuote
Then I validate Q2 Page
And I click on Campaign code checkbox
And I validate Campaign code text box display
And I enter campaign code as "TRN100"
And I click on Apply
Then I validate "Sorry, this code is not valid" has displayed
Then I validate that the price of covers are not reduced


@invalidcampaingcode
Scenario: To create a quote using Campaign code and validate that the price of insurance is less than the normal
cost


When I enter "India" as my destination
And I enter my Return Dates as "363" days from today
And I enter "45" as my Age
And I click on GetQuote
Then I validate Q2 Page
And I click on Campaign code checkbox
And I validate Campaign code text box display
And I enter campaign code as "SAVE"
And I click on Apply
Then I validate "Thank you, your code has been applied" has displayed




