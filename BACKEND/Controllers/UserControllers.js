const User = require('../Model/UserModel');

// Fetch all users
const getAllusers = async (req, res, next) => {
    let users;
    try {
        users = await User.find(); 
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error retrieving users' });
    }

    if (!users || users.length === 0) {
        return res.status(200).json({ message: 'Could not find any users' });
    }

    return res.status(200).json({ users });
};

// Add a new user
const addUser = async (req, res, next) => {
    console.log(req.body); // Log the request body to verify

    const { name, gmail, age, address } = req.body;

    let user;
    try {
        user = new User({ name, gmail, age, address });
        await user.save();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error saving user' });
    }

    if (!user) {
        return res.status(404).json({ message: 'Could not create user' });
    }
    return res.status(200).json({ user });
};

// Export the controller functions
exports.getAllusers = getAllusers;
exports.addUser = addUser;
