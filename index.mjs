import inquirer from 'inquirer';
import fs from "fs/promises";

// const inquirer = require('inquirer');

let { title, description, install, usage, license } = await inquirer
    .prompt([
        {
            type: 'input',
            message: 'Title of Project: ',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Write a description for you project: ',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Give an overview of the installation process: ',
            name: 'install',
        },
        {
            type: 'input',
            message: 'Describe the usage for your application: ',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'What license did you use?',
            name: 'license',
            choices: [
                'MIT',
                'ISC',
                'The Unlicense',
                'Apache license 2.0',
            ]
        },
    ])

console.log(description)

let generateLicense = function () {
    if (license === 'MIT') {

        return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
    if (license === 'ISC') {

        return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
    }
    if (license === 'The Unlicense') {

        return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
    }
    if (license === 'Apache license 2.0') {

        return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
    }
}


let readmeText = `# ${title}
  
##Project description
  ${description}
  
  ### Installation
  ${install}

  ### Usage
  ${usage}

  ### License
  ${generateLicense(license)}

  ### Questions
  https://github.com/jgum63/readMe_JGum
  https://drive.google.com/file/d/1p13QQJe65DWpsF69OU6XUH5F1zp5vZEa/view
  `

fs.writeFile("README.md", readmeText);