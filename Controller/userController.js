

const DOA = require('../DOAManager').queries,
  Model = require('../Model'),
  Config = require('../Config');
ERROR = Config.responseMessages.ERROR;

//var error1 = Config.responseMessages.ERROR.INVALID_CREDENTIALS_EMAIL
var error2 = Config.responseMessages.ERROR.UNAUTHORIZED
var nodemailer = require('nodemailer');
var commonController = require('./commonController');
UniversalFunctions = require('../Utils/UniversalFunctions');
const jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

var fs = require('fs');
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
const readFile = promisify(fs.readFile);


//user registration 
var userRegistration = async (payload) => {
  console.log("---------check Payload Data------------", payload.countryCode, payload.mobileNumber);
  // let send_to = (payload.countryCode.concat(payload.mobileNumber));
  // console.log('===============otp result:>>>>>>>>>>>>>>>>>>>>>',send_to);


  var newPath;
  try {
    console.log('hii----', payload.mobileNumber);
    var query = { email: payload.email }
    let userData = await DOA.getData(Model.user, query);
    console.log('uuuuuuuuuu', userData[0]);
    if (userData != 0) {
      return Config.responseMessages.ERROR.INVALID_CREDENTIALS_EMAIL
    }
    else {
      const writeAndFile = async () => {       // works synchronously
        const content = await readFile(payload.profilePic.path)
        var Image = payload.profilePic.filename
        if (!Image) {
          console.log("There was an error");
          return Promise.reject();

        }
        else {
          newPath = "./Images/" + Image;
          var end = await writeFile(newPath, content)//content  define the read of file and perform write operation
          return Promise.resolve();
        }
      }
      await writeAndFile();
      payload.otp = Math.floor(1000 + Math.random() * 9000)
      payload.password = bcrypt.hashSync(payload.password.toString(), Config.APP_CONSTANTS.SERVER.SALT); // encrypting password
      payload.profilePic = newPath
      var sub = "abc";
      var text = 'email:' + payload.email + 'otp:' + payload.otp;
      data = await DOA.saveData(Model.user, payload);
      await commonController.sendemail(payload, sub, text);
      let otp_send_to = (payload.countryCode.concat(payload.mobileNumber));
      await commonController.sendMessage(otp_send_to, payload.otp, "varification code");
      return data;
    }
  }
  catch (err) {
    throw err;
  }
}

// ============================================== user Login  ==============================================================
var userlogin = async function (payload) {
  try {
    var user = await DOA.getData(Model.user, { email: payload.email }, {})
    if (user == 0) {
      return Config.responseMessages.ERROR.INVALID_CREDENTIALS_EMAIL
    }
    let checkpassword = bcrypt.compareSync(payload.password, user[0].password);
    console.log('--------checkpss------', checkpassword)//it will return true
    if (checkpassword == false)
      throw Config.responseMessages.ERROR.UNAUTHORIZED
    else {
      var token = jwt.sign({
        scope: "CUSTOMER",
        "_id": user[0]._id
      }, Config.APP_CONSTANTS.SERVER.JWT_SECRET_KEY_CUSTOMER);
      return token
    }
  }
  catch (err) {
    throw err
  }
}

// =========================================== otpLogin ============================================================================

var otplogin = async function (payload) {
  try {
    var user = await DOA.getData(Model.user, { otp: payload.otp })
    if (user == 0) {
      return Config.responseMessages.ERROR.INVALID_CREDENTIALS_INVALID_OTP
    }
    else {
      var token = jwt.sign({
        scope: "CUSTOMER",
        "_id": user[0]._id
      }, Config.APP_CONSTANTS.SERVER.JWT_SECRET_KEY_CUSTOMER);
      return token
    }
  }
  catch (err) {
    throw err;
  }
}

// ==========================================changePassword==================================================================

var changePassword = async function (payload, header) {
  try {
    var user = await DOA.getData(Model.user, {}, { password: 1 })
    let checkpassword = bcrypt.compareSync(payload.oldPassword, user[0].password);
    console.log('checkpss- old password :', checkpassword)
    if (checkpassword == false)
      return Config.responseMessages.ERROR.INVALID_CREDENTIALS_INVALID_OLDPASSWORD
    else {
      var pass1 = payload.newPassword;
      var pass2 = payload.confirmPassword;
      if (pass1 == pass2) {
        newPassword = bcrypt.hashSync(pass1.toString(), Config.APP_CONSTANTS.SERVER.SALT)
        return await DOA.findAndUpdate(Model.user, { "id": header._Id }, { "password": newPassword })
      }
    }
  }
  catch (err) {
    throw err;
  }
}
// ================================================fogot password========================================================================
var forgetPassword = async function (payload, header) {
  try {
    var pass1 = payload.newPassword;
    var pass2 = payload.confirmPassword;
    if (pass1 == pass2) {
      newPassword = bcrypt.hashSync(pass1.toString(), Config.APP_CONSTANTS.SERVER.SALT)
      return await DOA.findAndUpdate(Model.user, { "id": header._Id }, { "password": newPassword })
    }
  }
  catch (err) {
    throw err;
  }
}


module.exports =
  {
    userRegistration: userRegistration,
    userlogin: userlogin,
    otplogin: otplogin,
    changePassword: changePassword,
    forgetPassword: forgetPassword

  }