const express = require('express');
const app = express();
// console.log(__dirname);

app.set('view engine', 'ejs')

app.listen(3000, "localhost");

app.get('/', function (req, res) {
    var weather = require('weather-js');
    
    weather.find({search: 'Pasig City, PH', degreeType: 'C'}, function(err, result) {
    if(err) console.log(err);

    console.log(JSON.stringify(result, null, 2));

    res.render('pages/index');
    });
});

app.get('/other', function (req, res) {
    res.render('pages/other');
});