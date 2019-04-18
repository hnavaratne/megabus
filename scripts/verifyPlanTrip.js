/**
 * PlanTrip script has the functions related to the bus page page of MegaBus
 *
 * @author Shavik
 * @version 1.0
 * @since 03-24-2019
 *
 */
const busPage = require('../pages/buStopsPage');
const common = require('../commonScripts/common');
var EC = protractor.ExpectedConditions;
var city = 'Baltimore, MD';
var busStop = 'White Marsh MTA Park & Ride';
var planCity = 'Baltimore';

describe('Go to page', function(){

	beforeAll(function() { 
		busPage.get(); 
	});

	it('This should click on the city',function(){        
		busPage.selectCity(city);
		busPage.selectBusStop(busStop);
		busPage.viewCityGuide();
		common.switchTab();
		browser.wait(EC.presenceOf(busPage.checkPlanCity(planCity)), 10000);
	});
    
});