/*
6- Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end
of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once,
so the whitespace around the name is displayed. Then print the name after striping the white spaces.
*/
var persons_name = "\t\n  Mahnoor  \n\t";
// Display **with whitespace** characters at the beginning and end
console.log("".concat(persons_name));
// Display **without whitespace** characters at the beginning and end
console.log(persons_name.trim());
