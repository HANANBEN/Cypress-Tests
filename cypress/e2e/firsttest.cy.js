/// <reference types="Cypress" />
/*
    but if we want the global config for this for a better approach: 
     
    we are going to add the jsconfig.json 
*/

describe("Login Test Scenario", () => {
  it("Test1-Does not so much!", () => {
    cy.visit("https://order.cdiscount.com/Account/LoginLight.html?referrer=");
    cy.get(
      'input[name="ValidateEmailViewData.ValidateEmailFormData.Email"]='
    ).type("user@test.com");
    cy.wait(5000);
  });

  it("Test2-Does not so much!", () => {});
});
