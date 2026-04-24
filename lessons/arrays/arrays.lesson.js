/* creating arrays */

// using the "new" and "Array" keywords
let minifigureName = new Array('L', 'l', 'o', 'y', 'd', ' ', 'G', 'a', 'r', 'm', 'a', 'd', 'o', 'n');

// using bracket syntax, also called an "array initializer" (more common)
let minifigureNameTwo = ['Z', 'a', 'n', 'e', ' ', 'J', 'u', 'l', 'i', 'e', 'n'];

let minifigureNameThree = []; // initializing an empty array

console.log(minifigureName);

/* accessing arrays */
let ninjas = ['Lloyd', 'Nya', 'Zane', 'Kai'];

console.log(ninjas[1]); // accessing the second element of the array (index 1)
console.log(ninjas[0]); // accessing the first element of the array (index 0)
console.log(ninjas[5]); // accessing an index that does not exist (index 5), will return undefined

/* accessing the length of an array */
console.log('There are ' + ninjas.length + ' ninjas.'); // returns the number of elements in the array (4 in this case)

/* populating an array */
ninjas[4] = 'Jay'; // adding a new element to the end of the array (index 4)
console.log(ninjas);

ninjas[3] = 'Cole'; // changing the value of an existing element in the array (index 3)
console.log(ninjas);

/* emptying/clearing an array */
ninjas = []; // reassigning the variable to a new empty array
ninjas.length = 0; // setting the length property of the array to 0, which effectively empties the array
console.log(ninjas);

/* arrays can hold any type of data */
let randomNumbers = [3, 88, 34, -9, 0, 154];
console.log(randomNumbers);
let randomBooleans = [true, false, true, true];
console.log(randomBooleans);
let mixedArray = ['Lloyd', 3, true, null, undefined];
console.log(mixedArray);