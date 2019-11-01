'use strict'

var cityEnum = function(){

this.Towns = Object.freeze({
    NEWYORK : "New York, NY",
    BOSTON : "Boston, MA"
});

//Enums to identify cities by Zipcode
this.ZipCodes = Object.freeze({
    NEWYORK : "10005",
    BOSTON : "02101"
});

}
module.exports = new cityEnum()