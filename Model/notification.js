const mongoose = require('mongoose'),
Schema = mongoose.Schema

Config= require('../Config')


const notifications= new Schema
({
    userId:{type:Schema.Types.ObjectId,refPath:"users"},
    eventId: { type: Schema.Types.ObjectId, refPath: "eventConfirm" },
    sendAt:{type:Date},
    message:{type:String}
})

module.exports =mongoose.model('notifications',notifications)