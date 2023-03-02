import inquirer from 'inquirer';

// inquirer
//     .prompt([
//         {
//             name: 'faveReptile',
//             message: 'What is your favorite food?',
//             default: 'Pizza',
//         },
//         {
//             name: 'faveColor',
//             message: 'What is your favorite color?',
//             default: '#008f68',
//         },
//     ])
//     .then((answers) => {
//         console.info('Answers:', answers);
//     });

//     const inquirer = require('inquirer');

// inquirer
//     .prompt([
//         {
//             type: 'list',
//             name: 'reptile',
//             message: 'Which is better?',
//             choices: ['alligator', 'crocodile'],
//         },
//     ])
//     .then((answers) => {
//         console.info('Answer:', answers.reptile);
//     });

inquirer
    .prompt([
        {
            type: 'input',
            name: 'userName',
            message: 'plz insert your username ?',
        },
        {
            type: 'confirm',
            name: 'continue',
            message(answers) {
                return `${answers.userName} , do you want to coninue ?`;
            },
            default: 'yes',
        },
        {
            type: 'list',
            name: 'favColor',
            message(answers) {
                return `ok ${answers.userName} , plz choose your favorite color ?`;
            },
            choices: ['blue', 'red', 'orange'],
            when(answers) {
                return answers.continue;
            },
        },
    ])
    .then((answers) => {
        console.info('Answers:', answers);
    });
