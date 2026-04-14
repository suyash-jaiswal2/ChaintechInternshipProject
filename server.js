const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
require('dotenv').config();

const taskRoutes = require('./routes/taskRoutes');

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.urlencoded({ extended: true })); // parse form submissions
app.use(express.json());
app.use(methodOverride('_method'));              // support PUT and DELETE from forms
app.use(express.static('public'));               // serve CSS/JS from public folder

// Routes
app.use('/tasks', taskRoutes);

// Root → redirect to task list
app.get('/', (req, res) => res.redirect('/tasks'));

// Connect to MongoDB then start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(process.env.PORT || 3000, () => {
      console.log(`🚀 Server running at http://localhost:${process.env.PORT || 3000}`);
    });
  })
  .catch((err) => {
    console.error('❌ DB connection failed:', err.message);
    process.exit(1);
  });