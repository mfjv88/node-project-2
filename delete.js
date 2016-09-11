var fs = require('fs');
var csv = require('csv');
var prompt = require('prompt-sync')();
var processCsv = require('./processcsv');
var findContact = require('./functions').findContact;
var writeCsv = require('./functions').writeCsv;

function deletingInfo(data){
  var info = prompt('Would you like to delete a contact? ');
  var search = null;
  if (info.toUpperCase() === "YES") {
    search = prompt("What's the email of the contact you would like to delete? ");
  } else {
    return 2;
  }
  var id = findContact(data, search);
  if (id !== false){
    data.splice(id, 1);
    return data;
    // console.log(data);
  } else {
    return 3;
  }
}

function deleteContact(filename) {
  var data = deletingInfo(filename);
  if (data === 2){
    console.log("Try again later!");
  } else if (data === 3) {
    console.log("This email was not found!");
  } else {
    writeCsv(filename);
  }
}

// processCsv('./example.csv', deleteContact);

module.exports = deleteContact;
