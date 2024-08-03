export default class Login {
    constructor() {
        this.baseUrl = Cypress.env('BASE_URL');
    }

    login() {
        const options = {
            method: 'POST',
            url: `${this.baseUrl}/api/public/auth/login`,
            headers: {
                Accept: '*/*'
            },
            body: {
                credential: Cypress.env('USER_EMAIL'),
                password: Cypress.env('USER_PASSWORD')
            },
            failOnStatusCode: false
        }
        return cy.request(options);
    }

}