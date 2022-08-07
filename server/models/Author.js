const mongoose = require('mongoose');

// Add the passwords 
const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    username: {
        type: String,
    },
});

module.exports = mongoose.model('Author', AuthorSchema);