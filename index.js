// TODO: Include packages needed for this application
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";
import fs from "fs";

// TODO: Create an array of questions for user input

const questions = [
        {
          type: 'input',
          name: 'title',
          message: 'Enter your project title:',
        },
        {
          type: 'input',
          name: 'description',
          message: 'Enter a description of your project:',
        },
        {
          type: 'input',
          name: 'installation',
          message: 'Enter installation instructions:',
        },
        {
          type: 'input',
          name: 'usage',
          message: 'Enter usage information:',
        },
        {
          type: 'list',
          name: 'license',
          message: 'Choose a license for your project:',
          choices: ['MIT', 'GPL 3.0', 'Apache 2.0', 'no license'],
        },
        {
          type: 'input',
          name: 'contributing',
          message: 'Enter contribution guidelines:',
        },
        {
          type: 'input',
          name: 'tests',
          message: 'Enter test instructions:',
        },
        {
          type: 'input',
          name: 'github',
          message: 'Enter your GitHub username:',
        },
        {
          type: 'input',
          name: 'email',
          message: 'Enter your email address:',
        }
      ];

      inquirer.prompt(questions)
      .then((answers) => {
        console.log(answers);
        const README = generateREADME(answers);
        writeToFile('README.md', README);
      });
    


// Function call to initialize app
init();

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data, (err) =>
//       err ? console.error(err) : console.log('README.md created!')
//   );
// }

      // Generate README content
//       const generateREADMEContent = (answers) => {
//         const { title, description, installation, usage, license, contributing, tests, github, email } = answers;
//         return `
//       # ${title}

//       ## Description
//       ${description}
      
//       ## Table of Contents
//       1. [Description](#description)
//       2. [Installation](#installation)
//       3. [Usage](#usage)
//       4. [License](#license)
//       5. [Contributing](#contributing)
//       6. [Tests](#tests)
//       7. [Questions](#questions)
      
//       ## Installation
//       ${installation}
      
//       ## Usage
//       ${usage}
      
//       ## License
//       This project is licensed under the ${license} License.
      
//       ## Contributing
//       ${contributing}
      
//       ## Tests
//       ${tests}
      
//       ## Questions
//       For any questions, you can reach out to me at [GitHub: ${github}](https://github.com/${github}) or via email at ${email}.
//         `;
//       };