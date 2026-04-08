import React from 'react';
import Card from '../../components/common/Card';
import Button from '../../components/common/Button';

export default function Users() {
  // Mock Data
  const users = [
    { id: 1, name: 'Alice Smith', email: 'alice@example.com', role: 'student', status: 'Active' },
    { id: 2, name: 'Bob Johnson', email: 'bob@example.com', role: 'instructor', status: 'Active' },
    { id: 3, name: 'Charlie Davis', email: 'charlie@example.com', role: 'student', status: 'Suspended' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white">User Management</h1>
        <div className="flex gap-2">
          <input type="text" placeholder="Search users..." className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500" />
        </div>
      </div>

      <Card className="p-0 overflow-hidden overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/50 text-slate-500 dark:text-slate-400 text-sm uppercase tracking-wider">
              <th className="p-4 font-bold">Name</th>
              <th className="p-4 font-bold">Email</th>
              <th className="p-4 font-bold">Role</th>
              <th className="p-4 font-bold">Status</th>
              <th className="p-4 font-bold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
            {users.map(u => (
              <tr key={u.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition">
                <td className="p-4 font-bold text-slate-900 dark:text-white">{u.name}</td>
                <td className="p-4 text-slate-600 dark:text-slate-400">{u.email}</td>
                <td className="p-4 capitalize font-medium text-slate-700 dark:text-slate-300">{u.role}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${u.status === 'Active' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'}`}>
                    {u.status}
                  </span>
                </td>
                <td className="p-4 text-right">
                  <Button variant="outline" size="sm">Edit</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
}