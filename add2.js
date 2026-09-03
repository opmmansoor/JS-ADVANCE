//Generator Function

/*A Generator Function is a special function that can pause and resume its execution using the yield keyword.
It is declared using  ( function )

Syntax
function* functionName() {
    yield value;
} */

    function* numbers() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numbers();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


//Output
/*
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: undefined, done: true } */



/*Real-world Example

Imagine a TV series.

yield → Pause at the end of an episode.
next() → Play the next episode.
*/