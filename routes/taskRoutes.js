const express = require('express');
const router = express.Router();
const {
  getAllTasks,
  showNewForm,
  createTask,
  showEditForm,
  updateTask,
  completeTask,
  deleteTask,
} = require('../controllers/taskController');

router.get('/',              getAllTasks);    // View all tasks
router.get('/new',           showNewForm);   // Show create form
router.post('/',             createTask);    // Submit create form
router.get('/:id/edit',      showEditForm);  // Show edit form
router.put('/:id',           updateTask);    // Submit edit form
router.put('/:id/complete',  completeTask);  // Mark as complete
router.delete('/:id',        deleteTask);    // Delete task

module.exports = router;