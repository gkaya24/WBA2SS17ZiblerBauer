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
  var cities = JSON.parse(data).cities;

  cities.sort(function (a, b) {
    return a.population - b.population;
  });

  cities.forEach(function(city) {
    for (var attribute in city) {
      if (city.hasOwnProperty(attribute)) {
        console.log(chalk[rotateColor()](attribute + ': '+ city[attribute]));
      }
    }
    console.log('-----------------------------------');
  });

  fs.writeFile(__dirname + '/staedte_sortiert.json', JSON.stringify(cities), function(err) {
		if(err) {
			console.log(chalk.red(err));
		} else {
			console.log(chalk.green('-> Datei erfolgreich gespeichert!'));
		}
	});
});