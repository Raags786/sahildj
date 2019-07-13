const mongoose = require('mongoose'),
Schema = mongoose.Schema

Config= require('../Config')


var review = new Schema
    ({
        eventId:{ type: Schema.Types.ObjectId, refPath: "eventId" },
        userId: { type: Schema.Types.ObjectId, refPath: "users" },
        reviewMessage: { type: String, required: true },
        reviewDate:{type:Date},
        userRating: { type: Number },
    })

module.exports =mongoose.model('review',review)