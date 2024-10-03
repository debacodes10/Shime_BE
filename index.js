const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./utils/database');

// Route imports
const timesheetRoutes = require('./routes/timesheetRoute');
const authRoutes = require('./routes/authRoutes');

// Load environment variables from .env file
dotenv.config();

// Initialize express app
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Hello, World! Backend server is running!');
});

// Auth routes
app.use('/api/auth', authRoutes); // Auth routes for login/register

// Timesheet routes
app.use('/api/timesheets', timesheetRoutes); // Timesheet routes

// Connect to MongoDB
connectDB();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
