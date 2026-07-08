//Optional Chaining (?.) vs Nullish Coalescing (??)

/*Optional Chaining (?.)

Used to safely access a property or method of an object properties without throwing an error 
if the object is null or undefined
If the value before ?. is null or undefined, JavaScript stops and returns undefined instead of giving an error.*/

let user = null;

// Check safely
console.log(user?.address?.city);

// output
// undefined


//Nullish Coalescing

//Nullish coalescing provides a default value when the left side is null or undefined.
/* Used to provide a default value when the left side is:
      null
      undefined     */

let name = null;

// If name is null use Guest
console.log(name ?? "Guest");

// Output:
// Guest      