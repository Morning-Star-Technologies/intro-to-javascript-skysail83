// version 1 - simplistic

let winners = [];

let goodGuyStrength = 14;
let badGuyStrength = 11;

console.log('Prepare for the Tournament of Elements!')

console.log('-----------------------------');
console.log('----Ninjago Battle Begins----');
console.log('');

console.log('Zane -vs- Chen');
console.log('Zane uses shurikens and Chen uses buttons!');

if (goodGuyStrength > badGuyStrength) {
    console.log('Zane defeats Chen!')
    winners.push('Zane');
} else {
    console.log('Chen defeats Zane!')
    winners.push('Chen');
}

console.log('');
console.log('---Ninjago Battle Finishes---');
console.log('-----------------------------');

console.log('Tournament Winners  --> ', winners);

// version 2 - more variables, but still needs repeated

// let winners = [];

// let goodGuy = 'Zane';
// let badGuy = 'Chen';
// let goodGuyStrength = 9;
// let badGuyStrength = 15;
// let goodGuyWeapon = 'Shurikens';
// let badGuyWeapon = 'Buttons';

// console.log('Prepare for the Tournament of Elements!')

// console.log('-----------------------------');
// console.log('----Ninjago Battle Begins----');
// console.log('');

// console.log(goodGuy, '-vs-', badGuy);
// console.log(goodGuy, 'uses', goodGuyWeapon, 'and', badGuy, 'uses', badGuyWeapon, '!');

// if (goodGuyStrength > badGuyStrength) {
//     console.log(goodGuy, 'defeats', badGuy, '!')
//     winners.push(goodGuy);
// } else {
//     console.log(badGuy, 'defeats', goodGuy, '!')
//     winners.push(badGuy);
// }

// console.log('');
// console.log('---Ninjago Battle Finishes---');
// console.log('-----------------------------');

// console.log('Tournament Winners  --> ', winners);

// version 2 continued - another battle

// goodGuy = 'Jay';
// badGuy = 'Cryptor';
// goodGuyStrength = 8;
// badGuyStrength = 3;
// goodGuyWeapon = 'Lightening';
// badGuyWeapon = 'Laser';

// console.log('-----------------------------');
// console.log('----Ninjago Battle Begins----');
// console.log('');

// console.log(goodGuy, '-vs-', badGuy);
// console.log(goodGuy, 'uses', goodGuyWeapon, 'and', badGuy, 'uses', badGuyWeapon, '!');

// if (goodGuyStrength > badGuyStrength) {
//     console.log(goodGuy, 'defeats', badGuy, '!')
//     winners.push(goodGuy);
// } else {
//     console.log(badGuy, 'defeats', goodGuy, '!')
//     winners.push(badGuy);
// }

// console.log('');
// console.log('---Ninjago Battle Finishes---');
// console.log('-----------------------------');

// console.log('Tournament Winners  --> ', winners);