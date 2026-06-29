//Memory Leak 
// ( A Memory Leak happens when memory is used by a program but is never released, even though it is no longer needed. )
// [ Using memory and forgetting to free it is called a Memory Leak. ]

let users = [];

function addUser() {
    users.push({
        name: "Mansoor"
    });
}

addUser();
addUser();
addUser();

/* memory 
users
 ├── { name: "Mansoor" }
 ├── { name: "Mansoor" }
 └── { name: "Mansoor" }

 If this continues forever:
setInterval(addUser, 1000);

Every second a new object is added.
Old objects are never removed.
Memory keeps growing.
This is a Memory Leak.
 */



/* Garbage Collection vs Memory Leak

Garbage Collection	        Memory Leak
------------------        ---------------------
Removes unused memory   	Keeps unused memory
Improves performance	    Reduces performance   */





//Allocation and Deallocation

//1. Allocation :
// [ Allocation means giving memory to a variable, object, or array. When you create something in JavaScript, ]

//Allocation for Object
let user = {
    name: "Mahesh"
};

/*JavaScript allocates memory for:
  Variable : "user"
  Object   : { name: "Mahesh" } */



// 2.Deallocation
// Deallocation means freeing or removing memory when it is no longer needed.
// In JavaScript, this is done automatically by the Garbage Collector


//Deallocation
let person = {
    name: "Manush"
};
person = null;

/* Now:

user → null
The old object has no reference.
Later, Garbage Collector removes it from memory.  */