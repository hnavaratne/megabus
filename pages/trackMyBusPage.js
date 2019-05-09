/*
 * TrackMyBus Page - All the functions and elements related to TrackMyBus Page
 * Author : Sahani Wickaramasinghe
 * Date : 4/10/2019
 */

'use strict';

var trackMyBusPage=function(){
	var selectMenu_TrackMyBus = element(by.xpath("//a[@href='/track-my-bus']"));
	var menu_checkMyBus= element(by.xpath("//a[contains(text(),'Check my bus')]"));
	//var trackMyBus_Title=element(by.xpath("//h1[text()='Check Live Timings']"));
	var trackMyBus_Title=element(by.xpath("//div/h1"));
	var trackMyBus_from=element(by.xpath("//*[@id='startingAt']"));
	var trackMyBus_To=element(by.xpath("//*[@id='goingTo']"));
	var btn_CheckTimes = element(by.xpath("//button[contains(text(),'Check times')]"));
	
	this.navigateToMegaBus=function(){
		browser.get("https://us.megabus.com/");
	};

	this.selectCheckMyBus=function(){
		menu_checkMyBus.click();
	};

	this.navigateToTrackMyBus=function(){
		selectMenu_TrackMyBus.click();
	};

	this.trackmyBusPageHeader=function(){
		return trackMyBus_Title;
	};

	this.enterStartAtTownAndCity=function(fromCity){
		//var from_Dropdown= element(by.xpath("//div[@class='typeahead']//div[1]/div/div/span[contains(text(),'"+state+"')]"));
		var from_Dropdown= element(by.xpath(`//div[@class='typeahead']//div[1]/div/div/span[contains(text(),'${fromCity}')]`));
		trackMyBus_from.click();
		from_Dropdown.click();
	};
	
	this.enterGoingToTownAndCity= function(toCity){
		trackMyBus_To.click();
		var to_Dropdown=element(by.xpath("//div[@class='typeahead__drop']//div/div/span[contains(text(),'"+toCity+"')]"));
		to_Dropdown.click();
	};

	this.checkBusTimes=function(){
		btn_CheckTimes.click();
	};

};

module.exports =new trackMyBusPage();