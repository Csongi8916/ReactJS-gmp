describe('Cypress', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('Should active genre button if I will click', () => {
    cy.get('.NxrToogle_Btn')
      .eq(1)
      .should('not.have.class', 'NxrToogle_Btn-Active')
      .click()
      .should('have.class', 'NxrToogle_Btn-Active');

    cy.get('.NxrToogle_Btn')
      .eq(0)
      .wait(1000)
      .should('not.have.class', 'NxrToogle_Btn-Active')
      .click()
      .should('have.class', 'NxrToogle_Btn-Active')
  })


  it('Should active raitibg button if I will click', () => {
    cy.get('.NxrToogle_Btn')
      .eq(3)
      .wait(1000)
      .should('not.have.class', 'NxrToogle_Btn-Active')
      .click()
      .should('have.class', 'NxrToogle_Btn-Active')

    cy.get('.NxrToogle_Btn')
      .eq(2)
      .wait(1000)
      .should('not.have.class', 'NxrToogle_Btn-Active')
      .click()
      .should('have.class', 'NxrToogle_Btn-Active')
  })



})