// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  let i = 0;
  while (i < array.length) {
    console.log(array[i]);
    i++;
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  let i = array.length -1;
  while (i > -1) {
    console.log(array[i]);
    i--;
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  return Object.keys(object);
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  for (var key in object) {
    console.log(key);
  }

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  return Object.values(object);
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  for (var key in object) {
    console.log(object[key]);
  }  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  var array = Object.values(object);
  for (let i = 0; i < array.length; i++) {
    return array.length;
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  var array = Object.values(object);
  for (var i = array.length -1; i >= 0; i--) {
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
