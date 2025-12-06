import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="px-6 lg:px-0">
      <div className="mb-8 lg:mb-12">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-md-sys-on-surface tracking-tight">Về Bản Thân</h2>
      </div>

      {/* Bento Grid Layout - Responsive: 1 col (mobile) -> 2 cols (tablet) -> 3 cols (desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* Main Card - Spans full on Mobile, 2cols on Desktop */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 bg-md-sys-surface-container-high rounded-[2rem] lg:rounded-[2.5rem] p-8 md:p-10 lg:p-12 flex flex-col justify-between relative overflow-hidden group min-h-[300px]">
              <div className="relative z-10">
                 <div className="w-14 h-14 md:w-16 md:h-16 bg-md-sys-primary rounded-full flex items-center justify-center text-md-sys-on-primary mb-6">
                    <span className="material-symbols-rounded text-2xl md:text-3xl">face</span>
                 </div>
                 <h3 className="text-2xl md:text-3xl font-bold text-md-sys-on-surface mb-4">Đang học code.</h3>
                 <p className="text-lg md:text-xl text-md-sys-on-surface-variant leading-relaxed">
                     Tuy vẫn còn non tay, nhưng mình tin rằng công nghệ không chỉ là những dòng lệnh khô khan, mà là công cụ để giải quyết vấn đề con người.
                 </p>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-md-sys-primary-container rounded-full blur-[80px] opacity-60 -mr-16 -mt-16 transition-opacity group-hover:opacity-80"></div>
          </div>

          {/* Stat Card 1 */}
          <div className="bg-md-sys-tertiary-container rounded-[2rem] lg:rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center text-md-sys-on-tertiary-container min-h-[200px]">
              <span className="text-5xl md:text-6xl font-black mb-2">??+</span>
              <span className="text-base md:text-lg font-medium opacity-80">Năm kinh nghiệm</span>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-md-sys-secondary-container rounded-[2rem] lg:rounded-[2.5rem] p-8 flex flex-col items-center justify-center text-center text-md-sys-on-secondary-container min-h-[200px]">
              <span className="text-5xl md:text-6xl font-black mb-2">??+</span>
              <span className="text-base md:text-lg font-medium opacity-80">Dự án hoàn thành</span>
          </div>

          {/* Tech Stack Strip - Full width on Mobile/Desktop, spans 2 on tablet */}
          <div className="md:col-span-2 lg:col-span-3 bg-md-sys-on-surface text-md-sys-surface rounded-[2rem] lg:rounded-[2.5rem] p-8 md:p-10 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
              <div className="whitespace-nowrap">
                  <span className="text-lg md:text-xl font-bold uppercase tracking-widest text-md-sys-surface-variant">Tech Stack</span>
              </div>
              <div className="flex flex-wrap gap-2 md:gap-3">
                  {['Android', 'Windows', 'Linux', 'HTML', 'PHP', '...'].map(skill => (
                      <span key={skill} className="px-4 py-2 md:px-5 md:py-3 rounded-full border border-md-sys-surface/20 hover:bg-md-sys-surface hover:text-md-sys-on-surface transition-colors font-medium cursor-default text-sm md:text-base">
                          {skill}
                      </span>
                  ))}
              </div>
          </div>
      </div>
    </section>
  );
};