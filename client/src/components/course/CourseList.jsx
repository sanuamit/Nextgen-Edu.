import React from 'react';
import CourseCard from './CourseCard';
import Loader from '../common/Loader';

export default function CourseList({ courses, loading, isInstructor = false, emptyMessage = "No courses found." }) {
  if (loading) return <Loader />;

  if (!courses || courses.length === 0) {
    return (
      <div className="text-center py-16 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700">
        <div className="text-5xl mb-4">📭</div>
        <p className="text-slate-500 dark:text-slate-400 font-medium">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in-up">
      {courses.map((course) => (
        <CourseCard key={course._id} course={course} isInstructor={isInstructor} />
      ))}
    </div>
  );
}