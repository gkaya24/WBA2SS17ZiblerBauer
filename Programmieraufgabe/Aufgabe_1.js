var fs = require('fs'); //

fs.readFile(__dirname + "/staedte.json", function(err, data) {
  JSON.parse(data).cities.forEach(function(city) {
    for (var attribute in city) {
      if (city.hasOwnProperty(attribute)) {
        console.log(attribute + ': '+ city[attribute]);
      }
    }
    console.log('-----------------------------------');
  });
});