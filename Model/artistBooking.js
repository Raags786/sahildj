const mongoose = require('mongoose'),
    Schema = mongoose.Schema

Config = require('../Config')

const artistBooking = new Schema
    ({
        artistId: { type: Schema.Type.ObjectId, refPath: "artist" },
        userId: { type: Schema.Types.ObjectId, refPath: "eventDetail" },
        totalPrice: { type: String, required: true },
        eventDate: { type: Date, required: true },
        startTime: { type: Date, required: true },
        endTime: { type: Date, required: true },
        location: [{ type: { long: { type: Number }, lat: { type: Number } } }],
        bookingStatus: {
            default: "Pending",
            type: String, enum: ["accept", "reject", "Pending"]
        },
    })

module.exports = mongoose.model('artistBooking', artistBooking)