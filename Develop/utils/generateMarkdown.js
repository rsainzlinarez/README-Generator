// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
const licenses = {
  MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  Mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
  IBM: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
}
// return licenses[];
// if (license === 'MIT')
//   return '[![License: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

return licenses[license];
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenses = {
    MIT: '[MIT](https://opensource.org/licenses/MIT)',
    Mozilla: '[Mozilla](https://opensource.org/licenses/MPL-2.0)',
  IBM: '[IBM](https://opensource.org/licenses/IPL-1.0)',
    
  }
return licenses[license];
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 return `${renderLicenseLink(license)}
 ${renderLicenseBadge(license)}


 `;
 
}


// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, motivation, installation, usage, screenshots,repository, contributors, license}) {
  return `# ${title}
  ## Table of Contents
  - [Description](#Description)
  - [Motivation](#Motivation)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Video](#Video)
  - [Repository](#Repository)
  - [Contributors](#Contributors)
  - [License](#License)



  ## Description
    ${description}

  ## Motivation
    ${motivation}

  ## Installation
    ${installation}

  ## Usage
    ${usage}

  ## Video Link
    ${screenshots}

  ## Repository
    ${repository}

  ## Contributions
    ${contributors}

  ## License

  ${renderLicenseSection(license)}



`;
}

module.exports = generateMarkdown;
