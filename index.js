// need fs and  inquirer

const inquirer = require('inquirer');
const fs = require('fs');
const writeHtml = ({name, location, github}) => {
    console.log('response', response)
    // if add curly bracket then need to add return for html down below //
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <p>${'response',name}</p>
        <p>${'response', location}</p>
        <p>${'response', github}</p>
    </div>
</body>
</html>`
}
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Where do you live?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'What is your Github?:',
      name: 'Github',
    },
  ])
  .then((response) => {
  const htmlContent = writeHtml(response)
  console.log(htmlContent);
   fs.writeFile('index.html'.htmlContent, (err) =>
   err ? console.error(err) : console.log('success!'));

  });
