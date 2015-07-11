function ClothesManager() {

    var clothes = Parse.Object.extend("clothes");

    Parse.initialize("qmqVorzxIpQRkEbanvb8hczUA0PgxF3CVaDeUGJt", "bXUQxAnUNjdnkeV5GUyuwp5hY0yOL6bCFH3V98X1");

    var fullArray = [];

    var searchArray = [];

    var search = function() {
        nerpnerp
        getArticle();
    };

    var makeQueryToParse = function(typeOfQuery, endBracket, callbackFunction) {

        var query = new Parse.Query(clothes);

        typeOfQuery {

            success: function(articles) {
                console.log('woot parse objects successfully retrieved!');
                callbackFunction(articles);
            },

            error: function(object, error) {
                console.log('oh boogers parse objects not retrieved: ' + error.code + error.message);
            }

        }
        endBracket;
    }

    var makeClothingArray = function() {

        var queryRules = 'query.exists("img"); query.find(';
        makeQueryToParse(queryRules, ")", "makeArrayFromParseJSON");

    };


    var accessParseArticle = function(id, callbackFunction) {

        var queryRules = 'query.get(' + id + ', ';
        makeQueryToParse(queryRules, ")", callbackFunction);

    };


    var updateArticle = function(id, attributeToUpdate, newValue) {

        accessParseArticle(id, function(article) {

            article.set(attributeToUpdate, newValue)
            saveArticle(article);

        });

    };

    var removeArticle = function(id) {

        accessParseArticle(id, function(article) {
            article.destroy({
                success: function() {
                    console.log("Article successfully removed from system");
                },
                error: function(article, error) {
                    console.log("Unable to destroy article! Reason: " + error.code + error.message);
                }
            });
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

    var saveArticle = function(articleToSave) {

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
        function: function,
    }
}

//return array of salsa clothes to controller