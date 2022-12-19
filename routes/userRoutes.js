const express = require('express');
const controller = require('../controllers/userController');
const router = express.Router();

router.post('/users', controller.AddUser);
router.put('/users/:id', controller.UpdateUser);
router.delete('/users/:id', controller.DeleteUserById);
router.get('/users', controller.GetAllUsers);
router.get('/users/:id', controller.GetUserById);




module.exports = router;