/*Q1. Write a function filterNumbers(arr) that returns a new array containing only 
numbers greater than 10 

Examples: 
filterNumbers([5,12,8,20,3,15]) ➞ [12,20,15] 
filterNumbers([1,2,3]) ➞ [] */

var Numbers = [5,12,8,20,3,15];
let greater = Numbers.filter(num => num>10);
console.log(greater);


/* Q2 Write a function countVowels(str) that returns the number of vowels in a 
string.(score 2)  
Examples: 
countVowels("JavaScript") ➞ 3 
countVowels("HELLO WORLD") ➞ 3 
countVowels("xyz") ➞ 0  */


//countVowels("JavaScript") 
function vowel (word){
    let arr =[];
    for (let a of word)
        if("aeiouAEIOU".includes(a)){
            arr.push(a)
        }
        return arr.length
}
console.log(vowel("JavaScript"));
console.log(vowel("HELLO WORLD"));
console.log(vowel("xyz"));
  


/* Q3. Write a function uniqueSortedNumbers(arr) that returns a sorted array of unique 
numbers from the given array

Examples: 
uniqueSortedNumbers([4,2,7,2,4,9,1]) ➞ [1,2,4,7,9] 
uniqueSortedNumbers([10,5,10,3,5]) ➞ [3,5,10] */


var Nums = [4,2,7,2,4,9,1];
var oder = Nums.sort((a,b) => a-b);
var run = [...new Set(oder)]
console.log(run);



/* Q4. Write a function that accepts a number and checks whether it is a palindrome or 
not.

Examples :  
isPalindrome(121) ➞ true  
isPalindrome(123) ➞ false  
isPalindrome(1221) ➞ true  */

function palindrome(digit){
    let orig = digit.toString();
    let reves = orig.split("").reverse().join("");
    return orig === reves
}
console.log(palindrome(121));
console.log(palindrome(123));
console.log(palindrome(1221));