// function sendInvitations(guestList: string[]): void {
//     for (let i = 0; i < guestList.length; i++) {
//         console.log(`Dear ${guestList[i]}, you are cordially invited to join us for dinner.`);
//     }
// }
// // Initial guest list
// let originalGuestList1: string[] = ["Faiz", "Humza", "Mustafa"];
// console.log("Original Invitations:");
// sendInvitations(originalGuestList1);
// // Simulating a change in the guest list (someone can't make it)
// let $guestNotAvailable: string = "Humza";
// let newGuest: string = "Adil";
// // Update the guest list
// originalGuestList1 = originalGuestList1.filter(guest => guest !== $guestNotAvailable);
// originalGuestList1.push(newGuest);
// // Sending updated invitations
// console.log("\nUpdated Invitations:");
// sendInvitations(originalGuestList1);
// // Print statement for the guest who can't make it
// console.log("\nGuest who can't make it");
// console.log(`Unfortunately, ${$guestNotAvailable} can't make it to the dinner.`);
// Define a function to send invitations
function sendInvitations(guestList) {
    for (var i = 0; i < guestList.length; i++) {
        console.log("Dear ".concat(guestList[i], ", you are cordially invited to join us for dinner."));
    }
}
// Create a list of guests
var myGuestList = ["Faiz", "Humza", "Mustafa"];
// Step 1: Send initial invitations
console.log("Initial Invitations:");
sendInvitations(myGuestList);
// Step 2: Print a statement for the guest who can't make it
var $guestNotAvailable = "Humza";
console.log("\nGuest who can't make it:");
console.log("Unfortunately, ".concat($guestNotAvailable, " can't make it to the dinner."));
// Step 3: Modify the list, replacing the unavailable guest with a new guest
var newGuest = "Adil";
myGuestList = myGuestList.map(function (guest) { return (guest === $guestNotAvailable ? newGuest : guest); });
// Step 4: Send updated invitations
console.log("\nUpdated Invitations:");
sendInvitations(myGuestList);
