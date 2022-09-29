const express = require('express');
const app = express();
const weather = require('weather-js');
const fetchUrl = require("fetch").fetchUrl;
const requestMultipleUrls = require('ft-request-multiple-urls');

app.set('view engine', 'ejs')

app.listen(3000, "localhost");

app.get('/', function (req, res) {
        
    weather.find({search: 'Davao City, PH', degreeType: 'C'}, function(err, result) {
        var weatherData = null;
        if(err) console.log(err);
        else {
            // console.log(JSON.stringify(result, null, 2));
            weatherData = result;
        }
        res.render('index', {panahon : weatherData});
    }); 
});

app.get('/other', function (req, res) {
    fetchUrl("https://catfact.ninja/fact", function(error, meta, body){
        var cats = JSON.parse(body);
        var data = {
            url: req.url,
            itemData: cats
        }
        res.render('other', data);
    });
});
