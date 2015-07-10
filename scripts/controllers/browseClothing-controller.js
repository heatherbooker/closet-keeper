var clothes = [];



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


$(document).ready(function() {


    $.ajax({

        type: "get",
        dataType: "json",
        url: "../scripts/models/clothes.json",

        beforeSend: function(request) {
            request.overrideMimeType("application/json")
        },

        success: function(data) {

            var clothesArray = data.jsonClothing;
            makeClothingArray(clothesArray);
            updateView(clothes);
            console.log('yay! you called json!');
        },

        error: function(err) {
            console.log("uh oh spaghettis " + err.responseText);
        }

    })

});