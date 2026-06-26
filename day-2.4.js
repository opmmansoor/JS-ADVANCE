//Fetch API  [ The Fetch API is used to get data from a server or send data to a server. ]

/*Most commonly, it is used to:
  Get data from APIs
  Send data to servers
  Work with JSON data */

// Send request to server
fetch("https://jsonplaceholder.typicode.com/users")

    // Convert response into JSON
    .then(function(response) {
        return response.json();
    })

    // Get actual data
    .then(function(data) {
        console.log(data);
    })

    // Handle errors
    .catch(function(error) {
        console.log(error);
    });  

    


//Common HTTP Methods
//1. GET → Get Data
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => console.log(data));

// Meaning: Get users from the server.


//2. POST → Send Data
fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify({
        name: "Mansoor"
    })
});

// Meaning: Send new user data to the server.


//3.PUT → Update Entire Data
fetch("https://jsonplaceholder.typicode.com/users", {
    method: "PUT",
    body: JSON.stringify({
        name: "Mansoor",
        age: 22
    })
});

// Meaning: Replace all data of user 1


//4. PATCH → Update Some Data
fetch("https://jsonplaceholder.typicode.com/users", {
    method: "PATCH",
    body: JSON.stringify({
        age: 23
    })
});

// Meaning: Update only the age field.


//5. DELETE → Delete Data
fetch("https://jsonplaceholder.typicode.com/users", {
    method: "DELETE"
});

// Meaning: Delete user 1.