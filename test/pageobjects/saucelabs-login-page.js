const Page = require("./page");

class SauceLabsLoginPage extends Page {

    get userNameField(){
        return $('#user-name');
    }
    
    get passwordField(){
        return $('#password');
    }

    get loginButton(){
        return $('#login-button');
    }

    openSauceLabsLoginPage() {
        browser.url("https://www.saucedemo.com/");
    }

    async enterUserName(userName){
        await this.userNameField.setValue(userName);
    }

    async enterPassword(password){
        await this.passwordField.setValue(password);
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }
}

module.exports = new SauceLabsLoginPage();