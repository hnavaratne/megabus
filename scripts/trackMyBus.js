/* eslint-disable indent */
'use strict';

var trackMyBus = require('../pages/trackMyBusPage');
var bus_TestResultTable= element(by.xpath("//*[@class='busTracker__results--top']"));

describe('Track My Bus Page', function () {
	it('Navigate to Track My Bus Page', function () {
		trackMyBus.navigateToTrackMyBusPage();
	});
	
	it('Verify track my Bus Page Header',function(){
		expect(trackMyBus.trackmyBusPageHeader().getText()).toEqual('Check Live Timings');
		trackMyBus.trackmyBusPageHeader().getText().then(function(h1){
			console.log('Track My Bus Page Header is '+ h1);
		});
	});

	it('Check Megabus times from selected city to To city',function(){
		trackMyBus.enterStartAtTownAndCity("Dallas");
		trackMyBus.enterGoingToTownAndCity("Austin");
		trackMyBus.checkBusTimes();
		browser.sleep(5000);
	});

	it('Check Bus result timings within selected cities',function(){
		expect(bus_TestResultTable.isPresent()).toBe(true);
	});

});