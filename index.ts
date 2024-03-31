#! /usr/bin/env node

import inquirer from "inquirer";

let mybalance: number = 20000;
let mypincode: number = 1252;

console.log(`
`);
console.log(`WELCOME TO BANK AL-AJU`);
console.log(`======================
`);
console.log(`You Current Balance is ${mybalance}
`);

let pinanswer = await inquirer.prompt([
  {
    message: "Please Enter your Pin:",
    type: "type",
    name: "PinAnswer",
  },
]);

if (pinanswer.PinAnswer == mypincode) {
  console.log("Pin Accepted ✅");
  console.log(`
`);

  let options = await inquirer.prompt({
    message: "Please Select one of the Option to get started",
    type: "list",
    name: "Option",
    choices: ["Cash Withdrawl", "Check Balance"],
  });

  console.log(`
`);

  if (options.Option == "Check Balance") {
    console.log(`Your Current Balance is ${mybalance}.`);
  }

  if (options.Option == "Cash Withdrawl") {
    let WtihdrawOptions = await inquirer.prompt([
      {
        message: "Choose one Option to Continue",
        type: "list",
        name: "WithdrawOption",
        choices: ["Fast Cash", "Enter Amount Manually"],
      },
    ]);

    console.log(`
  `);

    if (WtihdrawOptions.WithdrawOption == "Enter Amount Manually") {
      let manually = await inquirer.prompt([
        {
          message: "Enter Amount Manually (Min.500):",
          type: "number",
          name: "Manually",
        },
      ]);

      if (manually.Manually >= mybalance) {
        console.log(`Insufficient Balance`);
      }
      if (manually.Manually < 500) {
        console.log(`Sorry! Minimum Withdrawl Amount is 500.`);
      } else
        console.log(`
Cash Withdraw Successfully✅

=========================================================
Your Remaining balance is ${mybalance - manually.Manually}. 
=========================================================

`);
    }

    if (WtihdrawOptions.WithdrawOption == "Fast Cash") {
      let fastCash = await inquirer.prompt([
        {
          message: "Choose one of the Amount to Withdraw",
          type: "list",
          name: "fastCashOptions",
          choices: ["1000", "2000", "5000", "10000", "25000"],
        },
      ]);

      if (fastCash.fastCashOptions == "1000") {
        console.log(`
    Cash Withdraw Successfully✅
    `);

        console.log(`
    =========================================================
    Your Remaining Balance is ${mybalance - 1000}
    =========================================================`);
      } else if (fastCash.fastCashOptions == "2000") {
        console.log(`
    Cash Withdraw Successfully✅
    `);

        console.log(`
    =========================================================
    Your Remaining Balance is ${mybalance - 2000}.
    =========================================================`);
      } else if (fastCash.fastCashOptions == "5000") {
        console.log(`
    Cash Withdraw Successfully✅
    `);

        var panchhazar = mybalance - 5000;

        console.log(`
    =========================================================
    Your Remaining Balance is ${panchhazar}.
    =========================================================`);
      } else if (fastCash.fastCashOptions == "10000") {
        console.log(`
    Cash Withdraw Successfully✅
    `);

        var dashazar = mybalance - 10000;

        console.log(`
    =========================================================
    Your Remaining Balance is ${dashazar}.
    =========================================================`);
      } else if (fastCash.fastCashOptions > mybalance) {
        console.log(`Insufficient Balance`);
      }
    }
  }
} else console.log(`Incorrect Pin ❌`);
