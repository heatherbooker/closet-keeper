//enable pop up text box 
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});



var clothingArray = [];

Parse.initialize("qmqVorzxIpQRkEbanvb8hczUA0PgxF3CVaDeUGJt", "bXUQxAnUNjdnkeV5GUyuwp5hY0yOL6bCFH3V98X1");

var clothes = Parse.Object.extend("clothes");



function displayClothing(imageURL, keyValuePair, div) {

    var imageHTML = '<center><a href="#" data-toggle="tooltip" title="' + keyValuePair + '"><img class="img-responsive" src="' + imageURL + '"></a></center>';

    var divName = "div" + div;

    document.getElementById(divName).innerHTML = imageHTML;

}

function updateView(arrayOfClothing, searchTerm) {



    for (var i = 0; i < arrayOfClothing.length; i++) {

        while (arrayOfClothing.length < 16) {

            arrayOfClothing.push({
                imgURL: "https://placeholdit.imgix.net/~text?txtsize=60&txt=%5Bimg%5D&w=330&h=330"
            });

        };

        displayClothing(arrayOfClothing[i].imgURL, searchTerm, i)

    }
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

    updateView(clothingArray);
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

function searchByKeyword() {

    //get user input
    var searchTerm = document.getElementById('searchBar').value;

    //make new array containing only objects whose keywords match searchTerm
    var searchResultsArray =
        $.grep(clothingArray, function(objectInArray) {
            return objectInArray.keywords === searchTerm;
        });

    updateView(searchResultsArray, searchTerm);
}

//make enter work same as pushing search button
$("#searchBar").keyup(function(event) {
    if (event.keyCode == 13) {
        $("#searchbtn").click();
    }
});



$(document).ready(function() {

    makeClothingArray();

});