//async & await
//async and await are used to make asynchronous code look like normal synchronous code.

//They are mainly used with:

//Promises
//Fetch API 


// example : Promises
async function getData() {
    let result = await Promise.resolve("Data Received");
    console.log(result);
}

getData();


//example :  Fetch API
async function getUsers() {
    let response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );
    let data = await response.json();
    console.log(data);

}

getUsers();

/* async
Makes a function asynchronous.
An async function always returns a Promise.

   await
Waits for a Promise to finish.
*/
