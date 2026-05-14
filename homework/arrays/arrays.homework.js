/*
* Using a common theme (pick whatever you like) complete the following:
* 
* 1. Create an array that holds five strings
* 2. Log two of the elements in the array to the console
* 3. Replace the third element in the array with a number
* 4. Add two more elements to the end of the array, but make the new elements booleans
* 5. Log all the elements and the length of the array to the console
*/
// Begin writing your code below
// 1. Create an array that holds five strings (hockey players)
let myArray = ["Sidney Crosby", "Connor McDavid", "Auston Matthews", "Nathan MacKinnon", "Cale Makar"];

// 2. Log two of the elements in the array
console.log(myArray[0]); // Sidney Crosby
console.log(myArray[3]); // Nathan MacKinnon

// 3. Replace the third element in the array with a number
myArray[2] = 97;

// 4. Add two more elements to the end of the array (booleans)
myArray.push(true);
myArray.push(false);

// 5. Log all elements and the length of the array
console.log(myArray);
console.log("Length:", myArray.length);  