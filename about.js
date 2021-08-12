const fs = require('fs');
//This module('fs' - file system) provides methods to read, write, and 
//watch files along with many other functions to interact with the filesystem.
// Since it is a native module, I don't need to install anything. just require.

const information = {};
information["bharti"] = {
    "name": "bharti",
    "address": "electronic city, bangalore",
    "phone": 2345678123
};

information["zeba"] = {
    "name": "zeba",
    "address": "koramangala, bangalore",
    "phone": 1234567890
}

const jsonString = JSON.stringify(information, null, 2);
// to write data to a JSON file, we must create a JSON string of the data with JSON.stringify()

fs.writeFileSync("data.json", jsonString);
console.log("file is written successfully!");


// As the names suggest, the fs.writeFileSync() method writes data to a file synchronously 
// while fs.writeFile() writes data to a file in an asynchronous manner.

// fs.writeFile("data.json", jsonString, "utf-8", (err, data)=>{
//     if(err){
//         console.log("Couldn't write", err);
//     }else{
//         console.log("Successfully wrote file.");
//     }
// })
// console.log(jsonString);



// fs.readFileSync()- takes two parameter 1. path(file path wants to read) 2. option(optional)
// The fs.readFileSync() method reads data from a file in a synchronous manner. Unlike fs.readFile()
// Instead of passing the callback method, we only pass the name of the file.


// const data = fs.readFileSync('data.json');
// const objecData = JSON.parse(data);
// console.log(objecData);



// fs.readFile() - readFile() takes three arguments fileName, encoder, and a callback function which takes two parameters err and data
// (err, data)={} 

// fs.readFile('data.json', 'utf-8', (err, jsonData)=>{
//     if(err){
//         console.log(err);
//     }else{
//         // console.log(typeof jsonData); // string
//         const objectData = JSON.parse(jsonData); // JSON.parse converts the json string into object
//         // console.log(typeof objectData); // object
//         // console.log(jsonData.bharti.address); // undefined error because a string doesn't have (property)key:value
//         console.log(objectData.bharti.address);
//     }
// });


// quick access
// const data = require('./data.json'); 
// console.log(typeof data);