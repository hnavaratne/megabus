/*
 * TrackMyBus Page - All the functions and elements related to TrackMyBus Page
 * Author : Sahani Wickaramasinghe
 * Date : 4/10/2019
 */

'use strict';

var trackMyBusPage=function(){
	var trackMyBusTitle=element(by.xpath("//div/h1"));
	var trackMyBusFrom=element(by.xpath("//*[@id='startingAt']"));
	var trackMyBusTo=element(by.xpath("//*[@id='goingTo']"));
	var btnCheckTimes = element(by.xpath("//button[contains(text(),'Check times')]"));

	this.navigateToTrackMyBusPage=function(){
		browser.get("https://us.megabus.com/track-my-bus");
	};


	this.trackmyBusPageHeader=function(){
		return trackMyBusTitle;
	};

	this.enterStartAtTownAndCity=function(fromCity){
		var fromDropdown=element(by.xpath(`//span[@class='typeahead__anchor' and contains(text(),'${fromCity}')]`));
		trackMyBusFrom.click();
		fromDropdown.click();
	};
	
	this.enterGoingToTownAndCity= function(toCity){
		trackMyBusTo.click();
		var toDropdown=element(by.xpath(`//*[@id='goingTo']/..//span[@class='typeahead__anchor' and contains(text(),'${toCity}')]`));
		toDropdown.click();
	};

	this.checkBusTimes=function(){
		btnCheckTimes.click();
	};
};

module.exports =new trackMyBusPage();