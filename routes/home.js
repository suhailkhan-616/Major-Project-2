const express = require('express');
const router  = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/', homeController.homePage);
router.post('/user',homeController.addTodo);
router.post('/delete', homeController.deleteList);

console.log('Router is ready')

module.exports = router;