/* eslint-disable indent */
'use strict';

var trackMyBus = require('../pages/trackMyBusPage');
var busTestResultTable= element(by.xpath("//*[@class='busTracker__results--top']"));

describe('Track My Bus Page and check Bus Times', function () {
	it('Navigate to Track My Bus Page', function () {
		trackMyBus.navigateToTrackMyBusPage();
		expect(trackMyBus.trackmyBusPageHeader().getText()).toEqual('Check Live Timings');
		trackMyBus.trackmyBusPageHeader().getText().then(function(h1){
			console.log('Track My Bus Page Header is '+ h1);
		});
		trackMyBus.enterStartAtTownAndCity("Dallas");
		trackMyBus.enterGoingToTownAndCity("Austin");
		trackMyBus.checkBusTimes();
		browser.sleep(5000);
		expect(busTestResultTable.isPresent()).toBe(true);
	});
});