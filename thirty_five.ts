// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!


// Array of animals with a common characteristic
const animals: string[] = ["Dog", "Cat", "Rabbit"];

// Loop to print the names of the animals
console.log("Animals with a Common Characteristic:");
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// Loop to print a statement about each animal
console.log("\nStatements about these animals:");
for (let i = 0; i < animals.length; i++) {
  console.log(`A ${animals[i].toLowerCase()} would make a great pet.`);
}

// Statement about what these animals have in common
console.log("\nAny of these animals would make a great pet!");
