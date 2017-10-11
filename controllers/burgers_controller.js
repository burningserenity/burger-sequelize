const express = require('express');
const db = require('../models/burger.js');

const router = express.Router();

router.get("/", function(req, res) {
    db.findAll().then(function(dbBurger) {
        console.log(dbBurger);
        var hbsObject = {burgers: dbBurger}
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    db.create({burger_name : req.body.name}).then(function(dbBurger) {
        res.redirect("/");
    });
});

router.put("/:id", function(req, res) {
    console.log("the put is: " + req.body.devour);
    var condition = "id = " + req.params.id;

    console.log("condition", condition);
    
    db.update({
        devoured : req.body.devour,
    },{
            where: {
                id: req.params.id
            }
        }).then(function(dbBurger) {
        res.redirect("/");
    });
});

module.exports = router;
