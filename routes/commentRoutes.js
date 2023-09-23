let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get('/', (req, res) => {
    Controllers.CommentController.getComments(res);
})

router.post('/', (req, res) => {
    Controllers.CommentController.createComment(req.body, res)
})



module.exports = router;