const mongoose = require('mongoose');

// Define the Timesheet schema
const timesheetSchema = new mongoose.Schema({
  staffId: {
    type: Number,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  projectName: {
    type: String,
    required: true,
  },
  projectCode: {
    type: String,
    required: true,
  },
  activity: {
    type: [String], // Array of strings
    required: true,
  },
  timesheetStatus: {
    type: String,
    required: true,
    enum: ['Pending', 'Submitted', 'Approved', 'Rejected'], // Enum to enforce specific statuses
  },
  revision: {
    type: Number,
    default: 0, // Default value for revision
  },
  size: {
    type: Number,
    required: true,
  },
  projectDetail: {
    type: String,
  },
}, { timestamps: true });

// Create the Timesheet model
const Timesheet = mongoose.model('Timesheet', timesheetSchema);

module.exports = Timesheet;
