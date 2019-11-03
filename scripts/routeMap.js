'use strict';

var homePg = require('../pages/homePage');
var routeMapPg = require('../pages/routeMapPage');
var enums = require('../commonScripts/enums');
var common = require('../commonScripts/common')

//Search criterias on variables
var originByCity = enums.originCity.NEWYORK;
var destinationByCity = enums.cityByZipCode.BOSTON;
var todayDate = common.todayDate();
var routeMapUrl = 'https://us.megabus.com/journey-planner/map'
var plannerurl = `https://us.megabus.com/journey-planner/journeys?originId=123&destinationId=94&departureDate=${todayDate}&preventSearch=true`
var expectLabel = element(by.xpath('//h2[contains(text(),"Book now")]'));


describe('Explore Route Map scenation', function(){

	xit('Go to RouteMap page', function(){
		homePg.get();
		homePg.clickExploreDropDown();
		homePg.clickRoutMapOption();
		browser.sleep(5000);
		expect(browser.getCurrentUrl()).toEqual(routeMapUrl);
	});


    it('Search trip by City', function(){
        routeMapPg.get();
        routeMapPg.enterTownAsOrigin(originByCity);
        browser.sleep(5000);
        routeMapPg.enterTownAsDestination(destinationByCity);
        browser.sleep(5000);
        routeMapPg.clickSearch();
        browser.sleep(5000);
        expect(expectLabel.isPresent()).toBe(true);
        //expect(browser.getCurrentUrl()).toEqual(plannerurl);
    });
});