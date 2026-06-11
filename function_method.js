//Function

// function myFunction(){
//     console.log("Hello World");
//     console.log("Welcome to JavaScript");
// }

// myFunction(); //Calling the function

// function myFunction(msg){// paramater-> Input variable
//     console.log(msg);
// }

// myFunction("Hello World"); //Calling the function with argument

// function add(a, b){
//     // return a+b;
//     // console.log(a+b);
// }

// // add(5, 10); //Calling the function with arguments and it will return the sum of a and b
// // console.log(add(5, 10)); //Output: 15
// // add(5, 10); //Output: 15


// note: funtion paramas-> they are  local variables and they are only accessible within the function. They are used to pass values to the function when it is called. They are alive within the block scope of the function.


// // Arrow Function

// function sum(a, b){
//     return a+b;
// }

// const sumArrow = (a, b) => {
//     return a+b;
// }

// sumArrow(5, 10); //Output: 15
// console.log(sumArrow(5, 10)); //Output: 15
// function multiply(a, b){
//     return a*b;
// }



// //Count vowels in a string

// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//         if (char==='a' || 
//             char==='e' || 
//             char==='i' || 
//             char==='o' || 
//             char==='u' || 
//             char==='A' || 
//             char==='E' || 
//             char==='I' || 
//             char==='O' || 
//             char==='U') {
//                 count++;
//     }

//   }
//   console.log(count);
// }

// //Calling the function
// countVowels("aeiou"); 



// forEach method

// const numbers=[12, 15, 20, 25, 30];

// numbers.forEach(function printVal(val){ // callback function=> val is value of each element in the array
//   console.log(val);
// });

// forEach method with arrow function
// numbers.forEach((val, index, array)=>{
//     console.log(val, index, array);
// })

// Note: Higer order function=> A function that takes another function as an argument or returns a function as a result is called a higher-order function. In the above example, forEach is a higher-order function because it takes a callback function as an argument.


// Map

// let numbers=[12, 15, 20, 25, 30];
// const newNumbers = numbers.map((val)=>{
//     return val;
// }); // map method returns a new array with the results of calling a provided function on every element in the calling array.

// console.log(newNumbers); 


// Reduce

// const numbers=[12, 15, 20, 25, 30];

// const sum = numbers.reduce((previous, current)=>{
//     return previous + current;
//          }); // reduce method executes a reducer function on each element of the array, resulting in a single output value. The second argument (0) is the initial value of the accumulator (acc).

// console.log(sum); //Output: 102


// let arr=[1, 2, 3, 4, 5,890];

// let max = arr.reduce((previous, current)=>{
//     return previous>current ? previous : current;
// });

// console.log(max);


