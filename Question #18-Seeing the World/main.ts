/*
18- Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
*/

let places_to_visit: string[] = [
  "Makkah",
  "Dubai",
  "Canada",
  "Kashmir",
  "Japan",
];

// display original order of an array
console.log(`Original Order: "${places_to_visit}" \n`);

// sorting in alphabetical order like [A,B,C,....]
console.log(
  "Alphabetical Order : " + [...places_to_visit].sort()
);

// display original order after sorting in alphabetical order
console.log(`Original Order: "${places_to_visit}"`);

// Display array in reversible order like [z,y,x,...]
console.log("Reverse Alphabetical Order: " + [...places_to_visit].sort().reverse());

// display original order
console.log(`Original Order: "${places_to_visit}"`);

// display in reversible order again 
places_to_visit.reverse();
console.log("Reversed Order: " + places_to_visit);

// display in reversible order again 
places_to_visit.reverse();
console.log("Original order: " + places_to_visit);

// display in alphabetical order
places_to_visit.sort()
console.log("Alphabetical Order: " + places_to_visit);

// display in reversible order again 
places_to_visit.reverse();
console.log("Reverse Alphabetical Order: " + places_to_visit);
