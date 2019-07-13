const Inert = require('inert'),
    Vision = require('vision');
const HapiSwagger = require('hapi-swagger');

exports.plugin = {
    name: 'swagger-plugin',

    register: async (server) => {
        const swaggerOptions = {
            info: {
                title: 'DJ'
            },
            documentationPage: process.env.NODE_ENV !== 'client'
        };
        let swagger = [
            Inert,
            Vision,
        ];
        if(process.env.NODE_ENV === 'client'){

        }
        else{
            swagger.push(
                {
                    plugin: HapiSwagger,
                    options: swaggerOptions
                }
            )
        }
        
        await server.register(
            swagger
        );
    }
};
