var Controller = require('../Controller')
var Joi = require('joi')
var Config = require('../Config')

var SUCCESS = Config.responseMessages.SUCCESS;
var ERROR = Config.responseMessages.ERROR;

module.exports = [
    {
        method: 'POST',
        path: '/artist/Registration',
        options: {
            description: 'artistRegistration',
            auth: false,
            tags: ['api', 'user'],
            handler: (request, reply) => {
                return Controller.artistController.artistRegistration(request.payload)
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
                timeout: false
            },
            validate: {
                payload: {
                    name: Joi.string().required(),
                    userName: Joi.string().required(),
                    emailAddress: Joi.string().email().required().lowercase().trim(),
                    countryCode: Joi.number().required(),
                    mobileNumber: Joi.number().required(),
                    password: Joi.string().required(),
                    price: Joi.string().required(),
                    about: Joi.string().required(),
                    profilePic: Joi.any().meta({ swaggerType: 'file' }),
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


    //==================================artist Login==================================================================


    {
        method: 'POST',
        path: '/artist/login',
        options: {
            description: 'artistlogin',
            auth: false,
            tags: ['api', 'user'],
            handler: (request, reply) => {
                return Controller.artistController.artistlogin(request.payload, request.auth.credentials)
                    .then(response => {
                        return UniversalFunctions.sendSuccess("en", SUCCESS.DEFAULT, response, reply);
                    })
                    .catch(error => {
                        console.log("=====error=============", error);
                        return UniversalFunctions.sendError("en", error, reply);
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

    //otp login system=======================================================================
    {
        method: 'POST',
        path: '/artist/otpLogin',
        options: {
            description: 'otpLogin',
            auth: false,
            tags: ['api', 'user'],
            handler: (request, reply) => {
                return Controller.artistController.otplogin(request.payload)
                    .then(response => {
                        return UniversalFunctions.sendSuccess("en", SUCCESS.DEFAULT, response, reply);
                    })
                    .catch(error => {
                        console.log("=====error=============", error);
                        return UniversalFunctions.sendError("en", error, reply);
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

    //follower//following
    {
        method: 'POST',
        path: '/artist/follow/following',
        options: {
            description: 'follow/following',
            auth: {
                strategies: [Config.APP_CONSTANTS.SCOPE.ARTIST]
            },
            tags: ['api', 'user'],
            handler: (request, reply) => {
                return Controller.artistController.follower(request.payload, request.auth.credentials)
                    .then(response => {
                        return UniversalFunctions.sendSuccess("en", SUCCESS.DEFAULT, response, reply);
                    })
                    .catch(error => {
                        console.log("=====error=============", error);
                        return UniversalFunctions.sendError("en", error, reply);
                    });
            },
            validate: {
                payload: {

                    artistId: Joi.string().required(),
                    option: Joi.string().valid([Config.APP_CONSTANTS.VAR_MODEL.FOLLOW,Config.APP_CONSTANTS.VAR_MODEL.UNFOLLOW])
                    

                },
                failAction: UniversalFunctions.failActionFunction,
                headers: UniversalFunctions.authorizationHeaderObj
            },
            plugins: {
                'hapi-swagger': {
                    payloadType: 'form'
                }
            }
        }
    },
]


