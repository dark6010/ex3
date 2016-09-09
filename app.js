var express = require("express");
var app = express();
app.get("/olivia", function(req, res) {
 res.send("Welcome to Olivia’s homepage!");
});
app.use(function(request, response) {
 response.status(404).send("Page not found!");
});
app.listen(3000); 