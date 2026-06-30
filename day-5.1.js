//Deep Copy & Shallow Copy
// When we copy an object or array in JavaScript, there are two types of copying:
//1.Shallow Copy
//2.Deep Copy


//Shallow Copy copies only the first level.
//Deep Copy copies everything, including nested objects and arrays.

//EG: Shallow Copy
let user1 = {
    name: "Mansoor",
    address: {
        city: "Malappuram"
    }
};

// Shallow copy
let user2 = { ...user1 };

// Change nested object
user2.address.city = "Kozhikode";

console.log(user1.address.city);
console.log(user2.address.city);



//EG: DEEP COPY
let users1 = {
    name: "Mansoor",
    address: {
        city: "Malappuram"
    }
};

// Deep copy
let users2 = structuredClone(users1);

users2.address.city = "Kozhikode";

console.log(users1.address.city);
console.log(users2.address.city);


/*Key Points

  Shallow Copy	               Deep Copy
Copies first level          only	Copies everything
Nested objects are shared	Nested objects are separate
Faster	                    Slightly slower
Uses less memory	        Uses more memory*/