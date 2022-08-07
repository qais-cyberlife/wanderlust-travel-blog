const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    publishedDate: {
        type: String,
    },
    description: {
        type: String,
    },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author',
    },
});

module.exports = mongoose.model('Post', PostSchema);