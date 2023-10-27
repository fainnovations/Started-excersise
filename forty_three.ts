// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// Define an array of magicians
const magicianss: string[] = ["Magician1", "Magician2", "Magician3"];

// Function to make magicians "the Great"
function makeGreat(magicianss: string[]): string[] {
  return magicianss.map(magicians => `${magicians} the Great`);
}

// Function to display the list of magicians
function showMagicians(magicianss: string[]): void {
  for (const magicians of magicianss) {
    console.log(magicians);
  }
}

// Create a copy of the original array
const magiciansCopy = [...magicianss];

// Add "the Great" to each magician in the copy
const great_Magicians = makeGreat(magiciansCopy);

// Display the original and updated lists
console.log("Original Magicians:");
showMagicians(magicianss);
console.log("Great Magicians:");
showMagicians(great_Magicians);
