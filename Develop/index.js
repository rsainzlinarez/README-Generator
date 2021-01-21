// TODO: Include packages needed for this application
const generateMarkdown = require('../Develop/utils/generateMarkdown');
const {writeFile}= require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of the project?'
  },
  {
    type: 'input',
    name: 'purpose',
    message: 'What is the purpose of the application?'
  },
  {
    type: 'input',
    name: 'repository',
    message: 'What is the repository of application'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?'
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What are the constribution guidelines?'
  },


  
  // "What is the application title?", "What is the purpose of the application?", "What are the installation instructions?", "What are the constribution guidelines?", "What are the test instructions?"

];

// const { purpose } = await inquirer.prompt({
//   input:"text",
//   message: questions[0],
//   name: "purpose"
// });
// const { installation } = await inquirer.prompt({
//   input:"text",
//   message: questions[1],
//   name: "installation"
// });
// console.log();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  writeFile(fileName, data, 'utf8', (err) => console.log('Error in write file: ', err));

}

// TODO: Create a function to initialize app
async function init() {
  const answers = await inquirer.prompt(questions);
    console.log("The answers are:", answers);
  const markdownGenerate = generateMarkdown(answers);
    console.log('generated markdown: ', markdownGenerate);
  writeToFile(answers.title + '_README.md', markdownGenerate);
}

// Function call to initialize app
init();
