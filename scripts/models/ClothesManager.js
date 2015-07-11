function ClothesManager() {

    var clothes = Parse.Object.extend("clothes");
    //does parse.init need to be in a function or....?
    Parse.initialize("qmqVorzxIpQRkEbanvb8hczUA0PgxF3CVaDeUGJt", "bXUQxAnUNjdnkeV5GUyuwp5hY0yOL6bCFH3V98X1");

    return {

        search: function() {

            nerpnerp
            getArticle();
        },

        getArticle: function() {

            var query = new Parse.Query(clothes);

            var successOrError = {

                success: function(articles) {
                    console.log('woot parse objects successfully retrieved!');
                    //what shall we do now with our articles?
                },

                error: function(object, error) {
                    console.log('oh boogers parse objects not retrieved: ' + error.code + error.message);
                }

            }

            //how would you like to get the article?
            query.exists("img");
            query.find(successOrError);
        },
        updateArticle: function() {
            getArticle();
            article.set('key', newValue)
        },
        removeArticle: function() {

        },

        addArticle: function(keywords, type, use, color, imageFile) {

            var article = new clothes();

            article.set("keywords", keywords);
            article.set("type", type);
            article.set("use", use);
            article.set("color", color);
            article.set("img", imageFile);

            saveArticle(article)

        },

        saveArticle: function(articleToSave) {

            articleToSave.save(null, {

                success: function(item) {
                    //Success Callback 
                    console.log('New article of clothing successfully saved to data storage (parse)!')
                },
                error: function(item, error) {
                    //Failure Callback
                    console.log('unable to save new article to parse')
                }

            });
        }

    }
}

//return array of salsa clothes to controller