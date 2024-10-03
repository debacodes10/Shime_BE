const Timesheet = require('../models/timesheet');

// Create a new timesheet
exports.createTimesheet = async (req, res) => {
  try {
    const timesheet = new Timesheet(req.body);
    await timesheet.save();
    res.status(201).json({ message: 'Timesheet created successfully', data: timesheet });
  } catch (error) {
    res.status(400).json({ message: 'Error creating timesheet', error: error.message });
  }
};

// Get all timesheets
exports.getAllTimesheets = async (req, res) => {
  try {
    const timesheets = await Timesheet.find();
    res.status(200).json({ data: timesheets });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching timesheets', error: error.message });
  }
};

// Get timesheet by staffId
exports.getTimesheetByStaffId = async (req, res) => {
  try {
    const timesheet = await Timesheet.findOne({ staffId: req.params.staffId });
    if (!timesheet) {
      return res.status(404).json({ message: 'Timesheet not found' });
    }
    res.status(200).json({ data: timesheet });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching timesheet', error: error.message });
  }
};

// Get timesheet by date
exports.getTimesheetByDate = async (req, res) => {
  try {
    const date = new Date(req.params.date);
    const timesheets = await Timesheet.find({ date: date });
    if (!timesheets.length) {
      return res.status(404).json({ message: 'No timesheets found for the given date' });
    }
    res.status(200).json({ data: timesheets });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching timesheets', error: error.message });
  }
};

// Update timesheet by staffId
exports.updateTimesheetByStaffId = async (req, res) => {
  try {
    const timesheet = await Timesheet.findOneAndUpdate(
      { staffId: req.params.staffId },
      req.body,
      { new: true, runValidators: true }
    );
    if (!timesheet) {
      return res.status(404).json({ message: 'Timesheet not found' });
    }
    res.status(200).json({ message: 'Timesheet updated successfully', data: timesheet });
  } catch (error) {
    res.status(400).json({ message: 'Error updating timesheet', error: error.message });
  }
};

// Update timesheet by date
exports.updateTimesheetByDate = async (req, res) => {
  try {
    const date = new Date(req.params.date);
    const timesheet = await Timesheet.findOneAndUpdate(
      { date: date },
      req.body,
      { new: true, runValidators: true }
    );
    if (!timesheet) {
      return res.status(404).json({ message: 'Timesheet not found for the given date' });
    }
    res.status(200).json({ message: 'Timesheet updated successfully', data: timesheet });
  } catch (error) {
    res.status(400).json({ message: 'Error updating timesheet', error: error.message });
  }
};

// Delete timesheet by staffId
exports.deleteTimesheetByStaffId = async (req, res) => {
  try {
    const timesheet = await Timesheet.findOneAndDelete({ staffId: req.params.staffId });
    if (!timesheet) {
      return res.status(404).json({ message: 'Timesheet not found' });
    }
    res.status(200).json({ message: 'Timesheet deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting timesheet', error: error.message });
  }
};

// Delete timesheet by date
exports.deleteTimesheetByDate = async (req, res) => {
  try {
    const date = new Date(req.params.date);
    const timesheet = await Timesheet.findOneAndDelete({ date: date });
    if (!timesheet) {
      return res.status(404).json({ message: 'Timesheet not found for the given date' });
    }
    res.status(200).json({ message: 'Timesheet deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting timesheet', error: error.message });
  }
};
