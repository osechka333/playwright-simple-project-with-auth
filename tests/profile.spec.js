import {test} from '../src/fixtures/test.fixture.js'
import {expect} from "@playwright/test";

test.describe('User profile', ()=>{
    test.only('page should contain valid user info', async ({userProfilePage, page})=>{
        await userProfilePage.navigate();
        await expect(userProfilePage.userName, "valid user name should be displayed")
            .toHaveText(`AqaAndriy AqaLastName`);
    })
})