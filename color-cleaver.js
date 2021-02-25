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

//if ((!isValidSecondary (getInput(1))) || (!isValidSecondary (getInput(2))) && 
  //  (!isValidPrimary(getInput(1)) || (!isValidPrimary(getInput(2)){
    //console.log("That's not a valid color dude, try again");
//}
if (isValidSecondary(str) === true){
    console.log(colorDeconstructor(str, str1));
}
if ((isValidPrimary(str) === true) && (isValidPrimary(str1) === true)){
    console.log(colorCombinator(str));
}