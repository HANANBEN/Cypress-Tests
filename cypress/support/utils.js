import { LOGIN_LOCATORS } from "../support/locators/login_locators.js";

export function handleCaptchaIfPresent() {
  cy.get("body").then(($body) => {
    if ($body.find("#altcha_checkbox").length > 0) {
      const checkbox = $body.find("#altcha_checkbox");
      if (checkbox.is(":visible")) {
        cy.wrap(checkbox).click();
      } else {
        cy.log("CAPTCHA checkbox is not visible.");
      }
    } else {
      cy.log("CAPTCHA checkbox not found. Continuing...");
    }
  });
}
export function handleCookiesIfPresent() {
  return cy
    .xpath(LOGIN_LOCATORS.ACCEPT_COOKIES_BUTTON, { timeout: 10000 })
    .then(($el) => {
      if ($el.length > 0 && $el.is(":visible")) {
        cy.wrap($el).click({ force: true });
      } else {
        cy.log("Cookie button not visible or not found");
      }
    });
}
