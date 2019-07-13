/**
 * Created by Shumi on 17/5/18.
 */
var TokenManager = require('../libs/tokenManager');
var jwt=require('hapi-auth-jwt2');

var Config = require('../Config');

exports.plugin = {
    name: 'auth',
    register: async (server, options) => {
        await server.register(require('hapi-auth-jwt2'));
        server.auth.strategy(Config.APP_CONSTANTS.SCOPE.CUSTOMER, 'jwt',
            { key:Config.APP_CONSTANTS.SERVER.JWT_SECRET_KEY_CUSTOMER,          // Never Share your secret key
                validate:TokenManager.verifyToken, // validate function defined above
                verifyOptions: { algorithms: [ 'HS256' ],ignoreExpiration:false } // pick a strong algorithm
            });
     
        server.auth.strategy(Config.APP_CONSTANTS.SCOPE.ARTIST, 'jwt',
            { key: Config.APP_CONSTANTS.SERVER.JWT_SECRET_KEY_SUPPLIER,          // Never Share your secret key
                validate: TokenManager.verifyToken, // validate function defined above
                verifyOptions: { algorithms: [ 'HS256' ],ignoreExpiration:false } // pick a strong algorithm
            });

        server.auth.strategy(Config.APP_CONSTANTS.SCOPE.ADMIN, 'jwt',
            { key:[ Config.APP_CONSTANTS.SERVER.JWT_SECRET_KEY_ADMIN],          // Never Share your secret key
                validate: TokenManager.verifyToken, // validate function defined above
                verifyOptions: { algorithms: [ 'HS256' ],ignoreExpiration:false } // pick a strong algorithm
            });

        // server.auth.strategy(Config.APP_CONSTANTS.SCOPE.ADMIN_CUSTOMER_SUPPLIER, 'jwt',
        // { key: [
        //         Config.APP_CONSTANTS.SERVER.JWT_SECRET_KEY_SUPPLIER,
        //        Config.APP_CONSTANTS.SERVER.JWT_SECRET_KEY_ADMIN,
        //        Config.APP_CONSTANTS.SERVER.JWT_SECRET_KEY_CUSTOMER
        //     ],       
               
        //        // Never Share your secret key
        //     validate: TokenManager.verifyToken, // validate function defined above
        //     verifyOptions: { algorithms: [ 'HS256' ],ignoreExpiration:false } // pick a strong algorithm
        // });
        server.auth.default(Config.APP_CONSTANTS.SCOPE.ADMIN);
    }
};
