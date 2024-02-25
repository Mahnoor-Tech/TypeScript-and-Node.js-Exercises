/*
20- Think of something you could store in a array.For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
*/

let cities: string[] = ["Karachi", "Islamabad", "Lahore"];

console.log("List of cities: \n");

for (let i = 0; i < cities.length; i++) {
  console.log(i + 1 + ": " + cities[i]);
}
