const express = require('express');
const {
  createTimesheet,
  getAllTimesheets,
  getTimesheetByStaffId,
  getTimesheetByDate,
  updateTimesheetByStaffId,
  updateTimesheetByDate,
  deleteTimesheetByStaffId,
  deleteTimesheetByDate,
} = require('../controllers/timesheetController');

const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Routes
router.post('/', protect, createTimesheet); // Protected route
router.get('/', protect, getAllTimesheets);
router.get('/staff/:staffId', protect, getTimesheetByStaffId);
router.get('/date/:date', protect, getTimesheetByDate);
router.put('/staff/:staffId', protect, updateTimesheetByStaffId);
router.put('/date/:date', protect, updateTimesheetByDate);
router.delete('/staff/:staffId', protect, deleteTimesheetByStaffId);
router.delete('/date/:date', protect, deleteTimesheetByDate);

module.exports = router;
