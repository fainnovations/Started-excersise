// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
// Define an array of magicians
var magicians = ["Magician1", "Magician2", "Magician3"];
// Function to make magicians "the Great"
function makeGreat(magicians) {
    return magicians.map(function (magician) { return "".concat(magician, " the Great"); });
}
// Function to display the list of magicians
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Add "the Great" to each magician and display the updated list
var greatMagicians = makeGreat(magicians);
showMagicians(greatMagicians);
