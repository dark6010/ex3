var express = require("express");
var app = express();
app.get("/users", function(req, res) {
    res.send("Id: "+ req.query.q);
});
app.use(function(req, res) {
    res.status(404);
    res.send("Page not found!");
});
app.listen(3000); 
//http://localhost:3000/users?q=jo no es seguro