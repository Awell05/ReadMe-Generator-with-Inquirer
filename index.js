// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = require("./utils/questions")
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // fs.writeFile(fileName, generateMarkdown(data), (err) =>
    //     err ? console.error(err) : console.log('Success!'))
    try {
        fs.writeFile(fileName, generateMarkdown(data))
        console.log("Success")
    } catch (error) {
        console.log(error)
    }
}

// TODO: Create a function to initialize app
async function init() {
    var answers = await inquirer.prompt(questions)
    console.log(answers)
    writeToFile('./output/README.md', answers)
}

// Function call to initialize app
init();
