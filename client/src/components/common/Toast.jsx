import React, { useEffect } from 'react';

export default function Toast({ message, type = 'success', onClose, duration = 3000 }) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [message, duration, onClose]);

  if (!message) return null;

  const bgColors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-indigo-500'
  };

  return (
    <div className={`fixed top-20 right-4 z-50 ${bgColors[type]} text-white px-6 py-3 rounded-xl shadow-lg font-medium animate-fade-in-up flex items-center gap-3`}>
      <span>{message}</span>
      <button onClick={onClose} className="opacity-80 hover:opacity-100 font-bold text-xl leading-none">
        &times;
      </button>
    </div>
  );
}