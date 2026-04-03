import { Page, Locator, expect } from "@playwright/test";
import { step } from "../step";

export class LoginPage {
  readonly page: Page;
  readonly loginPageText: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly messageLoginPage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginPageText = page.getByText("Login Page");
    this.usernameInput = page.locator("#username"); // ตัวอย่าง selector
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator('button[type="submit"]');
    this.messageLoginPage = page.locator("#flash");
  }

  @step("Go to https://example.com/login")
  async goto(): Promise<void> {
    await this.page.goto("http://the-internet.herokuapp.com/login");
  }

  @step("Check Wording Login Page")
  async checkWordingLoginPage(): Promise<void> {
    await expect(this.loginPageText).toBeVisible();
  }

  @step("Input UserName")
  async inputUsername(userName: string): Promise<void> {
    await this.usernameInput.fill(userName);
  }

  @step("Input Password")
  async inputPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  @step("Click Login Button")
  async clickLoginButton(): Promise<void> {
    await this.loginButton.click();
  }

  @step("Verify Message Login Page")
  async verifyMessageLoginPage(expectedMassage: string): Promise<void> {
    const messageText = (await this.messageLoginPage.textContent())?.replace("×", "").trim();
    await expect(messageText).toBe(expectedMassage);
    console.log(`Message: ${messageText}`);
  }
}
