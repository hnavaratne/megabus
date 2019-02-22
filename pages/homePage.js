/**
 * homePage script has all the functions related to the home page of skout
 *
 * @author Shavik
 * @version 1.0
 * @since 02-21-2019
 *
 */
'use strict';

var HomePage = function () {
	// This is to call the common functions being used
	var common = require('../commonScripts/common');

	//
	var loginMenuItem = element(by.xpath('//a[@data-gtm-id="account-management-nav-bar-login"]'));

	

	/**
   * This function is to navigate to the page
   */
	this.get = function () {
		browser.get('https://us.megabus.com/');
	};

	/**
   * This is to login to the page
   * @param userName - Username of the user, will be taken from test
   * @param passwrd - Password of the user, will be taken from the test
   */
	this.loginHomePage = function loginHomePage() {
		common.waitElementToBeClickable(loginMenuItem);
		loginMenuItem.click();
	};


};

module.exports = new HomePage();