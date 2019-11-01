/**
 * All tests related to gallery page is written in this test
 *
 * @Author : Dhanushka 
 * @Date : 4-24-2019
 * *
 */

describe('megabus', function () {
    var common = require('../commonScripts/common');
    var helpTopic1 = require('../pages/helpTopic1');

    var helpQ1 = 'Making reservations';
    var helpQ2 = '/help/reserved-seats';
    var helpQ3 = '/help/media-area';
    var helpQ4 = '/help/customers-with-special-requirements';

    var helpTopic1_1 = 'How do I make a reservation?'; 
    var helpTopic1_2 = 'Why should I register for an account with megabus.com?';
  
    it('Access megabus page', function () {
        helpTopic1.get();
        console.log('Navigated to Help1 topic');
        browser.sleep(3000);
    });

    it('Verify Help Topic1', function () {
        expect(helpTopic1.verifyHelp1(helpQ1)).toContain(helpQ1);
        console.log('Help1 Verified');
    });

    it('Verify Help Topic1_1 clickable', function () {
        helpTopic1.verifyHelpTopic1_1clickable(helpTopic1_1);
        browser.sleep(2000); 
        helpTopic1.verifyHelpTopic1_1clickable(helpTopic1_1);
        browser.sleep(2000); 
        console.log('Help1_1 clickable');
    });

    it('Verify Help Topic1_2 clickable', function () {
        helpTopic1.verifyHelpTopic1_1clickable(helpTopic1_2);
        browser.sleep(2000);  
        helpTopic1.verifyHelpTopic1_1clickable(helpTopic1_2);
        browser.sleep(2000); 
        console.log('Help1_2 clickable');
    });
});