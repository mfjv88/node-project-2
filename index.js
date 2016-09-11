var addContact = require('./add');
var searchContact = require('./search');
var deleteContact = require('./delete');
var updateContact = require('./update');
var processCsv = require('./processcsv');
var help = require('./help');
var prompt = require('prompt-sync')();

var option = prompt("Add, Update, Delete or Search contact in CSV?\n\nIf you need help, type 'help'. ").toUpperCase();

var command;
if (option === "SEARCH") {
    command = searchContact;
} else if (option === "DELETE") {
    console.log("test2");
    command = deleteContact;
} else if (option === "ADD") {
    command = addContact;
} else if (option === "UPDATE") {
    command = updateContact;
} else if (option === "HELP") {
  command = help;
} else {
    console.log("Not a valid entry");
}

processCsv('./example.csv', command);
