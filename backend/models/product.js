const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    title: {
        type: String,
        trim: true,
        required: [true, 'Please add a product title'],
        maxlength: 32
    },

    description: {
        type: String,
        trim: true,
        required: [true, 'Please add a product Description'],
        maxlength: 2000,
    },
    image: {
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }

    },
    user_id: {
        type: String,
        require: true,
      }

}, { timestamps: true });


module.exports = mongoose.model("Product", productSchema);