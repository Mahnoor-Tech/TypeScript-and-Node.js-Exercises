// 36- T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.

let tshirt_size: string = "medium";
let text_message: string = "Software Developer";

function make_shirt(size: string, message: string): void {
  console.log(`T-shirt Size: ${size}. \nText on T-shirt: ${message}.`);
}

make_shirt(tshirt_size, text_message);
