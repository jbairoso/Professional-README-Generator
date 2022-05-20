// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "None") {
    return ``;
  }
  if (license == "Apache License 2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (license == "GNU General Public License v3.0") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  if (license == "MIT License") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if (license == "BSD 2-Clause 'Simplified' License") {
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
  }
  if (license == "BSD 3-Clause 'New' or 'Revised' License") {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  }
  if (license == "Boost Software License 1.0") {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  }
  if (license == "Creative Commons Zero v1.0 Universal") {
    return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
  }
  if (license == "Eclipse Public License 2.0") {
    return `[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)](https://opensource.org/licenses/EPL-2.0)`;
  }
  if (license == "GNU Affero General Public License v3.0") {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
  }
  if (license == "GNU General Public License v2.0") {
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  }
  if (license == "Mozilla Public License 2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  }
  if (license == "The Unlicense") {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "None") {
    return ``;
  }
  if (license == "Apache License 2.0") {
    return `(https://opensource.org/licenses/Apache-2.0)`;
  }
  if (license == "GNU General Public License v3.0") {
    return `(https://www.gnu.org/licenses/gpl-3.0)`;
  }
  if (license == "MIT License") {
    return `(https://opensource.org/licenses/MIT)`;
  }
  if (license == "BSD 2-Clause 'Simplified' License") {
    return `(https://opensource.org/licenses/BSD-2-Clause)`;
  }
  if (license == "BSD 3-Clause 'New' or 'Revised' License") {
    return `(https://opensource.org/licenses/BSD-3-Clause)`;
  }
  if (license == "Boost Software License 1.0") {
    return `(https://www.boost.org/LICENSE_1_0.txt)`;
  }
  if (license == "Creative Commons Zero v1.0 Universal") {
    return `(http://creativecommons.org/publicdomain/zero/1.0/)`;
  }
  if (license == "Eclipse Public License 2.0") {
    return `(https://opensource.org/licenses/EPL-2.0)`;
  }
  if (license == "GNU Affero General Public License v3.0") {
    return `(https://www.gnu.org/licenses/agpl-3.0)`;
  }
  if (license == "GNU General Public License v2.0") {
    return `(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  }
  if (license == "Mozilla Public License 2.0") {
    return `(https://opensource.org/licenses/MPL-2.0)`;
  }
  if (license == "The Unlicense") {
    return `(http://unlicense.org/)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `${license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents:
  1.[Description](#description)
  2.[Installation](#installion)
  3.[Usage](#usage)
  4.[Languages](#languages)
  5.[Credit](#credit)
  6.[Licenses](#licenses)
  7.[Test](#test)
  8.[Questions](#questions)


  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Languages
  ${data.languages}

  ## Credit
  ${data.credit}

  ## Licenses

  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}

  ## Test
  ${data.test}

  ## Questions
  Please reach out to me if you have any questions:
  ${data.email}

  My GitHub
  ${data.githubName}

  ## Tutorial
  
`;
}

module.exports = generateMarkdown;
