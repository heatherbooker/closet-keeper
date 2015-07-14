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

    for (var key in clothingDictionary) {

        var i = 0;

        if (clothingDictionary.hasOwnProperty(key)) {

            displayClothing(clothingDictionary[key].attributes.img._url, i);

            i++;

        }
    }
}



function searchByKeyword() {

    //get user input
    var searchTerm = document.getElementById('searchBar').value;

    //ASK CLOTHESmanager 

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