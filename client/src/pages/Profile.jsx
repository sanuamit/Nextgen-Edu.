import React, { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import Card from '../components/common/Card';
import Input from '../components/common/Input';
import Button from '../components/common/Button';
import Toast from '../components/common/Toast';

export default function Profile() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: 'Avid learner and tech enthusiast.' // Mock data for now
  });
  const [isSaving, setIsSaving] = useState(false);
  const [toastMsg, setToastMsg] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaving(true);
    // Simulate an API call to update profile
    setTimeout(() => {
      setIsSaving(false);
      setToastMsg('Profile updated successfully!');
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto py-8">
      <Toast message={toastMsg} type="success" onClose={() => setToastMsg('')} />
      
      <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-8">My Profile</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Avatar & Role */}
        <div className="lg:col-span-1">
          <Card className="flex flex-col items-center text-center py-8">
            <div className="w-32 h-32 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center text-5xl font-bold mb-4">
              {user?.name.charAt(0)}
            </div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">{user?.name}</h2>
            <p className="text-slate-500 dark:text-slate-400 capitalize font-medium mt-1">{user?.role} Account</p>
            <p className="text-sm text-slate-400 mt-4">Member since 2026</p>
          </Card>
        </div>

        {/* Right Column: Edit Form */}
        <div className="lg:col-span-2">
          <Card>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-100 dark:border-slate-700 pb-4">Personal Information</h3>
            <form onSubmit={handleSave} className="space-y-6">
              <Input 
                label="Full Name" 
                value={formData.name} 
                onChange={(e) => setFormData({...formData, name: e.target.value})} 
              />
              <Input 
                label="Email Address" 
                type="email"
                value={formData.email} 
                onChange={(e) => setFormData({...formData, email: e.target.value})} 
                disabled // Emails usually require special verification to change
                className="opacity-70 cursor-not-allowed"
              />
              <div className="flex flex-col mb-4">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Short Bio</label>
                <textarea 
                  rows="4"
                  value={formData.bio}
                  onChange={(e) => setFormData({...formData, bio: e.target.value})}
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white resize-none"
                ></textarea>
              </div>
              <div className="flex justify-end pt-4">
                <Button type="submit" isLoading={isSaving}>Save Changes</Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}