var Controller = require('../Controller')
var Joi = require('joi')
 var Config=require('../Config')

var SUCCESS = Config.responseMessages.SUCCESS;
 var ERROR = Config.responseMessages.ERROR;

module.exports = [
    {
        method: 'POST',
        path: '/event/eventDetail',
        options: {
            description: 'eventDetail',
            auth: false,
            tags: ['api', 'user'],
            handler: (request, reply) => {
                return Controller.eventController.eventDetail(request.payload)
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
                    artistId: Joi.string().required(),
                    eventName: Joi.string().required(),
                    location:Joi.array().optional(),
                    tags:Joi.string().required(),
                    eventDate: Joi.string().required(),
                    startTime:Joi.string().required(),
                    endTime:Joi.string().required(),
                    eventPicture:Joi.any().meta({swaggerType: 'file'}),
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
//   ====================================  request   =============================================================================

    {
        method: 'POST',
        path: '/event/eventRequest',
        options: {
            description: 'eventRequest',
            auth: {
                    strategies: [Config.APP_CONSTANTS.SCOPE.CUSTOMER]
                  },
            tags: ['api', 'user'],
            handler: (request, reply) => {
                return Controller.eventController.request(request.payload,request.auth.credentials)
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
                    eventId:Joi.string().required(),
                    requestMessage:Joi.string().required(),
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





    //===================================================review=======================================================================
    {
        method: 'POST',
        path: '/event/eventReview',
        options: {
            description: 'eventReview',
            auth: {
                    strategies: [Config.APP_CONSTANTS.SCOPE.CUSTOMER]
                  },
            tags: ['api', 'user'],
            handler: (request, reply) => {
                return Controller.eventController.review(request.payload,request.auth.credentials)
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
                    eventId:Joi.string().required(),
                    reviewMessage:Joi.string().required(),
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


//================================================event Comment========================================================================

    {
        method: 'POST',
        path: '/event/eventComment',
        options: {
            description: 'eventComment',
            auth: {
                    strategies: [Config.APP_CONSTANTS.SCOPE.CUSTOMER]
                  },
            tags: ['api', 'user'],
            handler: (request, reply) => {
                return Controller.eventController.comment(request.payload,request.auth.credentials)
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
                    eventId:Joi.string().required(),
                    comment:Joi.string().required(),
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


//=======================================================reviewLikes==========================================================================

    {
        method: 'POST',
        path: '/event/reviewLike',
        options: {
            description: 'reviewLike',
            auth: {
                    strategies: [Config.APP_CONSTANTS.SCOPE.CUSTOMER]
                  },
            tags: ['api', 'user'],
            handler: (request, reply) => {
                return Controller.eventController.comment(request.payload,request.auth.credentials)
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
                    reviewId:Joi.string().required(), 
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