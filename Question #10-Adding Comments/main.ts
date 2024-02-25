/*
10- Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
If you don’t have anything specific to write because your programs are too simple at this point, just add your 
name and the current date at the top of each program file. Then write one sentence describing what the program does.
*/

// First Program: Developer: Mahnoor, Date: 2-24-2024
// The following program is used to convert a person's name into uppercase, lowercase, and capitalize it.

let person_name: string = "Mahnoor";

console.log("Lowercase : ", person_name.toLowerCase());
console.log("Uppercase : ", person_name.toUpperCase());
console.log(
  "Titlecase : ",
  person_name.replace(/\b\w/g, (c) => c.toUpperCase())
);

// Second Program: Developer: Mahnoor, Date: 2-24-2024
// The following program is used to remove whitespaces and newlines. strip(); is used in python & trim(); is used in typescript or js.

let persons_name: string = "\t\n  Mahnoor  \n\t";

console.log(`${persons_name}`);
console.log(persons_name.trim());
