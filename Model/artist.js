const mongoose = require('mongoose'),
Schema = mongoose.Schema

Config= require('../Config')


follower=new Schema({
    userId:{type:Schema.Types.ObjectId,refPath:"artist"},//follower Id
    isCreated:{type:Date,default:Date.now()},
    status:{
            default: "unfollow",  
            type:String,enum:["follow","unfollow"]} 
        }),

 following=new Schema({
    userId:{type:Schema.Types.ObjectId,refPath:"artist"},
    isCreated:{type:Date,default:Date.now()},
    status:{
        default: "unfollow",  
        type:String,enum:["follow","unfollow"]} 
    })

const artist= new Schema
({
    name:               {type:String,required:true},
    userName:           {type:String,required:true},
    emailAddress:       {type:String,trim:true,required:true},
    countryCode:        {type:Number,required:true},
    mobileNumber:       {type:Number,required:true},  
    password:           {type:String,required:true},
    price:              {type:Number,required:true},
    about:              {type:String,required:true},
    profilePic:         {type:String},

    approvalStatus: {
        default: "Pending",
        type: String, enum: ["approved", "reject", "Pending"]
    },

    userRating:         {type:Number},
    totalRating:        {type:Number},
    averageRating:      {type:Number},
    
    follower:            [follower],
    following:           [following],
    otp:                {type:Number},
    deviceId:           {type:String,required:true},
    isBlocked:          {type:Boolean,required:true},
    isDeleted:           {type:Boolean,required:true},


})

module.exports =mongoose.model('artist',artist)