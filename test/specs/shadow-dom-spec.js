const LetCodePage = require('../pageobjects/letcode-shadow-dom-page');

describe('Shadow Dom example tests', () => {
    it('User navigates to Letcode', async ()=> {
        await LetCodePage.openLetCodeShadowPage();
    });

    it('User enters details', async()=>{
        await LetCodePage.enterFirstName('Vineet');
    });

    it('Verify the entered text', async()=>{
        expect(await LetCodePage.firstNameField).toHaveText('Vineet');
    });
});