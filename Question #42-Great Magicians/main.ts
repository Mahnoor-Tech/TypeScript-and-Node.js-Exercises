// 42- Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magicians_names: string[] = ["John", "Eric", "Albert"];

function make_great(magicians_names: string[]): void {
  for (let i = 0; i < magicians_names.length; i++) {
    console.log("The great magician" + " " + magicians_names[i] + ".\n");
  }
}

make_great(magicians_names);
