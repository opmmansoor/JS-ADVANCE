//Debouncing and Throttling 
//Both are performance optimization techniques used when events happen many times very quickly.

/*Debouncing

Debouncing delays the execution of a function until the user stops doing the action for a certain time.
Wait until the user stops.*/
function debounce(fn, delay) {
    let timer;
    return function() {

        // Cancel previous timer
        clearTimeout(timer);

        // Start new timer
        timer = setTimeout(function() {

            // Run function after delay
            fn();
        }, delay);
    };
}
function search() {
    console.log("Searching...");
}
let debouncedSearch = debounce(search, 1000);
// Call function
debouncedSearch();

/* Throttling

Throttling allows a function to run only once during a specific time interval.
"Run every few seconds, no matter how many times the event happens." */

function throttle(fn, delay) {
    let allowCall = true;

    return function() {

        if (!allowCall) {
            return;
        }

        fn();

        allowCall = false;

        setTimeout(function() {
            allowCall = true;
        }, delay);
    };
}

function scrollHandler() {
    console.log("Scroll Event");
}

let throttledScroll = throttle(
    scrollHandler,
    1000
);