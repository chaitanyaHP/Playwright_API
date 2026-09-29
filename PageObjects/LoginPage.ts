import {Page, Locator} from '@playwright/test';

export class LoginPage{
readonly page: Page;
readonly usernameTextField : Locator;
readonly passwordTextField : Locator;
readonly loginButton : Locator;



constructor(page: Page){
    this.page = page;
    this.usernameTextField = this.page.locator('[data-test="username"]');
    this.passwordTextField = this.page.locator('[data-test="password"]');
    this.loginButton = this.page.locator('[data-test="login-button"]');

}
async openSauceDemoApp(){
await this.page.goto('https://www.saucedemo.com/');
}
async loginToApplication(username: string, password: string){
await this.usernameTextField.fill(username);
await this.passwordTextField.fill(password);
await this.page.waitForTimeout(2000);
await this.loginButton.click(); 
}
async closeTheApplication(){
await this.page.close
}
}