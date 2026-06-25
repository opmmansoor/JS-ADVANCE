//JSON  [ JavaScript Object Notation ]
//JSON is a format used to store and exchange data.
/*mainly used to send data:

From Server → Browser
From Browser → Server
Between APIs and Applications */

//
let student = {
    name: "Mansoor",
    age: 22,
    city: "Malappuram"
};

console.log(student);

// Output: { name: 'Mansoor', age: 22, city: 'Malappuram' }

//JSON Format
/*{
    "name": "Mansoor",
    "age": 22,
    "city": "Malappuram"
}
  JSON keys and string values use double quotes  */

//Convert Object to JSON
// [ JSON.stringify() ]

let people = {
    name : "sachin",
    age  : 45
}
let Jsondata = JSON.stringify(people);
console.log(Jsondata);

//Output:   {"name":"Mansoor","age":22}



//Convert JSON to Object
// [ JSON.parse() ]

let data = '{"name":"Mansoor","age":22}'
let objectdata = JSON.parse(data);
console.log(objectdata.name);

// OUTPUT : mansoor



//JSON Rules
// ✅ Keys must use double quotes
// ✅ Strings use double quotes
//JSON Supports
// ✅ String     eg : "name": "Mansoor"
// ✅ Number     eg : "age": 22
// ✅ Boolean    eg : "isStudent": true
// ✅ Array      eg : "skills": ["HTML", "CSS", "JavaScript"]
// ✅ Object     eg : "address": {
//                      "city": "Malappuram" }
// ✅ Null       eg : "phone": null
// JSON Does NOT Support : ❌ Functions 
//                         ❌ Undefined 
//                         ❌ comments
