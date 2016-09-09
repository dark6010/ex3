var express = require("express");
var ALLOWED_IPS = [
    "127.0.0.1",
    "::1"
];
var api = express.Router();
api.use(function(req, res, next) {
    var userIsAllowed = ALLOWED_IPS.indexOf(req.ip) !== -1;
    //console.log(req.ip);
    if (!userIsAllowed) {
        res.status(401).send("Not authorized!");
    } else {
        next();
    }
});
api.get("/users", function(req, res) { /* ... */ res.end("hi")});
api.post("/user", function(req, res) { /* ... */ });
api.get("/messages", function(req, res) { /* ... */ });
api.post("/message", function(req, res) { /* ... */ });
module.exports = api;