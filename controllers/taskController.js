const Task = require('../models/Task');

// GET /tasks
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.render('index', { tasks, error: null });
  } catch (err) {
    res.render('index', { tasks: [], error: 'Failed to load tasks' });
  }
};

// GET /tasks/new
exports.showNewForm = (req, res) => {
  res.render('new', { error: null });
};

// POST /tasks
exports.createTask = async (req, res) => {
  try {
    const { title, description, dueDate, category } = req.body;
    await Task.create({ title, description, dueDate, category });
    res.redirect('/tasks');
  } catch (err) {
    const message =
      err.name === 'ValidationError'
        ? Object.values(err.errors).map((e) => e.message).join(', ')
        : 'Something went wrong';
    res.render('new', { error: message });
  }
};

// GET /tasks/:id/edit
exports.showEditForm = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.redirect('/tasks');
    res.render('edit', { task, error: null });
  } catch (err) {
    res.redirect('/tasks');
  }
};

// PUT /tasks/:id
exports.updateTask = async (req, res) => {
  try {
    const { title, description, dueDate, category } = req.body;
    await Task.findByIdAndUpdate(
      req.params.id,
      { title, description, dueDate, category },
      { new: true, runValidators: true }
    );
    res.redirect('/tasks');
  } catch (err) {
    const task = await Task.findById(req.params.id);
    const message =
      err.name === 'ValidationError'
        ? Object.values(err.errors).map((e) => e.message).join(', ')
        : 'Something went wrong';
    res.render('edit', { task, error: message });
  }
};

// PUT /tasks/:id/complete
exports.completeTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.redirect('/tasks');

    if (task.completed) {
      // Already complete — just redirect (validation handled gracefully)
      return res.redirect('/tasks');
    }

    task.completed = true;
    await task.save();
    res.redirect('/tasks');
  } catch (err) {
    res.redirect('/tasks');
  }
};

// DELETE /tasks/:id
exports.deleteTask = async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.redirect('/tasks');
  } catch (err) {
    res.redirect('/tasks');
  }
};