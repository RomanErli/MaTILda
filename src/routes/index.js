var express = require('express');
var router = express.Router();
var output = (express);
const http = require('http')

module.exports = router;

function  setResHtml(cb) {};

//var reo ='<html><head><title>Node.js MySQL Select</title></head><body><h1>Node.js MySQL Select</h1>{${table}}</body></html>';

/*
der Teil macht mysql

var dbcon_query = require("../dbConnection")
dbcon_query('select * from matildadb.v_lager' // where ?', {idT_Adr: '=>1'}
, function(err,result,cols) {
        if (err)
        {
            throw (err);
    } else
 */

// ab hier ist mongoose

//Import the mongoose module
var mongoose = require('mongoose');

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

{
    /* GET home page. */
    router.get('/', function (req, res, next) {
        //res.render('index', {title: 'Matilda'});
        obj = {print: result, title: 'Matilda'};
        res.render('index', obj);
        //console.log(result);
    });
};




