import Course from '../models/Course.js';

export const getCourses = async (req, res) => {
    try {
        const courses = await Course.find({}).populate('instructor', 'name');
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createCourse = async (req, res) => {
    const { title, description, category, price } = req.body;
    try {
        const course = new Course({
            title, description, category, price,
            instructor: req.user._id
        });
        const createdCourse = await course.save();
        res.status(201).json(createdCourse);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};