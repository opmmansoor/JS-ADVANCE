// Weak Set() & Weak Map()

/* WeakSet
[ A WeakSet is a special type of Set that can store only objects. ]
If the object is no longer used anywhere else, JavaScript automatically removes it from memory.*/

let user = {
    name: "Mansoor"
};

let userss = new WeakSet();
userss.add(user);
console.log(userss.has(user));

/*users   → WeakSet
  user    → Variable
{ name: "Mansoor" } → Normal object stored in the WeakSet  */



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

/* wm               → WeakMap
   user             → Variable
{ name: "Mansoor" } → Key Object ✅
  "Admin"           → Value   */