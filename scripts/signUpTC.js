/**
 * All tests related to gallery page is written in this test
 *
 * @Author : Dhanushka 
 * @Date : 2-28-2019
 * *
 */

describe('megabus', function () {
    var signUpPage = require('../pages/signUp');
    var common = require('../commonScripts/common');

    var signUpBtn = element(by.xpath('//button[@data-gtm-id="account-management-sign-up-submit"]'));
    var loginBtn = element(by.xpath('//button[@data-gtm-id="account-management-login-submit"]'));
    var infoLabel = element(by.xpath('//h4[@class="create-account__lead"]'));
    var email = element(by.xpath('//input[@id="email"]'));
    var confEmail = element(by.xpath('//input[@id="confirmEmail"]'));
    var choosePwd = element(by.xpath('//input[@id="choosePassword"]'));
    var confPwd = element(by.xpath('//input[@id="confirmPassword"]'));
    var checkTerms = element(by.xpath('//input[@id="terms"]'));
    var checkPrivacy = element(by.xpath('//input[@id="privacy"]'));
    var checkReceiveEmails = element(by.xpath('//input[@id="marketing"]'));

    var email1 = 'dhanu@abc.com';
    var confEmailWrng = 'nuwan@abc.com';
    var confEmail1 = 'dhanu@abc.com';
    var choosePwd1 = '1qaz2wsx';
    var confPwd1 = '1qaz2wsx';
    var confPwdWrng1 = '1qaz2';

    it('Access megabus page', function () {
        signUpPage.get();
        console.log('Navigated to Login/Sign Up page');
        browser.sleep(5000);
    });

    it('Verify Login tab is selected and navigation functionality to SignUp tab', function () {
        //This is to verify the Login tab is selected and Login button is available 
        expect(loginBtn.isPresent()).toBe(true);
        console.log('Identified the Login button on Signin tab');

        //This is to verify Sign-up button is selected and default behaviour of the fields 
        signUpPage.SelectSignUpTab();
        browser.sleep(3000);
        expect(infoLabel.getText()).toMatch('Store your tickets, profiles, places and save time with a megabus profile');
        browser.sleep(1000);
        expect(signUpBtn.isEnabled()).toBe(false);
        expect(email.isEnabled()).toBe(true);
        expect(confEmail.isEnabled()).toBe(true);
        expect(choosePwd.isEnabled()).toBe(false);
        expect(confPwd.isEnabled()).toBe(false);
        expect(checkTerms.isSelected()).toBe(false);
        expect(element(by.xpath('//label[@for="terms"]')).getText()).toMatch('I have read and accept the Terms and Conditions');
        expect(checkReceiveEmails.isSelected()).toBe(true);
        expect(element(by.xpath('//label[@for="marketing"]')).getText()).toMatch('I would like to receive future offers from megabus.com as well as deals and other marketing emails.');
        expect(checkPrivacy.isPresent()).toBe(false);
        console.log('Verified the sign up page default behavior');
    });

    it('Verify add data and sign up', function () {
        signUpPage.VerifySignUpData(email1, confEmailWrng, confEmail1, choosePwd1, confPwdWrng1, confPwd1);
        expect(signUpBtn.isEnabled()).toBe(true);
        browser.sleep(2000);
        signUpPage.SignupClick();
        console.log('Verified user is able to select/add data on sign-up page');
    });
});