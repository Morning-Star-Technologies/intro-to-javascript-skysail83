/*
 * Objects contain properties and methods.
 * You can think of properties as variables that belong to an object.
 * You can think of methods as functions that belong to an object.
 * 
 * A class is a way to define a reusable object; you then must instantiate (create an instance of)
 *   the class to actually create an object.  This is done with the 'new' keyword and a constructor.
 * An object literal is a way to define a single object without using a class.
 * 
 * The 'this' keyword refers to the object it is being used in.
 */

// class declaration of an object
class Character {
    // a constructor is a special method that runs when you create an instance of a class
    constructor(name, health, specialPower, weapon, mask) {
        this.name = name;
        this.health = health;
        this.specialPower = specialPower;
        this.weapon = weapon;
        this.mask = mask;
    }

    // note: no keyword 'function' when defining a method in a class
    run() {
        console.log(this.name + ' ran away!');
    }

    attack(badGuy, damage) {
        badGuy.health = badGuy.health - damage;
    }
}

// creating an instance of the Character class with its constructor and assigning it to a variable
const zane = new Character('Zane', 80, 'Ice', 'Shuriken', true);

// dot notation to access properties of an object
console.log(zane.name + ' has ' + zane.health + ' health and his special power is ' + zane.specialPower);

/*******************************************************************************************************/

// object literal (object initializer)
const chen = {
    name: 'Chen',
    health: 70,
    specialPower: 'Buttons',
    weapon: 'Short Sword',
    mask: false,
    run: function() {
        console.log(this.name + ' ran away!');
    },
    attack: function(badGuy, damage) {
        badGuy.health = badGuy.health - damage;
    },
};

console.log(chen.name + ' has ' + chen.health + ' health and his special power is ' + chen.specialPower);
console.log('');

console.log(chen.name + ' attacks ' + zane.name + ' with a ' + chen.weapon);
// calling the attack method of the chen object using dot notation and passing in the zane object and damage amount as parameters
chen.attack(zane, 15);
console.log(zane.name + ' has ' + zane.health + ' health left');

console.log(zane.name + ' attacks ' + chen.name + ' with ' + zane.specialPower);
zane.attack(chen, 50);

console.log(chen.name + ' has ' + chen.health + ' health left');
chen.run();