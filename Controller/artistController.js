

const DOA = require('../DOAManager').queries,
  Model = require('../Model'),
  Config = require('../Config');
var error2 = Config.responseMessages.ERROR.UNAUTHORIZED
var commonController = require('./commonController');
UniversalFunctions = require('../Utils/UniversalFunctions');
const jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt')

var fs = require('fs')
const { promisify } = require('util')
const writeFile = promisify(fs.writeFile)
const readFile = promisify(fs.readFile)
//user registration 
var artistRegistration = async (payload) => {
  var newPath;
  try {

    var query = { email: payload.emailAddress }
    let userData = await DOA.getData(Model.artist, query);
    if (userData != 0) {
      return Config.responseMessages.ERROR.INVALID_CREDENTIALS_EMAIL
    }
    else {
      const writeAndFile = async () => {       // works synchronously
        const content = await readFile(payload.profilePic.path)
        var Image = payload.profilePic.filename
        if (!Image) {
          return Promise.reject();
        }

        else {
          newPath = "./Artist/" + Image;
          var end = await writeFile(newPath, content)//content  define the read of file and perform write operation
          return Promise.resolve();
        }
      }
      await writeAndFile();
      payload.otp = Math.floor(1000 + Math.random() * 9000)
      payload.password = bcrypt.hashSync(payload.password.toString(), Config.APP_CONSTANTS.SERVER.SALT); // encrypting password
      payload.profilePic = newPath
      var sub = "abc";
      var text = 'email:' + payload.emailAddress + 'otp:' + payload.otp;
      var data1 = await DOA.saveData(Model.artist, payload)
      await commonController.sendemail(payload, sub, text)
      let otp_send_to = (payload.countryCode.concat(payload.mobileNumber));
      await commonController.sendMessage(otp_send_to, payload.otp, "varification code");
      return data1;
    }
  }
  catch (err) {
    throw err;
  }
}

var artistlogin = async function (payload) {
  try {
    var user = await DOA.getData(Model.artist, { email: payload.emailAddress }, {})
       if (user == 0) {
      return Config.responseMessages.ERROR.INVALID_CREDENTIALS_EMAIL
    }
     let checkpassword = bcrypt.compareSync(payload.password, user[0].password);
    console.log('--------checkpss------', checkpassword)//it will return true

    if (checkpassword == false)
      throw Config.responseMessages.ERROR.UNAUTHORIZED
    else {
      var token = jwt.sign({
        scope: "ARTIST",
        "_id": user[0]._id
      }, Config.APP_CONSTANTS.SERVER.JWT_SECRET_KEY_ARTIST);
      return token
    }
  }
  catch (err) {
    throw err
  }
}

var otplogin = async function (payload) {
  try {

    var user = await DOA.getData(Model.artist,{ otp: payload.otp })
    if (user == 0) {
      return Config.responseMessages.ERROR.INVALID_CREDENTIALS_INVALID_OTP
    } else {
      var token = jwt.sign({
        scope: "ARTIST",
        "_id": user[0]._id
      }, Config.APP_CONSTANTS.SERVER.JWT_SECRET_KEY_ARTIST);
      return token
    }

  }
  catch (err) {
    throw err;
  }
}

module.exports =
  {
    artistRegistration: artistRegistration,
    artistlogin: artistlogin,
    otplogin: otplogin
  }