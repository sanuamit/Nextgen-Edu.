import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useCourses } from '../../hooks/useCourses';
import RecentCourses from '../../components/dashboard/RecentCourses';
import ActivityFeed from '../../components/dashboard/ActivityFeed';
import StatsCard from '../../components/dashboard/StatsCard';
import Loader from '../../components/common/Loader';

export default function Dashboard() {
  const { user } = useAuth();
  const { courses, loading } = useCourses();

  if (loading) return <Loader fullScreen />;

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-3xl p-8 text-white shadow-lg">
        <h1 className="text-3xl md:text-4xl font-black mb-2">
          Welcome back, {user?.name.split(' ')[0]}! 👋
        </h1>
        <p className="text-indigo-100 text-lg">
          {user?.role === 'instructor' 
            ? "Here's what's happening with your courses today."
            : "Ready to continue your learning journey?"}
        </p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard 
          title={user?.role === 'instructor' ? "Total Students" : "Courses Enrolled"} 
          value={user?.role === 'instructor' ? "1,248" : "4"} 
          icon={user?.role === 'instructor' ? "👥" : "📚"} 
          trend={12} 
        />
        <StatsCard 
          title={user?.role === 'instructor' ? "Course Rating" : "Completed Lessons"} 
          value={user?.role === 'instructor' ? "4.8" : "24"} 
          icon="⭐" 
        />
        <StatsCard 
          title={user?.role === 'instructor' ? "This Month's Revenue" : "Learning Hours"} 
          value={user?.role === 'instructor' ? "$4,250" : "18.5h"} 
          icon={user?.role === 'instructor' ? "💰" : "⏱️"} 
          trend={8} 
        />
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentCourses 
            courses={courses} 
            title={user?.role === 'instructor' ? "Your Published Courses" : "Continue Learning"} 
          />
        </div>
        <div className="lg:col-span-1">
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
}