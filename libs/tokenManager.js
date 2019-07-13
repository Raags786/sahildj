/**
 * Created by Shumi on 18/5/18.
 */

const Jwt = require('jsonwebtoken'),
    Config = require('../Config'),
     DAO = require('../DOAManager').queries,
     Models = require('../Model'),
    UniversalFunctions = require('../Utils/UniversalFunctions'),
    _ = require('lodash')
    ERROR = Config.responseMessages.ERROR.UNAUTHORIZED;

// var generateToken = function(tokenData,userType) {
//     return new Promise((resolve, reject) => {
//         try {
            
//             // console.log("=========userType========",userType);
//            let secretKey;
//             switch(userType){
//                 case Config.APP_CONSTANTS.SCOPE.USER:
//                     secretKey = Config.APP_CONSTANTS.SERVER.JWT_SECRET_KEY_USER;
//                     break;
//                 case Config.APP_CONSTANTS.SCOPE.SUPPLIER:
//                     secretKey = Config.APP_CONSTANTS.SERVER.JWT_SECRET_KEY_Supplier;
//                     break;
//                 case Config.APP_CONSTANTS.SCOPE.DINING:
//                     secretKey = Config.APP_CONSTANTS.SERVER.JWT_SECRET_KEY_DINING;
//                     break;
//                 case Config.APP_CONSTANTS.SCOPE.ADMIN:
//                     secretKey = Config.APP_CONSTANTS.SERVER.JWT_SECRET_KEY_ADMIN;
//                     break;
//                 case Config.APP_CONSTANTS.SCOPE.SHOPPING:
//                     secretKey = Config.APP_CONSTANTS.SERVER.JWT_SECRET_KEY_SHOPPING;
//                     break;
//                 default:
//                     secretKey = Config.APP_CONSTANTS.SERVER.JWT_SECRET_KEY_ADMIN;
//             }
            
//             let token = Jwt.sign(tokenData, secretKey);
//             // console.log("=======secretKey==========",token,secretKey)

//             return resolve(token);
//         } catch (err) {
//             return reject(err);
//         }
//     });
// };


var verifyToken = async function verifyToken(tokenData) { 
    console.log("============tokenData================",tokenData);
    var user;


        if(tokenData.scope === Config.APP_CONSTANTS.SCOPE.CUSTOMER) {
            user = await DAO.getData(Models.user,{_id: tokenData._id},{__v : 0,password:0, loginTime: 0},{lean : true});
            console.log(" user ", user);

            console.log("------------------vievk-----",user)

        }
        else if(tokenData.scope === Config.APP_CONSTANTS.SCOPE.ARTIST)
             user = await DAO.getData(Models.artist,{_id: tokenData._id},{__v : 0},{lean : true});


        else if(tokenData.scope === Config.APP_CONSTANTS.SCOPE.ADMIN)
        {
             user = await DAO.getData(Models.Admins,{_id: tokenData._id},{__v : 0},{lean : true});
              console.log('h6788000000000000000000000000')
        }

    else{
            console.log("============No User Found==============");
            throw UniversalFunctions.sendError('en', ERROR.UNAUTHORIZED);
        }





       console.log("=============jjg=========",user)



        
        if(user.length === 0) throw UniversalFunctions.sendError('en', ERROR.UNAUTHORIZED);

        else if(user.length) {
            user[0].scope =tokenData.scope;
            console.log('dsasasasasagdg',user)//
         
            return {
                isValid: true,
                credentials: user[0]
            };
        }
        else throw UniversalFunctions.sendError("en",ERROR.UNAUTHORIZED);
       
};

module.exports={
    //generateToken:generateToken,
    verifyToken:verifyToken
};