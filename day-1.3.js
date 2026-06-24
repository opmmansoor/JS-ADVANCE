//Hoisting
//Hoisting means JavaScript moves declarations to the top of their scope before executing the code.
//✅ Declarations are hoisted.
//❌ Initializations (values) are not hoisted


//Example 1: var Hoisting
console.log(name);
var name = "Mansoo";

// OUTPUT : undefined ( first code running time )


//Example 2: let & const  Hoisting
/*  console.log(age);
    let age = 20;*/

// OUTPUT : [ ReferenceError ]
//let is hoisted but cannot be used before declaration.


//Example 3: Function Hoisting
greet();

function greet() {
  console.log("Hello");
}

//OUTPUT : Hello
// Function declarations are fully hoisted.

//Example 4: Function Expression
greet();

var greet = function() {
  console.log("Hello");
};
// Output : TypeError
