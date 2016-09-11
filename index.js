var addContact = require('./add');
var searchContact = require('./search');
var deleteContact = require('./delete');
var processCsv = require('./processcsv');
var prompt = require('prompt-sync')();

var option = prompt("Add, Delete or Search contact in CSV? ").toUpperCase();

console.log(option);
var command;
if (option === "SEARCH") {
    command = searchContact;
} else if (option === "DELETE") {
    console.log("test2");
    command = deleteContact;
} else if (option === "ADD") {
    command = addContact;
} else {
    console.log("Not a valid entry");
}

processCsv('./example.csv', command);
