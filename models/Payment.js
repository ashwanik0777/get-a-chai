import mongoose from "mongoose";
import Razorpay from "razorpay";
const { Schema, model } = mongoose;

const PaymentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    to_user: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    oid: {
        type: String
    },
    amount: {
        type: Number,
        require: true
    },
    createdAt: {
        type: Date,
        default:Date.now
    },
    updatedAt: {
        type: Date,
        default:Date.now
    },
    
    done:{
        type:Boolean,
        default:false
    }
});

export default mongoose.models.Payment || model("Payment", PaymentSchema);
