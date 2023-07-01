beforeEach(() => {
    cy.visit('cypress/fixtures/registration_form_2.html')
})

/*
Assignement 4: add content to the following tests
*/

describe('Section 1: Functional tests', () => {

    it('User cant use different first and validation passwords', ()=>{
        //Filling mandatory fields
        cy.get('#username').type('Test_User')
        cy.get('#email').type('testemail@email.com')
        cy.get('[name="name"]').type('Firstname')
        cy.get('#lastName').type('Lastname')
        cy.get('[data-testid="phoneNumberTestId"]').type(123456789)
        cy.get('#password').type('12345')
        cy.get('#confirm').type('12345a') //wrong password

        cy.get('h2').contains('Password section').click()

        cy.get('.submit_button').should('be.disabled')//Submit button check (disabled)        
        cy.get('#password_error_message').should('be.visible')//Error message check (visible)
        


    })

    it('User can use only same both first and validation passwords', ()=>{
        //Filling mandatory fields
        cy.get('#username').type('Test_User')
        cy.get('#email').type('testemail@email.com')
        cy.get('[name="name"]').type('Firstname')
        cy.get('#lastName').type('Lastname')
        cy.get('[data-testid="phoneNumberTestId"]').type(123456789)
        cy.get('#password').type('12345')
        cy.get('#confirm').type('12345')

        cy.get('h2').contains('Password section').click()

        cy.get('.submit_button').should('be.enabled')//Submit button check (enabled)       
        cy.get('#password_error_message').should('not.be.visible')//Error message check (not visible)
        


    })
    
    it('User can submit form with all fields added', ()=>{
        //Filling ALL fields
        cy.get('#username').type('Test_User')
        cy.get('#email').type('testemail@email.com')
        cy.get('[name="name"]').type('Firstname')
        cy.get('#lastName').type('Lastname')
        cy.get('[data-testid="phoneNumberTestId"]').type(123456789)
        cy.get('#password').type('12345')
        cy.get('#confirm').type('12345')

        cy.get('#javascriptFavLanguage').click()//Weblanguage, Radio button
        cy.get('#vehicle3').click()//Transport, Check boxe
        cy.get('#cars').select('Volvo')//Car, Combo box
        cy.get('#animal').select('cat')//Animal, Combo box

        cy.get('h2').contains('Password section').click()

        cy.get('.submit_button').should('be.enabled')//Submit button check (enabled)
        cy.get('.submit_button').click()//Click Submit button
        
        cy.get('#success_message').should('be.visible')//Success message check (visible)

    })

    it('User can submit form with valid data and only mandatory fields added', ()=>{
        //Filling mandatory fields
        cy.get('#username').type('Test_User')
        cy.get('#email').type('testemail@email.com')
        cy.get('[name="name"]').type('Firstname')
        cy.get('#lastName').type('Lastname')
        cy.get('[data-testid="phoneNumberTestId"]').type(123456789)
        cy.get('#password').type('12345')
        cy.get('#confirm').type('12345')

        cy.get('h2').contains('Password section').click()

        cy.get('.submit_button').should('be.enabled')//Submit button check (enabled)
        cy.get('.submit_button').click()//Click Submit button
        
        cy.get('#success_message').should('be.visible')//Success message check (visible)
        
    })

    it('Submit button is disabled when some mandatory field is not present. No Username', ()=>{
        //cy.get('#username').type('Test_User')
        cy.get('#email').type('testemail@email.com')
        cy.get('[name="name"]').type('Firstname')
        cy.get('#lastName').type('Lastname')
        cy.get('[data-testid="phoneNumberTestId"]').type(123456789)
        cy.get('#password').type('12345')
        cy.get('#confirm').type('12345')

        cy.get('h2').contains('Password section').click()

        cy.get('h2').contains('Password section').click()

        cy.get('.submit_button').should('be.disabled')//Submit button check (disabled)        
                
    })

    it('Submit button is disabled when some mandatory field is not present. No Email', ()=>{
        cy.get('#username').type('Test_User')
        //cy.get('#email').type('testemail@email.com')
        cy.get('[name="name"]').type('Firstname')
        cy.get('#lastName').type('Lastname')
        cy.get('[data-testid="phoneNumberTestId"]').type(123456789)
        cy.get('#password').type('12345')
        cy.get('#confirm').type('12345')

        cy.get('h2').contains('Password section').click()

        cy.get('h2').contains('Password section').click()

        cy.get('.submit_button').should('be.disabled')//Submit button check (disabled)        
                
    })

    it('Submit button is disabled when some mandatory field is not present. No First name', ()=>{
        cy.get('#username').type('Test_User')
        cy.get('#email').type('testemail@email.com')
        //cy.get('[name="name"]').type('Firstname')
        cy.get('#lastName').type('Lastname')
        cy.get('[data-testid="phoneNumberTestId"]').type(123456789)
        cy.get('#password').type('12345')
        cy.get('#confirm').type('12345')

        cy.get('h2').contains('Password section').click()

        cy.get('h2').contains('Password section').click()

        cy.get('.submit_button').should('be.disabled')//Submit button check (disabled)        
                
    })

    it('Submit button is disabled when some mandatory field is not present. No Last name', ()=>{
        cy.get('#username').type('Test_User')
        cy.get('#email').type('testemail@email.com')
        cy.get('[name="name"]').type('Firstname')
        //cy.get('#lastName').type('Lastname')
        cy.get('[data-testid="phoneNumberTestId"]').type(123456789)
        cy.get('#password').type('12345')
        cy.get('#confirm').type('12345')

        cy.get('h2').contains('Password section').click()

        cy.get('h2').contains('Password section').click()

        cy.get('.submit_button').should('be.disabled')//Submit button check (disabled)        
                
    })

    it('Submit button is disabled when some mandatory field is not present. No Phone number', ()=>{
        cy.get('#username').type('Test_User')
        cy.get('#email').type('testemail@email.com')
        cy.get('[name="name"]').type('Firstname')
        cy.get('#lastName').type('Lastname')
        //cy.get('[data-testid="phoneNumberTestId"]').type(123456789)
        cy.get('#password').type('12345')
        cy.get('#confirm').type('12345')

        cy.get('h2').contains('Password section').click()

        cy.get('h2').contains('Password section').click()

        cy.get('.submit_button').should('be.disabled')//Submit button check (disabled)        
                
    })

    it('Submit button is disabled when some mandatory field is not present. No Password', ()=>{
        cy.get('#username').type('Test_User')
        cy.get('#email').type('testemail@email.com')
        cy.get('[name="name"]').type('Firstname')
        cy.get('#lastName').type('Lastname')
        cy.get('[data-testid="phoneNumberTestId"]').type(123456789)
        //cy.get('#password').type('12345')
        cy.get('#confirm').type('12345')

        cy.get('h2').contains('Password section').click()

        cy.get('h2').contains('Password section').click()

        cy.get('.submit_button').should('be.disabled')//Submit button check (disabled)        
                
    })

    it('Submit button is disabled when some mandatory field is not present. No Confirm Password', ()=>{
        cy.get('#username').type('Test_User')
        cy.get('#email').type('testemail@email.com')
        cy.get('[name="name"]').type('Firstname')
        cy.get('#lastName').type('Lastname')
        cy.get('[data-testid="phoneNumberTestId"]').type(123456789)
        cy.get('#password').type('12345')
        //cy.get('#confirm').type('12345')

        cy.get('h2').contains('Password section').click()

        cy.get('h2').contains('Password section').click()

        cy.get('.submit_button').should('be.disabled')//Submit button check (disabled)        
                
    })

    
    

})

