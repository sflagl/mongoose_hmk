var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");


// Parses our HTML and helps us find elements
var cheerio = require("cheerio");


// Makes HTTP request for HTML page  | ajax request
var request = require("request");


request('http://www.maneobjective.com/', function(error,response,html){ // callback function
    
// store html parameter into cheerio
var $ = cheerio.load(html);

    var results = [];

    $('.post-header h2').each(function(i, element){
       var postName = $(element).text();

       var linktoPost = $(element).children().attr('href');

       results.push({
         postName : postName,
         linktoPost: linktoPost 
       });
    });

    console.log(results);
})
