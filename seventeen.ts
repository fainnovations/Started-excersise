// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
// and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying 
// that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, print a message to that person letting them 
// know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of your program.



// Define a function to send invitations
function send_Invitations(guestList: string[]): void {
    for (let i = 0; i < guestList.length; i++) {
        console.log(`Dear ${guestList[i]}, you are cordially invited to join us for dinner.`);
    }
}

// Create the original list of guests
let myGuest_List: string[] = ["Faiz", "Mustafa", "Adil", "Humza", "Wahaj", "Nasir"];

// Send initial invitations
console.log("Initial Invitations:");
send_Invitations(myGuest_List);

// Print message about the limited space
console.log("\nDue to limited space, we can only invite two people for dinner.");

// Remove guests until only two names remain
while (myGuest_List.length > 2) {
    // Pop a name from the list
    let removedGuest = myGuest_List.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}

// Print a message to the two remaining guests
console.log(`\n${myGuest_List[0]} and ${myGuest_List[1]}, you're still invited!`);

// Remove the last two names from the list to make it empty
myGuest_List.pop();
myGuest_List.pop();

// Print the empty list
console.log("\nFinal Guest List:");
console.log(myGuest_List);
