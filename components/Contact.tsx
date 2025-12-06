import React from 'react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="px-6 lg:px-0 mb-20">
      <div className="bg-md-sys-primary-container rounded-[2rem] lg:rounded-[3rem] p-8 md:p-12 lg:p-20 overflow-hidden relative shadow-elevation-1">
        
        {/* Centered Content Layout */}
        <div className="flex flex-col items-center text-center relative z-10 max-w-4xl mx-auto">
           
           {/* Icon Box */}
           <div className="w-20 h-20 md:w-24 md:h-24 bg-md-sys-on-primary-container rounded-[2rem] flex items-center justify-center text-md-sys-primary-container mb-8 md:mb-10 transform -rotate-6 hover:rotate-0 transition-transform duration-500 shadow-lg">
              <span className="material-symbols-rounded text-4xl md:text-5xl">waving_hand</span>
           </div>
           
           <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-md-sys-on-primary-container mb-6 md:mb-8 tracking-tight">
            Liên hệ
           </h2>
           
           <p className="text-lg md:text-xl text-md-sys-on-primary-container/80 mb-10 md:mb-12 font-medium max-w-2xl leading-relaxed">
            Bạn có điều muốn nói, liên hệ để cùng nhau trao đổi thôi!
           </p>
           
           {/* Contact Actions */}
           <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 w-full md:w-auto">
              <a 
                href="mailto:daoquan1002+contact@gmail.com" 
                className="w-full md:w-auto px-8 py-4 bg-md-sys-on-primary-container text-md-sys-primary-container rounded-full font-bold text-lg hover:shadow-elevation-3 hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
              >
                  <span className="material-symbols-rounded">mail</span>
                  <span>Gửi Email</span>
              </a>
           </div>
        </div>
        
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-md-sys-tertiary-container/30 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      </div>
    </section>
  );
};