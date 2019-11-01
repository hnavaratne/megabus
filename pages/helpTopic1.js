/**
 *
 * @author Dhanushka
 * @version 1.0
 * @since 08-22-2019
 *
 */
var helpTopic1 = function () {
    var common = require('../commonScripts/common');

    //this is to navigate help
    this.get = function () {
        browser.get('https://us.megabus.com/help/making-reservations');
    };

    this.verifyHelp1 = function(helpQ1){
        return (element(by.xpath(`//h1[text()='${helpQ1}']`))).getText();                  
    };

    this.verifyHelpTopic1_1clickable = function(helpTopic1){
        element(by.xpath(`//a[@data-gtm-label='${helpTopic1}']`)).click();
                    
    };

};
module.exports = new helpTopic1();