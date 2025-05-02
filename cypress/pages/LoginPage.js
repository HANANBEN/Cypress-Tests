class LoginPage {
  static visit() {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
  }

  static fillUsername(username) {
    cy.get("#username").type(username);
  }

  static fillPassword(password) {
    cy.get("#password").type(password);
  }

  static submit() {
    cy.get("#submit").click();
  }
}

export default LoginPage;
