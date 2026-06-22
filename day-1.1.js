//Synchronous & Asynchronous

//SYNCHRONOUS [ Synchronous means tasks happen one after another.]
/*JavaScript waits for the current task to finish before moving to the next task
 eg : "Finish this work first, then start the next work."
The Program wait for each operation to complete before moving on to the next one 
This is the Default behaviour of JavaScript*/

console.log("first ");
console.log("sum is " + (5*5));
console.log("Last");



//Asynchronous
//Asynchronous means JavaScript can start a task and continue doing other work without waiting for that task to finish.
// eg : "Start this work, don't wait, continue other work, and come back later when it is finished."
// In Asynchronous code, operations don't necessarily exicute in sequential order.
//Use case : Reading Files, API call,etc...

console.log("a log");
setTimeout(() => {
   console.log("Hello");
}, 0);
setTimeout(function()  {
    console.log("B log");
    
},2000);
console.log("C log");


//b.
console.log("page loaded");
document.getElementById("btn"),addEventListener("click", () => {
    console.log("button clicked");
})
console.log("waiting for click");
