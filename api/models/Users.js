import mongoose from "mongoose";
//const { Schema } = mongoose;

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,

    }, img: {
        type: String,

    }, city: {
        type: String,

    }, phone: {
        type: Number,
        required: true,
        unique: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

export default mongoose.model("User", usersSchema);