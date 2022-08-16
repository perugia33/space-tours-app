const express = require("express");

const  userRoutes = express.Router();

const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;

// Get List of all Users
userRoutes.route("/user").get(function (req, res) {
    let db_connect = dbo.getDb("user_data");
    db_connect
    .collection("user")
    .find({})
    .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

// GET SINGLE USER BY ID
userRoutes.route("/user/:id").get(function (req, res) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect
    .collection("passengers")
    .findOne(myquery, function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

// CREATE NEW USER
userRoutes.route("/user/add").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myobj = {
        name: req.body.name,
        email: req.body.email,
        destination: req.body.destination,
        passengers: req.body.passengers,
    };
    db_connect.collection("passengers").insertOne(myobj, function (err, res) {   
        if (err) throw err;
        response.json(res);
    });
});

// DELETE  A USER
userRoutes.route("/:id").delete((req, response) => {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    db_connect.collection("passengers").deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        response.json(obj);
    });
});

module.exports = userRoutes;