/**
 * fareFinderSearchPage script has all the functions related to the Fare Finder Search page page of MegaBus
 *
 * @author Shavik
 * @version 1.0
 * @since 05-09-2019
 *
 */

// This is to call the common functions being used
var common = require('../commonScripts/common');

const URL = 'https://us.megabus.com/fare-finder/search';

var originTextBox = element(by.id(`startingAt`));

var originDropDown = element(by.xpath(`//input[@id='startingAt']`));

var continueBtn = element(by.xpath(`//div[@class='col-sm-6']//button[@class='btn btn-primary wizard__fwd pull-right ng-star-inserted' and text()=' Continue ']`));

var weekendTripBtn = element(by.xpath(`//button[@id='ff-search-weekend']`));

var pickOwnDateBtn = element(by.id(`ff-search-custom`));

var numOfTravellers = element(by.id(`totalPassengers`));

var plusOneTraveller = element(by.id(`totalPassengers_plus`));

var minusOneTraveller = element(by.id(`totalPassengers_minus`));

var continueTraveller = element(by.xpath(`//mb-total-passengers//descendant::button[3]`));

var noSpecialNeeds = element(by.xpath(`//div[@class='wizard__section active']//button[contains(text(),'No')]`));

var yesSpecialNeeds = element(by.xpath(`//div[@class='wizard__section active']//button[contains(text(),'Yes')]`));

var datePickerTextBox = element(by.id(`mat-input-0`));

var datePickerNextMonth = element(by.xpath(`//button[@wfd-id='135']`));

var datePickerPreviousMonth = element(by.xpath(`//button[@wfd-id='136']`));

var fareFinderResult = element(by.xpath(`//mb-fare-finder-deal[5]/div`));


/**
 * This function is to navigate to the mega bus page
 */
this.get = function () {
	browser.get(URL);
};

/**
 * This is to set the origin city
 */
this.setOrigin = function setOrigin() {
	common.waitElementToBeClickable(originTextBox);
	originTextBox.click();

};

/**
 * This is to return the Origin City Text box
 */
this.returnOriginCityTextBox = function returnOriginCityTextBox() {
	return originTextBox;
};

/**
 * 
 */
this.selectOrigin = function selectOrigin(originCity) {
	common.waitElementToBeVisible(originDropDown);
	originDropDown.click();
	originTextBox.sendKeys(originCity);
	var city = element(by.xpath(`//div[@class='typeahead__drop__item ng-star-inserted']//span[@class='typeahead__anchor' and text() = " ${originCity} "]`));
	common.waitElementToBePresent(city);
	city.click();
};

/**
 * This is to click on Continue button
 */

this.clickContinue = function clickContinue() {
	continueBtn.click();
};

/**
 * This is to return the Continue button element
 */
this.returnContinueBtn = function returnContinueBtn() {
	return continueBtn;
};

/**
 * This is to set a weekend trip
 */
this.clickWeekend = function clickWeekend() {
	weekendTripBtn.click();
};

/**
 * This is to return the weekend trip button to validate
 */
this.returnWeekendTripBtn = function returnWeekendTripBtn() {
	return weekendTripBtn;
};

/**
 * This is to set your own trip
 */
this.clickCustom = function clickCustom() {
	pickOwnDateBtn.click();
};

/**
 * This is to enter the travellers count manually
 */
this.enterTravellersCount = function enterTravellersCount(count) {
	numOfTravellers.sendKeys(count);
};

/**
 * This is to enter the travellers count manually
 */
this.deleteTravellersCount = function deleteTravellersCount() {
	numOfTravellers.clear();
};

/**
 * This is to return the numOfTravellers text box
 */
this.returnTravelersCountTxtBox = function returnTravelersCountTxtBox() {
	return numOfTravellers;
};

/**
 * This is to plus a traveller
 */
this.plusTravellersCount = function plusTravellersCount() {
	plusOneTraveller.click();
};

/**
 * This is to minus a traveller
 */
this.minusTravllersCount = function minusTravllersCount() {
	minusOneTraveller.click();
};

/**
 * This is to continue the count of travellers
 */
this.continueTravellers = function continueTravellers() {
	continueTraveller.click();
};

/**
 * This is to return the continueTraveller element
 */
this.returnContinueTravellerBtn = function returnContinueTravellerBtn() {
	return continueTraveller;
};

/**
 * This is to confirm no need of Special needs
 */
this.specialNeedsNo = function specialNeedsNo() {
	noSpecialNeeds.click();
};

/**
 * This is to request special needs
 */
this.specialNeedsYes = function specialNeedsYes() {	
	yesSpecialNeeds.click();
};

/**
 * This is to click on the date picker
 */
this.datePicker = function datePicker() {	
	datePickerTextBox.click();
};

/**
 * This is to navigate to next month
 */
this.clickNextMonth = function clickNextMonth() {
	datePickerNextMonth.click();
};

/**
 * This is to navigate to previous month
 */
this.clickPreviousMonth = function clickPreviousMonth() {
	datePickerPreviousMonth.click();
};

/**
 * This is to pick the date. Enter the date in numeric format. E.g. 5
 */
this.datePick = function datePick(dateToPick) {
	var date = element(by.xpath(`//div[@class='mat-calendar-body-cell-content' and text()="${dateToPick}"]`));
	date.click();
};

/**
 * 
 */
this.fareFinderResultReturn = function fareFinderResultReturn() {
	return fareFinderResult;
};