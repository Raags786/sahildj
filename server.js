
const Hapi = require('hapi'),
Plugins = require('./Plugins/'),
Config= require('./Config')
Routes = require('./Routes')
bootstrap = require('./Utils/bootstrap')

Model = require('./Model')
mongoose =require('mongoose')
DAO =require('./DOAManager').queries


// Create Server
let server = new Hapi.Server({
app: {
    name:'test'
},
port : 4000,
routes: {
    cors: true
}
});

 
(async initServer => {

// Register All Plugins
  await server.register(Plugins);

// API Routes
   await server.route(Routes);





// Start Server
try {

    server.start();
    console.log('server started at',server.info.uri)
    
} catch (error) {
    console.log("info",error);
}
})();