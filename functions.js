var fs = require('fs');
var csv = require('csv');

exports.contactLocation = function(contact, search, location) {
    if (contact === undefined) {
        return false;
    } else if (location !== undefined) {
        console.log("Contact #" + location);
        return contact;
    }
};

exports.findContact = function(filename, data) {
    var counter = 0;
    var finds = null;
    for (var i = 0; i < filename.length; i++) {
        if (data === filename[i][3]) {
            finds = i;
            counter++;
        }
    }
    if (counter !== 0) {
      console.log("Found " + counter + " amount of times.");
      return finds;
    } else {
      return false;
    }
};

exports.writeCsv = function(data) {
    csv.stringify(data, { header: true }, function(err, data) {
      // process.stdout.write(data);
      fs.writeFile('./example.csv', data, function(error) {
        if (error) {
          throw error;
        }
        console.log('CSV update was successful');
      });
    });
  // }
};
