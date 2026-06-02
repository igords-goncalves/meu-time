import { userLoginForm } from './utils/UserLoginForm';

describe('User Authentication', () => {
  describe('User sees the login page correctly', () => {
    it('Given that I am on the login page', () => {
      cy.visit('/');
    });

    it('And I should see the login form elements', () => {
      cy.get('[data-testid="cy-login-form"]').should('be.visible');
      cy.get('[data-testid="cy-login-input"]').should('be.visible');
      cy.get('[data-testid="cy-button"]').should('have.attr', 'type', 'submit');
    });

    it('And I should see the links to Create an account in API-FOOTBALL', () => {
      const link = 'https://dashboard.api-football.com/register';

      cy.get('[data-testid="cy-link"]')
        .should('exist')
        .should('have.attr', 'href', link)
        .click({
          multiple: true,
        })
        .and('have.attr', 'target', '_blank');
    });

    it('And I should see the instructions to obtain an API key', () => {
      const instruction =
        'Para efetuar o login você deve criar uma conta em api-football antes. Após criar a conta você receberá uma chave de autenticação, preencha o campo acima com sua chave e faça login.';

      cy.get('[data-testid="cy-login-instructions"]')
        .should('exist')
        .should('have.text', instruction);
    });
  });

  describe('User attempts login with an invalid key', () => {
    it('Given that I am on the login page', () => {
      cy.visit('/');
    });

    it('When I enter an invalid API key should display an error message', () => {
      const invalidKey = 'invalid-api-key';
      userLoginForm.typeTitle(invalidKey);
    });

    it('Then I should see an error message', () => {
      userLoginForm.submit();

      cy.get('[data-testid="cy-error"]').should('be.visible');
      cy.get('[data-testid="cy-error"]').should(
        'have.text',
        'Chave de acesso inválida. Verifique e tente novamente.',
      );
      userLoginForm.clearInput();
    });

    /**
     * === Teste sem mock, apenas com recursos do cypress ===
     *
    it('Then I should see an error message', () => {
        const invalidKey = 'invalid-api-key';
        cy.get('[data-testid="cy-login-input"]').type(invalidKey);
      cy.get('[data-testid="cy-button"]').click();

      cy.get('[data-testid="cy-error"]').should('be.visible');
      cy.get('[data-testid="cy-error"]').should(
        'have.text',
        'Chave de acesso inválida. Verifique e tente novamente.',
      );
      cy.get('[data-testid="cy-login-input"]').clear();
    });
    */

    it('When I enter an empty API key', () => {
      const emptyKey = '';
      userLoginForm.typeTitle(emptyKey);
    });

    it('Then I should see an error message', () => {
      userLoginForm.submit();

      cy.get('[data-testid="cy-error"]').should('be.visible');
      cy.get('[data-testid="cy-error"]').should(
        'have.text',
        'A chave de acesso é obrigatória.',
      );
      userLoginForm.clearInput();
    });
  });

  describe('User toggles API key visibility', () => {
    it('Given that I am on the login page', () => {
      cy.visit('/');
    });

    it('When I click the "Toggle API key visibility" button', () => {
      const textToShow = 'Text to show';
      userLoginForm.typeTitle(textToShow);

      cy.get('[data-testid="cy-toggle-lock-btn"]').should('be.visible');
      cy.get('[data-testid="cy-toggle-lock-btn"]').click();
    });

    it('Then I should be able to show the API key', () => {
      cy.get('[data-testid="cy-toggle-lock-btn"]').should(
        'have.attr',
        'aria-pressed',
        'true',
      );
    });

    it('And I should be able to hide the API key', () => {
      cy.get('[data-testid="cy-toggle-lock-btn"]').click();
      cy.get('[data-testid="cy-toggle-lock-btn"]').should(
        'have.attr',
        'aria-pressed',
        'false',
      );
      cy.get('[data-testid="cy-login-input"]').clear();
    });
  });

  describe('User logs in with a valid key', () => {
    // Boa prática
    beforeEach(() => {
      cy.intercept('GET', `https://v3.football.api-sports.io/**`, {
        fixture: 'user-stub.json',
      }).as('getStatus');
    });

    it('Given that I am on the login page', () => {
      cy.visit('/');
    });

    it('When I enter a valid API key', () => {
      const apiKey = 'fake-valid-api-key';
      expect(apiKey, 'Cypress env api_key').to.be.a('string').and.not.be.empty;
      userLoginForm.typeTitle(apiKey);
    });

    it('And I click the "Enter" button', () => {
      cy.get('[data-testid="cy-button"]').click();
      cy.wait('@getStatus')
        .its('response.body')
        .should('have.property', 'response');
    });

    it('Then I should be redirected to the home page', () => {
      cy.location('pathname').should('eq', '/home');
    });

    it('And the user data should be saved in sessionStorage', () => {
      cy.window()
        .its('sessionStorage')
        .invoke('getItem', 'user')
        .should('exist');
    });
  });
});
