// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
// print a message to them. The text of each message should be the same, 
// but each message should be personalized with the person’s name.
var names1 = ["Nasir", "Faiz", "Mustafa", "Adil", "Humza"];
for (var i = 0; i < names1.length; i++) {
    console.log("Assalam O Alaikum ".concat(names1[i], " Have a great day!"));
}
