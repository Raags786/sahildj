/**
 * Created by Shumi on 17/5/18.
 */



const Boom = require('boom'),
    Models = require('../Model'),
    Joi = require('joi'),
    Config = require('../Config'),
    ERROR = Config.responseMessages.ERROR,
    SUCCESS = Config.responseMessages.SUCCESS;
    // bcrypt = require('bcryptjs'),
    // twilio=require('twilio'),
    // accountSid = '',
    // authToken = '',
    // crypto = require('crypto')
    // client = require('twilio')(accountSid, authToken);
// var CryptoJS = require("crypto-js");




function sendError(language,data,reply) {
    console.log("-----------------error------------------",data, language);
    let error;
    let logError;
    if (typeof data == 'object' && data.hasOwnProperty('statusCode') && data.hasOwnProperty('customMessage')) {
        let finalMessage = data.customMessage.en;
        if(language && language == "ar") finalMessage = data.customMessage.ar;
        error =  Boom.create(data.statusCode, finalMessage);
        if(data.hasOwnProperty('type')) {
            error.output.payload.type = data.type;
            // winston.error(error);
            return error;
        }
    }
    else {
        let errorToSend = '',
            type = '';

        if (typeof data == 'object') {
            if (data.name == 'MongoError') {

                if(language && language == "ar") errorToSend += ERROR.DB_ERROR.customMessage.ar;
                else errorToSend += ERROR.DB_ERROR.customMessage.en;

                type = ERROR.DB_ERROR.type;
                if (data.code = 11000) {

                    if(language && language == "ar") errorToSend += ERROR.DUPLICATE.customMessage.ar;
                    else errorToSend += ERROR.DUPLICATE.customMessage.en;

                    type = ERROR.DUPLICATE.type;
                }
            } else if (data.name == 'ApplicationError') {

                if(language && language == "ar") errorToSend += ERROR.APP_ERROR.customMessage.ar;
                else errorToSend += ERROR.APP_ERROR.customMessage.en;

                type = ERROR.APP_ERROR.type;
            } else if (data.name == 'ValidationError') {

                if(language && language == "ar") errorToSend += ERROR.APP_ERROR.customMessage.ar + data.message;
                else errorToSend += ERROR.APP_ERROR.customMessage.en + data.message;

                type = ERROR.APP_ERROR.type;
            } else if (data.name == 'CastError') {

                if(language && language == "ar") errorToSend += ERROR.DB_ERROR.customMessage.ar + ERROR.INVALID_OBJECT_ID.customMessage.ar;
                else errorToSend += ERROR.DB_ERROR.customMessage.en + ERROR.INVALID_OBJECT_ID.customMessage.en;

                type = ERROR.INVALID_OBJECT_ID.type;
            } else if(data.response) {
                errorToSend = data.response.message;
            }
            else{
                errorToSend = data
                errorToSend = "Something went wrong, please try again. If the problem persist please contact administrator";
                logError = data;
            }
        } else {
            errorToSend = data;
            type = ERROR.DEFAULT.type;
        }
        let customErrorMessage = errorToSend;
        if (typeof errorToSend == 'string'){
            if (errorToSend.indexOf("[") > -1) {
                customErrorMessage = errorToSend.substr(errorToSend.indexOf("["));
            } else {
                customErrorMessage = errorToSend;
            }
            customErrorMessage = customErrorMessage.replace(/"/g, '');
            customErrorMessage = customErrorMessage.replace('[', '');
            customErrorMessage = customErrorMessage.replace(']', '');
        }
        error =  Boom.create(400,customErrorMessage);
        error.output.payload.type = type;
        error.loggingMessage = logError;
        // winston.error(error);
        return error;
    }
};

function sendSuccess(language,successMsg, data,reply) {
    successMsg = successMsg || SUCCESS.DEFAULT.customMessage.en;
    
    if (typeof successMsg == 'object' && successMsg.hasOwnProperty('statusCode') && successMsg.hasOwnProperty('customMessage')){

        let finalMessage = successMsg.customMessage.en;
        if(language && language == "ar") finalMessage = successMsg.customMessage.ar;

        return {statusCode:successMsg.statusCode, message: finalMessage, data: data || {}};
    }
    else return {statusCode:200, message: successMsg, data: data || {}};
};

function failActionFunction(request, reply, error) {
    
    
    // winston.info("==============request===================",request.payload,request.query, error)

    error.output.payload.type = "Joi Error";

    if (error.isBoom) {
        delete error.output.payload.validation;
        if (error.output.payload.message.indexOf("authorization") !== -1) {
            error.output.statusCode = ERROR.UNAUTHORIZED.statusCode;
            return reply(error);
        }
        let details = error.details[0];
        if (details.message.indexOf("pattern") > -1 && details.message.indexOf("required") > -1 && details.message.indexOf("fails") > -1) {
            error.output.payload.message = "Invalid " + details.path;
            return reply(error);
        }
    }
    let customErrorMessage = '';
    if (error.output.payload.message.indexOf("[") > -1) {
        customErrorMessage = error.output.payload.message.substr(error.output.payload.message.indexOf("["));
    } else {
        customErrorMessage = error.output.payload.message;
    }
    customErrorMessage = customErrorMessage.replace(/"/g, '');
    customErrorMessage = customErrorMessage.replace('[', '');
    customErrorMessage = customErrorMessage.replace(']', '');
    error.output.payload.message = customErrorMessage.replace(/\b./g, (a) => a.toUpperCase());
    delete error.output.payload.validation;
    return error;
};

var authorizationHeaderObj = Joi.object({
    authorization: Joi.string().required()
}).unknown();

var authorizationHeaderObjOptional = Joi.object({
    authorization: Joi.string()
}).unknown();

// let mediaAuthRequired =  Joi.object().keys({
//     original: Joi.string().required(),
//     thumbnail: Joi.string().required(),
//     fileName: Joi.string().required(),
//     type: Joi.string().required(),
//     thumbnailMed: Joi.string().required(),
//     _id:Joi.string().optional().allow('')
// }).unknown().required();

// let mediaAuth =  Joi.object().keys({
//     original: Joi.string().optional().allow(''),
//     thumbnail: Joi.string().optional().allow(''),
//     fileName: Joi.string().optional().allow(''),
//     type: Joi.string().optional().allow(''),
//     thumbnailMed: Joi.string().optional().allow(''),
//     _id:Joi.string().optional().allow('')
// });

// let mediaAuthPdf =  Joi.object().keys({
//     original: Joi.string().optional().allow(''),
//     type: Joi.string().optional().allow(''),
//     fileName: Joi.string().optional().allow(''),
//     _id:Joi.string().optional().allow('')
// });

// let mediaSchema = {
//     original: { type: String, default: "" },
//     thumbnail: { type: String, default: "" },
//     thumbnailMed: { type: String, default: "" },
//     fileName: { type: String, default: "" },
//     type: { type: String, default: "" } // media format
// };

// let mediaSchemaPdf = {
//     original: { type: String, default: "" },
//     fileName: { type: String, default: "" },
//     type: { type: String, default: "" } // media format
// };

// let camelCaseFromString = async (str) => {
//     return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
//         if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
//         return index == 0 ? match.toLowerCase() : match.toUpperCase();
//     });
// }





// function crypto1 (text, type) {
//     var algorithm = 'aes256'; // or any other algorithm supported by OpenSSL
//     var key = Config.APP_CONSTANTS.SERVER.CRYPTO_KEY;
//     console.log(text, type);
//     if (type.toString() === 'encrypt') {
//         var cipher = crypto.createCipher(algorithm, key);
//         var encrypted = cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
//         return encrypted;
//     } else if (type.toString() === 'decrypt') {
//         var decipher = crypto.createDecipher(algorithm, key);
//         var dec = decipher.update(text, 'hex', 'utf8') + decipher.final('utf8');
//         return dec;
//     }
// }

// function cryptoJSData (text, type) {
//     var key = Config.APP_CONSTANTS.SERVER.CRYPTO_KEY;
//     if (type.toString() === 'encrypt') {
//         let encrypted = CryptoJS.AES.encrypt(text, key).toString();
//         return encrypted;
//     }
//     else if (type.toString() === 'decrypt') {
//         var bytes  = CryptoJS.AES.decrypt(text, key);
//         var plaintext = bytes.toString(CryptoJS.enc.Utf8);
//         return plaintext;
//     }

// }

// const checkMultiUserLogin = (loginTime) => {
//     if (loginTime && loginTime.length != 0) {
//         if (loginTime.length > 3) {
//             loginTime.shift();
//             loginTime.push((new Date()).getTime());
//         }
//         else {
//             loginTime.push((new Date()).getTime());
//         }
//     }
//     else {
//         let time = []
//         time.push((new Date()).getTime());
//         return time;
//     }
//     return loginTime;
// }

module.exports = {
    
    failActionFunction : failActionFunction,
    authorizationHeaderObj:authorizationHeaderObj,
    sendSuccess : sendSuccess,
    sendError : sendError,
    // mediaAuth: mediaAuth,
    // mediaAuthRequired: mediaAuthRequired,
    // mediaSchema: mediaSchema,
    // mediaSchemaPdf: mediaSchemaPdf,
    // mediaAuthPdf: mediaAuthPdf,
    // camelCaseFromString: camelCaseFromString,
    // // Twilio : Twilio,
 
    // crypto1: crypto1,
    // cryptoJSData: cryptoJSData,
     authorizationHeaderObjOptional:authorizationHeaderObjOptional,
    //checkMultiUserLogin: checkMultiUserLogin
};