// 43- Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magicians: string[] = ["Mahnoor", "Erha", "Meerab"];

/*
First call: returns magician names from 'magicians' array. 
["Mahnoor", "Erha", "Meerab"]
Second call: returns names from 'greatMagicians' array. 
[ 'Mahnoor the Great', 'Erha the Great', 'Meerab the Great' ];
*/

function show_magicians(items: string[]) {
  items.map((magician) => {
    console.log(magician);
  });
}

function make_great(magicians: string[]): string[] {
  return magicians.map((item) => `${item} the Great`);
}

// Using Spread Operator To Create A Copy Of An Array | Can Also Use slice();
let greatMagicians = make_great([...magicians]);
// console.log(greatMagicians);

// Original Array | ["Mahnoor", "Erha", "Meerab"]
console.log("Original Array:");
console.log(`---------------`);
show_magicians(magicians);

// Modified Array | [ 'Mahnoor the Great', 'Erha the Great', 'Meerab the Great' ];
console.log(`\nModified Array - Great Magicians:`);
console.log(`------------------------------`);
show_magicians(greatMagicians);
