const express = require('express');
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.post('/api/form',(req,res)=>{
    
    nodemailer.createTestAccount((err,account)=>{
        const htmlEmail = `
            <h3>Contact Details</h3>
            <ul>
                <li>Name : ${req.body.name}</li>
                <li>Name : ${req.body.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${req.body.message}</p>
        `

        let transporter = nodemailer.createTransport(({
            host: 'smtp.gmail.com',
            port:587,
            auth: {
              user: 'ergifachri@gmail.com',
              pass: 'Aeroasia05'
            }
        }));

        let mailOptions = {
            from: 'ergifachri@gmail.com',
            to: 'ergifachri@gmail.com',
            subject: 'Sending Email using Node.js[nodemailer]',
            text: 'That was easy!'
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
        });  
    })
    
})

const PORT = process.env.PORT || 3001

app.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
})