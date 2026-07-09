const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true
        },

        category:{
            type: String,
            enum:["Maintenance", "Business", "Lifestyle", "Technology"],
            required: true
        },

        description:{
            type: String,
            required: true
        },

        content:{
            type: String,
            required: true
        },

        image:{
            type: String,
            required: true
        },

        author: {
    name: {
        type: String,
        required: true,
    },

    designation: {
        type: String,
        required: true,
    },

    avatar: {
        type: String,
        required: true,
    },
},

        readTime: String,

        featured:{
            type: Boolean,
            default: false
        },

        published:{
            type: Boolean,
            default: true,
        }
    },
    {
        timestamps: true
    }
);

module.exports=mongoose.model("Blog",blogSchema);