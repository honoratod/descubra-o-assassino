var express = require('express');
var router = express.Router();

//Hello world
router.get("/", function (req, res) {
    res.status(200).json({ message: 'Pronto para a investigação!' });
});



module.exports = router;
