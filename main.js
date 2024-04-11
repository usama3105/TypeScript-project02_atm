"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var myBalance = 100000;
var myPin = 54321;
console.log("Hey! Welcome to the ATM machine by Samiya.");
var pinAnswer = await inquirer_1.default.prompt([
    {
        name: "pin",
        type: "number",
        message: "Please enter your pin code"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Pin is correct! Login successfully.");
    var operationAns = await inquirer_1.default.prompt([
        {
            name: "operation",
            type: "list",
            message: "Please select any one of the operations",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw Amount") {
        var withdrawAns = await inquirer_1.default.prompt([
            {
                name: "withdrawlMethod",
                type: "list",
                message: "Please select a Withdrawl Method",
                choices: ["Fast Cash", "Enter Amount"]
            }
        ]);
        if (withdrawAns.withdrawlMethod === "Fast Cash") {
            var fastCashAns = await inquirer_1.default.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "Please select amount",
                    choices: ["1000", "2000", "5000", "10000"]
                }
            ]);
            if (fastCashAns.fastCash > myBalance) {
                console.log("Sorry, You have insufficient balance.");
            }
            else {
                myBalance -= fastCashAns.fastCash;
                console.log("".concat(fastCashAns.fastCash, " withdraw successfully!"));
                console.log("Your remaining balance is ".concat(myBalance, "."));
            }
        }
        else if (withdrawAns.withdrawlMethod === "Enter Amount") {
            var amountAns = await inquirer_1.default.prompt([
                {
                    name: "Amount",
                    type: "number",
                    message: "Enter the amount to withdraw"
                }
            ]);
            if (amountAns.Amount > myBalance) {
                console.log("Sorry, You have insufficient balance.");
            }
            else {
                myBalance -= amountAns.Amount;
                console.log("".concat(amountAns.Amount, " withdraw successfully!"));
                console.log("Your remaining balance is ".concat(myBalance, "."));
            }
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log("Your current balance is ".concat(myBalance));
    }
}
else {
    console.log("Incorrect Pin, please try again.");
}
