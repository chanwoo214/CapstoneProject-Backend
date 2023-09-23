"use strict";
let Models = require("../models"); //matches index.js

const getUsers = (res) => {
    //finds all users
    Models.User.find({})
        .then(users => res.send(users))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const createUser = (userPayload, res) => {
    new Models.User(userPayload).save()
        .then(user => res.send(user))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}
module.exports = {
    getUsers, createUser
}