describe('Kawasaki geo location tests', () => {
    it('Navigate to kawasaki home page', async () => {
        browser.url('https://kawasaki-india.com/dealer-locator/');
        browser.pause(5000);
    });
    it('emulate location', async()=>{
        browser.cdp('Emulation', 'setGeolocationOverride' , {
            latitude:35.689487,
            longitude:139.691706,
            accuracy: 100
        });
        browser.cdp('Emulation', 'setTimezoneOverride', {
            timezoneId: 'Asia/Tokyo'
        });
        browser.pause(10000);
    });
});