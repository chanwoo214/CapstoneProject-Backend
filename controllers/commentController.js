"use strict";
let Models = require("../models"); //matches index.js

const getComments = (res) => {
    //finds all comments
    Models.Comment.find({})
        .then(comments => res.send(comments))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const createComment = (commentPayload, res) => {
    new Models.Comment(commentPayload).save()
        .then(comment => res.send(comment))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

module.exports = {
    getComments, createComment
}