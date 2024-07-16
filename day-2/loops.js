// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */

/* 
I:Function takes input array
O:Print the values of the array
C:Must use a loop
E:N/A
*/

function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //Use for loop to move through the array
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  } 
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
/* 
I:Function takes input array
O:Print out array values in reverse
C:Must use a loop
E:N/A
*/
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //Use for loop to move through the array in reverse
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
/* 
I:Function takes input object
O:Return an Array containing object keys
C:N/A
E:N/A
*/
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //Use Object.keys command
  return Object.keys(object);
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
/* 
I:function takes input Object
O:Print object keys
C:Must use a loop
E:
*/
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //Use for in loop to loop over object keys
  for (let keys in object) {
    console.log(keys);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  
  
  
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