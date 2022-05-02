const Page = require("./page");

class HerokuAppPage extends Page {

    get startButton(){
        return $('#start>button');
    }
    
    get textAfterLoad(){
        return $('#finish');
    }

    openHerokuApp() {
        browser.url("https://the-internet.herokuapp.com/dynamic_loading/1");
    }

    async clickOnStartButton(){
        await this.startButton.waitForClickable({timeout:10000, interval:1000, timeoutMsg:'Unable to find the start button'});
        await this.startButton.click();
    }

    async waitForLoadAndGetText(){
        await this.textAfterLoad.waitForDisplayed({timeout:10000, interval:1000, timeoutMsg:'Unable to find the flash text'});
        return this.textAfterLoad.getText();
    }

}

module.exports = new HerokuAppPage();