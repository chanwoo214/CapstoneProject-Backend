const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
    id: { type: Number, trim: true, required: true },
    title: { type: String, trim: true, required: true },
    thumbnail: { type: String, trim: true, required: true },
    short_description: { type: String, trim: true, required: true },
    game_url: { type: String, trim: true},
    genre: { type: String, trim: true, required: true },
    platform: { type: String, trim: true, required: true },
    publisher: { type: String, trim: true, required: true },
    developer: { type: String, trim: true},
    release_date: { type: String, trim: true},
    freetogame_profile_url: { type: String, trim: true },
});

const Game = mongoose.model("game", gameSchema);

module.exports = Game;