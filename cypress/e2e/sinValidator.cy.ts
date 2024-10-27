describe('SIN Validator Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173')
  })

  it('displays neutral border and no message when input is empty', () => {
    cy.get('.sin-input')
      .should('have.class', 'neutral-border')
      .and('have.value', '')
    cy.get('p').should('not.exist')
  })

  it('shows an error message and red border for invalid SIN', () => {
    cy.get('.sin-input').type('12345678') // Only 8 digits, invalid format
    cy.get('p')
      .should('be.visible')
      .and('contain', 'Invalid SIN. Please enter 9 digits or check validity.')
      .and('have.class', 'invalid')
    cy.get('.sin-input').should('have.class', 'invalid-border')
  })

  it('displays valid message and green border for a correct SIN', () => {
    cy.get('.sin-input').clear()
    cy.get('.sin-input').type('046454286') // Example valid SIN
    cy.get('p')
      .should('be.visible')
      .and('contain', 'Valid SIN!')
      .and('have.class', 'valid')
    cy.get('.sin-input').should('have.class', 'valid-border')
  })

  it('resets the state to neutral when input is cleared', () => {
    cy.get('.sin-input').type('123456789')
    cy.get('.sin-input').clear()
    cy.get('.sin-input')
      .should('have.class', 'neutral-border')
      .and('have.value', '')
    cy.get('p').should('not.exist')
  })

  it('shows an error message for SIN with non-numeric characters', () => {
    cy.get('.sin-input').type('12345abc9')
    cy.get('p')
      .should('be.visible')
      .and('contain', 'Invalid SIN. Please enter 9 digits or check validity.')
      .and('have.class', 'invalid')
    cy.get('.sin-input').should('have.class', 'invalid-border')
  })
})
