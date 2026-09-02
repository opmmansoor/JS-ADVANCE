//Q.1 Remove Consonants 

/* Create a function that takes a string and returns a new string with all consonants removed.

Examples
removeConsonants("Hello World")
removeConsonants("JavaScript")  */

let removeConsonants = function(word){
   let unConsonants = "aeouiAEUOI";
   let removed = ""
   for (let n of word){
    if(unConsonants.includes(n)){
        removed += n
    }
   }
   return removed
}
console.log(removeConsonants("Hello World"))
console.log(removeConsonants("JavaScript"))

// Q 2. Remove Spaces
/*Create a function that removes all spaces from a given string.

Examples :
removeSpaces("Hello World")
removeSpaces("Java Script")
removeSpaces(" I love coding ")  */

let removeSpaces = function(letter){
  let a =  letter.replaceAll(" ","")
  return a
}
console.log(removeSpaces("Hello World"));
console.log(removeSpaces(" I love coding "));



//Q. 3. Count Vowels
/* Create a function that returns the total number of vowels in a string.

Examples :
countVowels("Programming")
countVowels("Education")
countVowels("ChatGPT")  */

let countVowels = function(wor){
    let vowels = "aeiouAEIOU"
    let ab = ""
    for(let ch of wor){
        if(vowels.includes(ch)){
            ab +=ch
        }
    }
    return ab.length
}
console.log(countVowels("Programming"));


//Q 4.Create a function that returns the number of consonants in a string.

/*Examples :
countConsonants("Hello World")
countConsonants("JavaScript")
countConsonants("OpenAI") */

let countConsonants = function(hai){
    let vowel = "aeiouAEIOU";
    let cd = ""
    for (let c of hai){
        if(!vowel.includes(c)){
            cd += c

        }
    }
    let consonantslen = cd.replace(" ","")
    return consonantslen.length
}
console.log(countConsonants("Hello World"));



//Q 5. Reverse a String
/* Create a function that returns the reverse of a given string.

Examples :
reverseString("hello")
reverseString("JavaScript")
reverseString("OpenAI")   */ 

let reverseString = function(str){
    return str.split("").reverse().join("")

}
console.log(reverseString("hello"))


// Q 6. Remove Digits
/* Create a function that removes all numeric digits from a string.

Examples :
removeDigits("abc123")
removeDigits("JS2026")
removeDigits("room42") */
 
let removeDigits = function(char){
    let digi = "0123456789"
    let undigits = ""
    for (let dg of char){
        if(!digi.includes(dg)){
            undigits += dg
    }
   
}
 return undigits
}
console.log(removeDigits("abc123"))


//Q. 7. Capitalize Every Word
/* Create a function that capitalizes the first letter of every word in a string.

Examples :
capitalizeWords("hello world")
capitalizeWords("java script is fun")
capitalizeWords("good morning")*/

let capitalizeWords = function(cap){
    let firstletter = cap.charAt(0)
    let first = firstletter.toUpperCase()
    // console.log(first);
     let eh =cap.slice(1)
     return first+eh
    
    
}
console.log(capitalizeWords("hello world"))
console.log(capitalizeWords("java script is fun"))



class person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    show(){
        console.log(this.name + this.age + " is Studying")
    }
}
let p1 = new person("ali ", 25)
p1.show()