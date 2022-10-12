// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license)
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      break;
    case "Apache 2.0 License":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;
    case "GLPv2":
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
      break;
    default:
      return ""
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license)  {
    case "MIT":
      return "https://opensource.org/licenses/MIT"
      break;
    case "Apache":
      return "https://www.apache.org/licenses/LICENSE-2.0"
      break;
    case "GNU GLPv2":
      return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
    default:
      return ""
      break;
  }
}

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
  
  
  ## Badges
  
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
 
  ## Questions
  
    If you have additional questions, contact\n
    GitHub: ${data.username}\n
    Email: ${data.email}\n
`;
}

module.exports = generateMarkdown;
