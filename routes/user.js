const express = require('express');
const router = express.Router();
const userConstroller = require('../controllers/user_controller');

router.get('/user',userConstroller.user);

module.exports = router;