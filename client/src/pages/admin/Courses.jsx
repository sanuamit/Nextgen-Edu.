import React from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

export default function AdminCourses() {
  // Mock Data
  const courses = [
    { id: 101, title: 'Advanced React Patterns', instructor: 'Bob Johnson', price: '$49.99', status: 'Published' },
    { id: 102, title: 'Python for Data Science', instructor: 'Dr. Emily Chen', price: '$89.99', status: 'Under Review' },
  ];

  return (
    <div>
      <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-8">Course Moderation</h1>

      <Card className="p-0 overflow-hidden overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-sm uppercase tracking-wider">
              <th className="p-4 font-bold">Course Title</th>
              <th className="p-4 font-bold">Instructor</th>
              <th className="p-4 font-bold">Price</th>
              <th className="p-4 font-bold">Status</th>
              <th className="p-4 font-bold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
            {courses.map(c => (
              <tr key={c.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition">
                <td className="p-4 font-bold text-slate-900 dark:text-white">{c.title}</td>
                <td className="p-4 text-slate-600 dark:text-slate-400">{c.instructor}</td>
                <td className="p-4 font-medium text-slate-700 dark:text-slate-300">{c.price}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${c.status === 'Published' ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400' : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400'}`}>
                    {c.status}
                  </span>
                </td>
                <td className="p-4 text-right space-x-2">
                  <Button variant="secondary" size="sm">View</Button>
                  {c.status === 'Under Review' && <Button size="sm">Approve</Button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}