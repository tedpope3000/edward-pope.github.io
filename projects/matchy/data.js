/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};
animal.species = 'coyote';
animal['name'] = 'Leo';
animal.noises = ['pant, pant, pant'];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];
noises[0] = 'owwwwooooooo';
noises.unshift('arf-arf');
noises.unshift('pant, pant, pant');
noises[noises.length -1] = 'sniff, sniff, sniff';
noises.push('whining');
noises.push('grrr!');
console.log(noises.length);
console.log(noises.length -1);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

Object.assign(animal.noises, noises);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * dot notation and bracket notation
 * 2. What are the different ways of accessing elements on arrays?
 * bracket
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
var duck = { 
  species: 'duck', 
  name: 'Jerome', 
  noises: ['quack', 'honk', 'sneeze', 'woosh'] 
};
animals.push(duck);
var horse = { 
  species: 'thoroughbred', 
  name: 'Dark Star', 
  noises: ['neigh', 'nicker', 'snort'] 
};
animals.push(horse);
var dog = { 
  species: 'Dalmation', 
  name: 'Sparky', 
  noises: ['WOOF', 'GRRR', 'OOOOOOoooo', 'chomp-chomp-chomp'] 
};
animals.unshift(dog);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var friends = [];
// this will be an array of objects because then I can add those objects I
// already made if I need to

function getRandom(animals) {
  return Math.floor(Math.random() * animals.length);
};
friends.push((animals[getRandom(animals)].name));

animals[1]['friends'] = friends;
console.log(animals[1]);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}