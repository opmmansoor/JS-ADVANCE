//Callback Hell
// [Callback Hell happens when many callback functions are placed inside one another. ]


/*Example:

Function
 └── Callback
      └── Callback
           └── Callback
                └── Callback */



                
//Callback Hell Example
setTimeout(() => {
    console.log("Get User Data");

    setTimeout(() => {
        console.log("Get User Posts");

        setTimeout(() => {
            console.log("Get Comments");

            setTimeout(() => {
                console.log("Display Data");
            }, 1000);

        }, 1000);

    }, 1000);

}, 1000);





//output : 
/*setTimeout(
    setTimeout(
        setTimeout(
            setTimeout()
        )
    )
)

This pyramid shape is called:
Pyramid of Doom */