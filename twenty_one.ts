// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
// Define a type for a city object
type City = {
    name: string;
    country: string;
    population: number;
    description: string;
  };
  
  // Create an array of city objects
  const cities: City[] = [
    {
      name: "New York City",
      country: "United States",
      population: 8537673,
      description: "The largest city in the United States, known for its iconic skyline and diverse culture."
    },
    {
      name: "Paris",
      country: "France",
      population: 2206488,
      description: "The capital of France, famous for its art, fashion, and the Eiffel Tower."
    },
    {
      name: "Tokyo",
      country: "Japan",
      population: 13929286,
      description: "The capital of Japan, a bustling metropolis with a rich history and modern technology."
    },
    {
      name: "Sydney",
      country: "Australia",
      population: 5312163,
      description: "Australia's largest city, known for its stunning beaches and vibrant lifestyle."
    }
  ];
  
  // Print the list of cities
  console.log("List of Cities:");
  cities.forEach(city => {
    console.log(`Name: ${city.name}`);
    console.log(`Country: ${city.country}`);
    console.log(`Population: ${city.population}`);
    console.log(`Description: ${city.description}`);
    console.log("\n");
  });  