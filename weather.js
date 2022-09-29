const weather = require('weather-js');

// Options:
// search:     location name or zipcode
// degreeType: F or C

weather.find({search: 'Davao City, PH', degreeType: 'C'}, function(err, result) {
  if(err) console.log(err);
  else {
    console.log(JSON.stringify(result, null, 2));
  }
  
});

// module.exports = {results};