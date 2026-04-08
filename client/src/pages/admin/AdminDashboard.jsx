import React from 'react';
import StatsCard from '../../components/dashboard/StatsCard';
import Card from '../../components/common/Card';

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-8">Platform Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatsCard title="Total Users" value="12,450" icon="👥" trend={8} />
        <StatsCard title="Total Instructors" value="450" icon="🎓" trend={2} />
        <StatsCard title="Total Courses" value="1,840" icon="📚" trend={15} />
        <StatsCard title="Platform Revenue" value="$42,500" icon="💰" trend={10} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <Card className="h-96 flex items-center justify-center bg-slate-50 dark:bg-slate-800/50">
          <p className="text-slate-400 font-bold">[ User Growth Chart Placeholder ]</p>
        </Card>
        <Card className="h-96 flex items-center justify-center bg-slate-50 dark:bg-slate-800/50">
          <p className="text-slate-400 font-bold">[ Revenue by Category Placeholder ]</p>
        </Card>
      </div>
    </div>
  );
}