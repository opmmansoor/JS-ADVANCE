//Prototype
/*A prototype is an object that JavaScript uses to share properties and methods between objects.
Instead of storing the same method in every object, JavaScript stores it once in the prototype.*/


function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log("Hello " + this.name);
};

let p1 = new Person("Masive");
let p2 = new Person("Alin");

p1.greet();
p2.greet();

//Output

//Hello Masive
//Hello Alin

//[ The greet() method is stored once on the prototype.
//Both p1 and p2 use the same method instead of creating separate copies.]

//Prototype Inheritance

// Prototype inheritance means one object can access the properties and methods of another object through the prototype chain.

function Animal(name) {
    this.name = name;
}

Animal.prototype.sound = function() {
    console.log("Animal makes a sound");
};

function Dog(name) {
    this.name = name;
}

Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function() {
    console.log("Woof!");
};

let dog = new Dog("Tommy");

dog.sound();
dog.bark();

//Output

//Animal makes a sound
//Woof!

/*Works
dog
 │
 ▼
Dog.prototype
 │
 ▼
Animal.prototype
 │
 ▼
Object.prototype
 │
 ▼
null */

/*Prototype?
A prototype is an object that allows multiple objects to share properties and methods. It helps save memory 
because methods are stored once and shared.

Prototype Inheritance?
Prototype inheritance is the mechanism by which one object inherits properties and methods from another object 
through the prototype chain. 
*/