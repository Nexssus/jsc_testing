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

    it("Verify homepage is open", async function(){
        await driver.get("http://test.qa.rs/");
        expect(await driver.getCurrentUrl()).to.eq("http://test.qa.rs/");
    });
    
    it('Go to registration page', async function(){
        const reg = await driver.findElement(By.linkText('Register'));
        await reg.click();
        expect(await driver.getCurrentUrl()).to.eq("http://test.qa.rs/register");
    });

    it('Register new user', async function(){
        const firstName = await driver.findElement(By.name('firstname'));
        firstName.sendKeys('Negovan');
        const lastName = await driver.findElement(By.name('lastname'));
        lastName.sendKeys('Milenkovic');
        const eMail = await driver.findElement(By.name('email'));
        eMail.sendKeys('mnegovan1979@gmail.com');
        const username = await driver.findElement(By.name('username'));
        username.sendKeys('negovan');
        const pass = await driver.findElement(By.id('password'));
        pass.sendKeys('negovan1234');
        const passAgain = await driver.findElement(By.id('passwordAgain'));
        passAgain.sendKeys('negovan1234');
        const regBtn = await driver.findElement(By.name('register'));
        await regBtn.click();
        await driver.sleep(5000);
    });  

    it('Go to login page', async function(){
        const login = await driver.findElement(By.linkText('Login'));
        await login.click();
        expect(await driver.getCurrentUrl()).to.eq('http://test.qa.rs/login');
        await driver.sleep(5000);
    })

});