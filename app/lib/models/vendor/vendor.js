import mongoose from "mongoose"

const vendorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    memberSince: {
        type: Date,
        default: Date.now,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: false,
    }
})

const Vendor = mongoose.models.Vendor || mongoose.model("Vendor", vendorSchema)

export default Vendor