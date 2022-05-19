// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generatePage = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
       { 
        type: "input",
        name: "name",
        message: "What is your name? (Required)",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your Name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your GitHub Username!");
          }
        },
      },
      {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your GitHub Username!");
          }
        },
      },
      {
        type: "input",
        name: "description",
        message: "Provide some information about your project",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Provide information about your project");
          }
        },
      },
      {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project? Provide a step by step process",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            return false;
          }
        },
      },
      {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use. Include screenshots as needed.",
      },
      {
        type: "checkbox",
        name: "languages",
        message: "What did you build this project with? (Check all that apply)",
        choices: [
          "JavaScript",
          "HTML",
          "CSS",
          "ES6",
          "jQuery",
          "Bootstrap",
          "Node",
        ],
      },
      {
        type: "input",
        name: "credit",
        message: "Who helped make this awesome project?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please list all collaborators");
          }
        },
      },
      {
        type: "checkbox",
        name: "license",
        message: "Choose a License",
        choices: [
          "None",
          "Apache License 2.0",
          "GNU General Public License v3.0",
          "MIT License",
          "BSD 2-Clause 'Simplified' License",
          "BSD 3-Clause 'New' or 'Revised' License",
          "Boost Software License 1.0",
          "Creative Commons Zero v1.0 Universal",
          "Eclipse Public License 2.0",
          "GNU Affero General Public License v3.0",
          "GNU General Public License v2.0",
          "Mozilla Public License 2.0",
          "The Unlicense",
        ],
      },
      {
        type: "confirm",
        name: "test",
        message: "Would you like to go the extra mile and write tests for your application? Provide examples on how to run them here",
      },
      {
          type: "input",
          name:"questions",
          message:"Please provide your email",
      }
];

    //.then((userResponse) => {
      //console.log(userResponse);
    //});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{
        if (err)
        throw err;
        console.log("Thank you for submitting details on your project!")
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput){
        console.log(userInput)
        writeToFile("README.md", generatePage(userInput));
    }); 
};

// Function call to initialize app
init();
