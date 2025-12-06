import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');

  // Intersection Observer để cập nhật tab đang active khi cuộn
  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, {
      root: null, // null nghĩa là viewport trên mobile
      // Trên desktop, root nên là container cuộn, nhưng null vẫn hoạt động tốt nếu threshold hợp lý
      rootMargin: '-20% 0px -60% 0px', 
      threshold: 0,
    });

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <main className="relative h-screen w-full bg-md-sys-background text-md-sys-on-background selection:bg-md-sys-tertiary-container selection:text-md-sys-on-tertiary-container flex flex-col lg:flex-row overflow-hidden">
      {/* Sidebar / Navbar Area */}
      {/* Trên mobile/tablet nó là fixed top/bottom bars, trên desktop nó chiếm không gian thực (flex item) */}
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      
      {/* Main Content Area */}
      {/* 
         - Mobile/Tablet: overflow-y-auto ở đây (hoặc body), h-full. Padding bottom lớn để tránh bottom nav.
         - Desktop: overflow-y-auto riêng biệt, scroll-smooth để click menu mượt mà.
         - Added 'scrollbar-hide' utility class here explicitly
      */}
      <div 
        id="main-content-scroll"
        className="flex-1 w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth bg-md-sys-background relative scrollbar-hide"
      >
        <div className="w-full max-w-[1600px] mx-auto pb-28 lg:pb-12">
           <Hero />
           
           <div className="flex flex-col gap-24 lg:gap-32 px-4 md:px-8 lg:px-12 mt-12 lg:mt-24 max-w-7xl mx-auto">
             <About />
             <Projects />
             <Contact />
           </div>
           
           {/* Mobile Footer Spacer handled by pb-28 */}
           <div className="lg:hidden h-4"></div>
        </div>
      </div>
    </main>
  );
};

export default App;