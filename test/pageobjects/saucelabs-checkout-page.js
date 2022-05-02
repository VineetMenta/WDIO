const Page = require("./page");

class SauceLabsCheckoutPage extends Page {

    get checkOutButton(){
        return $('#checkout');
    }

    get productPrices(){
        return $$('.item_pricebar>div');
    }

    async productPricesInCart(){
        var productPrices = await this.productPrices;
        var texts = [];
        for(let i=0;i<productPrices.length;i++){
            texts.push(await productPrices[i].getText());
        }
        // Please check this!
        //var texters = await productPrices.map(async(element)=>await element.getText());
        return texts;
    }

    async clickOnCheckOutButton(){
        await this.checkOutButton.click();
    }
}

module.exports = new SauceLabsCheckoutPage();