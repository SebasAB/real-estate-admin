import mongoose from "mongoose"

const featureSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    },
})

const Feature = mongoose.models.Feature || mongoose.model("Feature", featureSchema)

export default Feature