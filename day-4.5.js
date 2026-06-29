// Memoization
// ( Memoization is a technique where we store the result of a function so that if the same input comes again, 
// we can return the stored result instead of calculating it again. )

//Simply:
//Calculate once → Store result → Reuse later 

//Without Memoization
function square(num) {
    console.log("Calculating...");
    return num * num;
}

console.log(square(5));
console.log(square(5));

/*Output
Calculating...  25
Calculating...  25
( Calculation happens twice ) */




//With Memoization
let cache = {};

function square(num) {

    // Check if result already exists
    if (cache[num]) {
        console.log("From Cache");
        return cache[num];
    }

    console.log("Calculating...");

    let result = num * num;

    // Store result
    cache[num] = result;

    return result;
}

console.log(square(5));
console.log(square(5));

/*
Output

Calculating... 25
From Cache     25

Now calculation happens only once. */
