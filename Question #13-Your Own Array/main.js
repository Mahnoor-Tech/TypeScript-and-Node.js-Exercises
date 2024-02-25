/*
13- Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a
list that stores several examples. Use your list to print a series of statements about these items,
such as “I would like to own a Honda motorcycle.”
*/
var cars = ["Fortuner", "Audi", "BMW", "Jeep"];
cars.map(function (items) { return console.log("I would like to own a ".concat(items, ".")); });
// OR
console.log("1: I would like to own a ".concat(cars[0], ". \n2: I would like to own a ").concat(cars[1], ". \n3: I would like to own a ").concat(cars[2], ". \n4: I would like to own a ").concat(cars[3], ". \n"));
