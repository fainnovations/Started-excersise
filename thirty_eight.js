// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describeCity(city, country) {
    if (country === void 0) { country = "Default Country"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Calling the function for three different cities
describeCity("Karachi", "Pakistan");
describeCity("New York"); // Uses the default country value
describeCity("Paris", "France");
