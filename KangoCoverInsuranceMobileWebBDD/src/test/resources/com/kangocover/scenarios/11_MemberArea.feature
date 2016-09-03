Feature: MEMBERS AREA - 
To Validate various Quotes,policies and Details in Member area
In order to make sure that bought and saved policies are in customer accounts

Background: 
Given I am on KangoCover WebSite Home Page

Scenario: To login to Member area and see the policies bought or saved

When I click on Members login
And I enter my username as "anand.jois@1cover.com.au"
And I enter my password as "anandjn"
And I click on Login
Then I validate that user logged in
And I click on My Policy Tab
Then I validate I have atleast one Policy
And I click on My Quotes Tab
Then I validate I have atleast one Quote
And I click on My Details Tab
Then I validate I have my Email ID