/*
Assignement 5: create more visual tests
*/

describe('Section 2: Visual tests', () => {
    it('Check that logo is correct and has correct size', () => {
        cy.log('Will check logo source and size')
        cy.get('img').should('have.attr', 'src').should('include', 'cerebrum_hub_logo')
        // get element and check its parameter height, to be equal 178
        cy.get('img').invoke('height').should('be.lessThan', 178)
            .and('be.greaterThan', 100)
    })

    it('Check that logo 2 is correct and has correct size', () => {
        cy.log('Will check logo source and size')
        cy.get('[data-cy="cypress_logo"]').should('have.attr', 'src').should('include', 'cypress')
        // get element and check its parameter height, to be equal 88
        cy.get('[data-cy="cypress_logo"]').invoke('height').should('be.lessThan', 89)
            .and('be.greaterThan', 87).and('be.equal', 88)
        // get element and check its parameter width, to be equal 116
        cy.get('[data-cy="cypress_logo"]').invoke('width').should('be.lessThan', 117)
            .and('be.greaterThan', 115).and('be.equal', 116)
    })


    it('Check navigation part, first link', () => {
        cy.get('nav').children().should('have.length', 2)

        // Get navigation element, find siblings that contains h1 and check if it has Registration form in string
        cy.get('nav').siblings('h1').should('have.text', 'Registration form number 2')
        
        // Get navigation element, find its first child, check the link content and click it
        cy.get('nav').children().eq(0).should('be.visible')
            .and('have.attr', 'href', 'registration_form_1.html')
            .click()
        
        // Check that currently opened URL is correct
        cy.url().should('contain', '/registration_form_1.html')
        
        // Go back to previous page
        cy.go('back')
        cy.log('Back again in registration form 2')
    })

    

    it('Check navigation part, second link', () => {
        cy.get('nav').children().should('have.length', 2)

        // Get navigation element, find siblings that contains h1 and check if it has Registration form in string
        cy.get('nav').siblings('h1').should('have.text', 'Registration form number 2')
        
        // Get navigation element, find its second child, check the link content and click it
        cy.get('nav').children().eq(1).should('be.visible')
            .and('have.attr', 'href', 'https://cerebrumhub.com/')
            .click()
        
        // Check that currently opened URL is correct
        cy.url().should('contain', 'https://cerebrumhub.com/')
        
        // Go back to previous page
        cy.go('back')
        cy.log('Back again in registration form 2')
    })


    it('Check that radio button list is correct', () => {
        // Array of found elements with given selector has 4 elements in total
        cy.get('input[type="radio"]').should('have.length', 4)
        cy.get('input[type="radio"]').next().eq(0).should('have.text','HTML').and('not.be.checked')
        cy.get('input[type="radio"]').next().eq(1).should('have.text','CSS').and('not.be.checked')
        cy.get('input[type="radio"]').next().eq(2).should('have.text','JavaScript').and('not.be.checked')
        cy.get('input[type="radio"]').next().eq(3).should('have.text','PHP').and('not.be.checked')

        // Selecting one will remove selection from other radio button
        cy.get('input[type="radio"]').eq(0).check().should('be.checked')
        cy.get('input[type="radio"]').eq(1).check().should('be.checked')
        cy.get('input[type="radio"]').eq(0).should('not.be.checked')
    })


    it('Check that checkboxes list is correct', () => {
        // Array of found elements with given selector has 3 elements in total
        cy.get('input[type="checkbox"]').should('have.length', 3)
        cy.get('input[type="checkbox"]').next().eq(0).should('have.text','I have a bike').and('not.be.checked')
        cy.get('input[type="checkbox"]').next().eq(1).should('have.text','I have a car').and('not.be.checked')
        cy.get('input[type="checkbox"]').next().eq(2).should('have.text','I have a boat').and('not.be.checked')
        

        // All boxes remain checked.
        cy.get('input[type="checkbox"]').eq(0).check().should('be.checked')
        cy.get('input[type="checkbox"]').eq(1).check().should('be.checked')
        cy.get('input[type="checkbox"]').eq(0).should('be.checked')
        cy.get('input[type="checkbox"]').eq(2).check().should('be.checked')
        cy.get('input[type="checkbox"]').eq(0).should('be.checked')
        cy.get('input[type="checkbox"]').eq(1).should('be.checked')
    })

    it('Car dropdown is correct', () => {
        // Here is an example how to explicitely create screenshot from the code
        // Select second element and create screenshot for this area, and full page
        cy.get('#cars').select(1).screenshot('Cars drop-down')
        cy.screenshot('Full page screenshot')

        // Here are given different solutions how to get the length of array of elements in Cars dropdown
        // Next 2 lines of code do exactly the same!
        cy.get('#cars').children().should('have.length', 4)
        cy.get('#cars').find('option').should('have.length', 4)
        
        //Check  that first element in the dropdown has text Volvo
        cy.get('#cars').find('option').eq(0).should('have.text', 'Volvo')
        
        // Advanced level how to check the content of the Cars dropdown
        cy.get('#cars').find('option').then(options => {
            const actual = [...options].map(option => option.value)
            expect(actual).to.deep.eq(['volvo', 'saab', 'opel', 'audi'])
        })
    })


    it('Car dropdown is correct', () => {
        
        // Advanced level how to check the content of the Animal dropdown
        cy.get('#animal').find('option').then(options => {
            const actual = [...options].map(option => option.value)
            expect(actual).to.deep.eq(['dog', 'cat', 'snake', 'hippo', 'spider', 'mouse'])
        })
    })



})

function inputValidData() {
    cy.log('Username will be filled')
    cy.get('input[data-testid="user"]').type('Something')
    cy.get('#email').type('validemail@yeap.com')
    cy.get('[data-cy="name"]').type('John')
    cy.get('#lastName').type('Doe')
    cy.get('[data-testid="phoneNumberTestId"]').type(10203040)
    // If element has multiple classes, then one of them can be used
    cy.get('#password').type('MyPass')
    cy.get('#confirm').type('MyPass')
    cy.get('h2').contains('Password').click()
}