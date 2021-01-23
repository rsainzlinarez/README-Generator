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
    type: 'list',
    name: 'license',
    message: 'List licenses for this application?',
    choices: ['MIT', 'Mozilla', 'IBM']
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
    choices: 'What is the installation process for this application?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How is this application used?'
  },
  {
    type: 'list',
    name: 'video',
    message: 'Provide a demo video for this application?',
    choices: ['Demonstration']
  },
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
    type: 'list',
    name: 'github',
    message: 'Where to go for answering questions?',
    choices: ['rsainzlinarez']
  }
  
];

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
