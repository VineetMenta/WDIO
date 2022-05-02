const Page = require("./page");

class SauceLabsProductsPage extends Page {

    get productAddToCartButtons(){
        return $$('.pricebar>button');
    }

    get shoppingCartLink(){
        return $('.shopping_cart_link');
    }

    get pricesOfProducts(){
        return $$('.pricebar>div');
    }
    
    async addProductToCart(itemNumber){
        var listOfItems = await this.productAddToCartButtons;
        await listOfItems[itemNumber].click();
    }

    async getPriceOfProduct(itemNumber){
        var listOfPrices = await this.pricesOfProducts;
        return await listOfPrices[itemNumber].getText();
    }

    async clickShoppingCartButton(){
        await this.shoppingCartLink.click();
    }
}

module.exports = new SauceLabsProductsPage();