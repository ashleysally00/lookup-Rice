const readline = require("readline");
const fs = require("fs");

const readline1 = document.getElementById("readline1");
const readline2 = document.getElementById("readline2");

let phoneBook = [];

// Read the phoneBook.json file
fs.readFile("phoneBook.json", "utf8", (err, data) => {
  if (err) {
    console.error("An error occurred:", err);
    process.exit(1);
  }

  phoneBook = JSON.parse(data);

  // Initialize readline interface for lookup
  const rl1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Initialize readline interface for reverse lookup
  const rl2 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Prompt user for the name
  rl1.question(
    "Please enter the name of the person you want to lookup: ",

    // Find the person in the phone book
    (name) => {
      const person = phoneBook.find((p) => p.name === name);

      // Check if the person was found and print the result
      if (person) {
        console.log(`${person.name}'s phone number is: ${person.phoneNumber}`);
      } else {
        console.log(`No phone number found for ${name}.`);
      }

      // Close the readline interface
      rl.close();
    }
  );
});
// Prompt user for the number
rl.question("Please enter the number you want to lookup: ", (phoneNumber) => {
  // Find the number in the phoneBook
  const number = phoneBook.find((f) => f.number === phoneNumber);

  // Check if the person matching the number was found and print the result
  if (phoneNumber) {
    console.log(`${friend.phoneNumber}'s name is: ${friend.name}`);
  } else {
    console.log(`No name found for ${phoneNumber}.`);
  }

  // Close the readline interface
  rl.close();
});
