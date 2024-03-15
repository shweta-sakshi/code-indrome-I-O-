const nodemailer = require("nodemailer");

const sendMail = async (options) => {
    const transport = nodemailer.createTransport({
        host: process.env.CHEMHUB_HOST,
        port: process.env.CHEMHUB_PORT,
        // service: process.env.CHEMHUB_SERVICE,
        // secure: false,
        auth: {
            user: process.env.CHEMHUB_MAIL,
            pass: process.env.CHEMHUB_PASSWORD,
        },
    });

    const mailOption = {
        from: process.env.CHEMHUB_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message,
    }

    await transport.sendMail(mailOption);
}

module.exports = sendMail;