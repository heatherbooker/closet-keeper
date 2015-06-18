$(document).ready(function() {

$('#add').click(function() {
	alert('here is a form to add clothing');
	$('#wardrobe').html('<canvas id="myCanvas" width="400" height="600"></canvas>');
})
});





function ClothesValet() {
	return {
	//methods to get properties such as name, 
	}
}

function Clothing(name, fabric, length, fabric) {
	return {
	}
}

function forexampleShirt(type, event, colour, lengthoptional) {
	//type= tank, tee, blouse//for skirt: tight,circle, loose, hip rise,
	//event= fancy, casual, staple
	//length= cropped, hi/lo, tunic
}

function Shirt(type, event, baseColour, accentColour, length) {

		this.type = type;
		this.event = event;
		this.colour = baseColour;
		this.accent = accentColour;
		this.length = length;

}

var aShirt = new Shirt('tee', 'super casual', 'grey', 'red', 'cropped');
console.log(aShirt);

function OutfitPlanner(weather) {
	return {
		//object full of clothing? array of objects?
	}
}