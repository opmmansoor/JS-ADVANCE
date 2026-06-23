//Js execution
/*When you run a JavaScript program, JavaScript does not execute all code at once.

It follows a process:
Creates an Execution Context
Puts functions into the Call Stack
Executes code line by line
Uses the Event Loop to handle asynchronous tasks*/


//1. Execution Context

/*Execution Context is the environment where JavaScript executes code.
Whenever JavaScript runs code, it creates an Execution Context.

It contains:
* Variables
* Functions
* Current execution information*/

/*Types of Execution Context
1. Global Execution Context (GEC)
Created when program starts.

[ Only one Global Context exists.]

2. Function Execution Context (FEC)
Created whenever a function is called.*/

function test() {}
test();


//2. Call Stack
/*Call Stack is a stack used by JavaScript to manage function execution.

It follows:
LIFO  ( Last In First Out )    */

function one() {
    two();
    console.log("hai"); 
}

function two() {
    console.log("Hello");
}

one();

/*Stack Flow
one()
two()
console.log()*/


//3. Stack Overflow & Stack Underflow

/*Stack Overflow :
Occurs when too many function calls are added to the stack.

Usually caused by infinite recursion.*/

/*
function test() {
    test();
}
test();

Output:
Maximum call stack size exceeded */

//Stack Underflow :
// [ Occurs when trying to remove an item from an empty stack. ]


//4. Event Loop
/* JavaScript is single-threaded.
   It can do only one thing at a time.
   But it can handle asynchronous tasks using the Event Loop. */

/*  The Event Loop checks:
"Is the Call Stack empty?"
If yes:
Move tasks from Queue to Stack.   */

// Examples :
console.log("Start");

setTimeout(() => {
    console.log("A");
}, 1000);

console.log("End");

/*Flow
Global Execution Context Created
     ↓
Call Stack
     ↓
console.log("Start")
     ↓
Web API
(setTimeout)
     ↓
console.log("End")
     ↓
Callback Queue
     ↓
Event Loop
     ↓
Call Stack
    ↓
console.log("A")


*   Output:

Start
End
A       */ 
