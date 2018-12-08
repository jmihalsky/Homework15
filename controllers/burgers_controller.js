var express = require("express");

var router = express.Router();
var brgr = require("../models/burger.js");

router.get("/",function(req,res){
    res.redirect("/burgers");
});

router.get("/burgers",function(req,res){
    brgr.all(function(BurgerData){
        res.render("index",{ burger_data: BurgerData });
    });
});

router.post("/burgers/create",function(req,res){
    console.log(req.body.burger_name);
    brgr.create(req.body.burger_name, function(result){
        res.redirect("/burgers");
    });
});

router.put("/burgers/:id", function(req,res){
    brgr.update("devoured",req.params.id, function(result){
        console.log(result);
        res.sendStatus(200);
    });
});

module.exports = router;