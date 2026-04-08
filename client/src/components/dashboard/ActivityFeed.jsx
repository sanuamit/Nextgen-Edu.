import React from 'react';
import Card from '../common/Card';

export default function ActivityFeed() {
  const activities = [
    { id: 1, text: "Sarah Connor enrolled in", course: "Advanced React Patterns", time: "2 hours ago", icon: "👤" },
    { id: 2, text: "You earned $45.00 from", course: "UI/Design Masterclass", time: "5 hours ago", icon: "💵" },
    { id: 3, text: "John Doe asked a question in", course: "Node.js Backend", time: "1 day ago", icon: "❓" },
    { id: 4, text: "New 5-star review on", course: "Advanced React Patterns", time: "2 days ago", icon: "⭐" },
  ];

  return (
    <Card className="h-full">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Recent Activity</h3>
      <div className="space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-lg flex-shrink-0">
              {activity.icon}
            </div>
            <div>
              <p className="text-sm text-slate-700 dark:text-slate-300">
                {activity.text} <span className="font-bold text-slate-900 dark:text-white">{activity.course}</span>
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}