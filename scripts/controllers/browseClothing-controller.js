function updateView(clothingArray) {

    for (var i = 0; i < clothingArray.length; i++) {

        displayClothing(clothingArray[i], i)

    }

}

var clothes = [];

function makeClothingArray(jsonArray) {

    for (var i = 0; i < jsonArray.length; i++) {

        var c = new Clothing(jsonArray[i].keywords, 'b', 'c', 'd', '../assets/images/' + i + '.jpg');
        clothes.push(c);

    }
}


function displayClothing(clothingItem, div) {

    var imageHTML = '<center><img class="img-responsive" src="' + clothingItem.image + '"></center>';

    var divName = "div" + div;

    document.getElementById(divName).innerHTML = imageHTML;

}

var clothingArray = [];


$(document).ready(function() {

    // makeClothingArray(16);
    //  updateView(clothes);

    $.ajax({
        type: "get",
        dataType: "json",
        url: "../scripts/models/clothes.json",
        beforeSend: function(request) {
            request.overrideMimeType("application/json")
        },
        success: function(data) {
            //clothingArray = makeClothingArray(data.jsonClothing);
            //updateView(clothingArray);
            console.log(data.jsonClothing);
            console.log(JSON.stringify(data) + 'yay! you called json!');
        },
        error: function(err) {
            console.log("uh oh spaghettis " + err.responseText);
        }
    })

});