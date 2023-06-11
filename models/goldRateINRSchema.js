var mongoose = require('mongoose');

const goldRateINRSchema = new mongoose.Schema({
    currency:{
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true
    }
})

const goldINR = mongoose.model("goldrate_ind",goldRateINRSchema);
module.exports = {goldINR};