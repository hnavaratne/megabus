/*
 * TrackMyBus Page - All the functions and elements related to TrackMyBus Page
 * Author : Sahani Wickaramasinghe
 * Date : 4/10/2019
 */

'use strict';

var trackMyBusPage=function(){
	var trackMyBus_Title=element(by.xpath("//div/h1"));
	var trackMyBus_from=element(by.xpath("//*[@id='startingAt']"));
	var trackMyBus_To=element(by.xpath("//*[@id='goingTo']"));
	var btn_CheckTimes = element(by.xpath("//button[contains(text(),'Check times')]"));

	this.navigateToTrackMyBusPage=function(){
		browser.get("https://us.megabus.com/track-my-bus");
	};


	this.trackmyBusPageHeader=function(){
		return trackMyBus_Title;
	};

	this.enterStartAtTownAndCity=function(fromCity){
		var from_Dropdown=element(by.xpath(`//span[@class='typeahead__anchor' and contains(text(),'${fromCity}')]`));
		trackMyBus_from.click();
		from_Dropdown.click();
	};
	
	this.enterGoingToTownAndCity= function(toCity){
		trackMyBus_To.click();
		var to_Dropdown=element(by.xpath(`//*[@id='goingTo']/..//span[@class='typeahead__anchor' and contains(text(),'${toCity}')]`));
		to_Dropdown.click();
	};

	this.checkBusTimes=function(){
		btn_CheckTimes.click();
	};

	this.checkBusTimingResults=function(){

	};
};

module.exports =new trackMyBusPage();