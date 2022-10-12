// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs').promises;
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = require("./utils/questions")


// TODO: Create a function to write README file  THIS IS A COMMENT
function writeToFile(fileName, data) {
    try {
        fs.writeFile(fileName, generateMarkdown(data))
    } catch (error) {
        console.log(error)
    }
}

// // TODO: Create a function to initialize app  
async function init() {
    var answers = await inquirer.prompt(questions)
    writeToFile('./output/README.md', answers)
}

// // Function call to initialize app  THIS IS A COMMENT
init();
