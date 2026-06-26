//Promise
//A Promise is an object that represents the result of an asynchronous operation that will complete in the future.

// Creating a Promise
let orderFood = new Promise(function(resolve, reject) {

    let foodDelivered = true;

    if (foodDelivered) {
        resolve("Food Delivered");
    } else {
        reject("Order Cancelled");
    }

});

orderFood
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });

/*Promise has 3 States
1. Pending  ( The task is still running.)
     Order Preparing

2. Fulfilled (Resolved)
( The task completed successfully. )
   Food Delivered

3. Rejected
[ The task failed. ]  
 Order Cancelled    */


/*  Promise Flow : 

      Pending
         ↓
Resolved OR Rejected */



//Promise Methods  [ These are the methods mentors ask most often. ]

// 1- .then()  [Used when Promise succeeds. ]
let promise = Promise.resolve("Success");

promise.then(function(result) {
    console.log(result);
});

//2. .catch() [ Used when Promise fails. ]
let promis = Promise.reject("Failed");

promis.catch(function(error) {
    console.log(error);
});

//3. .finally()  [ Runs whether Promise succeeds or fails.]

let promi = Promise.resolve("Done");

promi
    .then(function(data) {
        console.log(data);
    })
    .finally(function() {
        console.log("Always Runs");
    });


//4. Promise.resolve() [ Creates a resolved Promise. ]

Promise.resolve("Hello")
    .then(function(data) {
        console.log(data);
    });    


    
//5. Promise.reject() [Creates a rejected Promise. ]

Promise.reject("Error")
    .catch(function(error) {
        console.log(error);
    });    


//6. Promise.all()  [ Waits for all Promises to finish.]

let p1 = Promise.resolve("HTML");
let p2 = Promise.resolve("CSS");
let p3 = Promise.resolve("JS");

Promise.all([p1, p2, p3])
    .then(function(result) {
        console.log(result);
    });    

    

//7. Promise.race()   [ Returns the first completed Promise. ]

let p11 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("First");
    }, 1000);
});

let p12 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve("Second");
    }, 2000);
});

Promise.race([p11, p12])
    .then(function(result) {
        console.log(result);
    });    


//8. Promise.allSettled()  [ Waits for all Promises. ]
//                         Returns success and failure results.

let p4 = Promise.resolve("Success");
let p5 = Promise.reject("Failed");

Promise.allSettled([p4, p5])
    .then(function(result) {
        console.log(result);
    });    



//9. Promise.any()  [ Returns the first successful Promise. ]

let p7 = Promise.reject("Error");
let p8 = Promise.resolve("Success");

Promise.any([p7, p8])
    .then(function(result) {
        console.log(result);
    });    