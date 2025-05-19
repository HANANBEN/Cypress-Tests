import { LOGIN_LOCATORS } from "../../support/locators/login_locators";
import { GLOBAL_VARS } from "../../support/variables/global_vars";
import { handleCookiesIfPresent } from "../../support/utils.js";

export class LoginPage {
  visitAndAcceptCookies() {
    cy.visit(GLOBAL_VARS.BASE_URL);
    // Accept cookies if the banner is present
    handleCookiesIfPresent();

    // Wait until a key element is visible (indicating page load)
    cy.xpath(LOGIN_LOCATORS.SIGN_IN_LINK, { timeout: 10000 }).should(
      "be.visible"
    );
  }

  clickOnSignIn() {
    cy.xpath(LOGIN_LOCATORS.SIGN_IN_LINK).click();
  }

  enterEmailAndContinue(email) {
    cy.get(LOGIN_LOCATORS.EMAIL_INPUT).should("be.visible").type(email);
    cy.xpath(LOGIN_LOCATORS.VALIDATE_EMAIL_BUTTON).click();
  }

  enterPasswordAndLogin(password) {
    cy.get(LOGIN_LOCATORS.PASSWORD_INPUT).should("be.visible").type(password);
    cy.xpath(LOGIN_LOCATORS.LOGIN_BUTTON).click();
  }

  validateSuccessfulLogin() {
    cy.url({ timeout: 10000 }).should("include", GLOBAL_VARS.ACCOUNT_HOME_URL);
  }

  getErrorMessage() {
    return cy.xpath(LOGIN_LOCATORS.ERROR_MESSAGE);
  }
}
