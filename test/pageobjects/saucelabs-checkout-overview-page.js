const Page = require("./page");

class SauceLabsCheckoutOverviewPage extends Page {

    get itemsTotal(){
        return $('.summary_subtotal_label');
    }

    async getItemsTotal(){
        return await this.itemsTotal.getText();
    }
}

module.exports = new SauceLabsCheckoutOverviewPage();