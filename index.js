// TODO: Include packages needed for this application
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js"
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
        // Generate the README content based on the user's answers
        const readmeContent = generateMarkdown(answers);
    
        // Write the content to the README.md file
        fs.writeFile('README.md', readmeContent, (err) => {
          if (err) {
            console.log('Error creating README.md:', err);
          } else {
            console.log('README.md has been created!');
          }
        });
      })