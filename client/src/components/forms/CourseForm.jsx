import React, { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

export default function CourseForm({ onSubmit, isLoading, initialData = {} }) {
  const [formData, setFormData] = useState({
    title: initialData.title || '',
    category: initialData.category || '',
    price: initialData.price || 0,
    description: initialData.description || ''
  });

  const handleChange = (e) => {
    const value = e.target.name === 'price' ? Number(e.target.value) : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Input 
        label="Course Title" 
        name="title"
        required 
        value={formData.title} 
        onChange={handleChange} 
        placeholder="e.g. Advanced Node.js Architecture"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input 
          label="Category" 
          name="category"
          required 
          value={formData.category} 
          onChange={handleChange} 
          placeholder="e.g. Web Development"
        />
        <Input 
          label="Price ($)" 
          name="price"
          type="number"
          min="0"
          step="0.01"
          required 
          value={formData.price} 
          onChange={handleChange} 
        />
      </div>

      <div className="flex flex-col mb-4">
        <label className="text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Detailed Description</label>
        <textarea 
          name="description"
          required 
          rows="5"
          value={formData.description} 
          onChange={handleChange} 
          placeholder="What will students learn in this course?"
          className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none text-slate-900 dark:text-white resize-y"
        />
      </div>

      <div className="flex justify-end pt-4 border-t border-slate-100 dark:border-slate-700 gap-4">
        <Button type="submit" isLoading={isLoading} className="w-full md:w-auto">
          {initialData.title ? 'Update Course' : 'Publish Course'}
        </Button>
      </div>
    </form>
  );
}