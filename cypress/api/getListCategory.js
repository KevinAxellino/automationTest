export default class ListCategory {
    constructor() {
        this.baseUrl = Cypress.env('BASE_URL');
    }

    getListCategory(token) {
        const options = {
            method: 'GET',
            url: `${this.baseUrl}/api/categories/page`,
            headers: {
                Accept: '*/*',
                Authorization: `Bearer ${token}`
            },
            failOnStatusCode: false
        }
        return cy.request(options);
    }

}