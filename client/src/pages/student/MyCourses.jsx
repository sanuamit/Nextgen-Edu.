import React from 'react';
import { useCourses } from '../../hooks/useCourses';
import CourseList from '../../components/course/CourseList';

export default function MyCourses() {
  const { courses, loading } = useCourses();

  return (
    <div>
      <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-8">My Learning Path</h1>
      <CourseList 
        courses={courses} 
        loading={loading} 
        emptyMessage="You haven't enrolled in any courses yet." 
      />
    </div>
  );
}