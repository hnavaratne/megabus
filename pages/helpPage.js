/**
 *
 * @author Dhanushka
 * @version 1.0
 * @since 04-24-2019
 *
 */
var helpPage = function () {
  var common = require('../commonScripts/common');

  var pageTopic = element(by.xpath('//*[text()="Frequently asked questions"]'));
  var searchTextBox = element(by.xpath('//input[@aria-autocomplete="both"]'));
  var mostPopularQuestionsLabel = element(by.xpath('//h2[@class="faq-title"]/..//*[text()="Most popular questions"]'));
  var helpTopics = element(by.xpath('//h2[text()="Help topics"]'));
  var searchBtn = element(by.xpath('//button[@class="faq-search-cta btn btn-default "]'));
  var helpBtn = element(by.xpath('//a[@href="/help"]/..//*[text()="Help"]'));


  //this is to navigate help
  this.get = function () {
    browser.get('https://us.megabus.com/help');
  };


  //This is to verify default 'Most Popular questions'
  this.verifyMostPopularClick = function (popularQ) {
    element(by.xpath(`//a[@data-gtm-label='${popularQ}']`)).click();
  };

  this.findMostPopular1 = function (popularQ) {
    return (element(by.xpath(`//a[@data-gtm-label='${popularQ}']`))).getText();
  };

  this.helpTopics = function (helpQ) {
    element(by.xpath(`//a[@class='faq-head']/..//*[text()='${helpQ}']`)).click();
  };

  this.searchFunction = function (popularQ) {
    return (searchTextBox.sendKeys(popularQ)).click();
    /*searchTextBox.sendKeys(popularQ4);
    searchBtn.click();*/
  };

  this.VerifySearchFunction = function (popularQ) {
    return (element(by.xpath(`//a[@data-gtm-label='${popularQ}']`))).getText();
  };

};
module.exports = new helpPage();