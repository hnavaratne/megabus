
/**
 * PlanTrip script has the functions related to the bus page page of MegaBus
 *
 * @author Shavik
 * @version 1.0
 * @since 03-26-2019
 *
 */
const busPage = require('../pages/buStopsPage');

var EC = protractor.ExpectedConditions;
var city = 'Baltimore, MD';
var busStop = 'White Marsh MTA Park & Ride';

describe('Go to page', function(){

	beforeAll(function() { 
		busPage.get(); 
	});

	it('This should click on the city',function(){        
		busPage.selectCity(city);
		busPage.selectBusStop(busStop);
		EC.presenceOf(busPage.checkBusStop());
	});
    
	it('This should close the pop up',function(){        
		busPage.closeBusStopPopUp();
		EC.invisibilityOf(busPage.checkCloseBusStopPopUp());
	});
    
});