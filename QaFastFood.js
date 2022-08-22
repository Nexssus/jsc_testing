const webdriver = require('selenium-webdriver');
const { By, Key, until } = require('selenium-webdriver')

const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;

describe('fastFoodQa', function() {
    let driver;

    before(function() {
        driver = new webdriver.Builder().forBrowser('chrome').build();
    });

    after(async function() {
        await driver.quit();
    });

    beforeEach(async function() {
        // Pokrece se pre svakog testa
    });

    afterEach(async function() {
        // Pokrece se nakon svakog testa
    });

    it("Verify homepage qa is open", async function(){
        await driver.get("http://test.qa.rs/");
        expect(await driver.getCurrentUrl()).to.eq("http://test.qa.rs/");
    })
    
    

});