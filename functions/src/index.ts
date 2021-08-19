const rp = require('request-promise');
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });

admin.initializeApp();

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'albert.cieplinski@gmail.com',
    pass: 'bxqrptldwvxdhnqz'
  }
});

exports.sendMail = functions.https.onRequest((req: any, res: any) => {
  cors(req, res, () => {

    // getting dest email by query string
    const dest = req.query.dest;

    const mailOptions = {
      from: 'New DevBoosters Client <albert.cieplinski@gmail.com>',
      to: dest,
      subject: 'Let me give you my money', // email subject
      html: `<p style="font-size: 16px;">Pickle Riiiiiiiiiiiiiiiick!!</p>
                <br />
                <img src="https://images.prod.meredith.com/product/fc8754735c8a9b4aebb786278e7265a5/1538025388228/l/rick-and-morty-pickle-rick-sticker" />
            ` // email content in HTML
    };

    // returning result
    return transporter.sendMail(mailOptions, (error: any, info: any) => {
      if (error) {
        return res.send(error.toString());
      }
      return res.send('Sent');
    });
  });
});

exports.checkRecaptcha = functions.https.onRequest((req: any, res: any) => {
  const response = req.query.response
  console.log("recaptcha response", response)
  rp({
    uri: 'https://recaptcha.google.com/recaptcha/api/siteverify',
    method: 'POST',
    formData: {
      secret: '6LcTw7kUAAAAAFfpEDhdYO2CMnOMAcuZ3KalDc8U',
      response: response
    },
    json: true
  }).then((result: any) => {
    console.log("recaptcha result", result)
    if (result.success) {
      res.send("You're good to go, human.")
    }
    else {
      res.send("Recaptcha verification failed. Are you a robot?")
    }
  }).catch((reason: any) => {
    console.log("Recaptcha request failure", reason)
    res.send("Recaptcha request failed.")
  })
})
