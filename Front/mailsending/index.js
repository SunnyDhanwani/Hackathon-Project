const sendEmail = require("./sendmail");

async function xyz(){
    await sendEmail({
        to: "sunnydhanwani678@gmail.com",
        subject: "Verification Email",
        text: "Verification Email for entering masai school",
        html: "<h1>Verification Email</h1>"
    });
    console.log("done");
}

xyz();