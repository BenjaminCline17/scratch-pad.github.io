// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
//I:Function takes no input
//O:Print numbers from 1 to 100 with multiples of three printing "Fizz", multiples of five printing "Buzz", and multiples of both three and five printing "FizzBuzz"
//C:N/A
//E:N/A
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

    //Use for loop to loop from 1 to 100
    for (let i = 1; i <= 100; i++){
        //if i is a multiple of 3 and not 5, print "Fizz"
        if (i % 3 == 0 && i % 5 != 0){
          console.log("Fizz");
          //else if i is not a multiple of 3 and is a multiple of 5, print "Buzz"
        } else if (i % 3 != 0 && i % 5 == 0){
            console.log("Buzz");
            //else if i is a multiple of 3 and 5, print "FizzBuzz"
        } else if (i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz");
            //else print i
        } else {
            console.log(i);
        }
    }
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}