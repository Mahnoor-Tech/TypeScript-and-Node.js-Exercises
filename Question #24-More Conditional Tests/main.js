/*
24- More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/
// string equality
var author = "Albert";
console.log("".concat(author.length == 6, " ? I predict True."));
console.log("".concat(author.length == 6));
// string inequality
var author1 = "Albert";
console.log("".concat(author1.length == 7, " ? I predict False."));
console.log("".concat(author1.length == 7));
// check lowercase
var exam = "COMPUTER";
console.log("".concat(exam.toLowerCase() == "computer", " ? I predict True."));
console.log("".concat(exam.toLowerCase() == "computer"));
// check lowercase
var exam2 = "COMPUTER";
console.log("".concat(exam.toLowerCase() == "COMPUTER", " ? I predict False."));
console.log("".concat(exam.toLowerCase() == "COMPUTER"));
// test greater than and less than, greater than or equal to, and less than or equal to
console.log("5>2 ? I predict True.\n 6<3 ? I predict False.\n 100>=100 ? I predict True.\n 8<=9 ? I predict True.");
console.log(5 > 2, 6 < 3, 100 >= 100, 8 <= 9);
// test && and || operators
var age = 20;
var country = "karachi";
console.log("age == 18 && country == 'karachi' ? I predict True.\nage == 18 || country == 'karachi' ? I predict False.");
console.log(age == 18 && country == "karachi", age == 18 || country == "karachi");
// Test whether an item is in a array or nor
var colours = ["red", "blue", "green"];
console.log("check \"BLUE\" colour is in array or not: ".concat(colours.includes("blue")));
console.log('check "PURPLE" colour is in array or not: ' + colours.includes("purple"));
