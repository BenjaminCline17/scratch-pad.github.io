// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */

//I:Function takes in a string
//O:Function should return the number representing the length of the input string
//C:N/A
//E:N/A


function length(string) {
    // YOUR CODE BELOW HERE //

   //return the string property of the input string
    return string.length;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */

//I:Function takes in a string
//O:Function should return a new string that is a lowercased copy of the input string
//C:N/A
//E:N/A


function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
   //return the string property of the input string set to lowercase
   return string.toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */

//I:Function takes in a string
//O: Function should return a new string that is the input string forced to uppercase
//C:N/A
//E:N/A


function toUpperCase(string) {
    // YOUR CODE BELOW HERE //

    //return the string property of the input string set to uppercase
    return string.toUpperCase();
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */

//I:Function takes in a string
//O:Function should return a new string with dashes from the input string
//C:N/A
//E:N/A


function toDashCase(string) {
    // YOUR CODE BELOW HERE //

    //return the string property of the input string that replaces spaces with dashes and forced to lowercase
    return string.toLowerCase().replaceAll(" ", "-")
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

//I:Function takes in a string and a char string
//O:Function should return a boolean value depending on if input string begins with input char string
//C:N/A
//E:N/A
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //

    //Use if statement to see if string starts with char
    if (string.toLowerCase().startsWith(char.toLowerCase())) {
    //if the 0 index of string equals char, return true
    return true;
    //else return false
    } else {
        return false;
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */

//I:Function takes in a string and a char string
//O:Function should return a boolean value depending on if input string ends with char string
//C:N/A
//E:N/A
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //

    //use if statement to see if string ends with char
    if (string.toLowerCase().endsWith(char.toLowerCase())){
        //if string ends with char, return true
        return true;
        //else return false
    } else {
        return false;
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */

//I:Function takes in two strings
//O:Function should return a new string that is a concatenation of the two input strings
//C:N/A
//E:N/A
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    //return the property of stringOne concatenated with stringTwo 
    return stringOne.concat("", stringTwo);
    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */

//I:Function takes in two strings
//O:Function should a new string of the two input strings joined together
//C:N/A
//E:N/A
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);

    //Return the result of joining the arguments from args
    return args.join("")
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */

//I:Function takes in two strings
//O:Function should return whichever input string is longer
//C:N/A
//E:N/A
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    //Use if statement to compare the lengths of the two input strings
    if (stringOne.length > stringTwo.length){
        //if stringOne is longer, return stringOne
        return stringOne;
        //else return stringTwo
    } else {
        return stringTwo;
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */

//I:Function takes in two strings
//O:Function should return a number value depending on if the first input string is higher in alphabetical order than the second
//C:N/A
//E:N/A
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    //Use if statement to check if stringOne is higher than stringTwo
    if (stringOne < stringTwo){
        //if stringOne is higher than stringTwo, return 1
        return 1;
        //else if stringOne is lower than stringTwo, return -1
    } else if (stringOne > stringTwo){
        return -1;
        // else, return 0
    } else {
        return 0;
    }
    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */

//I:Function takes in two strings
//O:Function should return a number value depending on if the first input string ijs lower in alphabetical order than the second
//C:N/A
//E:N/A
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //

    //Use if statement to check if stringOne is lower than stringTwo
    if (stringOne > stringTwo){
        //if stringOne is lower than stringTwo, return 1
        return 1;
        //else if stringOne is higher than stringTwo, return -1
    } else if (stringOne < stringTwo){
        return -1;
        //else return 0
    } else {
        return 0;
    }

    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}