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
		browser.wait(EC.presenceOf(element(by.xpath(`//a[@role='button' and contains(text(),"${city}")]`))), 10000);
	});
    
	it('This should select the bus stop', function(){
		busPage.selectBusStop(busStop);
		browser.wait(EC.presenceOf(element(by.xpath(`//a[@role='button' and contains(text(),'${busStop}')]`))), 10000);
		browser.wait(EC.presenceOf(element(by.xpath(`//ng-component[@class='ng-star-inserted']/..//p[@class='stop-info__stop__loc']`))), 10000);
	});

	it('Location address should be verified on map', function(){
		browser.wait(EC.presenceOf(element(by.id(`gmimap0`))), 10000);
		browser.wait(EC.presenceOf(element(by.xpath(`//area[@log='miw' and @coords='${coords}']`))), 10000);
	});

});