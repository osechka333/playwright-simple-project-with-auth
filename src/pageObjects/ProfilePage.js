import BasePage from "./BasePage.js";
export default class ProfilePage extends BasePage {
    constructor(page) {
        super(page, '/panel/profile', page.locator('button', {hasText: 'Edit profile'}));
        this.userName = page.locator('.profile_name')
    }
}