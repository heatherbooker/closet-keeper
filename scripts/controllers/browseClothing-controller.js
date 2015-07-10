function updateView(clothingArray) {

    for (var i = 0; i < clothingArray.length; i++) {

        displayClothing(clothingArray[i], i)

    }

}

var clothes = [];

function makeClothingArray(end) {

    for (var i = 0; i < end; i++) {

        var c = new Clothing(['a', 'a'], 'b', 'c', 'd', '../assets/images/' + i + '.jpg');
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
        dataType: "jsonp",
        url: "../scripts/models/clothes.json",
        beforeSend: function(request) {
            request.overrideMimeType("application/json")
        },
        success: function(data) {
            clothingArray = eval(data.jsonClothing);
            updateView(clothingArray);
            console.log('yay! you called json!');
        },
        error: function(err) {
            console.log("uh oh spaghettis " + err.responseText);
        }
    })

});