import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import Toast from '../components/common/Toast';

export default function Settings() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [notifications, setNotifications] = useState({
    email: true,
    promotions: false,
    courseUpdates: true
  });
  const [toastMsg, setToastMsg] = useState('');

  const handleToggleNotification = (key) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    setToastMsg('Settings updated successfully');
  };

  return (
    <div className="max-w-3xl mx-auto py-8">
      <Toast message={toastMsg} onClose={() => setToastMsg('')} />
      
      <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-8">Account Settings</h1>

      <div className="space-y-6">
        {/* Appearance Settings */}
        <Card>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Appearance</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Toggle between light and dark themes.</p>
            </div>
            <button 
              onClick={toggleTheme}
              className="relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              style={{ backgroundColor: theme === 'dark' ? '#4f46e5' : '#cbd5e1' }}
            >
              <span className="sr-only">Toggle Dark Mode</span>
              <span
                className={`${
                  theme === 'dark' ? 'translate-x-7 bg-white' : 'translate-x-1 bg-white'
                } inline-block h-6 w-6 transform rounded-full transition-transform`}
              />
            </button>
          </div>
        </Card>

        {/* Notification Settings */}
        <Card>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">Notifications</h3>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-700 dark:text-slate-300">Email Notifications</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Receive daily summaries and account alerts.</p>
              </div>
              <input 
                type="checkbox" 
                checked={notifications.email} 
                onChange={() => handleToggleNotification('email')}
                className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500 cursor-pointer"
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-700 dark:text-slate-300">Course Updates</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Get notified when an instructor updates a course.</p>
              </div>
              <input 
                type="checkbox" 
                checked={notifications.courseUpdates} 
                onChange={() => handleToggleNotification('courseUpdates')}
                className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500 cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-slate-700 dark:text-slate-300">Promotions & Offers</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">Receive emails about new discounts and sales.</p>
              </div>
              <input 
                type="checkbox" 
                checked={notifications.promotions} 
                onChange={() => handleToggleNotification('promotions')}
                className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500 cursor-pointer"
              />
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-700 flex justify-end">
            <Button onClick={handleSave}>Save Preferences</Button>
          </div>
        </Card>

        {/* Danger Zone */}
        <Card className="border-red-200 dark:border-red-900/50">
          <h3 className="text-lg font-bold text-red-600 dark:text-red-500 mb-2">Danger Zone</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">Once you delete your account, there is no going back. Please be certain.</p>
          <Button variant="danger" size="sm">Delete Account</Button>
        </Card>
      </div>
    </div>
  );
}