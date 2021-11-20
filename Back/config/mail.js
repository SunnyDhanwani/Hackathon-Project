const nodemailer = require("nodemailer");


// sending email logic
module.exports = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: "61b80f1f1f7ae1", // generated ethereal user // give in string
        pass: "8f59828a6ca678", // generated ethereal password // give in string
    },
});
