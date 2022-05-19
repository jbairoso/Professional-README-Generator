// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateReadMe= require("./src/page-template");

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"name",
        message:"What is your name? (Required)",
        validate: (nameInput) =>{
            if (nameInput){
                return true;
            }else{
                console.log("Please enter your Name!");
                return false;
            }
        },
    },
    {
        type:"input",
        name:"github",
        message:"Enter your GitHub Username",
        validate: (nameInput) => {
            if (nameInput){
                return true;
            }else{
                console.log("Please enter your GitHub Username!");
            }
        },
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
