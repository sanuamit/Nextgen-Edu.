import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../common/Card';

export default function RecentCourses({ courses, title = "Recent Courses" }) {
  const navigate = useNavigate();

  if (!courses || courses.length === 0) return null;

  // Only show the 4 most recent courses
  const recentCourses = courses.slice(0, 4);

  return (
    <Card className="p-0 overflow-hidden">
      <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{title}</h3>
        <button 
          onClick={() => navigate('/dashboard')} 
          className="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:underline"
        >
          View All
        </button>
      </div>
      <div className="divide-y divide-slate-50 dark:divide-slate-800">
        {recentCourses.map((course) => (
          <div key={course._id} className="p-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition duration-150">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-lg flex items-center justify-center font-bold">
                {course.category.charAt(0).toUpperCase()}
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white line-clamp-1">{course.title}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">{course.category}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-black text-slate-900 dark:text-white">${course.price}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}