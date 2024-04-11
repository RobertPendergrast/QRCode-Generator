
import inquirer from 'inquirer';
import qr from "qr-image";
import  fs from "fs";

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: 'input',
        name: 'Link',
        message: 'Please input a link for your QR Code'
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const link = (answers.Link);
    fs.writeFile("URL.txt", link, (err) => {
        if (err) throw err;
    })
    var qr_png = qr.image(link, { type: 'png'});
    qr_png.pipe(fs.createWriteStream('qr_img.png'));
  });

