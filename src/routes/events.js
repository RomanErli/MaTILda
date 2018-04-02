 var express = require('express');
var router = express.Router();
var output = (express);
const http = require('http')
module.exports = router;

function  setResHtml(cb) {};

var dbcon_query = require("../dbConnection")

dbcon_query('select * from matildadb.v_events' // where ?', {idT_Adr: '=>1'}
, function(err,result,cols) {
        if (err)
        {
            throw (err);
    } else
 {
     /* GET home page. */
     router.get('/', function(req, res, next) {
         obj = {print: result, title: 'Matilda'};
         res.render('events', obj);
         //console.log(result);

     });
 }
         });



