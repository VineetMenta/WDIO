const testData = require('../testdata/data.json');
const googleSearchPage = require('../pageobjects/google-search-page.js');
const searchQuery = 'Webdriver IO';

describe("Verify Google Search", () => {
    it("Open Google and search for WebdriverIO query", async()=>{
        await googleSearchPage.openGoogleHomePage();
        await googleSearchPage.searchWithQuery(testData.searchQuery);
    });
    
    it("Verify the page title", async()=> {
        const title = await googleSearchPage.getTitle();
        expect(title).toBe(testData.expectedTitle);
    });
});