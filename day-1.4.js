//Temporal Dead Zone [ TDZ]

//Temporal Dead Zone is the time between the start of a scope and the declaration of a let or const variable. 
// During this time the variable exists but cannot be accessed

/*The Temporal Dead Zone (TDZ) is the period between:
the start of a block { }
and the line where a let or const variable is declared.
*/


// Example 1
// console.log(num);
   let num = 20;
// Output :  ReferenceError: Cannot access 'num' before initialization


{
   // TDZ starts here

// console.log(age); // ❌ Not allowed
   let age = 20;     // TDZ ends here
   console.log(age); // ✅ Allowed
}


//Does TDZ apply to var?   ans; No.