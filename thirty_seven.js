// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message. 
function makeShirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("You have ordered a ".concat(size, "-sized shirt with the message: \"").concat(message, "\""));
}
// Large shirt with the default message
makeShirt();
// Medium shirt with the default message
makeShirt("Medium");
// Custom-sized shirt with a different message
makeShirt("Small", "TypeScript is awesome!");
