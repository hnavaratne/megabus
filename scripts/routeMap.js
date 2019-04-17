'use strict';

var homePg = require('../pages/homePage');
var routeMapPg = require('../pages/routeMapPage');
var common = require('../commonScripts/common');

//Search criterias on variables
var originByCity = "New York, NY";
var destinationByCity = "Boston, MA";

describe('Explore Route Map scenation', function(){

    xit('Go to RouteMap page', function(){
        homePg.get();
        homePg.clickExploreDropDown();
        homePg.clickRoutMapOption();
        browser.sleep(5000);
    });

    it('Search trip by City', function(){
        routeMapPg.get();
        routeMapPg.enterTownAsOrigin(originByCity);
        browser.sleep(5000);
        routeMapPg.enterTownAsDestination(destinationByCity);
        browser.sleep(5000);
        routeMapPg.clickSearch();
    });
});