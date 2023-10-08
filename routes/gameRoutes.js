let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js
const verifyToken = require('../middlewares/verifyTokenMiddleware');

router.get('/games', (req, res) => {
    //console.log('Received a request');
    Controllers.gameController.getGames(res);
})

router.post('/games', (req, res) => {
    Controllers.gameController.createGame(req.body, res)
})

module.exports = router;