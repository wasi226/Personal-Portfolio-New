import React from 'react';

export default function SkillCard({ icon: Icon, title, delay }) {
  return (
    <div 
      className="p-3 fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div 
        className="group w-full h-28 bg-gray-800/40 border border-gray-700/50 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden transition-all duration-300 hover:bg-gray-800/80 hover:border-purple-500/50 hover:-translate-y-2 floating-animation"
        style={{ animationDuration: `${6 + delay / 150}s` }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="relative z-10 flex flex-col items-center justify-center">
          <Icon className="w-8 h-8 text-purple-400 mb-2 transition-transform duration-300 group-hover:scale-110" />
          <p className="text-gray-300 text-sm font-medium text-center px-2">{title}</p>
        </div>
      </div>
    </div>
  );
}