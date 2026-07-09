const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
{
    service:{
        type:String,
        required:true
    },

    category:{
        type:String,
        required:true
    },

    price:{
        type:Number,
        required:true
    },

    duration:String,

    image:String,

    customer:{
        name:String,
        email:String,
        phone:String
    },

    location:{
        address:String,
        city:String,
        state:String,
        pincode:String
    },

    bookingDate:String,

    bookingTime:String,

    instantBooking:{
        type:Boolean,
        default:false
    },

    status:{
        type:String,
        enum:[
            "Pending",
            "Confirmed",
            "Completed",
            "Cancelled"
        ],
        default:"Pending"
    }

},
{
    timestamps:true
});

module.exports = mongoose.model("Booking", bookingSchema);