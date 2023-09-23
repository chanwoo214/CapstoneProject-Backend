let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js

router.get('/', (req, res) => {
    Controllers.userController.getUsers(res);
})

router.post('/', (req, res) => {
    Controllers.userController.createUser(req.body, res)
})

module.exports = router;