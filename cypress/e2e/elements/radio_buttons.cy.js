describe('Radio Buttons', () => {
  beforeEach(() => {
    cy.visit('/radio-button'); // Substitua com o caminho correto
  });

  it('should select the "Yes" radio button', () => {
    cy.get('input[type="radio"][value="Yes"]').check({ force: true });
    cy.get('input[type="radio"][value="Yes"]').should('be.checked');
  });

  it('should only allow one radio button to be selected at a time', () => {
    cy.get('input[type="radio"][value="Yes"]').check({ force: true });
    cy.get('input[type="radio"][value="Impressive"]').check({ force: true });

    cy.get('input[type="radio"][value="Yes"]').should('not.be.checked');
    cy.get('input[type="radio"][value="Impressive"]').should('be.checked');
  });

  it('should verify the default state of radio buttons', () => {
    cy.get('input[type="radio"][value="No"]').should('not.be.checked');
  });
});