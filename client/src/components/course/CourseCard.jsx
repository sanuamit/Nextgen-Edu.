import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../common/Card';

export default function CourseCard({ course, isInstructor }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Instructors go to management, students go to the player
    if (isInstructor) {
      navigate(`/instructor/courses/${course._id}`);
    } else {
      navigate('/student/player', { state: { course } });
    }
  };

  return (
    <Card 
      className="flex flex-col h-full overflow-hidden p-0 group"
      onClick={handleClick}
    >
      <div className="h-48 bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition duration-300"></div>
        <span className="text-xl font-black text-slate-700 dark:text-slate-200 relative z-10 px-4 text-center group-hover:scale-105 transition transform duration-300">
          {course.title}
        </span>
        <span className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider z-10">
          {course.category}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 flex-grow line-clamp-2">{course.description}</p>
        <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-slate-700">
          <span className="text-xl font-black text-slate-900 dark:text-white">${course.price}</span>
          <span className="text-indigo-600 dark:text-indigo-400 font-bold text-sm group-hover:underline">
            {isInstructor ? 'Manage Course' : 'Start Learning'}
          </span>
        </div>
      </div>
    </Card>
  );
}