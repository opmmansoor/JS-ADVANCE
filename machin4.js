// 1. Write a JavaScript function that takes an object as input and returns an array containing all the 
// values of that object.

// Examples :
// ● objectValuesToArray({ a: 1, b: 2, c: 3 }) ➞ [1, 2, 3] 
// ● objectValuesToArray({ name: "Alice", age: 25, city: "London" }) ➞  ["Alice", 25, "London"] 
// ● objectValuesToArray({ x: true, y: false }) ➞ [true, false] 

let objectValuesToArray = function(obj){
    for (let y in obj)
console.log(obj[y])
}
objectValuesToArray({ a: 1, b: 2, c: 3 })



// 2. Create a function that squares every digit of a number.

// Examples: 
// ● squareDigits(9119) ➞ 811181 
// ● squareDigits(3212) ➞ 9414 

let squareDigits = function(number){

    let arr = number.toString().split("") 
    let nums = arr.map(num => num*num)
    return nums.toString().replaceAll(",","")
}
console.log(squareDigits(9119))


// Q 3. A function takes an array of strings (as sentences) and returns the maximum number of words that 
// appear in a single sentence. 

// Examples :  ● maxWords(["Welcome To Bridgeon", "Hello World", "Code Your Future With Bridgeon"]) ➞ 5  
// ● maxWords(["please wait", "continue to fight", "continue to win"]) ➞ 3  
// ● maxWords(["hello world"]) ➞ 2 

 
var maxWords = function(arr) {
    let max = 0;

    for (let sentence of arr) {
        let count = sentence.split(" ").length;

        if (count > max) {
            max = count;
        }
    }

    return max;
};
console.log(maxWords(["hello world"]))



// Q 4. Write a function that accepts a string and moves all the uppercase (capital) letters to 
// the end of the string, while preserving the order of both uppercase and lowercase letters.

// Examples :  
// ● moveCapital("hElloWOrld") ➞ "hrlldoEWO"
// ● moveCapital("JavaScript") ➞ "avaJScript" 
// ● moveCapital("PboyTHon") ➞ "yonPTH" 

let moveCapital = function(letter){
    let small = ""
    let capital = ""
    for(let ch of letter){
        if(ch >= "a" && ch <="z"){
           small += ch
        }else{
            capital += ch
        }
        
    }
    return small+capital
}
console.log(moveCapital("hElloWOrld"))