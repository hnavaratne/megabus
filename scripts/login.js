'use strict';

var login = require('../pages/homePage');
// URL of the home page
var homeURL = 'https://us.megabus.com/';

// Data used for testing
var userName = 'virtusa.protractor@gmail.com';
var password = '1qaz2wsx@';

var loginButton = element(by.xpath('//a[@data-gtm-id="account-management-log-in"]'));

describe('Login to the page', function () {
	it('Login to the page with valid credentials', function () {

		login.get();
		login.loginHomePage();
		browser.sleep(5000);
		expect(loginButton.isPresent()).toBe(true);
	});
});