import ListCategory from '../api/getListCategory';
import Login from '../api/login';

let auth = new Login();
let listCategory = new ListCategory();
let token;

describe('List Category Test', () => {
    beforeEach(() => {
        auth.login().then((response) => {
            token = response.body.data.token;
        });
    });

    it('List Category Happy Path', () => {
        listCategory.getListCategory(token).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data).is.not.null;
        });
    });
});