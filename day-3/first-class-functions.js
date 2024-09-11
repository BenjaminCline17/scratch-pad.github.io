// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */

//I:Function takes in an input base, which could be a string or number
//O:Function should return a function that tests if a given value is greater than the base
//C:N/A
//E:N/A
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //Return a function with a value input
   return function(value){
    //return a test that determines if value is greater than base
    return value > base;
   }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 * 
 */

//I:Function takes in an input base, which could be a string or number
//O:Function should return a function that tests if a given value is less than the base
//C:N/A
//E:N/A
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //Return a function with a value input
    return function(value){
        //return a test that determines if value is less than base
        return value < base;
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */

//I:Function takes in a startsWith character, which is a single character
//O:Function should return a function that tests if a given string starts with the startsWith character
//C:N/A
//E:N/A
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //return a function with a string input
    return function(string){
        return string.toLowerCase().startsWith(startsWith.toLowerCase());
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */

//I:Function takes in a endsWith character
//O:Return a function taht tests if a given string ends with the endsWith character
//C:N/A
//E:N/A
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    return function(string){
        return string.toLowerCase().endsWith(endsWith.toLowerCase());
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */

//I:Function takes in an array of strings and a function
//O:Function should return a modified array of strings from the input array
//C:N/A
//E:N/A
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    var output = [];
    
    for(let i = 0; i < strings.length; i++){
        output.push(modify(strings[i]));
    }
    return output;
    // YOUR CODE ABOVE HERE //
}




/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    

    for(let i = 0; i < strings.length; i++){
        if(strings.every(test) === true){
            return true;
        } else {
            return false;
        }
    }
    
    
    // YOUR CODE ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}