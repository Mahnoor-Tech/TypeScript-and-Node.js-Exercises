// 37- Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I Love Typescript"; }
    console.log("T-shirt Size: ".concat(size, ". \nText on T-shirt: ").concat(message, "."));
}
make_shirt();
make_shirt("meduim");
make_shirt("small", "I want to customize tshirt text");
