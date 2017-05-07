var fs = require('fs');
var chalk = require('chalk');
var colors = ['red', 'green', 'yellow']
var colorRotator = 0;

function rotateColor() {
  var rotation = colorRotator++;
  if(colorRotator >= colors.length) {
    colorRotator = 0;
  }
  return colors[rotation];
}
fs.readFile(__dirname + "/staedte.json", function(err, data) {
  JSON.parse(data).cities.forEach(function(city) {
    for (var attribute in city) {
      if (city.hasOwnProperty(attribute)) {
        console.log(chalk[rotateColor()](attribute + ': '+ city[attribute]));
      }
    }
    console.log('-----------------------------------');
  });
});