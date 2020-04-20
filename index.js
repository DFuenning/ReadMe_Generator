const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [{
        type: "input",
        message: "Enter a project title:",
        name: "title"
    },
    {
        type: "input",
        message: "Describe your project:",
        name: "description"
    },
    {
        type: "input",
        message: "What modules need to be installed for your project:",
        name: "install"
    },
    {
        type: "input",
        message: "What command must be run for this project?:",
        name: "command"
    },
    {
        type: "input",
        message: "What are your contribution preferences?:",
        name: "contribution"
    },
    {
        type: "input",
        message: "Are there tests to run? If so, enter:",
        name: "tests",
    },
    {
        type: "input",
        message: "How do you use this project?:",
        name: "usage"
    },
    {
        type: "input",
        message: "Enter your GitHub username:",
        name: "username"
    },
    {
        type: "input",
        message: "Enter your Github Email:",
        name: "email"
    },
    {
        type: "list",
        message: "License Selection:",
        name: "license",
        choices: ['MIT', 'Apache', 'GPL']
    },
];

function writeToFile(input) {
    fs.writeFile("README.md", input, function (err) {
        if (err) {
            throw err;
        }
    });
}

function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            api.getUser(data.username)
                .then(function (input) {
                    writeToFile(generateMarkdown(data, input))
                });
        });
}

init();