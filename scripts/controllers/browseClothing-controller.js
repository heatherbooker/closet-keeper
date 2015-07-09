function make16Clothing() {

    var clothes = [];

    for (var i = 0; i < 16; i++) {
        var c = new Clothing('', '', '', '', '../assets/images/' + i + '.jpg');
        clothes.push(c);
        displayClothing(c, i)
    }

}


function displayClothing(clothingItem, div) {

    var imageHTML = '<center><img class="img-responsive" src="' + clothingItem.image + '"></center>';
    var divName = "div" + div;

    document.getElementById(divName).innerHTML = imageHTML;

}


$(document).ready(function() {
    make16Clothing();
});