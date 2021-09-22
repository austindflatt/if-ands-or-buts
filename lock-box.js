const prompt = require('prompt-sync')();

const pinCode = 4444;
const enterPin = Number(prompt('Please enter passcode:'));

if (enterPin === pinCode) {
    console.log("success");
} else {
    console.log("failure");
}