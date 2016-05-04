var express = require('express');
var bodyParser = require('body-parser');
var stud = require('./students');
var url = require('url');
var app = express();
var port = process.env.PORT || 3000;

app.get('/getAllStudents',function(req,res){
    res.json(stud.getAllStudents());
});

app.get('/getStudentsByYear/:num/',function(req,res){
    var year = req.params.num;
    var arr = stud.getStudentsByYear(year);
    res.json(arr);
});

app.get('/getExcellentStudentsByYear/:num1/:num2/',function(req,res){
    var year = req.params.num1;
    var avg = req.params.num2;
    var arr = stud.getExcellentStudentsByYear(year,avg);
    res.json(arr);
});

app.listen(port);
console.log('listenning on port'+ port);


