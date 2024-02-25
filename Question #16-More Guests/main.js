/*
16- More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append()/push() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.
*/
var guests = ["Tuba", "Rani", "Tabassum"];
var remove_name = "Tuba";
var new_guest = "Erha";
guests[guests.indexOf(remove_name)] = new_guest;
console.log("Previous Guest List: " + guests);
guests.map(function (items) {
    return console.log("Hey! ".concat(items, ", please come and join us for dinner today. \n"));
});
console.log(remove_name + " will not join us for dinner today.\n");
console.log("We have just found a bigger dinner table, so now more guests can come and sit easily. \n");
guests.unshift("Meerab");
guests.splice(3, 0, "Saira");
guests.push("Anaya");
console.log("New Guest List: " + guests);
guests.map(function (items) {
    return console.log("Hey! ".concat(items, ", please come and and join us for dinner today. \n"));
});
