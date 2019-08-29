/**
 * This common script is to save all the enums used in the project
 *
 * @author Shavik
 * @version 1.0
 * @since 05-09-2019
 *
 */


// Enum to hold 'Origin City' drop down values in the Fare Finder Search page.
var originCityListEnum = function(){
    this.originCity = Object.freeze({
        ALBANY  : "Albany, NY" ,
        ANAHEIM : "Anaheim, CA" ,
        ANNARBOR    : "Ann Arbor, MI" ,
        ANNAPOLIS   : "Annapolis, MD" ,
        ARLINGTON   : "Arlington, VA" ,
        ATHENS  : "Athens, GA" ,
        ATLANTA : "Atlanta, GA" ,
        AUSTIN  : "Austin, TX" ,
        BALTIMORE   : "Baltimore, MD" ,
        BATONROUGE  : "Baton Rouge, LA" ,
        BINGHAMTON  : "Binghamton, NY" ,
        BIRMINGHAM  : "Birmingham, AL" ,
        BLACKSBURG  : "Blacksburg, VA" ,
        BOSTON  : "Boston, MA" ,
        BROOKFIELD  : "Brookfield, WI" ,
        BUFFALOAIRPORT  : "Buffalo Airport, NY" ,
        BUFFALO : "Buffalo, NY" ,
        BURBANK : "Burbank, CA" ,
        BURLINGTON  : "Burlington, VT" ,
        CHARLOTTE   : "Charlotte, NC" ,
        CHARLOTTESVILLE : "Charlottesville, VA" ,
        CHATTANOOGA : "Chattanooga, TN" ,
        CHICAGOMIDWAYINTLAIRPORT    : "Chicago Midway Intl Airport" ,
        CHICAGOO_HAREINTLAIRPORT    : "Chicago O'Hare Intl Airport" ,
        CHICAGO : "Chicago, IL" ,
        CHRISTIANSBURG  : "Christiansburg, VA" ,
        CINCINNATI  : "Cincinnati, OH" ,
        CLEVELAND   : "Cleveland, OH" ,
        COLUMBIA    : "Columbia, SC" ,
        CRESTWOOD   : "Crestwood, IL" ,
        DALLAS  : "Dallas, TX" ,
        DAYTONABEACH    : "Daytona Beach, FL" ,
        DESMOINES   : "Des Moines, IA" ,
        DETROIT : "Detroit, MI" ,
        DULLESWASHINGTONAIRPORT : "Dulles Washington Airport (IAD), VA" ,
        DURHAM  : "Durham, NC" ,
        EASTTROY    : "East Troy, WI" ,
        FAYETTEVILLE    : "Fayetteville, NC" ,
        FORTLAUDERDALE  : "Fort Lauderdale, FL" ,
        FRONTROYAL  : "Front Royal, VA" ,
        GAINESVILLE : "Gainesville, FL" ,
        HAMPTON : "Hampton, VA" ,
        HARRISBURG  : "Harrisburg, PA" ,
        HARRISONBURG    : "Harrisonburg, VA" ,
        HIGHLAND    : "Highland, IN" ,
        HOUSTON : "Houston, TX" ,
        INDIANAPOLIS    : "Indianapolis, IN" ,
        IOWACITY    : "Iowa City (Coralville), IA" ,
        ITHACA  : "Ithaca, NY" ,
        JACKSONVILLE    : "Jacksonville, FL" ,
        JANESVILLE  : "Janesville, WI" ,
        LAKELAND    : "Lakeland, FL" ,
        LASVEGAS    : "Las Vegas, NV" ,
        LEXINGTON   : "Lexington, VA" ,
        LINCOLN : "Lincoln, NE" ,
        LITTLEROCK  : "Little Rock, AR" ,
        LOSANGELES  : "Los Angeles, CA" ,
        LOUISVILLE  : "Louisville, KY" ,
        MADISON : "Madison, WI" ,
        MEMPHIS : "Memphis, TN" ,
        MIAMI   : "Miami, FL" ,
        MICHIGANCITY    : "Michigan City, IN" ,
        MILTON  : "Milton, WI" ,
        MILWAUKEE   : "Milwaukee, WI" ,
        MINNEAPOLIS : "Minneapolis, MN" ,
        MOBILE  : "Mobile, AL" ,
        MOLINE  : "Moline, IL" ,
        MONTGOMERY  : "Montgomery, AL" ,
        MONTPELIER  : "Montpelier, VT" ,
        MORGANTOWN  : "Morgantown, WV" ,
        MUSKEGO : "Muskego, WI" ,
        NASHVILLE   : "Nashville, TN" ,
        NEWBRUNSWICK    : "New Brunswick, NJ" ,
        NEWORLEANS  : "New Orleans, LA" ,
        NEWYORK : "New York, NY" ,
        NEWARK  : "Newark, DE" ,
        NOTREDAME   : "Notre Dame, IN" ,
        OAKLAND : "Oakland, CA" ,
        OMAHA   : "Omaha, NE" ,
        ORLANDO : "Orlando, FL" ,
        PHILADELPHIA    : "Philadelphia, PA" ,
        PITTSBURGH  : "Pittsburgh, PA" ,
        PORTLAND    : "Portland, ME" ,
        PRINCETON   : "Princeton, NJ" ,
        RICHMOND    : "Richmond, VA" ,
        RIDGEWOOD   : "Ridgewood, NJ" ,
        RIVERSIDE   : "Riverside, CA" ,
        ROCHESTER   : "Rochester, NY" ,
        ROCKFORD    : "Rockford, IL" ,
        SACRAMENTO  : "Sacramento, CA" ,
        SANANTONIO  : "San Antonio, TX" ,
        SANFRANCISCO    : "San Francisco, CA" ,
        SANJOSE : "San Jose, CA" ,
        SECAUCUS    : "Secaucus, NJ" ,
        SOUTHBELOIT : "South Beloit, IL" ,
        SOUTHBEND   : "South Bend, IN" ,
        STLOUIS : "St Louis, MO" ,
        ST_PAUL : "St. Paul, MN" ,
        STATECOLLEGE    : "State College, PA" ,
        STAUNTON    : "Staunton, VA" ,
        SYRACUSE    : "Syracuse, NY" ,
        TAMPA   : "Tampa, FL" ,
        TAMPA_MANGO : "Tampa\Mango (P&R), FL" ,
        TOLEDO  : "Toledo, OH" ,
        TORONTO : "Toronto, ON" ,
        VIRGINIABEACH   : "Virginia Beach, VA" ,
        WASHINGTON  : "Washington, DC" ,
        WAUKESHA    : "Waukesha, WI" ,
        WESTALLIS   : "West Allis, WI" ,
        WHITEWATER  : "Whitewater, WI"
    });

    this.cityByZipCode = Object.freeze({
        BOSTON : "02201"
    });
};

module.exports = new originCityListEnum;

/*
    enum Towns{
        NEWYORK,
        BOSTON
    }
*/
    //enum ZipCodes{
        //BOSTON = '02201'
    //}


//module.exports = new Enums;
