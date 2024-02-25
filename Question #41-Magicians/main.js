// 41- Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magicians_names = ["John", "Eric", "Albert"];
function show_magicians(magicians_names) {
    for (var i = 0; i < magicians_names.length; i++) {
        console.log(magicians_names[i] + "\n");
    }
}
show_magicians(magicians_names);
