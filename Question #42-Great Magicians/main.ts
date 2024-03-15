// 42- Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magicians_names: string[] = ["Mahnoor", "Erha", "Meerab"];

function show_magicians(magicians_names: string[]) {
  for (let i = 0; i < magicians_names.length; i++) {
    console.log(magicians_names[i] + "\n");
  }
}

function make_great(magicians_names: string[]) {
  for (let i = 0; i < magicians_names.length; i++) {
    magicians_names[i] = `${magicians_names[i]}, "The Great"`;
  }
}

// Update the original array with the added text 'the Great'
make_great(magicians_names);

// display the updated magician names
show_magicians(magicians_names);  
