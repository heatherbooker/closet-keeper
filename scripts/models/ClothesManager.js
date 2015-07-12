function ClothesManager() {

    Parse.initialize("qmqVorzxIpQRkEbanvb8hczUA0PgxF3CVaDeUGJt", "bXUQxAnUNjdnkeV5GUyuwp5hY0yOL6bCFH3V98X1");

    var clothes = Parse.Object.extend("clothes");

    var fullArray = [];

    var searchArray = [];

    this.getFullArray = fullArray;

    var search = function() {
        nerpnerp
        getArticle();
    };

    var makeQueryToParse = function(id, callbackFunction) {

        var query = new Parse.Query(clothes);

        query.get(id, {

            success: function(articles) {
                console.log('woot parse objects successfully retrieved!');
                callbackFunction(articles);
            },

            error: function(object, error) {
                console.log('oh boogers parse objects not retrieved: ' + error.code + error.message);
            }

        });
    }

    var makeClothingArray = function() {

        var queryRules = 'query.exists("img"); query.find(';
        makeQueryToParse(queryRules, ")", "makeFullArray");

    };

    function makeFullArray(articles) {

        for (var i = 0; i < articles.length; i++) {
            createArticleAndPush(articles, i);
        }

    }

    function createArticleAndPush(articles, iteration) {

        var originalAttributes = articles[iteration].attributes;

        var imgParseURL = originalAttributes.img._url;
        delete originalAttributes.img;
        var idAttribute = articles[iteration].id;

        originalAttributes.parseId = idAttribute;
        originalAttributes.imgURL = imgParseURL;

        fullArray.push(originalAttributes);

    }

    var accessParseArticle = function(id, callbackFunction) {

        var queryRules = 'query.get(' + id + ', ';
        makeQueryToParse(id, callbackFunction);

    };


    var updateArticle = function(id, attributeToUpdate, newValue) {

        accessParseArticle(id, function(article) {

            article.set(attributeToUpdate, newValue)
            saveArticle(article);

        });

    };

    var deleteArticle = function(id) {

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
        saveArticle: saveArticle,
        addArticle: addArticle,
        deleteArticle: deleteArticle,
        updateArticle: updateArticle,
        makeQueryToParse: makeQueryToParse
    }
}

//return array of salsa clothes to controller