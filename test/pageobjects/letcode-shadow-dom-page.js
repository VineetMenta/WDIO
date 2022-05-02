const Page = require('./page.js');

class LetCodeShadowDomPage extends Page {

    get firstNameField(){
        return $('#open-shadow').shadow$('#fname');
    }
    
    async openLetCodeShadowPage() {
        await browser.url("https://letcode.in/shadow");
    }

    async enterFirstName(fname){
        await this.firstNameField.setValue(fname);
    }
}

module.exports = new LetCodeShadowDomPage();