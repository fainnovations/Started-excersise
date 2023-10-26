// Changing Guest List: You just heard that one of your guests can’t make the dinner, 
// so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name 
// of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.


function send_Invitations(guestList: string[]): void {
    for (let i = 0; i < guestList.length; i++) {
        console.log(`Dear ${guestList[i]}, you are cordially invited to join us for dinner.`);
    }
}

// Create a list of guests
let myGuestList: string[] = ["Faiz", "Humza", "Mustafa"];

// Step 1: Send initial invitations
console.log("Initial Invitations:");
send_Invitations(myGuestList);

// Step 2: Print a statement for the guest who can't make it
let $guestNotAvailable: string = "Humza";
console.log("\nGuest who can't make it:");

console.log(`Unfortunately, ${$guestNotAvailable} can't make it to the dinner.`);

// Step 3: Modify the list, replacing the unavailable guest with a new guest
let newGuest: string = "Adil";
myGuestList = myGuestList.map(guest => (guest === $guestNotAvailable ? newGuest : guest));

// Step 4: Send updated invitations
console.log("\nUpdated Invitations:");
send_Invitations(myGuestList);
