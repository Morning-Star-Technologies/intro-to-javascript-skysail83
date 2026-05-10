/**
* Use a for loop to determine the number of true values in the binaryValues array.
*/

const binaryValues = [true, false, true, true, false, false, true, false, false, true, false, true, true];

let trueCount = 0;

// Count the true values
for (let i = 0; i < binaryValues.length; i++) {
    if (binaryValues[i] === true) {
        trueCount++;
    }
}

console.log('The number of true values is', trueCount);