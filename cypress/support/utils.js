export function handleCaptchaIfPresent() {
  cy.get("#altcha_checkbox", { timeout: 5000 })
    .then(($el) => {
      if ($el.length && $el.is(":visible")) {
        cy.wrap($el).click();
      }
    })
    .catch(() => {
      // CAPTCHA not present, continue test normally
      cy.log("CAPTCHA checkbox not found. Continuing...");
    });
}
export function handleCookiesIfPresent() {
  cy.get("body").then(($body) => {
    if ($body.find(LOGIN_LOCATORS.ACCEPT_COOKIES_BUTTON).length > 0) {
      cy.get(LOGIN_LOCATORS.ACCEPT_COOKIES_BUTTON).should("be.visible").click();
    }
  });
}
