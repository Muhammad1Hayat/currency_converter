import inquire from "inquirer";
const currency = {
    USD: 1,
    EURO: 0.92,
    DBP: 0.79,
    INR: 74057,
    PKR: 277
};
let user_answer = await inquire.prompt([
    {
        name: "from",
        message: "enter from currency",
        type: "list",
        choices: ["USD", "EURO", "DBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "enter to currency",
        type: "list",
        choices: ["USD", "EURO", "DBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "enter your amount",
        type: "number"
    }
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
if (!fromAmount || !toAmount) {
    console.log('Invalid currency selection');
}
let convertedAmount = (amount / fromAmount) * toAmount;
console.log(convertedAmount);
console.log(fromAmount);
console.log(toAmount);
console.log(amount);
