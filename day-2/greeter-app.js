// #!/usr/bin/env node

'use strict';

/** 
 * IN CLASS EXERCISE: Greeter App
 *
 * Using if, else-if and else, AND depending on the hour of the day, 
 * write a greeting program that prints a greeting to the screen like so: 
 *
 * // hour is 0-11
 * Good Morning!
 *
 * // hour is 12-16
 * Good Afternoon! 
 *
 * // hour is 17-21
 * Good Evening!
 *
 * // hour is 22-24 
 * Good Night!
 *
 * TIPS: 
 * 
 *   a. At what threshold does morning become afternoon? What comparison 
 *      can be used to test that the hour is within the morning threshold. 
 *      It's best to be consistant and use the SAME type of comparison for 
 *      each threshold. 
 *   
 *   b. Does the last threshold even need an else-if?
 * 
 *   c. The tests are CASE sensitive, so you MUST console.log('Good Night!') with
 *      the exact case.
 */

//I:Function takes in hour number
//O:Function should print a greeting to the screen depending on the input hour
//C:Must use if, else-if, and else
//E:N/A
function greeter(hour) {
    // YOUR CODE BELOW HERE //
    
    //Use if statement to see if hour is less than or equal to 11
    if (hour <= 11){
        //if hour equals 0-11, print "Good Morning!"
        console.log("Good Morning!");
        //else if hour is less than or equal to 16, print "Good Afternoon!"
    } else if(hour <= 16) {
        console.log("Good Afternoon!");
        //else if hour is less than or equal to 21, print "Good Evening!"
    } else if(hour <= 21) {
        console.log("Good Evening!");
        //else, print "Good Night!"
    } else {
        console.log("Good Night!");
    }
    
    // YOUR CODE ABOVE HERE //
}

/*
 * To test our greeter when developing, we need to fake some input data, ie, 
 * the hour, so just change the input value to check your work.
 * 
 * In a more realistic setting, you might do something like this to get the 
 * actual system hour:
 *
 * var today = new Date();
 * var hour = today.getHours();
 */

greeter(11);



// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.greeter = greeter;
}