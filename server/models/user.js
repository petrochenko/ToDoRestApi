let mongoose = require('mongoose');

let User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 256,
        trim: true
    }
});

module.exports = {User};