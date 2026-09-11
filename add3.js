//Factory Function

// A Factory Function is a normal function that creates and returns objects.
// Unlike constructor functions, it does not use new.

/*Syntax
function createObject() {
    return {
        // properties
    };
} */

function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet() {
            console.log("Hello " + this.name);
        }
    };
}

const p1 = createPerson("Marsual", 22);
const p2 = createPerson("Alias", 20);

p1.greet();
p2.greet();

//Output 

//Hello Marsual
//Hello Alias