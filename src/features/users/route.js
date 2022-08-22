const express = require('express');
const { container } = require('../../../di-setup');
const validate = require('../../middlewares/validate');
const userDto = require('./dto');

const userController = container.resolve('userController');

const router = express.Router();
router.post('/', validate(userDto), userController.createUser);
router.get('/:id', userController.getUser);

module.exports = router;
