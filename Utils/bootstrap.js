
let mongoose = require('mongoose'),
Config = require('../Config'),
DAO = require('../DOAManager').queries,
Model = require('../Model')


mongoose.Promise = Promise;
const util = require('util');
const fs = require('fs');


console.log("====process.env.NODE_ENV======",process.env.NODE_ENV,Config[process.env.NODE_ENV])


mongoose.connect(Config[process.env.NODE_ENV].mongoDb.URI,{useNewUrlParser: true }).then(success => {
    console.log("sahil");
    console.log('MongoDB Connected');
}).catch(err => {
    process.exit(1);
});
