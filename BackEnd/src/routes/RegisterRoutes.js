const express = require('express');
const router = express.Router();
const RegisterController = require('../controller/RegisterController');
const RegisterValidation = require('../middlewares/RegisterValidation');



router.post('/', RegisterValidation, RegisterController.create);
router.put('/:id', RegisterValidation, RegisterController.update);
router.get('/filter/all', RegisterController.all);
router.delete('/:id', RegisterController.delete);


module.exports = router;