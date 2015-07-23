function displayClothing(imageURL, objectId, isAnImg, div) {

    if (isAnImg) {

        var fillDiv = '<center><img class="img-responsive" src="' + imageURL + '" data-id="' + objectId + '" onclick="openForEdit(this)"></center>';

    } else if (!isAnImg) {

        var fillDiv = " ";
    }

    var divName = "div" + div;

    document.getElementById(divName).innerHTML = fillDiv;

}

function openForEdit(image) {
    console.log(image.src)
    console.log(image.dataset.id)
    console.log(clothesManager.search(image.dataset.id))
}


function initialView(clothingDictionary) {

    var i = 0;

    for (var key in clothingDictionary) {

        if (clothingDictionary.hasOwnProperty(key)) {

            if (clothingDictionary[key].attributes.hasOwnProperty("img")) {

                displayClothing(clothingDictionary[key].attributes.img._url, clothingDictionary[key].id, true, i);
            }

            i++;
        }
    }
}


function updateView(searchArray) {

    for (var i = 0; i < 16; i++) {

        if (searchArray[i]) {

            displayClothing(searchArray[i].attributes.img._url, searchArray[i].id, true, i)

        } else {

            displayClothing(" ", false, i)
        }
    }
}


function searchByKeyword() {

    //get user input
    var searchTerm = document.getElementById('searchBar').value;

    var searchArray = clothesManager.search(searchTerm);

    updateView(searchArray);

}

//make enter work same as pushing search button
$("#searchBar").keyup(function(event) {
    if (event.keyCode == 13) {
        $("#searchbtn").click();
    }
});