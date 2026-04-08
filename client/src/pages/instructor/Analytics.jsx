import React from 'react';
import StatsCard from '../../components/dashboard/StatsCard';
import Card from '../../components/common/Card';

export default function Analytics() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-8">Financial & Student Analytics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatsCard title="Total Revenue" value="$12,450" icon="💰" trend={15} />
        <StatsCard title="Total Enrollments" value="3,421" icon="👥" trend={5} />
        <StatsCard title="Avg Rating" value="4.9" icon="⭐" />
        <StatsCard title="Active Courses" value="8" icon="📚" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <Card className="h-96 flex items-center justify-center bg-slate-50 dark:bg-slate-800/50">
          <p className="text-slate-400 font-bold">[ Revenue Chart Placeholder ]</p>
        </Card>
        <Card className="h-96 flex items-center justify-center bg-slate-50 dark:bg-slate-800/50">
          <p className="text-slate-400 font-bold">[ Enrollment Map Placeholder ]</p>
        </Card>
      </div>
    </div>
  );
}