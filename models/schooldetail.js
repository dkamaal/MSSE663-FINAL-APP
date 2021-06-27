// Final App Check-in
const mongoose = require('mongoose');

const SchoolDetailSchema = new mongoose.Schema({
    schoolname:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    zip:{
        type: Number,
        required: true
    
    },
    city:{
        type: String,
        required: true
    },
});
var SchoolDetail = module.exports = mongoose.model('SchoolDetail', SchoolDetailSchema, 'schooldetail');



