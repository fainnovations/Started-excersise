// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

// Define an array of magicians
const magicians: string[] = ["Magician1", "Magician2", "Magician3"];

// Function to make magicians "the Great"
function makeGreat(magicians: string[]): string[] {
  return magicians.map(magician => `${magician} the Great`);
}

// Function to display the list of magicians
function showMagicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}

// Add "the Great" to each magician and display the updated list
const greatMagicians = makeGreat(magicians);
showMagicians(greatMagicians);

  