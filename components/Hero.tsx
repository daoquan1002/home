import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative w-full min-h-[100dvh] lg:h-auto lg:min-h-[700px] flex items-center rounded-b-[2.5rem] rounded-t-none overflow-hidden shadow-elevation-1 mx-0 mt-0">
        
        {/* Full Cover Background */}
        <div className="absolute inset-0 z-0">
            <img 
               src="https://picsum.photos/1600/900?random=tech_abstract" 
               alt="Background" 
               className="w-full h-full object-cover"
            />
            {/* Darker gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-md-sys-on-surface/95 via-md-sys-on-surface/60 to-md-sys-on-surface/30 lg:to-transparent"></div>
            {/* Desktop specific gradient - Left to Right fade */}
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-md-sys-on-surface/90 via-md-sys-on-surface/40 to-transparent"></div>
        </div>

        {/* Content Container */}
        {/* Adjusted padding-bottom (pb) from 32 to 24 on mobile to sit closer to bottom nav */}
        <div className="relative z-10 w-full h-full flex flex-col justify-end lg:justify-center px-6 sm:px-10 lg:px-16 pb-24 pt-28 lg:py-20 lg:max-w-5xl">
            {/* Chip */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-md-sys-surface/10 backdrop-blur-md border border-white/20 text-xs md:text-sm font-bold text-white mb-6 w-fit shadow-sm">
               <span className="material-symbols-rounded text-base md:text-lg filled text-green-400">check_circle</span>
               <span>Được xác minh</span>
            </div>
            
            {/* Expressive Display Text */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter leading-[0.95] mb-6 font-display break-words">
                Create. <br/>
                <span className="text-md-sys-primary-container">Inspire.</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light mb-10 max-w-xl leading-relaxed">
                Xin chào, mình là <b>Quân</b>. Kỹ sư phần mềm đam mê xây dựng những trải nghiệm kỹ thuật số đầy cảm xúc.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                 <button 
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} 
                    className="h-14 px-8 rounded-full bg-md-sys-primary-container text-md-sys-on-primary-container font-bold text-base hover:shadow-elevation-2 active:scale-95 transition-all flex items-center justify-center gap-2"
                 >
                    <span className="material-symbols-rounded">view_cozy</span>
                    Xem Dự án
                 </button>
                 
                 <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="h-14 px-8 rounded-full border border-white/30 text-white font-bold text-base hover:bg-white hover:text-black active:scale-95 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                 >
                    <span>Liên hệ</span>
                    <span className="material-symbols-rounded">arrow_forward</span>
                 </button>
            </div>
        </div>
    </section>
  );
};