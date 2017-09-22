var express = require('express'),
    router = express.Router();

router.use('/deliveries', require('./deliveries'));

module.exports = router;

