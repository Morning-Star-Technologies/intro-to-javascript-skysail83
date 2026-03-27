/* logical Operators */

let isKnightFullyArmed;

let swordInKnightsLeftHand = true;
let axeInKnightsRightHand = false;

isKnightFullyArmed = swordInKnightsLeftHand && axeInKnightsRightHand; // logical "and" (&&)

console.log('Is the knight fully armed?', isKnightFullyArmed);

let doesKnightHaveAWeapon = swordInKnightsLeftHand || axeInKnightsRightHand; // logical "or" (||)

console.log('Does the knight have a weapon?', doesKnightHaveAWeapon);

let isKnightUnarmed = !doesKnightHaveAWeapon; // logical "not" (!) "Does the knight NOT have a weapon?"

console.log('Is the knight unarmed?', isKnightUnarmed);