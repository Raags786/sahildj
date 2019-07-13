var Controller = require('../Controller')
var Joi = require('joi')
 var Config=require('../Config')

var SUCCESS = Config.responseMessages.SUCCESS;
var ERROR = Config.responseMessages.ERROR;

module.exports = [
    {
        method: 'POST',
        path: '/user/Registration',
        options: {
            description: 'userRegistration',
            auth: false,
            tags: ['api', 'user'],
            handler: (request, reply) => {
                return Controller.userController.userRegistration(request.payload)
                    .then(response => {
                        return UniversalFunctions.sendSuccess("en", SUCCESS.DEFAULT, response, reply);
                    })
                    .catch(error => {
                        console.log("=====error=============", error);
                        return UniversalFunctions.sendError("en", error, reply);
                    });
            },
            description: 'Add Image',
            tags: ['api'],
            payload: {
                maxBytes: 200000000,
                   parse: true,
                  output: 'file',
                timeout : false
             },
            validate: {
                payload: {
                    firstName: Joi.string().required(),
                    lastName: Joi.string().required(),
                    userName: Joi.string().required(),
                    email: Joi.string().email().required().lowercase().trim(),
                    countryCode: Joi.string().required(),
                    mobileNumber: Joi.string().required(),
                    password: Joi.string().required(),
                    profilePic:Joi.any().meta({swaggerType: 'file'}),
                    otp: Joi.number(),
                    deviceId: Joi.string().required(),
                    isBlocked: Joi.boolean().required(),
                    isDeleted: Joi.boolean().required()
                },

                  failAction: UniversalFunctions.failActionFunction
            },
            plugins: {
                'hapi-swagger': {
                    payloadType: 'form'
                }
            }
        }
    },

    //============================================login Detail==========================================================================

        {
        method: 'POST',
        path: '/user/RegistrationLogin',
        options: {
            description: 'userLogin',
            auth : false,
            tags: ['api', 'user'],
            handler: (request, reply)=> {
               return Controller.userController.userlogin(request.payload,request.auth.credentials)
                     .then(response => {
                        return  UniversalFunctions.sendSuccess("en",SUCCESS.DEFAULT,response, reply);
                     })
                     .catch(error => {
                         console.log("=====error=============",error);
                      return UniversalFunctions.sendError("en",error, reply);
                     });
            },
            validate: {
                payload: {
                    
                    email: Joi.string().email().required().lowercase().trim(),
                    password: Joi.string().required().trim(),
                   
                },
              failAction: UniversalFunctions.failActionFunction
            },
            plugins: {
                'hapi-swagger': {
                    payloadType: 'form'
                }
            }
        }
    },


    //Login through Otp

    {
        method: 'POST',
        path: '/user/otpLogin',
        options: {
            description: 'otpLogin',
            auth : false,
            tags: ['api', 'user'],
            handler: (request, reply)=> {
               return Controller.userController.otplogin(request.payload,request.auth.credentials)
                     .then(response => {
                        return  UniversalFunctions.sendSuccess("en",SUCCESS.DEFAULT,response, reply);
                     })
                     .catch(error => {
                         console.log("=====error=============",error);
                      return UniversalFunctions.sendError("en",error, reply);
                     });
            },
            validate: {
                payload: {

                    otp: Joi.number().required(),
                   
                },
              failAction: UniversalFunctions.failActionFunction
            },
            plugins: {
                'hapi-swagger': {
                    payloadType: 'form'
                }
            }
        }
    },


    {
        method: 'POST',
        path: '/user/changePassword',
        options: {
            description: 'changePassword',
            auth: {
                strategies: [Config.APP_CONSTANTS.SCOPE.CUSTOMER]
              },
            tags: ['api', 'user'],
            handler: (request, reply)=> {
               return Controller.userController.changePassword(request.payload,request.auth.credentials)
                     .then(response => {
                        return  UniversalFunctions.sendSuccess("en",SUCCESS.DEFAULT,response, reply);
                     })
                     .catch(error => {
                         console.log("=====error=============",error);
                      return UniversalFunctions.sendError("en",error, reply);
                     });
            },
            validate: { 
                payload: {

                   oldPassword:Joi.string().required(),
                   newPassword:Joi.string().required(),
                   confirmPassword:Joi.string().required()
                   
                },
              failAction: UniversalFunctions.failActionFunction,
              headers: UniversalFunctions.authorizationHeaderObj,
            },
            plugins: {
                'hapi-swagger': {
                    payloadType: 'form'
                }
            }
        }
    },





    //======================================forgot password=======================================================
    {
        method: 'POST',
        path: '/user/forgotPassword',
        options: {
            description: 'forgotPassword',
            auth: {
                strategies: [Config.APP_CONSTANTS.SCOPE.CUSTOMER]
              },
            tags: ['api', 'user'],
            handler: (request, reply)=> {
               return Controller.userController.forgetPassword(request.payload,request.auth.credentials)
                     .then(response => {
                        return  UniversalFunctions.sendSuccess("en",SUCCESS.DEFAULT,response, reply);
                     })
                     .catch(error => {
                         console.log("=====error=============",error);
                      return UniversalFunctions.sendError("en",error, reply);
                     });
            },
            validate: { 
                payload: {
                   newPassword:Joi.string().required(),
                   confirmPassword:Joi.string().required()
                   
                },
              failAction: UniversalFunctions.failActionFunction,
              headers: UniversalFunctions.authorizationHeaderObj,
            },
            plugins: {
                'hapi-swagger': {
                    payloadType: 'form'
                }
            }
        }
    },


]
