import React from 'react';

export default function CourseVideo({ title }) {
  return (
    <div className="bg-slate-900 rounded-2xl aspect-video flex items-center justify-center shadow-xl relative overflow-hidden group">
      {/* Mock Video Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-black"></div>
      
      {/* Central Play Button */}
      <button className="relative z-10 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full p-6 transition transform group-hover:scale-110">
        <svg className="w-12 h-12 ml-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 4l12 6-12 6z" />
        </svg>
      </button>

      {/* Video Controls Bar (Appears on Hover) */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-4 text-white text-sm">
        <button className="hover:text-indigo-400 transition">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
        </button>
        <div className="w-full h-1.5 bg-white/30 rounded-full overflow-hidden cursor-pointer">
          <div className="w-1/3 h-full bg-indigo-500 relative"></div>
        </div>
        <span className="whitespace-nowrap font-medium font-mono">12:45 / 45:00</span>
      </div>
      
      {/* Title Overlay */}
      <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-white font-bold truncate">{title || 'Course Lesson Video'}</h3>
      </div>
    </div>
  );
}