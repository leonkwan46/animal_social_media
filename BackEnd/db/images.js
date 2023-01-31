const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User',
    },
    name: {
        type: String
    },
    profilePhoto: {
        data: Buffer,
        contentType: String
    },
    coverImage: {
        data: Buffer,
        contentType: String
    }
}, {collection: 'images'});

module.exports = mongoose.model('images', imageSchema);