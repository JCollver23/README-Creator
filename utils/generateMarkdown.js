// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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
function renderLicenseSection(license) {
  // If no license is provided, return an empty string
  if (!license) {
    return '';
  }

  // Get the license badge and link based on the selected license
  const badge = renderLicenseBadge(license);
  const link = renderLicenseLink(license);

  // Return the formatted license section
  return `
## License
This project is licensed under the ${license} License.

${badge}
${link}
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);
  return `# ${data.title}
 ${licenseBadge}
  ${licenseLink}
  ${licenseSection}
`;
}