import React, { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

export default function RegisterForm({ onSubmit, isLoading }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input 
        label="Full Name" 
        name="name"
        required 
        value={formData.name} 
        onChange={handleChange} 
        placeholder="John Doe"
      />
      
      <div className="flex flex-col mb-4">
        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Account Type</label>
        <select 
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white transition-colors"
        >
          <option value="student">Student (I want to learn)</option>
          <option value="instructor">Instructor (I want to teach)</option>
        </select>
      </div>

      <Input 
        label="Email Address" 
        name="email"
        type="email" 
        required 
        value={formData.email} 
        onChange={handleChange} 
      />
      
      <Input 
        label="Password" 
        name="password"
        type="password" 
        required 
        value={formData.password} 
        onChange={handleChange} 
        placeholder="At least 6 characters"
      />
      
      <Button type="submit" className="w-full mt-4" isLoading={isLoading}>
        Create Account
      </Button>
    </form>
  );
}