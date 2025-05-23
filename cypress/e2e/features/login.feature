

Feature: Login Functionality

  Scenario: Successful Login
    Given I navigate to the login page
    When I enter valid credentials and login
    Then I should be redirected to the account home page



