//enable pop up text box 
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});


function displayClothing(imageURL, div) {

    var imageHTML = '<center><img class="img-responsive" src="' + imageURL + '"></center>';

    var divName = "div" + div;

    document.getElementById(divName).innerHTML = imageHTML;

}

function updateView(clothingDictionary) {

    var i = 0;

    for (var key in clothingDictionary) {

        if (clothingDictionary.hasOwnProperty(key)) {

            if (clothingDictionary[key].attributes.hasOwnProperty("img")) {

                displayClothing(clothingDictionary[key].attributes.img._url, i);

            }

            i++;

        }
    }
}



function searchByKeyword() {

    //get user input
    var searchTerm = document.getElementById('searchBar').value;

    //ASK CLOTHESmanager 

    var searchArray = clothesManager.search(searchTerm);

    updateView(searchArray);
}

//make enter work same as pushing search button
$("#searchBar").keyup(function(event) {
    if (event.keyCode == 13) {
        $("#searchbtn").click();
    }
});



// $(document).ready(function() {

//     makeClothingArray();

// });