const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Reporting Endpoints
router.get('/completed', taskController.getCompletedTasksCount);
router.get('/pending', taskController.getPendingTasksCount);
router.get('/summary', taskController.getSystemSummary);

module.exports = router;