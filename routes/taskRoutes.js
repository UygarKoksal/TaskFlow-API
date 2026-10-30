const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const validate = require('../middlewares/validation.js');

router.post('/', validate, taskController.createTask);
router.get('/', taskController.getAllTasks);
router.get('/:id', taskController.getTaskById);
router.put('/:id', validate, taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;