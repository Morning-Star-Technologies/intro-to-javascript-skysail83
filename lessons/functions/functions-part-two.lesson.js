// simple function with no parameters
function zaneSpeaks() {
    console.log('I was built to protect those who cannot protect themselves.');
}
// calling the function
zaneSpeaks();

// function with one parameter
function greet(name) {
    console.log('Hello ' + name + '!');
}
// calling the function with an argument
greet('Zane');

// function with parameters
function addNumbers(num1, num2) {
    console.log(num1 + num2);
}
// calling the function with arguments
addNumbers(5, 7);

// function with parameters and a return value
function addNumbersWithReturn(num1, num2) {
    return num1 + num2;
}
// calling the function with a return value
let result = addNumbersWithReturn(5, 7);
console.log('Return value from the function: ', result);

// more complex function with multiple parameters and a return value
function fightBattle(goodGuy, badGuy, goodGuyWeapon, badGuyWeapon, goodGuyStrength, badGuyStrength) {
    let winner = undefined;

    console.log('-----------------------------');
    console.log('----Ninjago Battle Begins----');
    console.log('');

    console.log(goodGuy,'-vs-', badGuy);
    console.log(goodGuy,'uses', goodGuyWeapon, 'and', badGuy, 'uses',  badGuyWeapon, '!');

    if (goodGuyStrength > badGuyStrength) {
        console.log(goodGuy, 'defeats', badGuy, '!');
        winner = goodGuy;
    } else {
        console.log(badGuy, 'defeats', goodGuy, '!');
        winner = badGuy;
    }

    console.log('');
    console.log('---Ninjago Battle Finishes---');
    console.log('-----------------------------');

    return winner;
}

// calling the fightBattle function multiple times with different arguments (ignoring return value)

console.log('');
console.log('Prepare for the Tournament of Elements!')

fightBattle('Zane', 'Tox', 'Ice', 'Poison', 14, 11);
fightBattle('Jay', 'Chen', 'Lightening', 'Buttons', 4, 9);
fightBattle('Cole', 'Skull Sorcerer', 'Earth', 'Green Magic', 18, 12);

// calling the fightBattle function multiple times with different arguments with return value

console.log('Prepare for the Tournament of Elements!')

let roundWinner = undefined;
let winners = [];

roundWinner = fightBattle('Zane', 'Tox', 'Ice', 'Poison', 14, 11);
winners.push(roundWinner);
roundWinner = fightBattle('Jay', 'Chen', 'Lightening', 'Buttons', 4, 9);
winners.push(roundWinner);
roundWinner = fightBattle('Cole', 'Skull Sorcerer', 'Earth', 'Green Magic', 18, 12);
winners.push(roundWinner);

console.log('Tournament Winners  --> ', winners);