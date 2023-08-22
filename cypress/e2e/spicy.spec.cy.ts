describe('Load main page', () => {
  it('shows page', () => {
    cy.visit('https://codeworks.me/')

    cy.contains('Breakdown')
  })
})