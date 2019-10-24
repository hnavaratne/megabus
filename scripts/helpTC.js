/**
 * All tests related to gallery page is written in this test
 *
 * @Author : Dhanushka 
 * @Date : 4-24-2019
 * *
 */

describe('megabus', function () {
    var common = require('../commonScripts/common');
    var helpPage = require('../pages/helpPage');
    var helpTopic1 = require('../pages/helpTopic1');

    var pageTopic = element(by.xpath('//*[text()="Frequently asked questions"]'));
    var searchTextBox = element(by.xpath('//input[@aria-autocomplete="both"]'));
    var mostPopularQuestionsLabel = element(by.xpath('//h2[@class="faq-title"]/..//*[text()="Most popular questions"]'));
    var helpTopics = element(by.xpath('//h2[text()="Help topics"]'));
    var searchBtn = element(by.xpath('//button[@class="faq-search-cta btn btn-default "]'));
    var helpBtn = element(by.xpath('//a[@href="/help"]/..//*[text()="Help"]'));


    var popularQ1 = 'What is Megabus RIDE?';
    var popularQ2 = 'What can I bring with me?';
    var popularQ3 = 'Can minors ride megabus unattended?';
    var popularQ4 = 'Do children/babies need a ticket to travel on megabus?';
    var popularQ5 = 'Can I trade in a reservation?';

    var helpQ1 = 'Making reservations';
    var helpQ2 = 'Reserved seats';
    var helpQ3 = '/help/media-area';
    var helpQ4 = '/help/customers-with-special-requirements';

    var helpTopic1_1 = 'How do I make a reservation?';

    it('Access megabus page', function () {
        helpPage.get();
        console.log('Navigated to Help');
        browser.sleep(3000);
    });

    it('Verify topics and elements on the page', function () {
        pageTopic.isPresent();
        console.log('Frequently asked questions');
        searchTextBox.isPresent();
        console.log('Search Text Box');
        mostPopularQuestionsLabel.isPresent();
        console.log('Most popular questions');
        helpTopics.isPresent();
        console.log('Help Topics');
        searchBtn.isPresent();
        console.log('Search button');
        helpBtn.isPresent();
        console.log('Help in menu');
        browser.sleep(3000);
        console.log('Headings verified');
    });


    it('Verify Popular Question1', function () {
        expect(helpPage.findMostPopular1(popularQ1)).toContain(popularQ1);
        console.log('Q1 Verified');
    });

    it('Verify Popular Question3', function () {
        expect(helpPage.findMostPopular1(popularQ3)).toContain(popularQ3);
        console.log('Q3 Verified');
    });

    //this for Q1. expand and collapse
    it('Verify Popular Question-1 is clickable', function () {
        helpPage.verifyMostPopularClick(popularQ1);
        helpPage.verifyMostPopularClick(popularQ1);
        console.log('Q1 is clickable');
    });

    it('Verify Popular Question-2 is clickable', function () {
        helpPage.verifyMostPopularClick(popularQ5);
        helpPage.verifyMostPopularClick(popularQ5);
        console.log('Q2 is clickable');
    });


    it('Verify Popular Topic-1', function () {
        helpPage.helpTopics(helpQ1);
        browser.sleep(3000);
        browser.navigate().back();
        browser.sleep(2000);
        console.log('Topic1 verified');
    });

    it('Verify Popular Topic-2', function () {
        helpPage.helpTopics(helpQ2);
        browser.sleep(3000);
        browser.navigate().back();
        browser.sleep(2000);
        console.log('Topic2 verified');
    });

    it('Verify search functionality', function () {
        helpPage.searchFunction(popularQ2);
        browser.sleep(3000);
        console.log('Search Verified');
    });

    it('Verify search returned value', function () {
        expect(helpPage.VerifySearchFunction(popularQ2)).toContain(popularQ2);
        browser.sleep(3000);
        console.log('Search returned Popular');
    });

    /*it('Access megabus page', function () {
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
        console.log('Help1_1 clickable');
    });*/
});