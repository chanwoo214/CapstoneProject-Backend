"use strict";
let Models = require("../models"); //matches index.js

const getPosts = (res) => {
    //finds all posts
    Models.Post.find({})
        .then(posts => res.send(posts))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const createPost = (postPayload, res) => {
    new Models.Post(postPayload).save()
        .then(post => res.send(post))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}
module.exports = {
    getPosts, createPost
}