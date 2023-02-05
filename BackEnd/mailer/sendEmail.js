const { createTransport } = require("nodemailer");

const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: true,
    service: "Gmail",
    auth: {
        user: "animalsociety.lym@gmail.com",
        pass: "uvrqyayewutbspyb"
    },
    tls: {
        ciphers:'SSLv3'
    }
});

const welcomeEmail = async (email, username, url) => {
    await transporter.sendMail({
        from: '"AnimalSociety" <animalsociety.lym@gmail.com>',
        to: email,
        subject: "Welcome to Animal Society",
        text: `Here: ${url}`,
    })
}

module.exports = { welcomeEmail }