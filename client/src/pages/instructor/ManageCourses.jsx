import React from 'react';
import { useCourses } from '../../hooks/useCourses';
import { useAuth } from '../../hooks/useAuth';
import CourseList from '../../components/course/CourseList';
import Button from '../../components/common/Button';
import { Link } from 'react-router-dom';

export default function ManageCourses() {
  const { courses, loading } = useCourses();
  const { user } = useAuth();

  // Only show courses created by THIS instructor
  const myCourses = courses.filter(c => c.instructor === user._id || c.instructor?._id === user._id);

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">Manage My Courses</h1>
        <Link to="/instructor/create">
          <Button>+ Create New</Button>
        </Link>
      </div>
      
      <CourseList 
        courses={myCourses} 
        loading={loading} 
        isInstructor={true} 
        emptyMessage="You haven't published any courses yet." 
      />
    </div>
  );
}