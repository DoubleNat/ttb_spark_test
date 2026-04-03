import { expect, Locator, Page } from "@playwright/test";
import { step } from "../step";

export class LogoutPage {
  readonly page: Page;
  readonly secureAreaText: Locator;
  readonly logoutButton: Locator;
  readonly messageLogoutPage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.secureAreaText = page.locator("//h2[text()=' Secure Area']");
    this.logoutButton = page.locator('a[href="/logout"]');
    this.messageLogoutPage = page.locator("#flash");
  }

  @step("Click Logout Button")
  async clickLogoutButton(): Promise<void> {
    await this.logoutButton.click();
  }

  @step("Verify Message Logout Page")
  async verifyMessageLogoutPage(expectedMassage: string): Promise<void> {
    const messageText = (await this.messageLogoutPage.textContent())?.replace("×", "").trim();
    await expect(messageText).toBe(expectedMassage);
    console.log(`Message: ${messageText}`);
  }
}
