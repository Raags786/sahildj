

const DOA = require('../DOAManager').queries,
    Model = require('../Model'),
    Config = require('../Config');
//ERROR=Config.responseMessages.ERROR;

var error1 = Config.responseMessages.ERROR.INVALID_CREDENTIALS_EMAIL
var error2 = Config.responseMessages.ERROR.UNAUTHORIZED
var nodemailer = require('nodemailer');
commonController = require('./commonController');
UniversalFunctions = require('../Utils/UniversalFunctions');
const jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt')


var adminlogin = async function (payload) {
    try {
        var user = await DOA.getData(Model.Admins, { email: payload.email, password: payload.password }, { email: 1, password: 1 }, {})
        console.log('------------------------------', user)

        if (user == 0) {
            return Config.responseMessages.ERROR.INVALID_CREDENTIALS_EMAIL
        }
        else {
            var token = jwt.sign({
                scope: "ADMIN",
                "_id": user[0]._id
            }, Config.APP_CONSTANTS.SERVER.JWT_SECRET_KEY_ADMIN);
            return token
        }
    }
    catch (err) {
        throw err
    }
}

var category = async function (payload, header) {
    console.log('ggfdagdfgsfdgsfdgsfdgd', payload)
    console.log('gsfdsfdgdgfdgfdgsfddsfgsdfgg', header)

    try {
        var em1 = { category: payload.category }
        em = await DOA.insert(Model.CarCategory, em1)
        return em;
    }
    catch (err) {
        throw err;
    }
}




var viewer = async function (payload, header) {
    //doubt
    // console.log(payload)
    console.log("============INNNNNNN=====", header)
    try {
        var a1 = [{
            path: "supplierId",
            select: '',
            model: Model.supplierRegistration
        },
        {
            path: "carTypeId",
            select: '',
            model: Model.CarCategory
        }]
        var out = await DOA.populateData(Model.carr, {}, {}, { limit: 3 }, a1)
        return out
    }
    catch (err) {
        throw err;
    }
}


//=====================================UserInfo=======================================================

var UserInfo = async function (payload, header) {
    console.log(payload)
    try {
        var limit1 = Number(payload.limit)
        var pattern = payload.name;
        let query = {};
        if (payload.name) {
            query.$or = [{ firstName: { $regex: pattern, $options: "i" } }, { email: { $regex: pattern, $options: "i" } }]
        }
        return await DOA.getData(Model.userRegistration, query, {}, { limit: limit1 })
    }
    catch (err) {
        throw err;
    }
}


//=====================================SupInfo============================================================

var SupInfo = async function (payload, header) {
    //doubt
    try {
        let query = {};
        var limit1 = Number(payload.limit);
        if (payload.status !== undefined) {
            query.status = { $ne: payload.status }
        }

        if (payload.name != undefined) {
            query.$or = [{ name: { $regex: payload.name, $options: "i" } }, { email: { $regex: payload.name, $options: "i" } }]
        }

        return out = await DOA.getData(Model.supplierRegistration, query, {}, { limit: limit1 })
    }
    catch (err) {
        throw err;
    }
}

var AdminRegistration = async function (payload, header) {
    //doubt
      try {
        return await DOA.saveData(Model.carr, payload)
    }
    catch (err) {
        throw err;
    }
}
module.exports =
    {
        adminlogin: adminlogin,
        category: category,
        viewer: viewer,
        UserInfo: UserInfo,
        SupInfo: SupInfo,
        AdminRegistration: AdminRegistration
    }