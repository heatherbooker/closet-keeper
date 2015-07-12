//enable pop up text box 
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip();
});


// function displayClothing(imageURL, keyValuePair, div) {

//     if (this is first page load) {
//         var imageHTML = '<center><img class="img-responsive" src="' + imageURL + '"></center>';
//     }

//     if (this is fer a search) {
//         var imageHTML = '<center><a href="#" data-toggle="tooltip" title="' + keyValuePair + '"><img class="img-responsive" src="' + imageURL + '"></a></center>';
//     }

//     var divName = "div" + div;

//     document.getElementById(divName).innerHTML = imageHTML;

// }

function updateView(searchArray, searchTerm) {


    for (var i = 0; i < searchArray.length; i++) {


        displayClothing(searchArray[i].imgURL, searchTerm, i)

    }
}


// function makeClothingArray() {

//     var query = new Parse.Query(clothes);

//     query.exists("img");
//     query.find({

//         success: function(articles) {
//             console.log('woot parse objects successfully retrieved!');
//             makeArrayFromParseJSON(articles);
//         },

//         error: function(object, error) {
//             console.log('oh boogers parse objects not retrieved: ' + error.code + error.message);
//         }

//     });
// }


function searchByKeyword() {

    //get user input
    var searchTerm = document.getElementById('searchBar').value;

    //ASK CLOTHESmanager 

    updateView(searchResultsArray, searchTerm);
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