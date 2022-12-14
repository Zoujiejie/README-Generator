// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) { }
function renderLicense(license) {
  if (license === "") {
    return "";
  }
  else if (license === "GNU AGPLv3") {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
  } else if (license === "GNU GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "GNU LGPLv3") {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (license === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "Boost") {
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
  }
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${data.description}
  ![badge](https://img.shields.io/badge/license-${data.license}-brightorange)

  ## Table of Contents
  1. [Acceptance Criteria](#acceptance-criteria)
  2. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contribution](#contribution)
  5. [Author](#author)
  6. [Contact](#contact)

  ## Acceptance Criteria
  ![acceptance criteria](./images/acceptance-criteria.jpeg)

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  License used for this project - ${data.license}

  ## Contribution:
  Here are the steps needed if you want to contribute to this application:
  - Fork the repo
  - Create a feature branch (git checkout -b branchName)
  - Commit your new feature (git commit -m 'what you contributed')
  - Push your branch (git push)

  ## Author
  ${data.author}

  ## Contact:
  ${data.contact}
`;
}

module.exports = generateMarkdown;
