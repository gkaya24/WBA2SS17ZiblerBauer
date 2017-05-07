/**
  * @desc fs-Modul in Node.js ermöglicht Zugriff auf Dateien. fs =file system
  */
var fs = require('fs');

/**
  * @desc Chalk ermöglicht farbige Konsolenausgaben
  */
var chalk = require('chalk');

/**
  * @const {string[]} colors - Möglichen Farben für die Ausgabe
  */
var colors = ['red', 'green', 'yellow']

/**
  * @desc Index der ersten Farbe für die Ausgabe
  */
var colorRotator = 0;

/**
  * @desc Gibt die aktuelle Farbe an Position von colorRotation und erhöht colorRotator dann um 1
  * @return {string} color - Farbwert von Rotation
  */
function rotateColor() {
  var rotation = colorRotator++;
  if(colorRotator >= colors.length) {
    colorRotator = 0;
  }
  return colors[rotation];
}

/**
  * @desc: Asynchrone Auslesen von Dateien, Umwandlung von Json-Strings in Objekte,farbige Konsolenausgabe und Sortierung
  *
*/


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

/**
  * @desc: Asynchrone Schreiben von Dateien
*/


  fs.writeFile(__dirname + '/staedte_sortiert.json', JSON.stringify(cities), function(err) {
		if(err) {
			console.log(chalk.red(err));
		} else {
			console.log(chalk.green('-> Datei erfolgreich gespeichert!'));
		}
	});
});