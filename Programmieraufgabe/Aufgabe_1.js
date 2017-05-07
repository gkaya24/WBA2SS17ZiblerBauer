/**
  * @desc fs-Modul in Node.js ermöglicht Zugriff auf Dateien. fs =file system
  */
var dirname = dirname;
var fs = require('fs'); //

/**
  * @desc: Asynchrone Auslesen von Dateien und Umwandlung von Json-Strings in Objekte
  *
*/

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