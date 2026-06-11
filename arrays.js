// Array 
let arr = [1, 2, 3, 4, 5];
// console.log(arr);
// console.log(arr.length)
// arr[0]=10
// console.log(arr)
// arr.push(6) // add element to the end of the array
// console.log(arr)
// arr.pop() // remove the last element of the array
// console.log(arr)
// console.log(typeof arr) // returns "object" because arrays are objects in JavaScript

//for of loop to iterate over the array
// for (let element  of arr){
//     console.log(element)
// }

// arr.toString() // converts the array to a string
// console.log(arr.toString())

// arr.concat([6, 7, 8]) // concatenates two arrays and returns a new array
// console.log(arr.concat([6, 7, 8]))

// arr.join('*') // joins the elements of the array into a string with a specified separator
// console.log(arr.join('*'))

// arr.slice(1, 4) // returns a new array containing a portion of the original array
// console.log(arr.slice(1, 4))

arr.splice(2, 1) // removes elements from an array and returns the removed elements
console.log(arr.splice(2, 1))
console.log(arr) // the original array is modified after splice

// arr.indexOf(3) // returns the first index at which a given element can be found in the array
// console.log(arr.indexOf(3))

// arr.includes(4) // determines whether an array includes a certain value among its entries
// console.log(arr.includes(4))

// arr.reverse() // reverses the order of the elements in the array
// console.log(arr.reverse())

// arr.sort() // sorts the elements of the array in place and returns the sorted array
// console.log(arr.sort()) 
