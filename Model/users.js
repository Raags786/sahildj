const mongoose = require('mongoose'),
Schema = mongoose.Schema

Config= require('../Config')

const user= new Schema
({
    firstName:          {type:String,required:true},
    lastName:           {type:String,required:true},
    userName:           {type:String,required:true},
    email:              {type:String,trim:true,required:true},
    countryCode:        {type:String,required:true},
    mobileNumber:       {type:String,required:true},  
    password:           {type:String,required:true},
    profilePic:         {type:String},
    otp:                {type:Number},
    deviceId:           {type:String,required:true},
    isBlocked:          {type:Boolean,required:true},
    isDeleted:           {type:Boolean,required:true}
})
module.exports =mongoose.model('user',user)