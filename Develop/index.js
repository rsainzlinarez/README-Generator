// TODO: Include packages needed for this application
const generateMarkdown = require('../Develop/utils/generateMarkdown');
const {writeFile}= require('fs');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of the application?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project?',
  },
  {
    type: 'input',
    name: 'motivation',
    message: 'What is the motivation behind the application?'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What is the installation process for this application?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How is this application used?'
  },
  {
    type: 'input',
    name: 'screenshots',
    message: 'Provide a scrrenshot for this application?'
  {
    type: 'input',
    name: 'repository',
    message: 'What is the repository name of the application?'
  },
  {
    type: 'input',
    name: 'contributors',
    message: 'Who contributed to the creation of this application?'
  },
  {
    type: 'input',
    name: 'License',
    message: 'List licenses for this application?'
  }


  
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
