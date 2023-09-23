let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get('/', (req, res) => {
    Controllers.PostController.getPosts(res);
})

router.post('/', (req, res) => {
    Controllers.PostController.createPost(req.body, res)
})

module.exports = router;