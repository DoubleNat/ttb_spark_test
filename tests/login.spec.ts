import { LogoutPage } from "../resources/1_page/logoutPage";
import { LoginPage } from "../resources/1_page/loginPage";
import test from "@playwright/test";

let loginPage : LoginPage
let logoutPage : LogoutPage

test.beforeEach("Create Object", async ({ page }) => {
    loginPage = new LoginPage(page);
    logoutPage = new LogoutPage(page);
})

test("Test Case 1: Login Success", async () => {
    await loginPage.goto();
    await loginPage.checkWordingLoginPage();
    await loginPage.inputUsername("tomsmith");
    await loginPage.inputPassword("SuperSecretPassword!");
    await loginPage.clickLoginButton();
    await logoutPage.verifyMessageLogoutPage("You logged into a secure area!")
    await logoutPage.clickLogoutButton();
    await loginPage.verifyMessageLoginPage("You logged out of the secure area!")
})

test("Test Case 2: Login Failed Password Incorrect" , async () => {
    await loginPage.goto();
    await loginPage.inputUsername("tomsmith");
    await loginPage.inputPassword("Password!");
    await loginPage.clickLoginButton();
    await loginPage.verifyMessageLoginPage("Your password is invalid!");
})

test("Test Case 3: Login Failed Username Not Found" , async () => {
    await loginPage.goto();
    await loginPage.inputUsername("tomholland");
    await loginPage.inputPassword("Password!");
    await loginPage.clickLoginButton();
    await loginPage.verifyMessageLoginPage("Your username is invalid!")
})

