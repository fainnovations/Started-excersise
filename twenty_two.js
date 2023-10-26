var cities1 = [
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
// Intentionally access an out-of-bounds index to create an error
var indexOutOfBounds = 10;
console.log(cities1[indexOutOfBounds]);
// The error above will occur, but it will not crash the program.
// Corrected code
if (indexOutOfBounds >= 0 && indexOutOfBounds < cities1.length) {
    console.log("City at index " + indexOutOfBounds + ": " + cities1[indexOutOfBounds].name);
}
else {
    console.log("Index is out of bounds. Please provide a valid index.");
}
