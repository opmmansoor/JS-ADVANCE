// Instance
//An Instance is an actual object created from a Class.

/*Class    = Blueprint
  Instance = Real object created using that blueprint*/

class Student {

    constructor(name) {
        this.name = name;
    }

}

let student1 = new Student("Mansoor");
let student2 = new Student("Ali");

/* Here:
Student      → Class
student1     → Instance
student2     → Instance   */


/*Class vs Object vs Instance

Term	    Meaning

Class	    Blueprint
Object	    Actual created item
Instance	Object created from a class*/


//CONSTRUCTOR
//A Constructor is a special method inside a class that runs automatically when an object is created.

/*main job is :

Initialize object properties.
Give initial values to the object.*/

class person {

    // Constructor runs automatically
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let person1 = new person("Mansoor", 22);

console.log(person1.name);
console.log(person1.age);


//A Constructor is a special method inside a JavaScript class that runs automatically when an object is created. 
// It is used to initialize object properties and assign initial values using the new keyword.