/**
 * fareFinderPage script has all the functions related to the bus page page of MegaBus
 *
 * @author Shavik
 * @version 1.0
 * @since 05-09-2019
 *
 */

// This is to call the common functions being used
var common = require('../commonScripts/common');

var pageText = element(by.xpath(`//h1[@class='article-ff__title']`));

var findTicketsBtn = element(by.xpath(`//a[@class='btn btn-primary']`));

/**
 * This function is to navigate to the mega bus page
 */
this.get = function () {
	browser.get('https://us.megabus.com/fare-finder');
};

/**
 * This returns the Text element
 */
this.loadPageText = function loadPageText(){
	return pageText;
};


/**
 * This function is to click on the Fare Finder button
 */
this.clickFindTickets = function clickFindTickets(){
	common.waitElementToBeClickable(findTicketsBtn);
	findTicketsBtn.click();
};

