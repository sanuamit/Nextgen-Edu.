import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import CourseVideo from '../../components/course/CourseVideo';
import ProgressBar from '../../components/course/ProgressBar';
import Card from '../../components/common/Card';

export default function CoursePlayer() {
  const { state } = useLocation();
  const course = state?.course;

  if (!course) return <Navigate to="/dashboard" />;

  const modules = ['Introduction', 'Environment Setup', 'Core Fundamentals', 'Advanced Architecture', 'Deployment'];

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Video Area */}
      <div className="flex-1 space-y-6">
        <CourseVideo title={`${course.title} - Fundamentals`} />
        <div>
          <h1 className="text-3xl font-black text-slate-900 dark:text-white">{course.title}</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">{course.description}</p>
        </div>
      </div>

      {/* Curriculum Sidebar */}
      <div className="w-full lg:w-80 space-y-6">
        <Card>
          <ProgressBar progress={40} label="Course Progress" />
        </Card>

        <Card className="p-0 overflow-hidden">
          <div className="p-4 border-b border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
            <h3 className="font-bold text-slate-900 dark:text-white">Curriculum</h3>
          </div>
          <div className="divide-y divide-slate-100 dark:divide-slate-700">
            {modules.map((mod, i) => (
              <div key={i} className={`p-4 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-800 transition flex items-center gap-3 ${i === 2 ? 'bg-indigo-50 dark:bg-indigo-900/20' : ''}`}>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${i < 2 ? 'bg-green-100 text-green-600' : i === 2 ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-400 dark:bg-slate-700'}`}>
                  {i < 2 ? '✓' : i + 1}
                </div>
                <span className={`text-sm font-medium ${i === 2 ? 'text-indigo-600 dark:text-indigo-400 font-bold' : 'text-slate-700 dark:text-slate-300'}`}>
                  {mod}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}