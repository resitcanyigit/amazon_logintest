const { I } = inject();
module.exports = {
  fields: {},
  parameters:{
    email:"fortestautomation21@gmail.com",
    password:"fortestautomation21",
    wrongPassword:"asdasd",
    wrongUsername:"asds"
  },
  selects: {},
  buttons: {
    loginPageClick:"#nav-link-accountList",
    continueClick:"#continue",
    signinClick:"#auth-signin-button"
  },

  homePage: function () {
    //siteye giriş
    I.amOnPage('https://www.amazon.com/');

  },
  clickLogin: function(){
    //Click iconuna tıkla
    I.waitForClickable(this.buttons.loginPageClick);
    I.click(this.buttons.loginPageClick);
    
  },
  fillCorrectUsername: function(){
    //Doğru Kullanıcı adı giriş
    I.fillField("#ap_email",this.parameters.email);
    I.waitForClickable(this.buttons.continueClick);
    I.click(this.buttons.continueClick);
    
  },
 fillCorrectPassword: function(){
  //Şifre giriş
  I.fillField('#ap_password', secret(this.parameters.password));
  I.waitForClickable(this.buttons.signinClick);
  I.click(this.buttons.signinClick);
  
 },
  loginControl:function(){
    //Başarılı giriş kontrol
    I.seeElement("//*[contains(text(),'Hello')]");

  },
  fillWrongPassword: function(){
    //Yanlış şifre girişi
    I.fillField('#ap_password', secret(this.parameters.wrongPassword));
    I.waitForClickable(this.buttons.signinClick);
    I.click(this.buttons.signinClick);
    I.seeElement("//*[contains(text(),'Your password is incorrect')]");
    
  },
  fillWrongUsername: function(){
    // Yanlış username girişi
    I.fillField("#ap_email",this.parameters.wrongUsername);
    I.waitForClickable(this.buttons.continueClick);
    I.click(this.buttons.continueClick);
    I.seeElement("//*[contains(text(),'We cannot find an account with that email address')]");
    I.wait(1);
  },
  blankUsername:function(){
    // Username girişinden boş veri gönderme işlemi
    I.waitForClickable(this.buttons.continueClick);
    I.click(this.buttons.continueClick);
    I.seeElement("//*[contains(text(),'Enter your email or mobile phone number')]");
  }
  
}