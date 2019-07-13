const mongoose = require('mongoose'),
Schema = mongoose.Schema

Config= require('../Config')


var commnet = new Schema
    ({
        eventId:{ type: Schema.Types.ObjectId, refPath: "eventId" },
        userId: { type: Schema.Types.ObjectId, refPath: "users" },
        comment: { type: String, required: true },
        commentAt:{type:Date,required:true},
        commentCount:{type:Number}
    })

module.exports =mongoose.model('commnet',commnet)