var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

var db = require("./models");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

require("./routes/burger-controller.js")(app);

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


db.sequelize.sync({ force: false}).then(function(){
    app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
    });
});