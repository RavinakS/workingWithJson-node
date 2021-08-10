const fs = require('fs');
fs.readFile('data.json', 'utf-8', (err, jsonData)=>{
    if(err){
        console.log(err);
    }else{
        // console.log(typeof jsonData); // string
        const objectData = JSON.parse(jsonData); // JSON.parse converts the json string into object
        // console.log(typeof objectData); // object
        // console.log(jsonData.bharti.address); // undefined error because a string doesn't have (property)key:value
        console.log(objectData.bharti.address);
    }
})



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

// const data = require('./data.json'); // quick access
// console.log(typeof data);