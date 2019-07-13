
nodemailer= require('nodemailer')

var DOA = require('../DOAManager/queries')
var client = require('twilio')("AC9b96166cac30f6fe0a6df2961494b13a", "3248c2afc8cad0dab8eb8cd2e8ff145f")

function sendemail(data,sub,text)
{
    return new Promise((resolve,reject)=>
    {
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'sahil.codebrew@gmail.com',
      pass: 'Raags#786'
    }
  });
  
  var mailOptions = {
    from: 'sahil.codebrew@gmail.com',
    to: data.emailAddress||data.email,
    subject : sub,
    text: text
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      //console.log(error);
      reject(error)
    } else {
      resolve('success')
    }
   });
  })
}


// otp using twilio

var sendMessage = async (to,content,subject) => {

    return new Promise((resolve, reject) => {
        client.messages.create(
            {
                to:to,
                from: "+15592963023",
                body:content,
                subject:subject
            },
            function (err, data) {
                if (err)
                {
                     reject(err)
                }
                else
                {
                    resolve(data)
                }
            })
    })
}

module.exports = {
    sendMessage: sendMessage,
    sendemail:sendemail
}
  