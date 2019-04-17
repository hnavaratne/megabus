/**
 * All tests related to Explore Route Map scenarios for guest user
 * 
 * Author : Thimalee
 * Date : 03-24-2019
 * 
 */

'use strict';

var RouteMapPage = function(){
    

    //Xpath locations taken to variables
    var textOrigin = element(by.xpath("//input[@id='startingAt']"));
    var textDestination = element(by.xpath("//input[@id='goingTo']"));
    var buttonSearch = element(by.xpath("//button[contains(text(), 'Search')]"));

    this.get = function () {
		browser.get("https://us.megabus.com/journey-planner/map");
    };
    
    this.enterTownAsOrigin = function enterTownAsOrigin(originCity){
        textOrigin.sendKeys(originCity);
        var dropdownOrigin = element(by.xpath(`//span[contains(text(), '${originCity}')]`));
        dropdownOrigin.click();
    };

    this.enterTownAsDestination = function enterTownAsDestination(destinationCity){
        textDestination.sendKeys(destinationCity);
        var dropdownDestination = element(by.xpath(`//span[contains(text(), '${destinationCity}')]`));
        dropdownDestination.click();
        //textDestination.sendKeys(protractor.Key.TAB);
    };

    this.clickSearch = function clickSearch(){
        buttonSearch.click();
    };

};

module.exports = new RouteMapPage()