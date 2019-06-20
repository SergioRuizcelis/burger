var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  router.post("/api/burger", function(req, res) {
    burger.create([
      "name", ""
    ], [
      req.body.name, req.body
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });