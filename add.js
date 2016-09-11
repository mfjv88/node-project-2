var fs = require('fs');
var csv = require('csv');
var prompt = require('prompt-sync')();
var processCsv = require('./processcsv');
var findContact = require('./functions').findContact;
var writeCsv = require('./functions').writeCsv;

function getInfo(data){
  var row = [];
  var info = prompt('Would you like to add a new person? ');
  if (info.toUpperCase() === "YES") {
    row.push(prompt("What is the first name? "));
    row.push(prompt("What is the last name? "));
    row.push(prompt("What is the phone number? "));
    row.push(prompt("What is the email? "));
    row.push(prompt("What is the city? "));
    row.push(prompt("What is the zipcode? "));
    row.push(prompt("What is the website? "));
    row.push(prompt("What is the company? "));
  } else {
    return 2;
  }
  var search = row[3];
  var id = findContact(data, search);
  if (id === false){
    data.push(row);
    return data;
  } else {
    console.log("Contact #" + id);
    return 3;
  }
}

function addContact(filename) {
  var data = getInfo(filename);
  if (data === 2){
    console.log("Try again later!");
  } else if (data === 3) {
    console.log("This email has already been entered!");
  } else {
    writeCsv(data);
  }
}

// processCsv('./example.csv', addContact);

module.exports = addContact;
