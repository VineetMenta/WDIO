const sauceDemoLoginPage = require('../pageobjects/saucelabs-login-page');
const sauceLabsProductsPage = require('../pageobjects/saucelabs-products-page');
const sauceLabsCheckoutPage = require('../pageobjects/saucelabs-checkout-page');
const sauceLabsCheckoutDetailsPage = require('../pageobjects/saucelabs-checkout-details-page');
const sauceLabsCheckoutOverviewPage = require('../pageobjects/saucelabs-checkout-overview-page');

var productPrices = [];

describe('Verify sauce labs cart pages', async()=> {
    it('Navigate to saucelabs demo', async()=>{
        await sauceDemoLoginPage.openSauceLabsLoginPage();
    });

    it('Login to sauce demo application', async()=> {
        await sauceDemoLoginPage.enterUserName('standard_user');
        await sauceDemoLoginPage.enterPassword('secret_sauce');
        await sauceDemoLoginPage.clickLoginButton();
    });

    it('Add products to cart', async()=>{
        await sauceLabsProductsPage.addProductToCart(0);
        await sauceLabsProductsPage.addProductToCart(1);
        productPrices.push(await sauceLabsProductsPage.getPriceOfProduct(0));
        productPrices.push(await sauceLabsProductsPage.getPriceOfProduct(1));
    });

    it('Click on cart button', async()=>{
        await sauceLabsProductsPage.clickShoppingCartButton();
    });
    
    it('verify prices lists in cart', async()=>{
        var cartPrices = await sauceLabsCheckoutPage.productPricesInCart();
        console.log(cartPrices);
        expect(cartPrices).toEqual(productPrices);
    });

    it('Click on checkout from cart', async()=>{
        await sauceLabsCheckoutPage.clickOnCheckOutButton();
    });

    it('Enter user details in checkout page', async()=>{
        await sauceLabsCheckoutDetailsPage.enterUserDetails('ABCD', 'EFGH', '123456');
    });

    it('Click continue button on details page', async()=>{
        await sauceLabsCheckoutDetailsPage.clickOnContinue();
    });

    it('Verify total cost of the products', async()=>{
        var total = await sauceLabsCheckoutOverviewPage.getItemsTotal();
        var totalPriceFromProducts = parseFloat(productPrices[0].substring(1));
        totalPriceFromProducts += parseFloat(productPrices[1].substring(1));
        expect(total).toContain(totalPriceFromProducts.toString());
    });
});