const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "ayte2024@outlook.com",
    pass: "12345678ayte",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function main() {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Maria Troyano👻" <ayte2024@outlook.com>', // sender address
    to: "afbravo.p5@gmail.com , maria2020troyano@gmail.com", // list of receivers
    subject: "Aqui va el asunto desde microsoft", // Subject line
    text: "En un diario personal se anotan sueños, mentiras, pensamientos y reflexiones, así como los hechos más importantes que se dan cada día. Utiliza formas de expresión coloquial y puede hacer uso de las modalidades de elocución narrativa, descriptiva,", // plain text body
    html: "<b></b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);
