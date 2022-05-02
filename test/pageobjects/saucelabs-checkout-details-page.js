const Page = require("./page");

class SauceLabsCheckoutDetailsPage extends Page {

    get firstNameField(){
        return $('#first-name');
    }

    get lastNameField(){
        return $('#last-name');
    }

    get zipCodeField(){
        return $('#postal-code');
    }

    get continueButton(){
        return $('#continue');
    }

    async enterUserDetails(firstName, lastName, zipCode){
        await this.firstNameField.setValue(firstName);
        await this.lastNameField.setValue(lastName);
        await this.zipCodeField.setValue(zipCode);
    }

    async clickOnContinue(){
        await this.continueButton.click();
    }
}

module.exports = new SauceLabsCheckoutDetailsPage();