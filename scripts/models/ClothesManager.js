function ClothesManager() {

    Parse.initialize("qmqVorzxIpQRkEbanvb8hczUA0PgxF3CVaDeUGJt", "bXUQxAnUNjdnkeV5GUyuwp5hY0yOL6bCFH3V98X1");

    var clothes = Parse.Object.extend("clothes");

    var fullArray = [];


    var loadArray = function() {

        var query = new Parse.Query(clothes);

        query.find({

            success: function(arrayOfArticles) {

                console.log("Successfully retrieved " + arrayOfArticles.length + " articles.");

                for (var i = 0; i < arrayOfArticles.length; i++) {
                    fullArray.push(arrayOfArticles[i]);
                }

            },

            error: function(error) {

                console.log("Unable to retrieve articles from Parse: " + error.code + " " + error.message);
            }
        });
    }


    var accessArticle = function(articleID) {

        for (var i = 0; i < fullArray.length; i++) {

            if (fullArray[i].id === articleID) {
                return fullArray[i];
            }
        }
    }


    var updateArticle = function(id, attributeToUpdate, newValue) {

        var article = accessArticle(id);

        article.set(attributeToUpdate, newValue);
        saveArticle(article);

    };


    var deleteArticle = function(id) {

        var article = accessArticle(id);

        article.destroy({
            success: function() {
                console.log("Article successfully removed from system");
            },
            error: function(article, error) {
                console.log("Unable to destroy article! Reason: " + error.code + error.message);
            }
        });

    };


    var addArticle = function(keywords, type, use, color, imageFile) {

        var article = new clothes();

        article.set("keywords", keywords);
        article.set("type", type);
        article.set("use", use);
        article.set("color", color);
        article.set("img", imageFile);

        saveArticle(article);

    };


    function saveArticle(articleToSave) {

        articleToSave.save(null, {

            success: function(item) {
                console.log('Save successful!')
            },
            error: function(item, error) {
                console.log('Unable to save: ' + error.code + error.message);
            }

        });
    }


    return {
        loadArray: loadArray,
        addArticle: addArticle,
        updateArticle: updateArticle,
        deleteArticle: deleteArticle
    }

}



//make new array containing only objects whose keywords match searchTerm
// var searchResultsArray =
//     $.grep(clothingArray, function(objectInArray) {
//         return objectInArray.keywords === searchTerm;
//     });