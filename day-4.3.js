//Garbage collection
//Garbage Collection is the process of automatically removing unused memory from a program.

//JavaScript automatically cleans unused memory.

let user = {
    name: "Amal"
};

console.log(user.name);

user = null;
//After user = null, the object becomes unreachable.

/*Garbage Collection is the automatic process used by JavaScript to remove unused and unreachable objects from memory. 
This helps improve performance and prevents memory from being wasted.
 
 JavaScript has automatic memory management.
 Developers do not manually free memory.
 Unused objects are removed automatically.
 Garbage Collection improves memory usage.
 Garbage Collection runs in the background.    */




//Shadowing & Illegal Shadowing

/*Shadowing
Shadowing happens when a variable inside a block or function has the same name as a variable outside it.
The inner variable hides the outer variable inside that block.  */

let name = "Mansoor";

function show() {
    let name = "Ali";
    console.log(name);
}

show();
console.log(name);

//output : Ali
//       : Mansoor 

/*Inner variable hides outer variable.

  keys : 
 Shadowing works because of scope.
 Function scope and block scope allow shadowing.
 let and const commonly create shadowing.
 Shadowing itself is not an error. */


// Illegal Shadowing
//Illegal Shadowing happens when JavaScript does not allow a variable declaration 
// because it causes a conflict between scopes.


/*
let name = "Mansoor";
{
    var name = "Ali";
}

out put :
SyntaxError: Identifier 'name' has already been declared  */

/*Trick

Allowed ✅
var  → let
var  → const
let  → let
const → const

Not Allowed ❌

let   → var
const → var
*/