const herokuAppPage = require('../pageobjects/heroku-app-page.js');
const expectedTextAfterLoad = 'Hello World!';

describe("Verify Heroku app delayed loading", () => {
    it("Open heroku app", async()=>{
        herokuAppPage.openHerokuApp();
    });
    
    it("Verify if start button is displayed", async()=> {
        expect(await herokuAppPage.startButton).toBeDisplayed();
    });

    it("Click on the start button", async() =>{
        await herokuAppPage.clickOnStartButton();
    });

    it("Verify text after loading", async() => {
        const actualText = await herokuAppPage.waitForLoadAndGetText();
        expect(actualText).toBe(expectedTextAfterLoad);
    });
});