// More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people 
// that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 

// • Print a new set of invitation messages, one for each person in your list.



// Define a function to send invitations
function sendInvitations(guestList: string[]): void {
    for (let i = 0; i < guestList.length; i++) {
        console.log(`Dear ${guestList[i]}, you are cordially invited to join us for dinner.`);
    }
}

// Create the original list of guests
let my_GuestList: string[] = ["Faiz", "Humza", "Mustafa"];

// Send initial invitations
console.log("Initial Invitations:");
sendInvitations(my_GuestList);

// Print statement about the bigger dinner table
console.log("\nGreat news! We found a bigger dinner table, so more space is available.");

// Add one new guest to the beginning of the array
my_GuestList.unshift("Adil");

// Add one new guest to the middle of the array
let newMiddleGuest: string = "Wahaj";
let middleIndex: number = Math.floor(my_GuestList.length / 2);
my_GuestList.splice(middleIndex, 0, newMiddleGuest);

// Use append() to add one new guest to the end of your list
let newEndGuest: string = "Nasir";
my_GuestList.push(newEndGuest);

// Print a new set of invitation messages
console.log("\nUpdated Invitations:");
sendInvitations(my_GuestList);
