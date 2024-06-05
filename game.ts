#! /usr/bin/env node
import inquirer from "inquirer";



 const RandomNum = Math.floor(Math.random() *6 +1);

const answers = await inquirer.prompt([
{
name:"UserGuessedNumber",
type:"number",
message:"Please Guess a Number between 1-6",


}

]);
if (answers.UserGuessedNumber ===  RandomNum){
    console.log("congatratulations you guessed a right number")
}else {
    console.log("you guessed a wrong number")
};