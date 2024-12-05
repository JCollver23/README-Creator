// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license)

  return `
  
  # ${data.title}
  
  ${licenseBadge}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  1. [Description](#description)
  2. [installation](#installation) 
  3. [usage](#usage)
  4. [license](#license)
  5. [contributing](#contributing)
  6. [tests](#tests)
  7. [contact](#contact)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  ${licenseSection} ${licenseLink}
  
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  
  ${data.tests}
  
  ## Contact

  Please reach out if you have any questions:

  Github [${data.github}](https://github.com/${data.github})
  Email: ${data.email}
  `;

}

function renderLicenseBadge (license) {
  switch (license) {
    case 'MIT':
      return '![License](https://img.shields.io/badge/license-MIT-green)';
    case 'GPL 3.0':
      return '![License](https://img.shields.io/badge/license-GPL%203.0-blue)';
    case 'Apache 2.0':
      return '![License](https://img.shields.io/badge/license-Apache%202.0-blue)';
    default:
      return '';
  }
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[MIT License](https://opensource.org/licenses/MIT)';
    case 'GPL 3.0':
      return '[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)';
    case 'Apache 2.0':
      return '[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)';
    default:
      return '';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, badge, link) {
  if (!license || !badge || !link) {
    return '';
  }
};

export default generateMarkdown;
