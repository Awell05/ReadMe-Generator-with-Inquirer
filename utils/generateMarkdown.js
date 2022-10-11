// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license)
  switch (license) {
    case "MIt":
      return "MIT LIcense"
      break;
    case "Apache":
      return "Apache license badge"
      break;
    default:
      return "No License Selected"
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description

  ${data.description}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  ${data.installation}
  
  ## Usage
  
  ${data.usage}

  ## How to Contribute

  ${data.contribution}

  ## Tests
  
  ${data.tests}

  ## License
  
  ${data.license}
  
  🏆 
  
  ## Badges
  
  ${renderLicenseBadge(data.license)}
 
  ## Questions
  
    If you have additional questions, contact me:\n
    GitHub: ${data.username}\n
    Email: ${data.email}\n
`;
}

module.exports = generateMarkdown;
