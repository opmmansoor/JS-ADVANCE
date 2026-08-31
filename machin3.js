// Q.1. Write a function that accepts an array of integers and returns a new array where every even number is 
// replaced with the string "even" while all odd numbers remain unchanged.

//  Examples :  
// ●  [1, 2, 3, 4, 5]  ➞ [1, "even", 3, "even", 5] 
// ● [10, 15, 20, 25] ➞ ["even", 15, "even", 25] 
// ● [1, 3, 5, 7] ➞ [1, 3, 5, 7] 


let evenNumberReplaced = function(nums){
    // let Even = nums.map(num =>{
    //   return num %2 === 0 ? "even" : num })

    // return Even
let result = nums.map(num=> {
    if(num %2 === 0){
        return"even"
    }else{
        return num
    }
})
return result
}
console.log(evenNumberReplaced([1, 2, 3, 4, 5]));


// Q. 2. Write a function that accepts an array of strings and a  number , returning only strings with a length 
// greater than number. 
// 
// Examples: 
// ● filterByLength(["hi", "hello", "world"], 3)); ➞ ["hello", "world"] 
// ● filterByLength(["cat", "dog", "elephant"], 4)); ➞ ["elephant"] 

let filterByLength = function(letter, length){
    let result = letter.filter(letters => letters.length > length)
    return result 
}
console.log(filterByLength(["hi", "hello", "world"], 3));





//Q. 3. Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u)
// 
// Examples :  ● dashed("Edabit") ➞ "-E-d-a-b-i-t" 
// ● dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m" 
// ● dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!" 



let dashed = function (word){
    let vowel = "aeiou"
    let b = ""
    for (let a of word){
        if(vowel.includes(a)){
            b += "-"+a+"-"
        }else{
           b += a
        }
    }
    return b
}
console.log(dashed("Carpe Diem"));



//Q. 4. Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of 
// num until the array length reaches length.

// 
// Examples :  
// ● arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35] 
// ● arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120] 
// ● arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102] 


let arrayOfMultiples = function(numbers, length){
    let arr = []
      for ( let i=1; i<=length; i++){
            arr.push(numbers*i);
      }  
      return arr
}
console.log(arrayOfMultiples(7,5))