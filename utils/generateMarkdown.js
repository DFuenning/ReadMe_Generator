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
      `## License

This project is licensed under the ${license} license.`
    )
  }
  return ''
}

// Development will happen in generate markdown
function generateMarkdown(data) {
  return `
# ${data.title}: 

## Table of Contents:
[Badges](#Badges)   
[Description](#Description)  
[Instal](#Installation)  
[Usage](#Usage)  
[Contributions](#Contributions)  
[Tests](#Tests)  
[License](#License)
[Email](#Profile)

## Project Description:
${data.description}

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
`;
}





module.exports = generateMarkdown;
