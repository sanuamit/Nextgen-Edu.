import { useState, useEffect, useCallback } from 'react';
import { fetchAllCourses } from '../api/courseApi';

export const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadCourses = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchAllCourses();
      setCourses(data);
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load courses.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCourses();
  }, [loadCourses]);

  // Returns refetch so you can manually refresh the list after creating a new course
  return { courses, loading, error, refetch: loadCourses };
};