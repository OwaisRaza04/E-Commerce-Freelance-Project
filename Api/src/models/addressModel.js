const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({ 
    address: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    city: {
        type: String,
        required: true,
        min: 2,
        max: 255,
    },
    state: {
        type: String,
        required: true,
        min: 2,
        max: 255,
    },
    pincode: {
        type: Number,
        required: true,
        min: 6,
        max: 6,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    mobile: {
        type: String,
        required: true,
        min: 10,
        max: 10,
    },
});

const Address = mongoose.model("addresses", addressSchema);

module.exports = Address;