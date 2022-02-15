const fs = require('fs');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // 200 status code means OK
    res.status().send(200);
})

var http = require('http');

// Create a server object
http.createServer(function(req, res) {

    // http header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    var url = req.url;

    if (url === '/food.json') {
        console.log("reading again");
        const jsonData = require('./database.json');
        console.log(jsonData);
        res.write(' data loaded');
        res.end();

    } else if (url === '/about') {
        console.log("welcome to foodpoint ");
        res.write(' Welcome to FOODPOINT');
        res.end();
    } else {
        res.writeHead(200);
        res.write(' OK');
        res.end();

    }
}).listen(8081, function() {

    // The server object listens on port 3000
    console.log("server start at port 8081");
});

/*
let rawdata = fs.readFileSync('database.json');
let mechanic = JSON.parse(rawdata);
console.log(mechanic); 
*/

{
    "Employee": [
        { "employee_id": 201, "employee_name": "Zara", "employee_phnno": 7980876654, "employee_address": "bangalore", "employee_pincode": 25001 },
        { "employee_id": 202, "employee_name": "Zoya", "employee_phnno": 45678900987, "employee_address": "Kerala", "employee_pincode": 25002 },
        { "employee_id": 203, "employee_name": "Shikha", "employee_phnno": 23456709987, "employee_address": "Lucknow", "employee_pincode": 25034 },
        { "employee_id": 204, "employee_name": "Amyra", "employee_phnno": 9808766540, "employee_address": "bangalore", "employee_pincode": 25001 },
        { "employee_id": 205, "employee_name": "Shourya", "employee_phnno": 9808766540, "employee_address": "bangalore", "employee_pincode": 25001 },
        { "employee_id": 206, "employee_name": "Kabir", "employee_phnno": 9808766540, "employee_address": "Delhi", "employee_pincode": 25003 },
        { "employee_id": 207, "employee_name": "Sheryar", "employee_phnno": 9808766540, "employee_address": "Goa", "employee_pincode": 25001 },
        { "employee_id": 208, "employee_name": "MUstzab", "employee_phnno": 9808766540, "employee_address": "chennai", "employee_pincode": 25005 },
        { "employee_id": 209, "employee_name": "Sunny", "employee_phnno": 9808766540, "employee_address": "Lahore", "employee_pincode": 35008 },
        { "employee_id": 222, "employee_name": "Sandeep", "employee_phnno": 9808766540, "employee_address": "Agara", "employee_pincode": 25007 },
        { "employee_id": 223, "employee_name": "Krishna", "employee_phnno": 9808766540, "employee_address": "bangalore", "employee_pincode": 25001 },
        { "employee_id": 224, "employee_name": "Shipra", "employee_phnno": 9808766540, "employee_address": "bangalore", "employee_pincode": 25001 },
        { "employee_id": 225, "employee_name": "Akarshi", "employee_phnno": 9808766540, "employee_address": "bangalore", "employee_pincode": 25001 },
        { "employee_id": 226, "employee_name": "Priya", "employee_phnno": 9808766540, "employee_address": "bangalore", "employee_pincode": 25001 }
    ]
}
let data = JSON.stringify(employee);

fs.writeFile('./food.json', data, (err) => {
    console.log('WRITTING...');
    if (err) throw err;
    console.log('Data written to file');
});



fs.readFile('./food.json', (err, data) => {
    console.log('READING...');
    if (err) throw err;
    let mechanic = JSON.parse(data);
    console.log(Employee);

});