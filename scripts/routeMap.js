'use strict';

var homePg = require('../pages/homePage');
var routeMapPg = require('../pages/routeMapPage');
var common = require('../commonScripts/common');

//Search criterias on variables
var originByCity = "New York, NY";
var destinationByCity = "Boston, MA";
//var originInMap = elements(by.xpath(`//h3[contains(text(), '${originByCity}')]`));
//var destinationInMap = element(by.xpath(`//h3[contains(text(), '${destinationByCity}')]`));
var routeMapUrl = 'https://us.megabus.com/journey-planner/map'
var plannerurl = 'https://us.megabus.com/journey-planner/journeys?originId=123&destinationId=94&departureDate=2019-05-01&preventSearch=true'

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
        //expect(originInMap.isPresent()).toBe(true);
        browser.sleep(5000);
        routeMapPg.enterTownAsDestination(destinationByCity);
       // expect(destinationInMap.isPresent()).toBe(true);
        browser.sleep(5000);
        routeMapPg.clickSearch();
        browser.sleep(5000);
        expect(browser.getCurrentUrl()).toEqual(plannerurl);
    });
});