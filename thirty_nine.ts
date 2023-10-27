// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.

function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`;
  }
  
  // Calling the function with three city-country pairs
  const location1 = cityCountry("Lahore", "Pakistan");
  const location2 = cityCountry("New York", "USA");
  const location3 = cityCountry("Paris", "France");
  
  console.log(location1);
  console.log(location2);
  console.log(location3);
  