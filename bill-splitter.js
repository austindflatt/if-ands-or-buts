const prompt = require('prompt-sync')();

const person1 = Number(prompt('How much did person 1 pay?'));
const person2 = Number(prompt('How much did person 2 pay?'));

if (person1 === person2) {
    console.log("Nobody owes anyone anything.")
}
else if (person1 >= person2) {
    const bill = person1 + person2;
    const amountOwed = bill / 2;
    console.log("Person 2 owes Person 1", amountOwed)
} 
else if (person2 >= person1) {
    const bill = person1 + person2;
    const amountOwed = bill / 2;
    console.log("Person 1 owes Person 2", amountOwed)
}