const mongoose = require('mongoose');

const ApplicationSchema = mongoose.Schema({
    school_name:{
        type: String,
        required: true
    },
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
});
var Application = module.exports = mongoose.model('Application', ApplicationSchema, 'applications');