// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 * 
 * HINT: There is a method that can help with this.
 */
/*
I:Function takes input value
O:return true if value is an array, false if otherwise
C:N/A
E:N/A
*/
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    //Use Array.isArray method to check if value is an array
    return Array.isArray(value);
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 * 
 */
/*
I:Function takes input value
O:return true if value is an Object, false if value is null, an Array, or a Date 
C:N/A
E:N/A
*/
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //If Array.isArray(value) is true, return false
    if (Array.isArray(value)) return false;
    //If value equals null, return false
    if (value === null) return false;
    //If value is an instanceof Date, return false
    if (value instanceof Date) return false;
    //if the typeof value equals a string, return false
    if (typeof value === "string") return false;
    //if the typeof value equals a number, return false
    if (typeof value === "number") return false;
    //if the typeof value equals a boolean, return false
    if (typeof value === "boolean") return false;
    //if the typeof value equals undefined, return false
    if (typeof value === "undefined") return false;
    //If the typeof value equals "object", return true
    if (typeof value === 'object') return true;
    
    // YOUR CODE ABOVE HERE //
}



/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
/**
 * I: function takes input value
 * O: return true if value is an Array or an Object, return false if otherwise
 * C:N/A
 * E:N/A
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //if Array.isArray(value) is true, return true
    if (Array.isArray(value)) return true;
    //if value equals null, return false
    if (value === null) return false;
    //if value is an instanceof Date, return false
    if (value instanceof Date) return false;
    //if typeof value equals a string, return false
    if (typeof value === "string") return false;
    //if typeof value equals a number, return false
    if (typeof value === "number") return false;
    //if typeof value equals a boolean, return false
    if (typeof value === "boolean") return false;
    //if typeof value equals a object, return true
    if (typeof value === "object") return true;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */
/**
 * I:function takes input value 
 * O: return the type of value as a string
 * C:N/A
 * E:N/A
 *  */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    //if Array.isArray(value) is true, return 'array
   if (Array.isArray(value)) return "array";
   //if typeof value equals a string, return 'string'
   if (typeof value === 'string') return 'string';
   //if value equals null, return 'null'
   if (value === null) return "null";
   //if typeof value equals a number, return 'number'
   if (typeof value === 'number') return 'number';
   //if value is an instanceof Date, return 'date'
   if (value instanceof Date) return 'date';
   //if typeof value equals a function, return 'function'
   if (typeof value === 'function') return 'function';

    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}