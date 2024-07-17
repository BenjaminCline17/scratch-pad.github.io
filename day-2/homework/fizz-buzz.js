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
/* 
I:Function takes no input
O:Print numbers 1 to 100
C:Multiples of three must print Fizz, multiples of five mmust print Buzz, and numbers that are both print FizzBuzz
E:N/A
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
   var number = Math.floor(Math.random()* 100) + 1;
if (number % 3 === 0) {
     number = "Fizz";
     console.log(number);
} else if (number % 5 === 0) {
    number = "Buzz";
    console.log(number); 
} else if (number % 3 === 0 && number % 5 === 0) {
     number = "FizzBuzz";
     console.log(number);
} else {
    console.log(number);
}
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}