// Define a function to send invitations
function send_Invitations(guestList) {
    for (var i = 0; i < guestList.length; i++) {
        console.log("Dear ".concat(guestList[i], ", you are cordially invited to join us for dinner."));
    }
}
// Create the original list of guests
var myGuest_List = ["Faiz", "Mustafa", "Adil", "Humza", "Wahaj", "Nasir"];
// Send initial invitations
console.log("Initial Invitations:");
send_Invitations(myGuest_List);
// Print message about the limited space
console.log("\nDue to limited space, we can only invite two people for dinner.");
// Remove guests until only two names remain
while (myGuest_List.length > 2) {
    // Pop a name from the list
    var removedGuest = myGuest_List.pop();
    console.log("Sorry, ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print a message to the two remaining guests
console.log("\n".concat(myGuest_List[0], " and ").concat(myGuest_List[1], ", you're still invited!"));
// Remove the last two names from the list to make it empty
myGuest_List.pop();
myGuest_List.pop();
// Print the empty list
console.log("\nFinal Guest List:");
console.log(myGuest_List);
