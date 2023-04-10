const express = require('express');
const router = express.Router();
const userController = require('../controllers/users.controller');

/* GET users */
router.get('/', userController.get);
  
/* POST users */
router.post('/', userController.create);

/* PUT users */
router.put('/:id', userController.update);

/* DELETE users */
router.delete('/:id', userController.remove);

module.exports = router;
