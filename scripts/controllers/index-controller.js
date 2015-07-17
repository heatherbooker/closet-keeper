function showPrevOutfit() {
    console.log('go back one outfit')
}

function showNewOutfit() {
    console.log('produce new outfit')
}

function displayClothing(imageURL, div) {

    var imageHTML = '<center><img class="img-responsive" src="' + imageURL + '" style="max-height:210px"></center>';

    document.getElementById(div).innerHTML = imageHTML;

}

displayClothing("http://files.parsetfss.com/51dfb8d1-8300-4f35-a514-1dbcc425e26e/tfss-de644817-13ef-4240-8499-ef2001e241c6-4.jpg", "bagoo-home-top");
displayClothing("http://files.parsetfss.com/51dfb8d1-8300-4f35-a514-1dbcc425e26e/tfss-398d796e-182c-4f8a-a530-6530f5dc77c4-9.jpg", "bagoo-home-bottom");