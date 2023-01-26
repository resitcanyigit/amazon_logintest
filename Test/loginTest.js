const login = require("../pages/login.js");
Feature('login');

Scenario('Doğru Kullanici adi, Doğru şifre @testcase1',  ({ I, loginPage }) => {
    loginPage.homePage();
    loginPage.clickLogin();
    loginPage.fillCorrectUsername();
    loginPage.fillCorrectPassword();
    loginPage.loginControl();
});
Scenario('Doğru kullanici adi, Yanlis sifre @testcase2',  ({ I, loginPage }) => {
    
    loginPage.homePage();
    loginPage.clickLogin();
    loginPage.fillCorrectUsername();
    loginPage.fillWrongPassword();

});
Scenario('Yanlis kullanici adi @testcase3',  ({ I, loginPage }) => {
    
    loginPage.homePage();
    loginPage.clickLogin();
    loginPage.fillWrongUsername();
    

});
Scenario('Boş kullanici adi @testcase4',  ({ I, loginPage }) => {
    
    loginPage.homePage();
    loginPage.clickLogin();
    loginPage.blankUsername();
});