import User from '../models/User.js';
import jwt from 'jsonwebtoken';

// --- GENERATE JWT TOKEN ---
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// --- REGISTER USER ---
export const registerUser = async (req, res) => {
    const { name, email, password, role } = req.body;
    try {
        // 1. Check if the user already exists in the database
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // 2. Create the new user (Password is hashed automatically by the User model)
        const user = await User.create({ name, email, password, role });

        // 3. Send back the success response with the new token
        res.status(201).json({
            _id: user._id, 
            name: user.name, 
            email: user.email, 
            role: user.role, 
            token: generateToken(user._id)
        });
    } catch (error) {
        console.error("❌ REGISTER ERROR:", error); // This prints the exact DB error to your terminal
        res.status(500).json({ message: error.message });
    }
};

// --- LOGIN USER ---
export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        // 1. Find the user by their email
        const user = await User.findOne({ email });

        // 2. If user exists AND the password matches the hashed password
        if (user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id, 
                name: user.name, 
                email: user.email, 
                role: user.role, 
                token: generateToken(user._id)
            });
        } else {
            // Send back a 401 Unauthorized if wrong email or password
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        console.error("❌ LOGIN ERROR:", error);
        res.status(500).json({ message: error.message });
    }
};