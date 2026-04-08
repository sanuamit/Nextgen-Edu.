import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { fetchCourseById } from '../../api/courseApi'; // Make sure this exists in your courseApi.js!
import Button from '../../components/common/Button';
import Loader from '../../components/common/Loader';
import Card from '../../components/common/Card';

export default function CourseDetails() {
  const { id } = useParams(); // Gets the course ID from the URL (e.g., /courses/12345)
  const navigate = useNavigate();
  const { user } = useAuth();
  
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  // Note: For this to work perfectly, you will need a backend route: GET /api/courses/:id
  useEffect(() => {
    const getCourse = async () => {
      try {
        const data = await fetchCourseById(id);
        setCourse(data);
      } catch (err) {
        console.error('Failed to fetch course details', err);
      } finally {
        setLoading(false);
      }
    };
    if (id) getCourse();
  }, [id]);

  if (loading) return <Loader fullScreen />;

  if (!course) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Course Not Found</h2>
        <Button onClick={() => navigate('/dashboard')}>Back to Dashboard</Button>
      </div>
    );
  }

  const handleEnroll = () => {
    if (!user) {
      // If they aren't logged in, send them to login, but remember where they came from
      navigate('/login', { state: { from: `/courses/${id}` } });
      return;
    }
    // If logged in, mock the enrollment and take them to the player
    navigate('/player', { state: { course } });
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6">
      
      {/* Hero Section */}
      <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="relative z-10 max-w-3xl">
          <span className="inline-block px-3 py-1 bg-indigo-500/30 text-indigo-300 font-bold text-xs rounded-full uppercase tracking-wider mb-4">
            {course.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-4">{course.title}</h1>
          <p className="text-lg text-slate-300 mb-8 line-clamp-3">{course.description}</p>
          <div className="flex items-center gap-4 text-sm font-medium text-slate-400">
            <span className="flex items-center gap-1">⭐ 4.8 (1.2k reviews)</span>
            <span>•</span>
            <span>👥 3,500 students</span>
            <span>•</span>
            <span>⏱️ 12 hours total</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">About this course</h2>
            <p className="text-slate-600 dark:text-slate-400 whitespace-pre-line leading-relaxed">
              {course.description}
            </p>
          </Card>

          <Card>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-6">What you'll learn</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {['Master advanced concepts', 'Build real-world projects', 'Understand best practices', 'Deploy to production'].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-green-500 mt-0.5">✓</span>
                  <span className="text-slate-700 dark:text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Sticky Enrollment Sidebar */}
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <div className="text-center mb-6 border-b border-slate-100 dark:border-slate-700 pb-6">
              <span className="text-4xl font-black text-slate-900 dark:text-white">${course.price}</span>
            </div>
            <div className="space-y-4">
              <Button size="lg" className="w-full" onClick={handleEnroll}>
                {user ? 'Start Learning Now' : 'Enroll Now'}
              </Button>
              <p className="text-center text-xs text-slate-500 dark:text-slate-400">
                30-Day Money-Back Guarantee
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-700 space-y-3 text-sm text-slate-600 dark:text-slate-400 font-medium">
              <div className="flex justify-between"><span>Total video:</span> <span>12 hours</span></div>
              <div className="flex justify-between"><span>Access:</span> <span>Lifetime</span></div>
              <div className="flex justify-between"><span>Certificate:</span> <span>Included</span></div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}