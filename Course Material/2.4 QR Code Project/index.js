/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      type: "input",
      name: "urlAddress",
      message: "Enter the url: ",
    },
  ])
  .then((answers) => {
    console.log("answer", answers["urlAddress"]);
    const my_qr_img = qr.image(answers["urlAddress"], { type: "png" });
    my_qr_img.pipe(fs.createWriteStream("qr.png"));
    fs.writeFile("url.txt", answers["urlAddress"], (err) => {
      // In case of a error throw err.
      if (err) throw err;
      else console.log("Data Saved!");
    });
  })
  .catch((error) => {
    console.error(error);
  });
