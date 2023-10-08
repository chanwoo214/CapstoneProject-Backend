"use strict";
let Models = require("../models"); //matches index.js

const getGames = (res) => {
    //finds all games
    Models.Game.find({})
        .then(games => res.send(games))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

const createGame = (gamePayload, res) => {
    new Models.Game(gamePayload).save()
        .then(game => res.send(game))
        .catch(err => {
            console.log(err);
            res.send({ result: 500, error: err.message })
        })
}

module.exports = {
    getGames,
    createGame
}