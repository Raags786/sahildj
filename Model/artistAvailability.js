const mongoose = require('mongoose'),
Schema = mongoose.Schema

Config= require('../Config')

const  artistAvailability= new Schema
({
    artistId:           {type:Schema.Type.ObjectId,refPath:"artist"},
    date:               {type:Date,required:true},
    startTime:          {type:Date,required:true},
    endTime:            {type:Date,required:true}
})
module.exports =mongoose.model('artistAvailability',artistAvailability)