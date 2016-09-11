var fs = require('fs');
var csv = require('csv');

function processCsv(filename, callback) {
  // console.log('test1');
  fs.readFile('./example.csv', function (err, data) {
    if (err) throw err;
    csv.parse(data, function(err, dataParsed) {
      if (err) throw err;
      callback(dataParsed);
    });
  });
}

module.exports = processCsv;
