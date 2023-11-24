import {test} from "@playwright/test";
import {USERS} from "../../src/data/users.js";
import {STORAGE_STATE_USER_PATH} from "../../src/data/storageState.js";

test("Login as user and save storage state", async ({page, context})=>{
    await page.goto('/');
    await page.locator('.btn.btn-outline-white.header_signin').nth(0).click();
    await page.locator('#signinEmail').fill(USERS.JOE_DOU.email);
    await page.locator('#signinPassword').fill(USERS.JOE_DOU.password);
    await page.locator('.btn-primary').nth(1).click();
    await page.waitForURL('https://qauto.forstudy.space/panel/garage');
    await page.context().storageState({
        path: STORAGE_STATE_USER_PATH
    });
});
