// 41- Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians_names: string[] = ["John", "Eric", "Albert"];

function show_magicians(magicians_names: string[]) {
  for (let i = 0; i < magicians_names.length; i++) {
    console.log(magicians_names[i] + "\n");
  }
}

show_magicians(magicians_names);
