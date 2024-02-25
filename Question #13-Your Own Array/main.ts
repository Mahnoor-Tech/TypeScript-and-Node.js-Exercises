/*
13- Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a 
list that stores several examples. Use your list to print a series of statements about these items, 
such as “I would like to own a Honda motorcycle.”
*/

let cars: string[] = ["Fortuner", "Audi", "BMW", "Jeep"];

cars.map((items) => console.log(`I would like to own a ${items}.`));

// OR

console.log(
  `1: I would like to own a ${cars[0]}. \n2: I would like to own a ${cars[1]}. \n3: I would like to own a ${cars[2]}. \n4: I would like to own a ${cars[3]}. \n`
);
