const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./src/generate-site');
const Engineer = require('./lib/Employee');
const Engineer = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Engineer = require('./lib/Intern');

const promptManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name', // need to change to manager
      message: 'Enter the name of Team Manager: (Required)',
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the name of the Manager!');
          return false;
        }
      },
    },
    {
      type: 'input',
      name: 'ID',
      message: 'Enter the employee ID of Team Manager: (Required)',
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the employee ID!');
          return false;
        }
      },
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter the email of Team Manager: (Required)',
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the name of the Manager!');
          return false;
        }
      },
    },
    {
      type: 'input',
      name: 'office',
      message: 'Enter the office number of Team Manager: (Required)',
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter the office number!');
          return false;
        }
      },
    },
  ]);
};

const promptEmployee = (employeeData) => {
  console.log(`
==================
Add a New Employee
==================
`);

  // If there's no 'projects' array property, create one
  if (!employeeData.projects) {
    employeeData.projects = [];
  }
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter the name of the Engineer: (Required)',
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter the name of the Engineer!');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project (Required)',
        validate: (descriptionInput) => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('You need to enter a project description!');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter the Employee email: (Required)',
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter the email!');
            return false;
          }
        },
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        },
      },
      {
        type: 'confirm',
        name: 'confirmAddProject',
        message: 'Would you like to enter another project?',
        default: false,
      },
    ])
    .then((managerData) => {
      employeeData.projects.push(managerData);
      if (managerData.confirmAddProject) {
        return promptEmployee(employeeData);
      } else {
        return employeeData;
      }
    });
};

promptManager()
  .then(promptEmployee)
  .then((employeeData) => {
    return generatePage(employeeData);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .then((writeFileResponse) => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then((copyFileResponse) => {
    console.log(copyFileResponse);
  })
  .catch((err) => {
    console.log(err);
  });
