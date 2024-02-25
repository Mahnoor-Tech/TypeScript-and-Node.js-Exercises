// 43- Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var magicians_names = ["John", "Eric", "Albert"];
function show_magicians(magicians_names) {
    for (var i = 0; i < magicians_names.length; i++) {
        console.log(magicians_names[i] + "\n");
    }
}
function make_great2(magicians_names) {
    var great_magician = [];
    for (var i = 0; i < magicians_names.length; i++) {
        great_magician.push("The great magician" + " " + magicians_names[i] + ".\n");
    }
    return great_magician;
}
var magician3 = ["Bob", "Crist", "Briz"];
var great_magician2 = make_great2(magician3);
show_magicians(magician3);
show_magicians(great_magician2);
