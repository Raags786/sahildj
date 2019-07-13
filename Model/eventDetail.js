const mongoose = require('mongoose'),
    Schema = mongoose.Schema

Config = require('../Config')

const eventDetail = new Schema
    ({
        artistId:  {type:Schema.Types.ObjectId,refPath:"artist"},
        eventName: { type: String, required: true },
        location: [],
        tags: { type: String, required: true },
        eventDate: { type: Date,required: true },
        startTime: { type: String, required: true },
        endTime: { type: String, required: true },
        eventPicture: { type: String, required: true },
        totalRating: { type: Number },
        averageRating: { type: Number },
        bookingStatus: {
            default: "Pending",
            type: String, enum: ["accept", "reject", "Pending"]
        },
    })
module.exports = mongoose.model('eventDetail', eventDetail)