const colorCombinator = require("./color-combinator.js");
const colorDeconstructor = require("./color-deconstructor.js");
const isValidPrimary = require("./is-valid-primary.js");
const isValidSecondary = require("./is-valid-secondary.js");
const getInput = require("./get-input.js");

// Your code here!
const str = getInput(1);
const str1 = getInput(2);
console.log(getInput(1));
console.log(getInput(2));

if ((!isValidPrimary(str) === true) &&
(!isValidPrimary(str1) === true) && 
(!isValidSecondary(str) === true) &&
(!isValidSecondary(str1) === true)){
    console.log("Input a color dude, try again");
}
if (isValidSecondary(str) === true){
    console.log(str + " breaks down into the colors " + colorDeconstructor(str, str1));
}
if (isValidPrimary(str) === true && isValidPrimary(str1) === true){
    console.log(str + " + " + str1 + " = " + colorCombinator(str, str1));
} 
//if ((isValidPrimary(str) === true) && (isValidPrimary(str1) === true) &&
//(!isValidSecondary(str) === true) && (!isValidSecondary(str1) === true)){
//    console.log("Only one is a color")
//}