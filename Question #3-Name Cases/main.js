/*
3- Name Cases: Store a person’s name in a variable,
and then print that person’s name in lowercase,
uppercase, and titlecase.
*/
var person_name = "Mahnoor";
console.log("Lowercase : ", person_name.toLowerCase());
console.log("Uppercase : ", person_name.toUpperCase());
console.log(
  "Titlecase : ",
  person_name.replace(/\b\w/g, function (c) {
    //capitalize
    return c.toUpperCase();
  })
);
