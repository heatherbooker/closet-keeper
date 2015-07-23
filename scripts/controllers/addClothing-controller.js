//make dropdown pretty
$("select").select2({
    ".mbl": 'dropdown-inverse'
});

//make clicking on photo icon function to open file browser for image upload
$('#bagoo-add-img').click(function() {
    $('#bagoo-file-input').click();
});

//make colorpicker plugin work
$(function() {
    $('.bagoo-colorpicker').colorpicker();
});


function showImg(input) {
    if (input.files && input.files[0]) {
        var fileReader = new FileReader();
        fileReader.onload = function(e) {
            $('#bagoo-display-img')
                .attr('src', e.target.result)
                .width(330)
                .height(340);
        };
        fileReader.readAsDataURL(input.files[0]);
    }
}

function getImgInput() {
    var fileUploadControl = $("#bagoo-file-input")[0];
    if (fileUploadControl.files.length > 0) {
        var file = fileUploadControl.files[0];
        var name = file.name;
        var imgFile = new Parse.File(name, file)
        return imgFile
    }
}

function saveArticle() {

    console.log('save function is running')

    var imgFile = getImgInput();
    var keywords = getKeywords();
    var articleType = $('select#inputType').val();
    var events = $('select#inputEvent').val();
    var color = $('.bagoo-colorpicker').colorpicker('getValue', '#ffffff');

    clothesManager.addArticle(keywords, articleType, events, color, imgFile);
}

function getKeywords() {

    var keywords = $('#inputKeywords').val();
    var keywordArray = [];

    if (keywords.contains(',')) {
        keywordArray = keywords.split(',');
        for (var i = 0; i < keywordArray.length; i++) {
            var trimmed = keywordArray[i].trim();
            keywordArray[i] = trimmed;
        }
    } else {
        keywordArray.push(keywords.trim());
    }
    return keywordArray
}
