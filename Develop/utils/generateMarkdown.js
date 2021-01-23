// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return 'Awesome homework';
}


// TODO: Create a function to generate markdown for README
function generateMarkdown({title, description, motivation, screenshots, installation, usage,repository, contributors, license}) {
  return `# ${title}
  # Table of Contents
  - [Description](#Description)
  - [Motivation](#Motivation)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Screenshots](#Screenshots)
  - [Repository](#Repository)
  - [Contributors](#Contributors)
  - [License](#License)



  ## Description
    ${motivation}
  ## Motivation
    ${installation}

  ## ScreenShots
    ${repository}
  ## Installation
    ${contributors}
  ## Usage
    ${motivation}
  ## Repository
    ${repository}

  ## Contributions
    ${motivation}
  ## Credits
    ${motivation}
  ## License

  ${renderLicenseSection(license)}

`;
}

module.exports = generateMarkdown;
