const Task = require('../models/Task');

// GET /tasks — View all tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ success: true, count: tasks.length, data: tasks });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// POST /tasks — Create a task
exports.createTask = async (req, res) => {
  try {
    const { title, description, dueDate, category } = req.body;
    const task = await Task.create({ title, description, dueDate, category });
    res.status(201).json({ success: true, data: task });
  } catch (err) {
    // Mongoose validation errors (e.g. empty title)
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: messages.join(', ') });
    }
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// PUT /tasks/:id — Edit a task
exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ success: false, message: 'Task not found' });

    // Prevent marking already-completed task as complete again
    if (req.body.completed === true && task.completed === true) {
      return res.status(400).json({ success: false, message: 'Task is already marked as completed' });
    }

    const updated = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,           // return updated doc
      runValidators: true, // re-run schema validations
    });

    res.status(200).json({ success: true, data: updated });
  } catch (err) {
    if (err.name === 'ValidationError') {
      const messages = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ success: false, message: messages.join(', ') });
    }
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// DELETE /tasks/:id — Delete a task
exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ success: false, message: 'Task not found' });
    res.status(200).json({ success: true, message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};