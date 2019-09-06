/**
 * busStopPage script has the functions related to the bus page page of MegaBus
 *
 * @author Shavik
 * @version 1.0
 * @since 07-25-2019
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
		browser.sleep(5000);
		fareFinderPage.selectOrigin(cityData.originCity.ALBANY);
		browser.sleep(5000);
		fareFinderPage.clickContinue();
		browser.sleep(5000);
		fareFinderPage.clickWeekend();
		browser.sleep(5000);
		fareFinderPage.deleteTravellersCount();
		browser.sleep(5000);
		fareFinderPage.enterTravellersCount(2);
		browser.sleep(5000);		
		fareFinderPage.continueTravellers();
		browser.sleep(5000);
		fareFinderPage.specialNeedsNo();
		EC.presenceOf(fareFinderPage.fareFinderResultReturn());
	});

});