import Login from '../api/login';

let auth = new Login();

describe('Login Test', () => {
    it('Login Happy Path', () => {
        auth.login().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.success).to.eq(true);
            expect(response.body.data.token).is.not.null;
        });
    });
});