var clothes = [];

Parse.initialize("qmqVorzxIpQRkEbanvb8hczUA0PgxF3CVaDeUGJt", "bXUQxAnUNjdnkeV5GUyuwp5hY0yOL6bCFH3V98X1");

function updateView(clothingArray) {

    for (var i = 0; i < clothingArray.length; i++) {

        displayClothing(clothingArray[i], i)

    }

}


function makeClothingArray(jsonArray) {

    for (var i = 0; i < jsonArray.length; i++) {

        var c = new Clothing(jsonArray[i].keywords, jsonArray[i].type, jsonArray[i].use, jsonArray[i].color, '../assets/images/' + i + '.jpg');
        clothes.push(c);

    }

}


function displayClothing(clothingObject, div) {

    var imageHTML = '<center><img class="img-responsive" src="' + clothingObject.image + '"></center>';

    var divName = "div" + div;

    document.getElementById(divName).innerHTML = imageHTML;

}

function search(searchTerms) {

}

///


function getFile() {

    var fileUploadControl = $("#imageFileInput")[0];

    if (fileUploadControl.files.length > 0) {
        var file = fileUploadControl.files[0];
        var name = "photo.jpg";

        var parseFile = new Parse.File(name, file);

        newClothingObjectToParse(parseFile);
    }

}

function newClothingObjectToParse(imageForParse) {



    imageForParse.save().then(function() {
        // The file has been saved to Parse.
        console.log('yay pictur saved');
    }, function(error) {
        // The file either could not be read, or could not be saved to Parse.
        console.log('whyyyyy');
    });

    //Extend the native Parse.Object class.
    var clothes = Parse.Object.extend("clothes");

    //Instantiate an object of the ListItem class
    var articleOfClothing = new clothes();

    //listItem is now the object that we want to save, so we assign the properties that we want on it.
    articleOfClothing.set("color", "blue");
    articleOfClothing.set("type", "dress");
    articleOfClothing.set("img", imageForParse);
    articleOfClothing.set("use", "salsa");
    articleOfClothing.set("keywords", "new");

    //We call the save method, and pass in success and failure callback functions.
    articleOfClothing.save(null, {
        success: function(item) {
            //Success Callback 
        },
        error: function(gameScore, error) {
            //Failure Callback
        }
    });
};

// var parseFile = new Parse.File("photoOfThing", ../../assets/images/16.jpg);

// parseFile.save().then(function() {
//   // The file has been saved to Parse.
//   console.log('yay pictur saved');
// }, function(error) {
//   // The file either could not be read, or could not be saved to Parse.
//   console.log('whyyyyy');
// });

// var jobApplication = new Parse.Object("JobApplication");
// jobApplication.set("applicantName", "Joe Smith");
// jobApplication.set("applicantResumeFile", parseFile);
// jobApplication.save();








$(document).ready(function() {


    $.ajax({

        type: "get",
        dataType: "json",
        url: "../scripts/models/clothes.json",

        beforeSend: function(request) {
            request.overrideMimeType("application/json")
        },

        success: function(data) {

            var clothesArray = data.results;
            makeClothingArray(clothesArray);
            updateView(clothes);
            newClothingObjectToParse();
            console.log('yay! you called json!');
        },

        error: function(err) {
            console.log("uh oh spaghettis " + err.responseText);
        }

    })

});