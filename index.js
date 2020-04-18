const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    //add questions
];

function writeToFile(fileName, data) {
    //setup writefile
}

function init() {
    //build out intialize

}

init();
