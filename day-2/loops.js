// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */

//I:Function takes in an array
//O:Function should loop over input array and print its values
//C:N/A
//E:N/A
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  //Use for loop to iterate through array
  for (let i = 0; i < array.length; i++){
    //print each index of array
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */

//I:Function takes in an array
//O:Function should loop over input array in reverse and print its values
//C:N/A
//E:N/A
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  //Use for loop to iterate through the array
  for (let i = array.length - 1; i >= 0; i--){
    //print each index of array in reverse
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */

//I:Function takes in an object
//O:Function should loop over input object and return an array with the object keys
//C:N/A
//E:N/A
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //Declare storage array
  var storage = [];

  //Use for in loop to iterate through the object
 for (let keys in object){
  //Push object keys into the storage array
  storage.push(keys);
 }
 //return storage
 return storage;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */

//I:Function takes in an object
//O:Function should loop over input object and print its keys
//C:N/A
//E:N/A
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  //Use for in loop to iterate through the object
  for (let keys in object){
    //print object keys
    console.log(keys);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */

//I:Function takes in an object
//O:Function should return an array containing the input object's values
//C:N/A
//E:N/A
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //Declare output array
  var output = [];
  
  //use for in loop to iterate through object
  for (let keys in object){
    //push object values into output array
    output.push(object[keys]);
  }
  //return output
  return output;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */

//I:Function takes in an Object
//O:Function should iterate through the input object and print its values
//C:N/A
//E:N/A
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  //use for in loop to iterate through object
  for (let keys in object){
    //print object values
    console.log(object[keys]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */

//I:Function takes in an object
//O:Function should loop through the object and return the number key/value pairs in it
//C:N/A
//E:N/A
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //declare objectLength
  var objectLength = 0;
  //use for in loop to iterate through object
  for (let keys in object){
    //for every key in object, add 1 to objectLength
    objectLength++;
  }
  //return objectLength
  return objectLength;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */

//I:Function takes in an object
//O:Function should loop through the object in reverse and print its values
//C:N/A
//E:N/A
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  //use for loop to iterate through object values
  for (let i = Object.values(object).length - 1; i >= 0; i--){
    //print current index of the object values;
    console.log(Object.values(object)[i]);
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