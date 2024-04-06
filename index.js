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
// const currencyRates = {
//     USD: 1,
//     EURO: 0.92,
//     GBP: 0.79,
//     INR: 74057,
//     PKR: 277
// };
// async function convertCurrency() {
//     try {
//         const userAnswer = await inquirer.prompt([
//             {
//                 name: "from",
//                 message: "Enter from currency",
//                 type: "list",
//                 choices: Object.keys(currencyRates)
//             },
//             {
//                 name: "to",
//                 message: "Enter to currency",
//                 type: "list",
//                 choices: Object.keys(currencyRates)
//             },
//             {
//                 name: "amount",
//                 message: "Enter your amount",
//                 type: "number"
//             }
//         ]);
//         const fromCurrency = userAnswer.from;
//         const toCurrency = userAnswer.to;
//         const amount = userAnswer.amount;
//         const fromAmount = currencyRates[fromCurrency];
//         const toAmount = currencyRates[toCurrency];
//         if (!fromAmount || !toAmount) {
//             throw new Error('Invalid currency selection');
//         }
//         const convertedAmount = (amount / fromAmount) * toAmount;
//         console.log(`Converted amount: ${convertedAmount} ${toCurrency}`);
//         console.log(`From Amount Rate: ${fromAmount}`);
//         console.log(`To Amount Rate: ${toAmount}`);
//         console.log(`Amount: ${amount}`);
//     } catch (error) {
//         console.error('Currency conversion failed:', error.message);
//     }
// }
