const User = require('../Model/UserModel');

const getAllusers = async (req, res, next) => {
    let users;
    try {
        users = await User.find(); 
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Error retrieving users' });
    }

    if (!users || users.length === 0) {
        return res.status(404).json({ message: 'Could not find any users' });
    }

    return res.status(200).json({ users });
};

module.exports = { getAllusers };
