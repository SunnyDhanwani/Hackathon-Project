const transporter = require("./mail");

// sending email 
module.exports = async({to,subject,text,html}) => {
    await transporter.sendMail({
        from: 'dhanwanisunny6745@gmail.com', // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
        html: html, // html body
    });
}
