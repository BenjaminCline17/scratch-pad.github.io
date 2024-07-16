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
E:N/A
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
/*
I:Function takes input object
O:Return an array contain object's values
C:N/A
E:N/A
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //Use Object.values command to gather object values
  return Object.values(object);
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
/* 
I:function takes an input object
O:print object values
C:must use a loop
E:N/A
*/
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //use a for in loop to loop through the object
  for (let keys in object) {
    console.log(object[keys]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
/*
I:function takes input object
O:return number of key/value pairs stored in object
C:N/A
E:N/A
*/
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //return the length of object entries
  return Object.entries(object).length;
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
/* 
I:function takes input object
O:print object values in reverse
C:Must use a loop
E:N/A
*/
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  //create storage array arr
var arr = []
 //Use for in loop to push object values into arr
  for (let key in object) {
arr.push(object[key]);
  }
  //Use for loop to loop over object values in arr array
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
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