const nodemailer   = require('nodemailer');

function greetUser(user) {
    var HTMLTemplate ="<h1>This is the template</h1>";
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
                user: '3essenn@gmail.com',
                // user: process.env.COMPANYMAIL,
                pass: '3essenn123'
                // pass: process.env.COMANYPASS
            }
    });
    const mailOptions = {
        from: '3essenn@gmail.com', 
        to: 'soham14501@gmail.com',
        subject: 'Namaste Guddu Bhaiya',
        // subject: `Welcome ${user.firstName} ${user.lastName} to 3EssEnn`,
        // TODO styled html for geeting mail.active
        //! email confirmation code
        html: '<h1>Welcome to our site</h1>'
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if(err){
            console.log(err)
        } else {
            console.log('Email sent :',info);
        }
    });
}

// greetUser();
// module.exports = greetUser;
