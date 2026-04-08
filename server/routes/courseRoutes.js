import express from 'express';
import { getCourses, createCourse } from '../controllers/courseController.js';
import { protect, instructorOnly } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getCourses);
router.post('/', protect, instructorOnly, createCourse);

export default router;