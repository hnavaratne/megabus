/**
 * The purpose of the commons.js is to have common functions in one place
 *
 * @author Shavik
 * @version 1.0
 * @since 08-03-2018
 *
 */

'use strict';

var CommonActions = function () {
	var login = require('../pages/homePage').default;

	var userName = 'virtusa.protractor@gmail.com';
	var password = '1qaz2wsx@';
	/**
     * This common function will maximize the browser window
     */
	this.firstThings = function firstThings () {
		// this is to let know the protractor this is not an Angular application
		browser.waitForAngularEnabled(false);
		// ignore the sync error
		browser.ignoreSynchronization = true;
		console.log('Before navigation');
		// maximize the browser window
		browser.driver.manage().window().maximize();
	};

	/**
     * This function is to wait for an element to be clickable
     * @param {*} elem element which needs to be waited until it can be clicked
     */
	this.waitElementToBeClickable = function waitElementToBeClickable (elem) {
		var EC = protractor.ExpectedConditions;
		// Waits for the element to be clickable.
		browser.wait(EC.elementToBeClickable(elem), 25000);
	};

	/**
	 * This function is to wait for an element to present
	 * @param	{*} elem element which needs to be waited until it is present
	 */
	this.waitElementToBePresent = function waitElementToBePresent (elem) {
		var EC = protractor.ExpectedConditions;
		// Waits for the element to be clickable.
		browser.wait(EC.presenceOf(elem), 25000);
	};

	/**
	 * This function is to wait for an element to be visible
	 * @param	{*} elem element which need to wait until it's visible
	 */
	this.waitElementToBeVisible = function waitElementToBeVisible (elem) {
		var EC = protractor.ExpectedConditions;
		browser.wait(EC.visibilityOf(elem), 10000);
	};

	/**
     * This function is to call any page from the given URL
     * @param {*} url
     */
	this.navigateToPage = function navigateToPage (url) {
		browser.get(url);
	};

	/**
     *
     */
	this.switchTab = function switchTab() {
		browser.getAllWindowHandles().then(function (handles) {
			browser.switchTo().window(handles[1]);
		});
	};

	this.loginToApp = function loginToApp() {
		login.get();
		login.loginHomePage(userName, password);
		browser.sleep(3000);
	};

	//this function will capture todays date in yyyy-mm-dd format
	this.todayDate = function tomorrowDate(){
		var today = new Date().toISOString().slice(0,10);
		return today;
	};

};
module.exports = new CommonActions();
