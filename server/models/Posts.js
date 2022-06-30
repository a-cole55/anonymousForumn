const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
    },
    postDescription: {
        type: String,
        required: true
    }
});
const PostModel = mongoose.model('posts', postSchema)
module.exports = PostModel;