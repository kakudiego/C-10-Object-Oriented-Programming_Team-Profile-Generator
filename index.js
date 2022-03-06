const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const OUTPUT_DIR = path.resolve(__dirname, 'finalHTML');
const outputPath = path.join(OUTPUT_DIR, 'theteam.html');

const render = require('./lib/htmlRenderer');

const team = [];

// First prompt is all the Information about the Manager
const promptManager = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Name of Team Manager:',
      },
      {
        type: 'input',
        name: 'id',
        message: 'ID of the Team Manager:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Email of the Team Manager:',
      },
      {
        type: 'input',
        name: 'office',
        message: 'Office number of the Team Manager:',
      },
    ])
    .then(function (answer) {
      let manager = new Manager(answer.name, answer.id, answer.email, answer.office);
      // console.log(manager);
      team.push(manager);
    });
};

// Select new employee or end the team
// selecting engineer and intern, will prompt questions about them
// selecting "no more team members" will generate the html with the team
const promptEmployee = () => {
  console.log(`
    ++++++++++++++++++++++++++++++++++++++++++
    Add more team members or finish your team?
    ++++++++++++++++++++++++++++++++++++++++++
    `);
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'Select new employee:',
        name: 'name',
        choices: ['Engineer', 'Intern', 'No more team members'],
      },
    ])
    .then((val) => {
      if (val.name === 'Engineer') {
        promptEngineer();
      } else if (val.name === 'Intern') {
        promptIntern();
      } else if (val.name === 'No more team members') {
        generateHTML(outputPath, render(team));
      }
    });
};

// information about the engineer
const promptEngineer = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Name of the engineer:',
      },
      {
        type: 'input',
        name: 'id',
        message: 'ID of the engineer:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Email of the engineer:',
      },
      {
        type: 'input',
        name: 'github',
        message: 'GitHub username of the engineer:',
      },
    ])
    .then(function (answer) {
      let engineer = new Engineer(answer.name, answer.id, answer.email, answer.github);
      // console.log(engineer);
      team.push(engineer);
    })
    .then(promptEmployee);
};

// information about the intern
const promptIntern = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Name of the intern:',
      },
      {
        type: 'input',
        name: 'id',
        message: 'ID of the intern:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Email fo the intern:',
      },
      {
        type: 'input',
        name: 'school',
        message: 'School of the intern:',
      },
    ])
    .then(function (answer) {
      let intern = new Intern(answer.name, answer.id, answer.email, answer.school);
      // console.log(intern);
      team.push(intern);
    })
    .then(promptEmployee);
};

// generate the html page
function generateHTML(fileName, data) {
  fs.writeFile(fileName, data, 'utf8', function (err) {
    if (err) {
      throw err;
    }
    // console.log all the data I can work with
    console.log(team);

    console.log('Team complete!');
  });
}

// call the first/manager function 'then' select employee function
promptManager().then(promptEmployee);
