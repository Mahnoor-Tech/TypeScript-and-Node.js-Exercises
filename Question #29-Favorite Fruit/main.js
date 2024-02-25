// 29- Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
var favorite_fruits = [
    "mango",
    "blueberry",
    "cherry",
    "strawberry",
    "watermelon",
];
if (favorite_fruits.includes("mango")) {
    console.log("You really like mangoes!");
}
else {
    console.log("Sorry! we don't find mango in your fav fruits list.");
}
if (favorite_fruits.includes("blueberry")) {
    console.log("You really like blueberry!");
}
else {
    console.log("Sorry! we don't find blueberry in your fav fruits list.");
}
if (favorite_fruits.includes("cherry")) {
    console.log("You really like cherry!");
}
else {
    console.log("Sorry! we don't find cherry in your fav fruits list.");
}
if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberry!");
}
else {
    console.log("Sorry! we don't find strawberry in your fav fruits list.");
}
if (favorite_fruits.includes("watermelon")) {
    console.log("You really like watermelon!");
}
else {
    console.log("Sorry! we don't find watermelon in your fav fruits list.");
}
