var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
var path = require("path");
const creds = require("./config");

const app = express();
const PORT = process.env.PORT || 5000;

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, 'client/build')));
//     app.get('*', function(req, res) {
//         res.sendFile(path.join(__dirname+'/client/build/index.html'));
//     });
// }
// app.use(express.static(path.join(__dirname, 'client/build')));
// app.use('/static', express.static(path.join(__dirname, 'client/build')));

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

router.post("/send", (req, res, next) => {
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

    transporter.sendMail(mail, (err, data) => {
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

app.use(express.static(path.join(__dirname, 'client/build')));
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
// app.get('*', function(req, res) {
//     res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

app.use(express.json());
app.use("/", router);
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});

