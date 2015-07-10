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


$(document).ready(function() {

    // makeClothingArray(16);
    //  updateView(clothes);

    $.ajax({
        type: "get",
        dataType: "json",
        mimeType: "application/JSON",
        url: "../scripts/models/clothes.json",
        beforeSend: function(request) {
            request.overrideMimeType("application/json")
        },
        success: function(data) {
            alert('yay!');
        },
        error: function(err) {
            console.log("uh oh spaghettis " + JSON.stringify(err));
        }
    })

});