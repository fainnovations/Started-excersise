// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// List of current users
var currentUsers = ["user1", "user2", "user3", "user4", "user5"];
// List of new users
var newUsers = ["User2", "user6", "user7", "User8", "user9"];
// Function to check if a username is unique (case-insensitive)
function isUsernameUnique(username, userList) {
    var lowercaseUsername = username.toLowerCase();
    return userList.every(function (existingUser) { return existingUser.toLowerCase() !== lowercaseUsername; });
}
// Check if each new username is unique (case-insensitive)
newUsers.forEach(function (newUser) {
    if (isUsernameUnique(newUser, currentUsers)) {
        currentUsers.push(newUser);
        console.log("Username '".concat(newUser, "' is available. You can use it."));
    }
    else {
        console.log("Username '".concat(newUser, "' is already taken. Please choose a different username."));
    }
});
// Updated list of current users
console.log("Updated list of current users:", currentUsers);
