// Object & Class

//Part 1: Object
//An Object is a collection of related data and functions stored together.

let car = {
    brand: "Toyota",
    color: "Red",
    speed: 120,

    start: function() {
        console.log("Car Started");
    }
};

console.log(car.brand);

car.start();


// part 2 : Class
// A Class is a blueprint for creating objects.
//It is like a template.   You create many objects from one class.

class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    study() {
        console.log(this.name + " is studying");
    }
}
let student1 = new Student("Mansoor", 22);

student1.study();