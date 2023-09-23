const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    postId: { type: String, trim: true, required: true },
    userId: { type: String, trim:true, required: true },
    comment: {type: String, trim: true, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;