const { response } = require("../app");
const User = require("../modals/userModals");

exports.createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        if (!name || !email) {
            throw new Error("Name and Email required");
        }
        const userExists = await User.findOne({ email });
        if (userExists) {
            throw new Error("Email already exists");
        }
        const newUser = await User.create({
            name,
            email
        });
        res.status(200).json({
            success: true,
            message: "User created successfully",
            user: newUser
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};
