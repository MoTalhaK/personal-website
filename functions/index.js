const functions = require('firebase-functions');
const cors = require('cors')({origin: true});

// var express = require("express");
// var router = express.Router();
var nodemailer = require("nodemailer");
// var path = require("path");
const creds = require("./config");
const admin = require("firebase-admin");
admin.initializeApp();

var transport = {
    host: "smtp.gmail.com",
    port: 587,
    auth: {
        user: creds.USER,
        pass: creds.PASS
    }
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take messages.");
    }
});

exports.send = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        var name = req.body.name;
        var email = req.body.email;
        var message = req.body.message;
        var content = `name: ${name} \n email: ${email} \n message: ${message} `;

        var mail = {
            from: name,
            to: "mkhokhar572@gmail.com",
            subject: "New message from contact form",
            text: content
        };

        return transporter.sendMail(mail, (err, info) => {
            if (err) {
                res.json({
                    status: "fail"
                })
            } else {
                res.json({
                    status: "success"
                })
            }
        });
    });
});

// router.post("/send", (req, res, next) => {
//     var name = req.body.name;
//     var email = req.body.email;
//     var message = req.body.message;
//     var content = `name: ${name} \n email: ${email} \n message: ${message} `;
//
//     var mail = {
//         from: name,
//         to: "mkhokhar572@gmail.com",
//         subject: "New message from contact form",
//         text: content
//     };
//
//     transporter.sendMail(mail, (err, data) => {
//         if (err) {
//             res.json({
//                 status: "fail"
//             })
//         } else {
//             res.json({
//                 status: "success"
//             })
//         }
//     });
// });

