var fs = require('fs');
var csv = require('csv');
var prompt = require('prompt-sync')();
var processCsv = require('./processcsv');
var findContact = require('./functions').findContact;
var writeCsv = require('./functions').writeCsv;

function updateInfo(filename) {
    var row = [];
    var verify = prompt("What's the contact's email you'd like to update? ");
    var id = findContact(filename, verify);
    if (verify === filename[id][3]) {
        row.push(prompt("What is the first name? "));
        row.push(prompt("What is the last name? "));
        row.push(prompt("What is the phone number? "));
        row.push(prompt("What is the email? "));
        row.push(prompt("What is the city? "));
        row.push(prompt("What is the zipcode? "));
        row.push(prompt("What is the website? "));
        row.push(prompt("What is the company? "));
        filename.splice(id, 1, row);
        return filename;
    } else {
        return 3;
    }
}

function updateContact(filename) {
    var data = updateInfo(filename);
    if (data === 3) {
        console.log("Email not found!");
    } else if (data === 4) {
        console.log("ID number not found!");
    } else {
        writeCsv(data);
    }
}

module.exports = updateContact;
