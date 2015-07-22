$("select").select2({
    ".mbl": 'dropdown-inverse'
});

//make clicking on photo icon function to open file browser for image upload
$('#bagoo-add-img').click(function() {
    $('#bagoo-file-input').click();
});

function showImg(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#bagoo-display-img')
                .attr('src', e.target.result)
                .width(330)
                .height(340);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

//make colorpicker plugin work
$(function() {
    $('.bagoo-colorpicker').colorpicker();
});

function saveArticle() {
    //get all inputs
    var keywords = $('#inputKeywords').val();
    var articleType = $('select#inputType').val();
    var events = $('select#inputEvent').val();
    var color = $('.bagoo-colorpicker').colorpicker('getValue', '#ffffff');
    //$(.colorpicker('getValue')
    console.log('save function is running')
    console.log(keywords + articleType + events + color)

    //check if already exists
    //if exists, update
    //if does not exist, create new
    //tell user save was successful
}
