import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCourse } from '../../api/courseApi';
import CourseForm from '../../components/forms/CourseForm';
import Card from '../../components/common/Card';
import Toast from '../../components/common/Toast';

export default function CreateCourse() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCreate = async (courseData) => {
    setLoading(true);
    setError('');
    try {
      await createCourse(courseData);
      navigate('/dashboard'); // Go back to dashboard on success
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create course');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Toast message={error} type="error" onClose={() => setError('')} />
      
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">Publish a New Course</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2">Share your knowledge with the world. Fill out the details below.</p>
      </div>

      <Card>
        <CourseForm onSubmit={handleCreate} isLoading={loading} />
      </Card>
    </div>
  );
}