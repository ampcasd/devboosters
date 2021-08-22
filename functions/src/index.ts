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
    const clientName = req.query.name;
    const clientEmail = req.query.email;

    const mailOptions = {
      from: `${clientName} <${clientEmail}>`,
      to: 'albert.cieplinski@gmail.com',
      subject: 'New DevBoosters Client', // email subject
      html: `<p style="font-size: 16px;">Hi, I'm ${clientName}. Let me give you my money.</p>
                <br />
                <img src="https://i.giphy.com/media/3o6gDWzmAzrpi5DQU8/200w.webp" />
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

exports.saveMail = functions.https.onCall((data: any, context: any) => {
  // context.app will be undefined if the request doesn't include a valid
  // App Check token.
  if (context.app == undefined) {
    throw new functions.https.HttpsError(
        'failed-precondition',
        'The function must be called from an App Check verified app.')
  }

  console.log(data);

  functions.firestore.collection('emails').add({
    data
  })
    .then((docRef: any) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error: any) => {
      console.error('Something went terribly wrong :(', error);
    });
  
  // Your function logic follows.
});
