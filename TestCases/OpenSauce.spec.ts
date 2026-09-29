import {test} from '@playwright/test';
import {LoginPage} from '../PageObjects/LoginPage';
import {HomePage} from '../PageObjects/HomePage';
import {YourCartPage} from '../PageObjects/YourCartPage';

test('Open Sauce Demo Application', async ({page}) => {
    const loginPageInstance = new LoginPage(page);
    await loginPageInstance.openSauceDemoApp();
    await page.waitForTimeout(2000);
    await loginPageInstance.loginToApplication('standard_user', 'secret_sauce');

    const homePageInstance = new HomePage(page);
    await homePageInstance.addProductToCart();

    const yourCartPageInstance = new YourCartPage(page);
    await yourCartPageInstance.proceedToCheckout();

    await homePageInstance.logoutFromApplication();
    await loginPageInstance.closeTheApplication();
    
});