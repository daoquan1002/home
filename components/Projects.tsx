import React from 'react';
import { PROJECTS } from '../constants';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="w-full">
      <div className="mb-10 lg:mb-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-md-sys-on-surface tracking-tight">
           Dự án <span className="text-md-sys-tertiary">Tiêu biểu</span>
        </h2>
      </div>

      {/* Grid: 1 col on mobile, 2 cols on Tablet (md) AND Desktop (lg) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {PROJECTS.map((project) => (
          <a 
            key={project.id} 
            href={project.link || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col bg-md-sys-surface-container rounded-[2rem] overflow-hidden hover:shadow-elevation-3 transition-all duration-500 hover:-translate-y-2 border border-md-sys-outline-variant/20 cursor-pointer"
          >
            {/* Card Image */}
            <div className="h-56 sm:h-64 lg:h-72 overflow-hidden relative">
               <img 
                 src={project.imageUrl} 
                 alt={project.title} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>

            {/* Card Content */}
            <div className="p-6 md:p-8 flex-1 flex flex-col">
               <div className="flex justify-between items-start mb-4">
                   <h3 className="text-xl lg:text-2xl font-bold text-md-sys-on-surface group-hover:text-md-sys-primary transition-colors line-clamp-1">
                     {project.title}
                   </h3>
                   <div className="shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-md-sys-surface flex items-center justify-center text-md-sys-on-surface shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="material-symbols-rounded text-lg">arrow_outward</span>
                   </div>
               </div>
               
               <p className="text-md-sys-on-surface-variant text-sm md:text-base mb-6 line-clamp-3">
                 {project.description}
               </p>
               
               <div className="mt-auto flex flex-wrap gap-2">
                 {project.tags.map(tag => (
                   <span key={tag} className="px-2 py-1 bg-md-sys-surface-variant/50 rounded-lg text-[10px] md:text-xs font-bold text-md-sys-on-surface-variant uppercase tracking-wider">
                     {tag}
                   </span>
                 ))}
               </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};