const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: { type: String, trim: true, required: true },
    userId: { type: String, trim:true, required: true },
    imageUrl: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Post = mongoose.model("post", postSchema);

module.exports = Post;