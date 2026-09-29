import {Page, Locator} from '@playwright/test';

export class HomePage{
readonly page: Page;
readonly addToCartButton : Locator;
readonly cartLogo : Locator;
readonly sidebarMenuButton : Locator;
readonly logoutLink : Locator;

constructor(page: Page){
    this.page = page;
    this.addToCartButton =page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
    this.cartLogo = page.locator('.shopping_cart_link');
    this.sidebarMenuButton = page.locator('#react-burger-menu-btn');
    this.logoutLink = page.locator('#logout_sidebar_link');
}
async addProductToCart(){
await this.addToCartButton.click();
await this.page.waitForTimeout(2000);
await this.cartLogo.click();
}
async logoutFromApplication(){
await this.sidebarMenuButton.click();
await this.page.waitForTimeout(2000);
await this.logoutLink.click();

}
}