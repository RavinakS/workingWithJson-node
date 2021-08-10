const fs = require('fs');

// const information = {};
// information["bharti"] = {
//     "name": "bharti",
//     "address": "electronic city, bangalore",
//     "phone": 2345678123
// };

// information["zeba"] = {
//     "name": "zeba",
//     "address": "koramangala, bangalore",
//     "phone": 1234567890
// }



// fs.readFileSync()- takes two parameter 1. path(file path wants to read) 2. option(optional)

const data = fs.readFileSync('data.json');
const objecData = JSON.parse(data);
console.log(objecData);



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