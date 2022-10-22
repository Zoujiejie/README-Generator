// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        message: "Please enter description of your project:",
        name: "description",
    },

    {
        type: "input",
        message: "What are the installation instructions for your project?",
        name: "installation",
    },
    {
        type: "input",
        message: "What are the instructions to use your project??",
        name: "usage",
    },
    {
        type: "list",
        name: "license",
        message: "Please select the license you used for this project.",
        choices: [
            "GNU AGPLv3",
            "GNU GPLv3",
            "GNU LGPLv3",
            "Mozilla",
            "MIT",
            "Apache",
            "Boost",
        ],
    },
    {
        type: "input",
        message: "Please explain how other developers or resources might contribute to your project?",
        name: "contribution",
    },
    {
        type: "input",
        name: "author",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "contact",
        message: "Please list how to contact you for those who have questions",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, error => {
        if (error) {
          return console.log('Sorry there was an error : ' + error);
        }
      })
 }
 const createReadMe = util.promisify(writeToFile);

// TODO: Create a function to initialize app
async function init() {
    try {
      const answers = await inquirer.prompt(questions);
      console.log('Thank you! The current input is being logged into your README.md: ', answers);

      const myMarkdown = generateMarkdown(answers);
      console.log(myMarkdown);
  
      await createReadMe('README1.md', myMarkdown);
      
    } catch (error) {
      throw error;
    }
  };

// Function call to initialize app
init();
