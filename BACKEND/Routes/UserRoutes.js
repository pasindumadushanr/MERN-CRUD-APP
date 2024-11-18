const express = require('express');
const router = express.Router();

// Import Controllers
const UserControllers = require('../Controllers/UserControllers');

// Define Routes
router.get('/users', UserControllers.getAllusers); // Fetch all users
router.post('/add-user', UserControllers.addUser); // Add a new user
router.get('/users/:id', UserControllers.getById); // Get user by ID

// Export Router
module.exports = router;
