function updateView(clothingArray) {

    for (var i = 0; i < clothingArray.length; i++) {

        displayClothing(clothingArray[i], i)

    }

}


function makeClothingArray(end) {

    var clothes = [];

    for (var i = 0; i < end; i++) {

        var c = new Clothing('', '', '', '', '../assets/images/' + i + '.jpg');
        clothes.push(c);

    }

    return clothes
}


function displayClothing(clothingItem, div) {

    var imageHTML = '<center><img class="img-responsive" src="' + clothingItem.image + '"></center>';

    var divName = "div" + div;

    document.getElementById(divName).innerHTML = imageHTML;

}


$(document).ready(function() {
    updateView(makeClothingArray(16));
});