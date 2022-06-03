/// <reference types ="Cypress" />

it('google test', function () {
    //it('google test',()=>{

    cy.visit('https://google.com')

    cy.get('.gLFyf').type('Automation Step By Step{enter}')

    cy.wait(5000)

    //cy.get('.dmenke > :nth-child(2) >  .usJj9c > .r > .1' ).click()
    //cy.get('.gLFyf',{timeout: 6000}).type('Automation Step By Step{enter}')


    //cy.contains('Videos').click()
    cy.contains(':nth-child(3) > .hide-focus-ring')


})