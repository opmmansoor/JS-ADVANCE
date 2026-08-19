//Q1  Create a function that takes a string and returns a new string with all vowels removed. 
//removeVowels("I have never seen a thin person drinking Diet Coke.") 

let removeVowels = function(word){
    let vowel = "aeiouAEIOU"
    let arr = ""
    for (let a of word){
        if(!vowel.includes(a)){
            arr +=a
        }

    }
    return arr
}
console.log(removeVowels("I have never seen a thin person drinking Diet Coke."))



//Q 2. Write a function that accepts a string and moves all the uppercase (capital) letters 
//     to the end of the string, while preserving the order of both uppercase and lowercase letters.

//moveCapital("hElloWOrld") ➞ "hrlldoEWO"  

let moveCapital = function(items){
   let a = "";
   let b = "";
 for (let char of items){
    if(char.toUpperCase()== char){
        a += char
    }else{
        b+=char
    }  
   }
   let d = b+a
   return d
}
console.log(moveCapital("hElloWOrld"))




//Q 3.Create a function that accepts a string and replaces every space in the string with a plus(+).

//replaceSpaces(("I love JS") ➞ "I+love+JS"  

let replaceSpaces = function(letters){
    return letters.replaceAll(" ","+")
}
console.log(replaceSpaces("I love JS"))



//Q 4. Write a JavaScript function multiplicationTable(n) that returns an n × n multiplication table as a 2D array. 
//     Each element should contain the product of its row and column numbers.


let multiplicationTable = function(n){
    let table = []

    for (let i=1; i <= n; i++){
        let row = []
        for (let j=1; j<=n; j++){
            row.push(i * j)
        }
        table.push(row)
    }
    return table
}
console.log(multiplicationTable(3))