// console.log("Loops and Strings");

// // Loops

// // For loop
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// // While loop
// let j = 0;
// while (j < 5) {
//     console.log(j);
//     j++;
// }

// // Do-while loop
// let k = 0;
// do {
//     console.log(k);
//     k++;
// } while (k < 5);

// // Strings

// let str1 = "Hello";
// let str2 = "World";

// console.log(str1 + " " + str2); // Concatenation
// console.log(str1.length); // Length of the string
// console.log(str1.toUpperCase()); // Convert to uppercase
// console.log(str2.toLowerCase()); // Convert to lowercase
// console.log(str1.charAt(0)); // Get character at index 0
// console.log(str1.indexOf("l")); // Get index of first occurrence of 'l'
// console.log(str1.substring(0, 3)); // Get substring from index 0 to 3  

// // For of loop to iterate over characters in a string/array
// let str="hello";
// str= "bal aji"

// for (let char of str) {
//     console.log(char);
// }

// // String 
// let str= "Mahdi"
// console.log(`Here is the string LENGHT: ${str.length}`);

// // String intepolation means embedding expressions inside string literals using backticks and ${} syntax. It allows you to create dynamic strings by including variables or expressions directly within the string.
// let name= "Mahdi"
// let age= 30
// console.log(`My name is ${name} and I am ${age} years old.`);


// String Methods

// let str= "Hello World"
// console.log(str.toUpperCase());
// console.log(str) // Convert to uppercase
// console.log(str.toLowerCase()); // Convert to lowercase
// console.log(str.charAt(0)); // Get character at index 0
// console.log(str.indexOf("o")); // Get index of first occurrence of 'o'
// console.log(str.substring(0, 5)); // Get substring from index 0 to 5
// console.log(str.split(" ")); // Split the string into an array of substrings based on the space character
// console.log(str.replace("World", "JavaScript")); // Replace "World" with "JavaScript"


// String slice method

// let str= "Hello World"
// console.log(str.slice(0, 5)); // Get substring from index 0 to 5
// console.log(str.slice(6)); // Get substring from index 6 to the end of the string
// console.log(str.slice(-5)); // Get the last 5 characters of the string
// console.log(str.slice(-11, -6)); // Get substring from index -11 to -6 (which is "Hello")   

// String concat method

// let str1= "Hello"
// let str2= "World"
// console.log(str1.concat(" ", str2)); // Concatenate str1 and str2 with a space in between       

// // String replace method

// let str3= "Hello World"
// console.log(str3.replace("World", "JavaScript")); // Replace "World" with "JavaScript"  