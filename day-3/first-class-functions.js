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
/**
 * I:Function takes input base that could a string or number
 * O:return a function that tests whether a given value is greater than the base
 * C:N/A
 * E:N/A
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //Return function(value)
   return function(value) {
    //return value > base
    return value > base;
   }
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 */
/*
I: function takes an input base
O: return function that tests whether a given value is less than base
C:N/A
E:N/A
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //return function(value)
   return function(value) {
    //return value < base 
    return value < base;
   }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
/**
 * I: function takes a startsWith character that is a single character
 * O: return a function that tests whether a string starts with the startsWith character
 * C:N/A
 * E:N/A
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //return function(string)
    return function(string) {
      //return string.startsWith(startsWith)
      return string.toUpperCase().startsWith(startsWith.toUpperCase());
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
/**
 * I: function takes a endsWith character that is a single letter
 * O: return a function that tests whether a string ends with the endsWith character
 * C:N/A
 * E:N/A
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    //return function(string)
    return function(string) {
        //return string.toLowerCase().endsWith(endsWith.toLowerCase())
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
/* 
I:function takes an array of strings and a function
O:return the array of strings modified
C:N/A
E:N/A
*/
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //declare storage array
    var output = [];
    //use for loop to iterate through strings array
    for (let i = 0; i < strings.length; i++) {
    //invoke modify on current strings index
     modify(strings[i]);
     //push result of invoking modify on strings index into output
     output.push(modify(strings[i]));
    }
    //return output
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
/*
I: function takes array of strings and a function designed to test the string
O: return true if all strings pass the test
C:N/A
E:N/A
*/
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    //declare output array
    var output = [];
    //for loop to iterate through the strings array
    for (let i = 0; i < strings.length; i++) {
        if (test(strings[i]) === true) {
            output.push(strings[i]);
        }
    }
    return output
    
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