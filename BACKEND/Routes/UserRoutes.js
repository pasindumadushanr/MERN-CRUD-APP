const express = require('express');
const router = express.Router();

// Import Controller
const UserControllers = require('../Controllers/UserControllers');

// Define Routes
router.get('/users', UserControllers.getAllusers);

// Export Router
module.exports = router;
