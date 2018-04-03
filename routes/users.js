let express = require('express');
let router = express.Router();
let a = 'test';
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});
router.get('/a', function (req, res, next) {
    res.send(`resource a ${a}`);
});

module.exports = router;
