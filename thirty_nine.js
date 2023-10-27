// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function cityCountry(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Calling the function with three city-country pairs
var location1 = cityCountry("Lahore", "Pakistan");
var location2 = cityCountry("New York", "USA");
var location3 = cityCountry("Paris", "France");
console.log(location1);
console.log(location2);
console.log(location3);
