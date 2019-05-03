/**
 * busStopPage script has the functions related to the bus page page of MegaBus
 *
 * @author Shavik
 * @version 1.0
 * @since 03-24-2019
 *
 */

const busPage = require('../pages/buStopsPage');
var EC = protractor.ExpectedConditions;
var city = 'Baltimore, MD';
var busStop = 'White Marsh MTA Park & Ride';
var coords = '13.5,0,4,3.75,0,13.5,13.5,43,27,13.5,23,3.75';

describe('Go to page', function(){

	beforeAll(function() { 
		busPage.get(); 
	});

	it('This should click on the city',function(){        
		busPage.selectCity(city);		
	});

	it('City should be clicked', function(){
		EC.presenceOf(busPage.checkClickCity(city));
	});
    
	it('This should select the bus stop', function(){
		busPage.selectBusStop(busStop);		
	});

	it('Bus stop should be selected', function(){
		EC.presenceOf(busPage.checkBusStopExist(busStop));
		EC.presenceOf(busPage.stopInfo());
	});

	it('Location address should be verified on map', function(){
		EC.presenceOf(busPage.checkMapExistance());
		
	});

	it('Location address should be verified on map', function(){
		EC.presenceOf(busPage.checkMapCoords(coords));
		
	});
});