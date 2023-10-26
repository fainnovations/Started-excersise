class DinnerInvitation {
    private guestList: string[];
  
    constructor() {
      this.guestList = [];
    }
  
    // Add guests to the list
    addGuest(guest: string) {
      this.guestList.push(guest);
    }
  
    // Remove a guest from the list
    removeGuest(guest: string) {
      const index = this.guestList.indexOf(guest);
      if (index !== -1) {
        this.guestList.splice(index, 1);
        console.log(`${guest}, we're sorry, but due to limited space, we can't invite you to dinner.`);
      } else {
        console.log(`${guest} was not found in the guest list.`);
      }
    }
  
    // Invite each guest to dinner
    inviteGuests() {
      this.guestList.forEach((guest) => {
        console.log(`Dear ${guest},\nYou are invited to dinner. We would be honored to have you join us!\n`);
      });
    }
  
    // Print the number of people invited to dinner
    printNumberOfGuests() {
      const numberOfGuests = this.guestList.length;
      console.log(`Number of people invited to dinner: ${numberOfGuests}`);
    }
  }
  
  // Creating an instance of DinnerInvitation
  const dinnerParty = new DinnerInvitation();
  
  // Adding guests to the list
  dinnerParty.addGuest("Syed Muhammad Faiz");
  dinnerParty.addGuest("Syed Muhammad Mustafa");
  dinnerParty.addGuest("Syed Nasir Madni");
  dinnerParty.addGuest("Anaiza Fatima");
  dinnerParty.addGuest("Maheen Nasir");
  dinnerParty.addGuest("Saba Masood");
  
  // Informing about the bigger dinner table
  console.log("Great news! We found a bigger dinner table!");
  
  // Inviting guests to dinner
  dinnerParty.inviteGuests();
  
  // Informing that only two people can be invited
  console.log("Unfortunately, we can only invite two people for dinner.");
  
  // Removing guests until only two remain
  dinnerParty.removeGuest("Syed Nasir Madni");
  dinnerParty.removeGuest("Maheen Nasir");
  dinnerParty.removeGuest("Saba Masood");
  dinnerParty.removeGuest("Anaiza Fatima");
  
  // Inviting the remaining two guests
  dinnerParty.inviteGuests();
  
  // Printing the number of people invited to dinner
  dinnerParty.printNumberOfGuests();
  