/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
        type: 'input',
        name: 'userURL',
        message: 'What URL would you like to create a QR code with?'
    }
  ])
  .then((answers) => {
    var qrPng = qr.image(answers.userURL, { type: 'png'});
    qrPng.pipe(fs.createWriteStream('qr-url.png'));
    console.log("A QR code has been created for you and stored in qr-url.png.");
    fs.writeFile("userInput.txt", answers.userURL, (err) => {
        if (err) throw err;
        console.log("Your response has been recorded to userInput.txt.");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.log("Something else went wrong");
    }
  });