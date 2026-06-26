//Exception Handling  ( handling errors in a program so that the program does not stop suddenly. )
/* JavaScript uses:

try
catch
finally
throw

for exception handling. */

//Example :  Using try and catch
try {
    console.log("Start");
    console.log(user);
    console.log("End");

} catch (error) {
    console.log("Error Found");
}



 //b. 
let age = 15;
try {
    if (age < 18) {
        throw "Not Eligible";
    }
} catch(error) {
    console.log(error);
}


/* All Key Points
 1. try ( Code that may cause an error goes here.) 

try {
}


 2. catch  (Runs if an error occurs. )

catch(error) {
}


 3. finally   ( Runs always.)

finally {
}


 4. throw  ( Used to create custom errors. )

throw "Invalid Age"; */