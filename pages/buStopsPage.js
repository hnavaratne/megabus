/**
 * busStopPage script has all the functions related to the bus page page of MegaBus
 *
 * @author Shavik
 * @version 1.0
 * @since 03-24-2019
 *
 */

// This is to call the common functions being used
var common = require('../commonScripts/common');

//Variables for the elements
var busStop = element(by.xpath(`//ng-component[@class='ng-star-inserted']/..//p[@class='stop-info__stop__loc']`));
var closeBusStopPopUp = element(by.xpath(`//ng-component[@class='ng-star-inserted']`));

/**
 * This function is to navigate to the mega bus page
 */
this.get = function () {
	browser.get('https://us.megabus.com/stops');
};

/**
 * This function is to select the city where the bus stop is
 * @param cityValue This is the city and state value which should be passed. Ex. 'Austin, TX'
 */
this.selectCity = function selectCity(cityValue){
	var city = element(by.xpath(`//a[@role='button' and contains(text(),"${cityValue}")]`));
	common.waitElementToBeClickable(city);
	city.click();	
};

/**
 * This function is to select the bus stop after the user select the bus stop city
 * @param busStopValue This is the bus stop value which should be passed. Ex. 'White Marsh Mall (JC Penney Outer Parking Lot)'
 */
this.selectBusStop = function selectBusStop(busStopValue){
	var busStop= element(by.xpath(`//a[@role='button' and contains(text(),'${busStopValue}')]`));
	common.waitElementToBeClickable(busStop);
	busStop.click();
};

/**
 * This function is to select the trip plan link
 * @param planCity This is the value should passed for the trip planning. Ex. 'Plan your bus trip to Boston'
 */
this.planTrip = function planTrip(planCity){
	var planCityLink = element(by.xpath(`//a[contains(text(),'${planCity}')]`));
	common.waitElementToBeClickable(planCityLink);
	planCityLink.click();
};

/**
 * This function is to click on the View City Guide button
 */
this.viewCityGuide = function viewCityGuide(){
	var viewCityGuideBtn = element(by.xpath(`//mb-city-guide-button`));
	common.waitElementToBeClickable(viewCityGuideBtn);
	viewCityGuideBtn.click();
};

/**
 * This function is to close the pop up
 */
this.closeBusStopPopUp = function closeBusStopPopUp(){
	var closeBtn = element(by.xpath(`//button[@class='dialog-close']`));
	common.waitElementToBeClickable(closeBtn);
	closeBtn.click();
};


/**
 * This is to return the bus stop element
 */
this.checkBusStop = function checkBusStop(){
	return busStop;
};

/**
 * This is to return the Bus Stop Pop up close element
 */
this.checkCloseBusStopPopUp = function checkCloseBusStopPopUp(){
	return closeBusStopPopUp;
};

/**
 * This is to return the City element
 */
this.checkClickCity = function checkClickCity(city){
	return element(by.xpath(`//a[@role='button' and contains(text(),"${city}")]`));
};

/**
 * This is to return the Bus stop by name element
 */
this.checkBusStopExist = function checkBusStopExist(busStop){
	return element(by.xpath(`//a[@role='button' and contains(text(),'${busStop}')]`));
};

/**
 * This is to return the bus stop location
 */
this.stopInfo = function stopInfo(){
	return element(by.xpath(`//ng-component[@class='ng-star-inserted']/..//p[@class='stop-info__stop__loc']`));
};

/**
 * This is to return gmap
 */
this.checkMapExistance = function checkMapExistance(){
	return element(by.id(`gmimap0`));
};

/**
 * This is to return the map with coordinates
 */
this.checkMapCoords = function checkMapCoords(coords){
	return element(by.xpath(`//area[@log='miw' and @coords='${coords}']`));
};

/**
 * This is to reutn the plan city element
 */
this.checkPlanCity = function checkPlanCity(planCity){
	return element(by.xpath(`//h1[contains(text(),'${planCity}')]`));
};