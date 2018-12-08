var db = require("../models");

module.exports = function(app){
    app.get("/",function(req,res){
        res.redirect("/burgers");
    });

    app.get("/burgers",function(req,res){
        db.burgers.findAll({}).then(function(BurgerInfo){
            var BurgerData = {
                burger_data: BurgerInfo
            }
            res.render("index", BurgerData);
        })
    });

    app.post("/burgers/create",function(req,res){
        db.burgers.create({
            burger_name: req.body.burger_name
        }).then(function(result){
            res.redirect("/burgers");
        });
    });

    app.put("/burgers/:id",function(req,res){
        db.burgers.update({
            devoured: true
        },
        {
            where: {
                id: req.params.id
            }
        }).then(function(result){
            res.json(result);
        }).catch(function(err){
            res.json(err);
        });
    });
};