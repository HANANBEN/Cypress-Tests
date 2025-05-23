import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { LoginPage } from "../../e2e/page_objects/loginPage";
import { GLOBAL_VARS } from "../../support/variables/global_vars";

const loginPage = new LoginPage();

// beforeEach(() => {
//   cy.viewport(1280, 800);
//   cy.visit("https://www.cdiscount.com");

//   cy.contains("Continuer sans accepter", { timeout: 10000 }).click({
//     force: true,
//   });
// });
Given("I navigate to the login page", () => {
  loginPage.visitAndAcceptCookies(); // Handles visit and cookies
  // loginPage.clickOnSignIn(); // Clicks on the sign-in link
});

When("I enter valid credentials and login", () => {
  // loginPage.enterEmailAndContinue(GLOBAL_VARS.EMAIL);
  // loginPage.enterPasswordAndLogin(GLOBAL_VARS.PASSWORD);
});

// When("I enter an incorrect password", () => {
//   // loginPage.enterEmailAndContinue(GLOBAL_VARS.EMAIL);
//   // loginPage.enterPasswordAndLogin(GLOBAL_VARS.WRONG_PASSWORD);
// });

// Then("I should see an error message", () => {
//   // loginPage.getErrorMessage().should("contain.text", "Le mot de passe ne");
// });

Then("I should be redirected to the account home page", () => {
  // loginPage.validateSuccessfulLogin();
});
