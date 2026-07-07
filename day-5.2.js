// Weak Set() & Weak Map()

/* WeakSet
[ A WeakSet is a special type of Set that can store only objects. ]
If the object is no longer used anywhere else, JavaScript automatically removes it from memory.*/

let user = {
    name: "Mansoor"
};

let users = new WeakSet();

users.add(user);

console.log(users.has(user));



/*WeakMap

A WeakMap is a special type of Map where:

(Keys must be objects.
Values can be anything.)

If the key object is no longer used, JavaScript automatically removes that entry from memory.
*/

let users = {
    name: "Mansoor"
};

let wm = new WeakMap();

wm.set(users, "Admin");

console.log(wm.get(users));