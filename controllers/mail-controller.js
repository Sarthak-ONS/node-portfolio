"use strict";
const nodemailer = require("nodemailer");

async function main() {


    var nodemailer = require('nodemailer');
    let transporter = nodemailer.createTransport({
        service: "hotmail",
        host: 'smtp.office365.com',
        encoding: "STARTTLS",
        port: 587,
        auth: {
            user: "herculesproject6@hotmail.com",
            pass: "hercules6@6",

        },
    });

    await transporter.sendMail(
        {
            from: "herculesproject6@hotmail.com",
            to: 'agarwalsarthak456@gmail.com',
            subject: "Thanks for Contacting Sarthak",
            text: 'Hello World'

        },
        (err, inf) => {
            console.log(err);
            console.log(inf);
        }
    );

}


try {
    main();
} catch (error) {
    console.log(error);

}