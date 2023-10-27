// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Define an array of magicians
var magicianss = ["Magician1", "Magician2", "Magician3"];
// Function to make magicians "the Great"
function makeGreat(magicianss) {
    return magicianss.map(function (magicians) { return "".concat(magicians, " the Great"); });
}
// Function to display the list of magicians
function showMagicians(magicianss) {
    for (var _i = 0, magicianss_1 = magicianss; _i < magicianss_1.length; _i++) {
        var magicians = magicianss_1[_i];
        console.log(magicians);
    }
}
// Create a copy of the original array
var magiciansCopy = __spreadArray([], magicianss, true);
// Add "the Great" to each magician in the copy
var great_Magicians = makeGreat(magiciansCopy);
// Display the original and updated lists
console.log("Original Magicians:");
showMagicians(magicianss);
console.log("Great Magicians:");
showMagicians(great_Magicians);
