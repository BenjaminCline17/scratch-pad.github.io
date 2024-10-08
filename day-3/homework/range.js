// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */

//I:Function takes in two integers
//O:Function should return an array containing all integers between the two parameters
//C:N/A
//E:N/A
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    //declare output as an empty array
    var output = [];
    //if start is less than end, use a for loop to count up from start to end, pushing each number into the output array
    if (start < end){
        for (let i = start; i <= end; i++){
            output.push(i);
        }
    } //if start is greater than end, use a for loop to count down from start to end, pushing each number into the output array
    if (start > end){
        for (let i = start; i >= end; i--){
            output.push(i);
        }
    }//return output
    return output;
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}