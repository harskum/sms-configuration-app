import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Before(() => {
    cy.server()

    cy.route({
        url: /.*\/smsCommands/,
        method: 'POST',
        response: {
            commands: [],
        },
    }).as('createSmsCommandXhr')

    cy.route({
        url: /.*\/userGroups/,
        method: 'GET',
        response: 'fixture:commands/add_cmd_unregistered/userGroups',
    })
})

Given('the user is adding a new unregistered parser sms command', () => {
    cy.visitWhenStubbed('/')

    cy.getWithDataTest('{navigation-navigationitem}:nth-child(3)').click()
    cy.getWithDataTest('{views-smscommandlist-add}').click()
    cy.getWithDataTest('{forms-fieldcommandparser-content}').click()
    cy.get('[data-value="UNREGISTERED_PARSER"]').click()

    cy.getWithDataTest(
        '{forms-fieldcommandparser} [data-test="dhis2-uicore-select-input"]'
    )
        .invoke('text')
        .should('equal', 'Unregistered parser')
})

When('the user enters the name', () => {
    cy.getWithDataTest('{commands-fieldcommandname} input').type('User name')
})

When('the user leaves the name empty', () => {
    cy.getWithDataTest('{commands-fieldcommandname} input').should(
        'have.value',
        ''
    )
})

When('the user chooses a user group', () => {
    cy.fixture('commands/add_cmd_unregistered/userGroups').then(
        ({ userGroups }) => {
            cy.getWithDataTest('{forms-fieldusergroup}').click()
            cy.get(`[data-value="${userGroups[0].id}"]`).click()
        }
    )
})

When('the user leaves the user group field empty', () => {
    cy.getWithDataTest(
        '{forms-fieldusergroup} [data-test="dhis2-uicore-select-input"]'
    )
        .invoke('text')
        .should('equal', '')
})

When('the user submits the form', () => {
    cy.getWithDataTest('{app} [type="submit"]').click()
})

Then('the data should be sent successfully', () => {
    cy.wait('@createSmsCommandXhr').then(xhr => {
        expect(xhr.status).to.equal(200)
    })
})

Then('the form should not submit', () => {
    cy.getWithDataTest('{views-smscommandlist}').should('not.exist')
})

Then('display an error message on the name field', () => {
    cy.getWithDataTest('{commands-fieldcommandname-validation}').should('exist')
})

Then('display an error message on the user group field', () => {
    cy.getWithDataTest('{forms-fieldusergroup-validation}').should('exist')
})
