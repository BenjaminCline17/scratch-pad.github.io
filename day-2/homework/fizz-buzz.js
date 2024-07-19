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
O:Print numbers 1 to 100, multiples of three must print Fizz, multiples of five must print Buzz, multiples of both three and five must print Fizzbuzz, all other numbers must print like normal
C:N/A
E:N/A
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    //Use empty number array to store printed numbers
   var number = [];
    //Use for loop to print numbers
    for (let i = 1; i <= 100; i++) {
        //If the remainder of i and 3 is 0 and i and 5 isn't, push Fizz
       if (i % 3 == 0 && i % 5 != 0) {
        console.log("Fizz");
        //Else if the remainder of i and 3 isn't 0 and i and 5 is, push Buzz
       } else if (i % 3 != 0 && i % 5 == 0) {
        console.log("Buzz");
        //Else if the remainder of i and 3 is 0 and i and 5 is also 0, push FizzBuzz
       } else if (i % 3 === 0 && i % 5 == 0) {
        console.log("FizzBuzz");
        //else push i
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