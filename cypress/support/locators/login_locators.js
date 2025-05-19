export const LOGIN_LOCATORS = {
  ACCEPT_COOKIES_BUTTON: `xpath=//button[contains(text(), 'Accepter') or contains(text(), "J’accepte")]`,
  SIGN_IN_LINK: `xpath=//div[@class='c-access__compte js-access__compte']/a`,
  EMAIL_INPUT: `#ValidateEmailViewData_ValidateEmailFormData_Email`,
  VALIDATE_EMAIL_BUTTON: `xpath=//input[@data-seln="validateEmail"]`,
  PASSWORD_INPUT: `#CustomerLogin_CustomerLoginFormData_Password`,
  LOGIN_BUTTON: `xpath=//input[@value="Se connecter"]`,
  ERROR_MESSAGE: `xpath=//div[contains(@class, 'c-alert__content')]`,
};
