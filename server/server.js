import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

import authRoutes from './routes/authRoutes.js';
import courseRoutes from './routes/courseRoutes.js';

// Load variables and connect to DB
dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors({ origin: '*' })); // Allows the React frontend to connect
app.use(express.json()); // Parses incoming JSON data

// Console logger to track incoming requests
app.use((req, res, next) => {
    console.log(`📡 Request: ${req.method} ${req.url}`);
    next();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 BACKEND is running on http://127.0.0.1:${PORT}`);
    console.log(`✅ Ready to receive requests!`);
});