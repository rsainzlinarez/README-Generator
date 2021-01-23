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

// Function returns link to demo video
function renderVideoLink(video) {
  const videoLink = {
    Demonstration: '[video]https://drive.google.com/drive/folders/17w0bxACO9XH4lnYym0ktBnk5TesSS7ZX'
  }
  return videoLink[video]

}
// Function that returns link to gitHub page
function renderGithubLink(github){
  
    const githubLink = {
      rsainzlinarez: '[rsainzlinarez GitHub](https://github.com/rsainzlinarez/README-Generator)',
    }
  return githubLink[github]
}


// TODO: Create a function to generate markdown for README
function generateMarkdown({title, license, description, motivation, installation, usage, video,repository, contributors, github }) {
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
  - [Questions](#Questions)

  ## License

  ${renderLicenseSection(license)}

  ## Description
    ${description}

  ## Motivation
    ${motivation}

  ## Installation
    ${installation}

  ## Usage
    ${usage}

  ## Video Link
    ${renderVideoLink(video)}

  ## Repository
    ${repository}

  ## Contributions
    ${contributors}

  ## Questions
    ${renderGithubLink(github)}

`;
}

module.exports = generateMarkdown;
