Feature: NEW FEATURES - 

Background: 
Given I am on KangoCover WebSite Home Page

@pricecheckafterdependetadded
Scenario: Check for Price after a dependent being added on Q2Page

When I enter "India" as my destination
And I enter my Return Dates as "35" days from today
And I enter "45" as my Age
And I click on GetQuote 
Then I validate Q2 Page
When I click on Edit Quote
And I update "45,16" as my Age
When I click on Update Quote from Q2Page
Then I validate that the price not changed after Age update



@checkannualproducts
Scenario: GLF-1643 Annual products not showing in Q2.

When I enter "India" as my destination
And I enter my Return Dates as "35" days from today
And I enter "45" as my Age
And I click on GetQuote 
Then I validate Q2 Page
Then I validate "Annual 35 days (Excludes Wintersports)" option is "not visible" on Q2 Page
Then I validate "Annual 35 days (Includes Wintersports)" option is "not visible" on Q2 Page
Then I validate "Annual 60 days (Excludes Wintersports)" option is "not visible" on Q2 Page
Then I validate "Annual 60 days (Includes Wintersports)" option is "not visible" on Q2 Page

@checkmostpopulartag
Scenario: GLF-1651 Most popular tags.

When I enter "India" as my destination
And I enter my Return Dates as "35" days from today
And I enter "45" as my Age
And I click on GetQuote 
Then I validate that Most Popular product is "L5-Big Red Cover"


@buysamepolicyindifforders
Scenario Outline: GLF-1646 BUY SAME POLICY WITH SAME AGE GROUPS IN DIFFERENT ORDERS - GLF-1646


When I enter "India" as my destination
And I enter my Return Dates as "35" days from today
And I enter "<Customer_Age>" as my Age
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
#Then I validate that Travellers are "2- Adults, 1- Child"
And I enter customer details for "<Customer_Age>" years
And I enter creditcard details for Payment
And I agree to terms and conditions
#And I click on Complete Purchase
#Then I validate Confirm Page
#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details


Examples:
|Customer_Age|
| 41,35,1	 |
| 41,1,35	 |
| 35,41,1	 |
| 35,1,45	 |
| 1,35,41	 |
| 1,41,35	 |

@checkdurationfor49to59days
Scenario Outline: GLF-1659  Checking for trip duration between 49-59 days. 

When I enter "<Destination>" as my destination
And I enter my Return Dates as "<Return_Date>" days from today
And I enter "<Adults_Children>" as my Age
And I click on GetQuote
Then I validate Q2 Page
Then I validate that atleast one plan is exist

Examples:

|Return_Date	| Adults_Children	|			Destination					|
|	48			|		34			|Germany, Greece, Malaysia, New Zealand	|
|	49			|		34			|Germany, Greece, Malaysia, New Zealand	|
|	58			|		34			|Germany, Greece, Malaysia, New Zealand	|
|	59			|		34			|Germany, Greece, Malaysia, New Zealand	|
|	55			|		34			|Germany, Greece, Malaysia, New Zealand	|

@checkforpricing
Scenario Outline: Pricing is the most important thing and it needs to be correct. Hence, I have attached 25 top scenarios 
of sale (including single, group and family). You can either just pick up single quotes from the list and apply the formula mentioned by Tony
 to calculate for group and family or you could just pick up the whole quote from the list for groups and families.


When I enter "<Destination>" as my destination
And I enter my Return Dates as "<Duration>" days from today
And I enter "<Adults_Children>" as my Age
And I click on GetQuote
Then I validate Q2 Page
Then I validate that the prices are same as "<Price>" from "<CoverType>"

Examples:

|Price	|Duration   | Adults_Children	|	Destination	 |	CoverType			|
|99.94	|	10		|		47,48,4		|	New Zealand	 |L5-Big Red Cover		|
|116.18 |	14		|		41,41,2		|	Fiji		 |L5-Big Red Cover		|
|49.17  |	09		|			26		|	Fiji		 |L5-Big Red Cover		|
|46.77	|	08		|			24		|	Indonesia	 |L5-Big Red Cover		|
|80.00	|	09		|			27		|	Japan		 |L5-Big Red Cover		|
|28.15	|	08		|			27		|Papua New Guinea|L2-Rock Wallaby Cover	|
|56.30	|	12		|			16		|	Timor		 |L5-Big Red Cover		|
|66.17	|	07		|		38,36,1		|	Bhutan		 |L2-Rock Wallaby Cover	|
|109.12 |	12		|		49,47		|	Kiribati	 |L5-Big Red Cover		|
|51.56	|	10		|			23		|	Nauru	 	 |L5-Big Red Cover		|
|46.59	|	04		|		33,31		|	Niue		 |L2-Rock Wallaby Cover	|
