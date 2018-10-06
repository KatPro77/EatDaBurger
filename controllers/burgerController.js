var express = require("express");
var burger = require("../models/burger");
var router = express.Router();



var controller = function(app) {
	router.get('/', function(req, res) {
		burger.all(function(data) {
			res.render("index", {
				burgers: data
			});
		});
	});

	router.post('/', function(req, res) {
		burger.new('burger_name', req.body.burger, function(data) {
			res.redirect('/');
			console.log(req.body.burger);
		});
	});

	router.put('/', function(req, res) {
		burger.devour('devoured', 1, 'id', req.body.id, function(data) {
			res.redirect('/');
		});
	});
};

module.exports = controller;