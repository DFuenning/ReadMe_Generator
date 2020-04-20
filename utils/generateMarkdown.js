function generateProjectUrl(github, title) {
  const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${kebabCaseTitle}`;
}

function renderLicenseBadge(license, github, title) {
  if (license !== "None") {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(github, title)})`
  }
  return ''
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `This project is licensed under the ${license} license.`
    )
  }
  return ''
}

// Development will happen in generate markdown
function generateMarkdown(data) {
  return `
# ${data.title}: 

## Table of Contents:
  1. [Badges](#Badges)   
  2. [Description](#Description)  
  3. [Instal](#Installation)  
  4. [Usage](#Usage)  
  5. [Contributions](#Contributions)  
  6. [Tests](#Tests)  
  7. [Profile](#Email)

## Project Description:
${data.description}

# License Badge and Description
${renderLicenseBadge(data.license, data.username, data.title)}
${renderLicenseSection(data.license)}

## Module Installation:
${data.install}

## Command Line Usage:
${data.usage}

## Contribution to Project: 
${data.contribution}

## Tests:
${data.tests}


## Dev Profile:
Username: ${data.username}
Email: ${data.email}
![Profile Image](${data.avatar_url})


`;
}





module.exports = generateMarkdown;
