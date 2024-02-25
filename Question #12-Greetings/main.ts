/*
12- Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
print a message to them. The text of each message should be the same, but each message should be personalized 
with the person’s name.
*/

let names: string[] = ["Mahnoor", "Ayesha", "Fatima", "Khadeeja"];
let greet: string = "are you still enjoying learning TypeScript?";

console.log(
  `1: Hello! ${names[0]}, ${greet} \n2: Hello! ${names[1]}, ${greet}. \n3: Hello! ${names[2]}, ${greet}. \n4: Hello! ${names[3]}, ${greet}`
);
