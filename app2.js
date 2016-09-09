var express = require("express");
var app = express();
app.get("/users/:userid", function(req, res) {
    var idusuario = parseInt( req.params.userid, 10); 
    res.send("Id: "+idusuario);
});
app.use(function(req, res) {
    res.status(404);
    res.send("Page not found!");
});
app.listen(3000); 

//