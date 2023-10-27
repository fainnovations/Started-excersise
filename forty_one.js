// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
var magicianNames = ["Chahat Fateh Ali", "Nadir Ali", "Ducky Bhai", "Bhola records"];
show_magicians(magicianNames);
