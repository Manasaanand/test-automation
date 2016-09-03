Feature: MULTIPLE TRAVELERS SCENARIOS - 
To buy a Kango Cover Insurance using various age groups for Multiple travellers

In order to buy a Kango Cover travel insurance from Kango Cover Website

Background: 
Given I am on KangoCover WebSite Home Page

@multipletravellers_dependentsasdependents
Scenario Outline: Buying a Kango Cover travel insurance as a Multiple travellers who have dependents


When I enter "India" as my destination
And I enter my Return Dates as "363" days from today
And I enter "<Customer_Age>" as my Age
And I click on GetQuote

And I click on "<either_Yes_or_No>"
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
#Then I validate that Travellers are "<total_Travellers>"
And I enter customer details for "<Customer_Age>" years
And I enter creditcard details for Payment
And I agree to terms and conditions
#And I click on Complete Purchase
#Then I validate Confirm Page
#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details


Examples:
|Duration|Customer_Age	| Case_Type | either_Yes_or_No | 
|   5	 |	   29,20  	| Negative  |		No		   |
|   5	 |	   35,20  	| Negative  |		Yes		   |


#Then I validate "A dependent is defined by Kango Cover as children or grandchildren, not in full time employment, who are under the age of 21 and travelling with you for 100% of the journey. Before proceeding, please confirm that all travellers under 21 are dependants of the adult travellers. If the child is not classified under the above terms then please treat them as an adult traveller within this policy." for "<Case_Type>" case

@multipletravellers_dependentsasadults
Scenario Outline: Buying a Kango Cover travel insurance as a Multiple travellers who have dependents but consider them as adults

When I enter "India" as my destination
And I enter my Return Dates as "363" days from today
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
#Then I validate that Travellers are "<total_Travellers>"
And I enter customer details for "<Customer_Age>" years
And I enter creditcard details for Payment
And I agree to terms and conditions
#And I click on Complete Purchase
#Then I validate Confirm Page
#Then I validate HomePage, Q2Page, Q3Page and Confirm Page details


Examples:
|Duration|Customer_Age	| Case_Type |total_Travellers 			|
|   15	 |	   36,20  	| Positive  |	1- Adult, 1- Child		|
|   363	 |	   37,08  	| Positive  |	1- Adult, 1- Child		|
|   364	 |	   18,16  	| Positive  |	2- Adults				|
|   364	 |	34,36,16  	| Positive  |	2- Adults, 1- Child		|
|   364	 | 34,36,16,18 	| Positive  |	2- Adults, 2- Children	|
|   364	 |		 08		| Positive  |	1- Adult				|





