// 37- Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(
  size: string = "large",
  message: string = "I Love Typescript"
) {
  console.log(`T-shirt Size: ${size}. \nText on T-shirt: ${message}.`);
}

make_shirt();
make_shirt("meduim");
make_shirt("small", "I want to customize tshirt text");
