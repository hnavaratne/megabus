/**
 *
 * @author Dhanushka
 * @version 1.0
 * @since 02-26-2019
 *
 */
var SignUp = function () {
  var common = require('../commonScripts/common');

  var signuptb = element(by.xpath('//a[@data-gtm-id="account-management-sign-up"]'));
  var loginTb = element(by.xpath('//a[@data-gtm-id="account-management-log-in"]'));
  var email = element(by.xpath('//input[@id="email"]'));
  var confEmail = element(by.xpath('//input[@id="confirmEmail"]'));
  var choosePwd = element(by.xpath('//input[@id="choosePassword"]'));
  var confPwd = element(by.xpath('//input[@id="confirmPassword"]'));
  var showHidePwd_choose = element(by.xpath('//input[@id="choosePassword"]/..//a[@class="btn pwReveal"]'));
  var showHidePwd_conf = element(by.xpath('//input[@id="confirmPassword"]/..//a[@class="btn pwReveal"]'));
  var checkTerms = element(by.xpath('//input[@id="terms"]'));
  var checkTermsLabel = element(by.xpath('//label[@for="terms"]'));
  var checkPrivacy = element(by.xpath('//input[@id="privacy"]'));
  var checkPrivacyLabel = element(by.xpath('//label[@for="privacy"]'));
  var checkMarketing = element(by.xpath('//input[@id="marketing"]'));
  var checkMarketingLabel = element(by.xpath('//label[@for="marketing"]'));
  var signUpBtn = element(by.xpath('//button[@data-gtm-id="account-management-sign-up-submit"]'));
  var successlabel = element(by.xpath('//h2[@class="account-created__title"]'));


  //this is to navigate signup page
  this.get = function () {
    browser.get('https://us.megabus.com/account-management/login');
  };

  //This is to verify select Sign up tab and validate the fields default status
  this.SelectSignUpTab = function () {
    signuptb.click();
    console.log('Sign-Up tab is selected');
  };

  //This is to verify fields/labels/check boxes
  this.VerifySignUpData = function (email1, confEmailWrng, confEmail1, choosePwd1, confPwdWrng1, confPwd1) {
    email.sendKeys(email1);
    browser.sleep(2000);
    //common.waitElementToBeClickable(confEmail);---
    var EC = protractor.ExpectedConditions;
		// Waits for the element to be clickable.
		browser.wait(EC.elementToBeClickable(elem), 25000);
    confEmail.sendKeys(confEmailWrng);
    browser.sleep(2000);
    //common.waitElementToBeClickable(choosePwd);
    expect(choosePwd.isEnabled()).toBe(false);
    confEmail.clear();
    browser.sleep(1000);
    //common.waitElementToBeClickable(confEmail);
    confEmail.sendKeys(confEmail1);
    browser.sleep(2000);
    expect(confPwd.isEnabled()).toBe(true);
    //console.log('Choose password and conf password are enabled');
    choosePwd.sendKeys(choosePwd1);
    common.waitElementToBeClickable(checkTermsLabel);
    browser.sleep(5000);
    checkTermsLabel.click();
    browser.sleep(4000);
    expect(checkPrivacy.isSelected()).toBe(false);
    //console.log('Privacy check box is displayed');
    checkPrivacyLabel.click();
    browser.sleep(2000);
    expect(signUpBtn.isEnabled()).toBe(false);
    //console.log('Sign-Up button is disabled');
    confPwd.sendKeys(confPwdWrng1);
    browser.sleep(2000);
    showHidePwd_conf.click();
    expect(signUpBtn.isEnabled()).toBe(false);
    //console.log('Sign-Up button is STILL disabled');
    confPwd.clear();
    confPwd.sendKeys(confPwd1);
    browser.sleep(2000);
    expect(signUpBtn.isEnabled()).toBe(true);
    //console.log('Sign-Up button is ENABLED');
    checkMarketingLabel.click();
    common.waitElementToBeClickable(showHidePwd_choose);
    showHidePwd_choose.click();
    common.waitElementToBeClickable(showHidePwd_conf);
    showHidePwd_conf.click();
    browser.sleep(5000);
  };

  //Click on sign up button
  this.SignupClick = function () {
    signUpBtn.click();
    browser.sleep(5000);
    expect(successlabel.isPresent()).toBe(true);
    console.log('Success message displayed');
  };
  
};
module.exports = new SignUp();