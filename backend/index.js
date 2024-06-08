
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const nodemailer = require("nodemailer");

const data = express()
data.use(express.json())
data.use(express.urlencoded({ extended: true }))
data.use(cors());

const mongoose = require('mongoose');
mongoose.connect(process.env.MANGO_URI)
    .then((info) => {
        console.log('Successfully connected to MongoDB Atlas');
    })
    .catch((error) => {
        console.error('Failed to connect to MongoDB Atlas');
    });


data.post('/sendmail', function (req, res) {
    const mail = req.body.mail;
    console.log(mail);
    const crediential = mongoose.model('crediential', {}, 'Mail')
    crediential.find().then(function (data) {
        console.log(data[0].toJSON())
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // Use `true` for port 465, `false` for all other ports
            auth: {
              user: data[0].toJSON().user,
              pass: data[0].toJSON().pass
            },
          });
        transporter.sendMail({
            from: 'aswin.s2101@gmail.com',
            to: mail,
            subject: 'Thanks for purchase ZigZag',
            text: 'Your order will be Deliverd in 2 or 3 days thanks for shopping!!!!!!!!!!'
        }, function (error, info) {
            if (error) {
                res.send(false)
            } else {
                res.send(true)
            }
        });
    }).catch(function (item) {
        res.send('something went wrong')
    })


   
});

data.listen(process.env.PORT, function () {
    console.log('server started.........')
})

