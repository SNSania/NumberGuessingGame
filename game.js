import chalk from "chalk";
import inquirer from "inquirer";
let str = 'Yes';
while (str == 'Yes') {
    const systemGeneratedNo = Math.floor(Math.random() * 20);
    const answer = await inquirer.prompt([
        {
            type: 'number',
            name: 'userguess',
            message: "write your guess between 1 to 20:"
        }
    ]);
    const { userguess } = answer;
    console.log(userguess, "userguess", systemGeneratedNo, "Autogenrated");
    if (userguess === systemGeneratedNo) {
        console.log(">>>>>Good Job<<<<< \n You Won!");
    }
    else {
        console.log(">>>>>Wrong<<<<< \n Better Luck Next Time");
    }
    let guess = "right/wrong";
    if (userguess === systemGeneratedNo) {
        console.log("Do you want to play again");
    }
    else if (userguess != systemGeneratedNo) {
        console.log("Try Again");
    }
    if (userguess === systemGeneratedNo) {
        console.log(chalk.whiteBright(`guess = ${'right'}`));
    }
    else {
        console.log(chalk.greenBright(`guess = ${'wrong'}`));
    }
    let user = await inquirer.prompt({
        type: 'list',
        name: "Redo",
        message: chalk.bgGreen.redBright.bold('Do you want to guess again?'),
        choices: ['Yes', 'No']
    });
    str = user.Redo;
}
