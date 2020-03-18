const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();
const path = require("path");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/form", (req, res) => {
  var name = req.body.name;
  var from = req.body.email;
  var msg = req.body.message;
  var to = "*****"; // put receiver email here
  const htmlEmail = `
      <h3>Contact Details</h3>
        <ul>
          <li>Name: ${req.body.name}</li>
          <li>Email: ${req.body.email}</li>
        </ul>
      <h3>Message</h3>
        <p>${req.body.message}</p>
    `;

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "*******", // put your email here
      pass: "******" // put your password here
    }
  });
  let mailOptions = {
    from: from,
    to: to,
    subject: "Contact Site",
    text: req.body.message,
    html: htmlEmail
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log("erro");
      return console.log(err);
    }
    console.log("Message Sent %s", info.message);
    console.log("Message URL: %s", nodemailer.getTestMessageUrl(info));
  });

  console.log(req.body);
});

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
