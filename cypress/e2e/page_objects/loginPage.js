import { LOGIN_LOCATORS } from "../../support/locators/login_locators.js";
import { GLOBAL_VARS } from "../../support/variables/global_vars";
import { handleCaptchaIfPresent } from "../../support/utils.js";

export class LoginPage {
  visitAndAcceptCookies() {
    cy.visit("https://www.cdiscount.com");

    cy.contains("button", "Accepter", { timeout: 10000 })
      .should("be.visible")
      .click();
  }

  // // Handle cookies and wait for the banner to be dismissed
  // handleCookiesIfPresent();
  // cy.contains("Accepter", { timeout: 10000 }).should("not.exist");
  // cy.wait(2000); // Give time for JS to insert the div
  // cy.document().then((doc) => {
  //   const found = doc.evaluate(
  //     "//button[contains(text(),'Accepter')]",
  //     doc,
  //     null,
  //     XPathResult.FIRST_ORDERED_NODE_TYPE,
  //     null
  //   ).singleNodeValue;
  //   if (found) {
  //     cy.wrap(found).({ fclickorce: true });
  //   } else {
  //     cy.log("Cookie banner not found");
  //   }
  // });
}
//   clickOnSignIn() {
//     cy.xpath(LOGIN_LOCATORS.SIGN_IN_LINK).click();
//   }

//   enterEmailAndContinue(email) {
//     cy.get(LOGIN_LOCATORS.EMAIL_INPUT).should("be.visible").type(email);
//     cy.xpath(LOGIN_LOCATORS.VALIDATE_EMAIL_BUTTON).click();
//   }

//   enterPasswordAndLogin(password) {
//     cy.get(LOGIN_LOCATORS.PASSWORD_INPUT).should("be.visible").type(password);
//     cy.xpath(LOGIN_LOCATORS.LOGIN_BUTTON).click();
//   }

//   validateSuccessfulLogin() {
//     cy.url({ timeout: 10000 }).should("include", GLOBAL_VARS.ACCOUNT_HOME_URL);
//   }

//   getErrorMessage() {
//     return cy.xpath(LOGIN_LOCATORS.ERROR_MESSAGE);
//   }
