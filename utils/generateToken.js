const jwt = require('jsonwebtoken');

// Function to generate a token for a user
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '1h' }); 
};

module.exports = generateToken;
