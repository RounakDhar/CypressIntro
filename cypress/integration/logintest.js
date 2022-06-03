/// <reference types ="Cypress" />

it('google test', function () {
   
    cy.visit('https://google.com')

    cy.get('.gLFyf').type('Automation Step By Step{enter}')

    cy.wait(5000)

    cy.contains(':nth-child(3) > .hide-focus-ring')

})

it.only('login test',function(){

    cy.visit('https://orangehrm-demo-6x.orangehrmlive.com/auth/login')
    cy.get('#btnLogin').click()

    cy.get('#menu_admin_viewAdminModule > :nth-child(1) > .left-menu-title').click()
    cy.get('#menu_admin_UserManagement > .collapsible-header > .left-menu-title').click()
    cy.get('#menu_admin_viweSystemUsers > .left-menu-title').click()

    cy.get('.btn-floating > .material-icons').click()
    cy.get('.ng-valid-maxlength > .modal-footer').find('#systemUserSaveBtn').click()

})