/**
 * busStopPage script has the functions related to the bus page page of MegaBus
 *
 * @author Shavik
 * @version 1.0
 * @since 09-04-2019
 *
 */

const fareFinderPage = require('../pages/fareFinderSearchPage');
const cityData = require('../commonScripts/enum');
var EC = protractor.ExpectedConditions;

describe('Go to page', function () {

	beforeAll(function () {
		fareFinderPage.get();
	});

	it('This will enter the Origin city ', function () {
		
		fareFinderPage.selectOrigin(cityData.originCity.ALBANY);

		fareFinderPage.clickContinue();
		browser.sleep(2500);
		fareFinderPage.clickCustom();
		browser.sleep(2500);		
		fareFinderPage.datePick(6);
		browser.sleep(2500);		
		fareFinderPage.datePick(8);
		browser.sleep(2500);		
		fareFinderPage.deleteTravellersCount();
		fareFinderPage.enterTravellersCount(2);
		fareFinderPage.continueTravellers();
		browser.sleep(2500);
		fareFinderPage.specialNeedsNo();
		EC.presenceOf(fareFinderPage.fareFinderResultReturn());
	});

});