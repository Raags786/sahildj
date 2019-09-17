

const DOA = require('../DOAManager').queries,
    Model = require('../Model'),
    Config = require('../Config');
var error2 = Config.responseMessages.ERROR.UNAUTHORIZED
var nodemailer = require('nodemailer');
var commonController = require('./commonController');
UniversalFunctions = require('../Utils/UniversalFunctions');
const jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var moment = require('moment')

var fs = require('fs')
const { promisify } = require('util')
const writeFile = promisify(fs.writeFile)
const readFile = promisify(fs.readFile)

//user registration 
var eventDetail = async (payload) => {
    var newPath;
    try {
        const writeAndFile = async () => {       // works synchronously

            const content = await readFile(payload.eventPicture.path)
            var Image = payload.eventPicture.filename
            if (!Image) {
                return Promise.reject();
            }

            else {
                newPath = "./Images/" + Image;
                var end = await writeFile(newPath, content)//content  define the read of file and perform write operation
                return Promise.resolve();
            }
        }
        await writeAndFile();
        var date_element1 = payload.endTime
        let split_varaible1 = date_element1.split(':');

        var date_element = payload.startTime
        let split_varaible = date_element.split(':');
        payload.startTime = split_varaible[0] * 3600 + split_varaible[1] * 60;
        payload.endTime = split_varaible1[0] * 3600 + split_varaible1[1] * 60;
        payload.eventDate = new Date(payload.eventDate)
        payload.eventPicture = newPath
        return await DOA.saveData(Model.eventDetail, payload)
    }
    catch (err) {
        throw err;
    }
}

var request = async (payload, header) => {
    console.log("---------check Payload Data------------", payload);
    console.log("---------check header Data------------", header);

    try {
        payload.userId = header._id
        payload.requestDate = new Date()
        return await DOA.saveData(Model.request, payload)
    }

    catch (err) {
        throw err;
    }

}

var review = async (payload, header) => {
    console.log("---------check Payload Data------------", payload);
    console.log("---------check header Data------------", header._id);

    try {
        payload.userId = header._id,
            payload.requestDate = new Date()
        return await DOA.saveData(Model.review, payload)
    }

    catch (err) {
        throw err;
    }
}


var comment = async (payload, header) => {
    console.log("---------check Payload Data------------", payload);
    console.log("---------check header Data------------", header._id);

    try {
        payload.userId = header._id;
        payload.commentAt = new Date();
        return await DOA.saveData(Model.comment, payload)
    }

    catch (err) {
        throw err;
    }
}
//likes

var reviewLikes = async (payload, header) => {
    console.log("---------check Payload Data------------", payload);
    console.log("---------check header Data------------", header._id);

    try {

        return await DOA.findAndUpdate(Model.review, payload)
    }

    catch (err) {
        throw err;
    }
}


/**
 * 
 * In order to like  request of user
 * 
 */
var requestLikes = async (payload, header) => {
    console.log("---------check Payload Data------------", payload);
    console.log("---------check header Data------------", header._id);

    try {
        var get_dataElement = await DOA.getData(Model.request, { _id: payload.requestId });
         console.log("==========check result============", get_dataElement[0].likes);
         var ac = get_dataElement[0].likes.push({userId:header._id}); 
    }

    catch (err) {   
        throw err;
    }
}
module.exports =
    {
        eventDetail: eventDetail,
        request: request,
        review: review,
        requestLikes: requestLikes,
        comment: comment,
        reviewLikes: reviewLikes
    }