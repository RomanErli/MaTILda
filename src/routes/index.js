var express = require('express');
var router = express.Router();
var output = (express);
const http = require('http')

module.exports = router;

function  setResHtml(cb) {};

var reo ='<html><head><title>Node.js MySQL Select</title></head><body><h1>Node.js MySQL Select</h1>{${table}}</body></html>';

var dbcon_query = require("../dbConnection")
dbcon_query('select * from matildadb.v_lager' // where ?', {idT_Adr: '=>1'}
, function(err,result,cols) {
        if (err)
        {
            throw (err);
    } else
 {
     /* GET home page. */
     router.get('/', function(req, res, next) {
         //res.render('index', {title: 'Matilda'});
         obj = {print: result, title: 'Matilda'};
         res.render('index', obj);
         //console.log(result);
     });

     router.post('/insert', function (req, res, next) {


     } )
 }
         });



