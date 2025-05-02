import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import LoginPage from "../../pages/LoginPage";

Given("I open the login page", () => {
  LoginPage.visit();
});

When("I enter valid credentials", () => {
  LoginPage.fillUsername("student");
  LoginPage.fillPassword("Password123");
  LoginPage.submit();
});

Then("I should see the dashboard", () => {
  cy.url().should("include", "/logged-in-successfully/");
});
