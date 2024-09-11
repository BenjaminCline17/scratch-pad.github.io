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

//I:Function takes in an input value
//O:Function should return true if the input value is an array, otherwise return false
//C:N/A
//E:N/A
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
   //Use if statement to check if value is an array 
    if (Array.isArray(value) === true){
        //if value is an array, return true
        return true;
        //else, return false
    } else {
        return false;
    }
    
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
 * HINT: look up how to figure out if something is an instance of the Date object.
 * 
 */

//I:Function takes an input value
//O:Function should return true if value is an object intended as a collection
//C:N/A
//E:N/A
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
    //use if statement to check if value is an array
    if (Array.isArray(value) === true){
        //if value is an array, return false
        return false;
    }
    //use if statement to check if value is null
    else if (value === null) {
        //if value is null, return false
        return false;
    }
    //use if statement to check if value is an instance of Date
    if (value instanceof Date) {
        //if value is an instance of Date, return false;
        return false;
    }
    //Use if statement to check if value is an object
    if (typeof value === "object") {
        //if value is an object, return true
        return true;
    }
    //Use if statement to check if value is a string
    if (typeof value === "string") {
        //if value is a string, return false
        return false;
    } //Use if statement to determine if value is undefined
    if (typeof value === "undefined"){
        //if value is undefined return false
        return false;
    }//Use if statement to determine if value is a number
    if (typeof value === "number"){
        //if value is a number return false
        return false;
    }//Use if statement to determine if value is a boolean
    if (typeof value === "boolean"){
        //if value is a boolean return false
        return false;
    }
    // YOUR CODE ABOVE HERE //
}


/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */

//I:Function takes in an input value
//O:Function should return true if input value is an Array or an Object, otherwise return false
//C:N/A
//E:N/A
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    //use if statement to determine if value is an array
    if (Array.isArray(value) === true){
        //if value is an array, return true
        return true;
    }
    
    //use if statement to determine if value is null
    if (value === null){
        //if value is null, return false
        return false;
    } //use if statement to determine if value is an instance of Date
    if (value instanceof Date){
        //if value is an instance of Date, return false
        return false;
    }
    //use if statement to determine if value is an object
    if (typeof value === "object"){
        //if value is an object, return true
        return true;
    }//Use if statement to determine if value is a string
    if (typeof value === "string"){
        //if value is a string, return false
        return false;
    } //use if statement to determine if value is a number
    if (typeof value === "number"){
        //if value is a number, return false
        return false;
    }//Use if statement to determine if value is a boolean
    if (typeof value === "boolean"){
        //if value is a boolean, return false
        return false
    }
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

//I:Function takes in a input value
//O:Function should return a string depending on the type of value
//C:N/A
//E:N/A
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    //use if statement to check if value is an array
    if (Array.isArray(value) === true){
        //if value is an array, return "array"
        return "array";
    }
    //use if statement to check if value is null
    else if (value === null) {
        //if value is null, return "null"
        return "null";
    }
    //use if statement to check if value is an instance of Date
    if (value instanceof Date) {
        //if value is an instance of Date, return "date";
        return "date";
    }
    //Use if statement to check if value is an object
    if (typeof value === "object") {
        //if value is an object, return "object"
        return "object";
    }
    //Use if statement to check if value is a string
    if (typeof value === "string") {
        //if value is a string, return "string"
        return "string";
    } //Use if statement to determine if value is undefined
    if (typeof value === "undefined"){
        //if value is undefined return "undefined"
        return "undefined";
    }//Use if statement to determine if value is a number
    if (typeof value === "number"){
        //if value is a number return "number"
        return "number";
    }//Use if statement to determine if value is a boolean
    if (typeof value === "boolean"){
        //if value is a boolean return "boolean"
        return "boolean";
    }
    //use if statement to determine if value is a function
    if (typeof value === "function"){
        //if value is a function, return "function"
        return "function";
    }
    
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