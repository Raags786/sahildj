const mongoose = require('mongoose'),
Schema = mongoose.Schema

Config= require('../Config')

const admin= new Schema
({
    name:      {type:String,required:true},
    email:     {type:String,trim:true,required:true}, 
    password:  {type:String,required:true},
})
module.exports =mongoose.model('admin',admin)