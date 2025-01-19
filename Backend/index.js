const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({ origin: true });

admin.initializeApp();

exports.sendMessage = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const message = req.body.message;
    if (message) {
      // Here you can handle the message, e.g., store it in Firestore or send an email
      res.status(200).send("Message received: " + message);
    } else {
      res.status(400).send("No message provided");
    }
  });
});
