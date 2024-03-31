import inquirer from "inquirer";

const calculator = await inquirer.prompt(
    [
        {
            message : "Enter Your First Value",
            type : "number",
            name : "firstNum"
        },
        {
            message : "Enter Your second Value",
            type : "number",
            name : "secondNum"
        },
        {
            message : "Select any operator",
            type : "list",
            name : "operator",
            choices : ["addition (+)", "subtraction (-)", "multiplication (*)", "division (/)", "exponenciation (^)", "remainder (%)"]
        },
    ]
);


function solution() {
    if (calculator.operator === "addition (+)") {
        console.log("Your Answer is",calculator.firstNum + calculator.secondNum);
    }
    else if (calculator.operator === "subtraction (-)") {
        console.log("Your Answer is",calculator.firstNum - calculator.secondNum);
    }
    else if (calculator.operator === "multiplication (*)") {
        console.log("Your Answer is",calculator.firstNum * calculator.secondNum);
    }
    else if (calculator.operator === "division (/)") {
        console.log("Your Answer is",calculator.firstNum / calculator.secondNum);
    }
    else if (calculator.operator === "exponenciation (^)") {
        console.log("Your Answer is",calculator.firstNum ** calculator.secondNum);
    }
    else if (calculator.operator === "remainder (%)") {
        console.log("Your Answer is",calculator.firstNum % calculator.secondNum);
    }
}
solution();



