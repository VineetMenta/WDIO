const expectChai = require('chai').expect;
const testData = require('../testdata/data.json');
const googleSearchPage = require('../pageobjects/google-search-page.js');

describe("Verify Google Search", () => {
    it("Open Google and search for WebdriverIO query", async()=>{
        googleSearchPage.openGoogleHomePage();
        expectChai(await googleSearchPage.searchTextBox.isDisplayed()).to.equal(true);
        await googleSearchPage.searchWithQuery(testData.searchQuery);
    });
    
    it("Verify the page title", async()=> {
        const title = await googleSearchPage.getTitle();
        expectChai(title).to.equal(testData.expectedTitle);
    });

    it("Search for another query", async()=> {
        await googleSearchPage.searchWithQueryResultsPage(testData.secondSearchQuery);
    });

    it("Verify second page title", async()=>{
        const secondTitle = await googleSearchPage.getTitle();
        expectChai(await googleSearchPage.searchTextBox.isDisplayed()).to.equal(false);
        expectChai(secondTitle).to.equal(testData.secondExpectedTitle);
    });
});