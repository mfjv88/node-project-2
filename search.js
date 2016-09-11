var fs = require('fs');
var prompt = require('prompt-sync')();
var processCsv = require('./processcsv');
var contactLocation = require('./functions').contactLocation;
var findContact = require('./functions').findContact;

function searchCsv(filename) {
    var search = prompt("What email would you like to search? ");
    var location = null;
    var contact = null;
    var id = findContact(filename, search);
    location = id + 1;
    contact = filename[id];
    if (contact === undefined || id === false) {
        console.log("Not a valid entry");
    } else {
        contact = contact.join(" ");
        var result = contactLocation(contact, search, location);
        if (result !== false)
            console.log(result);
    }
  }

module.exports = searchCsv;



    // PREVIOUS WORK FOR MORE THAN 1 SEARCH
    //
    // var contact = "repeat";
    // var location = null;
    // var index = null;
    // var id = null;
    // for (var i = 0; i < filename.length; i++) {
    //     var counter = 0;
    //     while (contact === "repeat") {
    //         switch (counter) {
    //             case 0:
    //                 search = prompt("What first name would you like to search? ");
    //                 contact = findContact(filename, search, 0);
    //                 index = filename[contact][counter];
    //                 location = filename[contact];
    //                 counter++;
    //                 break;
    //             case 1:
    //                 search = prompt("What last name would you like to search? ");
    //                 contact = findContact(filename, search, 1);
    //                 index = filename[contact][1];
    //                 location = filename[contact];
    //                 counter++;
    //                 break;
    //             case 2:
    //                 search = prompt("What phone would you like to search? ");
    //                 contact = findContact(filename, search, 2);
    //                 index = filename[contact][2];
    //                 location = filename[contact];
    //                 counter++;
    //                 break;
    //             case 3:
    //                 search = prompt("What email would you like to search? ");
    //                 contact = findContact(filename, search, 3);
    //                 index = filename[contact][3];
    //                 location = filename[contact];
    //                 counter++;
    //                 break;
    //             default:
    //                 contact = -1;
    //         }
    //     }
    // }

    // function searchCsv(filename) {
    //     var search = prompt("What would you like to search? ");
    //     var counter = 0;
    //     var location = [];
    //     var contacts = [];
    //     for (var i = 0; i < filename.length; i++) {
    //         if (search.toUpperCase() === filename[i][0].toUpperCase()) {
    //             location.push(filename[i][0].indexOf(search) + 1);
    //             contacts.push(filename[i].join(" "));
    //             counter++;
    //         }
    //     }
    //     if (counter === 0) {
    //         console.log("Not Found!");
    //     } else {
    //         console.log("Found " + counter + " amount of times.");
    //     }
    //     console.log("Location(s): " + location);
    //     console.log(contacts.join());
    // }

    // function identifyColumn(id){
    //   switch (id) {
    //     case "fist name":
    //       return 0;
    //
    //     case "last name":
    //       return 1;
    //
    //     case "phone":
    //       return 2;
    //
    //     case "email":
    //       return 3;
    //
    //     default:
    //       return -1;
    //   }
    // }
