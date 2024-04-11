import inquirer from "inquirer";

let myBalance = 100000; 
let myPin = 54321;

console.log("Hey! Welcome to the ATM machine by Samiya.");

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Please enter your pin code"
    }
])
if(pinAnswer.pin === myPin){
    console.log("Pin is correct! Login successfully.");

    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Please select any one of the operations",
            choices: ["Withdraw Amount", "Check Balance"]
        }
    ])

    if(operationAns.operation === "Withdraw Amount"){
        let withdrawAns = await inquirer.prompt([
            { 
                name: "withdrawlMethod",
                type: "list",
                message: "Please select a Withdrawl Method",
                choices: ["Fast Cash", "Enter Amount"]
            }
        ])

        if(withdrawAns.withdrawlMethod === "Fast Cash"){
            let fastCashAns =  await inquirer.prompt([
                {
                    name: "fastCash",
                    type: "list",
                    message: "Please select amount",
                    choices: ["1000", "2000", "5000", "10000"]
                }
            ])  

            if(fastCashAns.fastCash > myBalance){
                console.log("Sorry, You have insufficient balance.")
            }
            else{
                myBalance -= fastCashAns.fastCash
                console.log(`${fastCashAns.fastCash} withdraw successfully!`)
                console.log(`Your remaining balance is ${myBalance}.`)
            }
        }
        else if (withdrawAns.withdrawlMethod === "Enter Amount"){
             let amountAns = await inquirer.prompt([
                 {
                    name: "Amount",
                    type: "number",
                    message: "Enter the amount to withdraw"
                 }
            ])
            if(amountAns.Amount > myBalance){
                    console.log("Sorry, You have insufficient balance.")
            }
            else{
                myBalance -= amountAns.Amount
                console.log(`${amountAns.Amount} withdraw successfully!`)
                console.log(`Your remaining balance is ${myBalance}.`)
            }
        }
    }
    else if(operationAns.operation === "Check Balance"){
        console.log(`Your current balance is ${myBalance}`)
    }
}
else{
    console.log("Incorrect Pin, please try again.")
}
