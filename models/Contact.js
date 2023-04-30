import mongoose from "mongoose";


const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true,
    },
    email: {
        type: String,
        // required: true, 
    },
    contactNo: {
        type: String,
    },
    description: {
        type: String,
        // required: true,
    },
})

export default mongoose.model("Contact", ContactSchema)