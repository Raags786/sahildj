const mongoose = require('mongoose'),
    Schema = mongoose.Schema

Config = require('../Config')

var request = new Schema({
    eventId: { type: Schema.Types.ObjectId, refPath: "eventDetail" },
    userId: { type: Schema.Types.ObjectId, refPath: "users" },
    likes: [{
        userId: { type: Schema.Types.ObjectId, refPath: "users" },//reference from user
        isCreated: { type: Date, default: Date.now() },
    }],
    requestMessage: { type: String, required: true },
    requestDate: { type: String },
    requestStatus: {
        default: "Pending",
        type: String, enum: ["accept", "reject", "Pending"]
    },

    //an0RU3515
})

module.exports = mongoose.model('request', request)