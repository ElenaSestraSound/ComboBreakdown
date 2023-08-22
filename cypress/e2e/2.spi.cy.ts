describe('Best cypress presentation ever', () => {
  beforeEach(() => {
    cy.visit('https://codeworks.me/')
  })

    it('Check this page', () => {
    cy.get('.elementor-button:first').click()
    cy.get('li').should('be.visible')
    })
    
  it('shows page stuff', () => {

    cy.contains('.elementor-element-ff3d9c9 > .elementor-widget-container > h1')
  })
})