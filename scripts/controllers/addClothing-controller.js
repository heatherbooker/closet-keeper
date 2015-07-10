$("select").select2({
    ".mbl": 'dropdown-inverse'
});

Parse.initialize("qmqVorzxIpQRkEbanvb8hczUA0PgxF3CVaDeUGJt", "bXUQxAnUNjdnkeV5GUyuwp5hY0yOL6bCFH3V98X1");

var clothes = Parse.Object.extend("clothes");


function makeNewClothes(imageFile) {

    var articleOfClothing = new clothes();

    articleOfClothing.set("color", "");
    articleOfClothing.set("type", "");
    articleOfClothing.set("img", imageFile);
    articleOfClothing.set("use", "");
    articleOfClothing.set("keywords", "");

    articleOfClothing.save(null, {
        success: function(item) {
            //Success Callback 
            console.log('New article of clothing successfully saved to data storage (parse)!')
        },
        error: function(gameScore, error) {
            //Failure Callback
            console.log('unable to save new article to parse')
        }
    });

};


function changeClothesImage(id) {

    var fileUploadControl = $("#imageFileInput")[0];

    if (fileUploadControl.files.length > 0) {
        var file = fileUploadControl.files[0];
        var name = file.name;

        var parseFile = new Parse.File(name, file);

        changeParseImage(id, parseFile);
    }

}

function changeParseImage(id, image) {

    var query = new Parse.Query(clothes);

    query.get(id, {

        success: function(object) {
            console.log('woot parse object successfully retrieved!');
            object.set('img', image)
            object.save();
        },

        error: function(object, error) {
            console.log('oh boogers parse object not retrieved: ' + JSON.stringify(error));
        }

        //     });
        // }
    })
}