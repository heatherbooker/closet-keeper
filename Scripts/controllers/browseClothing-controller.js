function changePic(clothingItem, div) {
    var writeToDiv = '<center><img class="img-responsive" src="' + clothingItem.image + '"></center>'
    document.getElementById(div).innerHTML = writeToDiv;
}

var shirt = new Clothing('myshirt', 'shirt', 'salsa', 'pink', '../assets/images/blueShirt.jpeg');

changePic(shirt, 'div1')

var pants = new Clothing(' ', 'pants', 'dinner out', 'yellow', '../assets/images/tanPants.PNG');

changePic(pants, 'div2')