// 36- T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
var tshirt_size = "medium";
var text_message = "Software Developer";
function make_shirt(size, message) {
    console.log("T-shirt Size: ".concat(size, ". \nText on T-shirt: ").concat(message, "."));
}
make_shirt(tshirt_size, text_message);
