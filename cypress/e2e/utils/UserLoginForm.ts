class UserLoginForm {
  elements = {
    loginInput: () => cy.get('[data-testid="cy-login-input"]'),
    submitButton: () => cy.get('[data-testid="cy-button"]'),
    errorMessage: () => cy.get('[data-testid="cy-error"]'),
  };

  typeTitle(text: string) {
    if (!text) return;
    this.elements.loginInput().type(text);
  }

  submit() {
    this.elements.submitButton().click();
  }

  clearInput() {
    this.elements.loginInput().clear();
  }
}
export const userLoginForm = new UserLoginForm();
