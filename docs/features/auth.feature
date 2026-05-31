Feature: User Authentication

Scenario: User sees the login page correctly
  Given that I am on the login page
  And I should see the login form elements
  And I should see the link to "Create an account in API-FOOTBALL"
  And I should see the instructions to obtain an API key

Scenario: User attempts login with an invalid key
  Given that I am on the login page
  When I enter an invalid API key
  Then I should see an error message
  When I enter an empty API key
  Then I should see an error message

Scenaro: User toggles API key visibility
  Given that I am on the login page
  When I click the "Toggle API key visibility" button
  And I should be able to show the API key
  And I should be able to hide the API key

Scenario: User logs in with a valid key
  Given that I am on the login page
  When I enter a valid API key
  And I click the "Enter" button
  Then I should be redirected to the home page
  And the user data should be saved in sessionStorage
