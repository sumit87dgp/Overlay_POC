var express = require('express');
var app = express();

app.use(express.static(__dirname+'node_modules/angular/angular.js'));
app.use(express.static(__dirname+'src/core.js'));
app.use(express(__dirname+'src/child.js'));

app.get('/', function (req, res) {
    res.sendfile(__dirname+'/index.html') ;
});

app.listen(3000,function(){
    console.log("Server Started....");
})
