var clothingArray = [];

Parse.initialize("qmqVorzxIpQRkEbanvb8hczUA0PgxF3CVaDeUGJt", "bXUQxAnUNjdnkeV5GUyuwp5hY0yOL6bCFH3V98X1");

var clothes = Parse.Object.extend("clothes");



function displayClothing(clothingObject, div) {

    var imageHTML = '<center><img class="img-responsive" src="' + clothingObject.image + '"></center>';

    var divName = "div" + div;

    document.getElementById(divName).innerHTML = imageHTML;

}


function makeClothingArray() {

    var query = new Parse.Query(clothes);

    query.exists("img");
    query.find({

        success: function(articles) {
            console.log('woot parse objects successfully retrieved!');
            makeArrayFromParseJSON(articles);
        },

        error: function(object, error) {
            console.log('oh boogers parse objects not retrieved: ' + error.code + error.message);
        }

    });
}

function makeArrayFromParseJSON(JSONofArticlesFromParse) {

    for (var i = 0; i < JSONofArticlesFromParse.length; i++) {
        createArticleFromParse(JSONofArticlesFromParse, i);
    }

    console.log(clothingArray);
}

function createArticleFromParse(arrayOfArticles, iteration) {

    var originalAttributes = arrayOfArticles[iteration].attributes;

    var imgParseURL = originalAttributes.img._url;
    delete originalAttributes.img;
    var idAttribute = arrayOfArticles[iteration].id;

    originalAttributes.parseId = idAttribute;
    originalAttributes.imgURL = imgParseURL;

    clothingArray.push(originalAttributes);

}

$(document).ready(function() {

    makeClothingArray();


});