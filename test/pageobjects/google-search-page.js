const Page = require("./page");

class GoogleSearchPage extends Page {

    get searchTextBox(){
        return $('input[title="Search"]');
    }
    
    get searchTextBoxResultsPage(){
        return $('//*[@id="tsf"]//input[@aria-label="Search"]');
    }

    openGoogleHomePage() {
        browser.url("https://www.google.co.in");
    }

    async searchWithQuery(query){
        await this.searchTextBox.setValue(query);
        await browser.keys(['Enter']);
    }

    async searchWithQueryResultsPage(query){
        await this.searchTextBoxResultsPage.setValue(query);
        await browser.keys(['Enter']);
    }

}

module.exports = new GoogleSearchPage();