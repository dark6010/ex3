var express = require("express");
var app = express();
app.get(/^\/users\/(\d+)$/, function(req, res) {
    console.log(req.params);
    var idusuario = parseInt(req.params[0], 10); 
    res.send("Id: "+idusuario);
});
app.use(function(req, res) {
    res.status(404);
    res.send("Page not found!");
});
app.listen(3000); 