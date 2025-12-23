import React from 'react';
import { NavItem } from '../types';
import { NAV_ITEMS } from '../constants';

interface NavbarProps {
  activeTab: string;
  onTabChange: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const handleNavClick = (id: string) => {
    onTabChange(id);
    const element = document.getElementById(id);
    const scrollContainer = document.getElementById('main-content-scroll');
    
    if (element && scrollContainer) {
      // Xác định xem đang là mobile/tablet hay desktop
      const isLargeScreen = window.matchMedia('(min-width: 1024px)').matches;
      
      // Trên Mobile/Tablet có thanh Top Bar cố định (khoảng 80px), cần trừ hao để không che nội dung
      // Trên Desktop dùng Sidebar nên không cần trừ (offset = 0)
      const headerOffset = isLargeScreen ? 0 : 80;

      // Tính toán vị trí tương đối của phần tử so với container cuộn
      const elementPosition = element.getBoundingClientRect().top;
      const containerPosition = scrollContainer.getBoundingClientRect().top;
      
      // Vị trí cần cuộn tới = Vị trí hiện tại + Khoảng cách tương đối - Chiều cao Header
      const offsetPosition = elementPosition - containerPosition + scrollContainer.scrollTop - headerOffset;
      
      scrollContainer.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* DESKTOP: EXPRESSIVE NAVIGATION DRAWER (Visible on LG and up) */}
      <aside className="hidden lg:flex flex-col w-80 h-full p-6 bg-md-sys-surface-container-low border-r border-transparent z-20 shrink-0">
        {/* Branding - PNG Logo */}
        <div className="mb-12 px-4 mt-6">
          <img 
            src="https://raw.githubusercontent.com/daoquan1002/home/refs/heads/main/resources/logo.png" 
            alt="Logo" 
            className="h-16 w-auto object-contain"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 space-y-2">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center w-full px-6 py-4 rounded-full transition-all duration-300 group relative overflow-hidden ${
                  isActive
                    ? 'bg-md-sys-secondary-container text-md-sys-on-secondary-container font-bold shadow-sm'
                    : 'text-md-sys-on-surface-variant hover:bg-md-sys-on-surface/5 font-medium'
                }`}
              >
                <span className={`material-symbols-rounded mr-4 text-2xl z-10 ${isActive ? 'filled' : ''}`}>
                  {item.icon}
                </span>
                <span className="text-lg tracking-wide z-10">{item.label}</span>
                
                {/* Ripple Effect Overlay (Visual) */}
                {!isActive && (
                  <div className="absolute inset-0 bg-md-sys-on-surface opacity-0 group-hover:opacity-[0.08] transition-opacity"></div>
                )}
              </button>
            );
          })}
        </nav>

        {/* Social Icons (Desktop) */}
        <div className="px-4 pb-4 flex items-center justify-center gap-6">
             <a 
              href="https://x.com/daoquan1002" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-md-sys-on-surface-variant hover:text-md-sys-on-surface transition-colors"
              aria-label="X (Twitter)"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
            
            <a 
              href="https://youtube.com/@Quan-Dot-Tech" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-md-sys-on-surface-variant hover:text-md-sys-on-surface transition-colors"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
              </svg>
            </a>
        </div>

        {/* Bottom Action / Social */}
        <div className="mt-auto p-4 bg-md-sys-tertiary-container rounded-[2rem] text-md-sys-on-tertiary-container relative overflow-hidden group cursor-pointer hover:shadow-elevation-2 transition-shadow">
          <div className="relative z-10 flex items-center gap-4">
          <a
            href="mailto:daoquan1002+contact@gmail.com"
            className="flex items-center gap-4 w-full h-full"
          >
             <span className="material-symbols-rounded text-2xl">mail</span>
             <div>
                <p className="text-sm font-bold">Liên hệ</p>
                <p className="text-xs opacity-80">Gửi Email</p>
             </div>
          </a>
          </div>
          <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-md-sys-on-tertiary-container opacity-10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
        </div>
      </aside>

      {/* MOBILE & TABLET: BOTTOM NAVIGATION BAR (Visible on below LG) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-md-sys-surface-container-high/90 backdrop-blur-lg pb-6 pt-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] border-t border-md-sys-outline-variant/10">
        <nav className="flex justify-around items-center px-4 max-w-2xl mx-auto">
          {NAV_ITEMS.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="flex flex-col items-center justify-center w-full group py-1"
              >
                <div 
                    className={`w-14 h-8 rounded-full flex items-center justify-center mb-1 transition-all duration-300 ${
                        isActive 
                        ? 'bg-md-sys-secondary-container text-md-sys-on-secondary-container scale-105' 
                        : 'bg-transparent text-md-sys-on-surface-variant'
                    }`}
                >
                    <span className={`material-symbols-rounded text-xl ${isActive ? 'filled' : ''}`}>
                    {item.icon}
                    </span>
                </div>
                <span className={`text-[10px] font-medium transition-all ${isActive ? 'text-md-sys-on-surface font-bold' : 'text-md-sys-on-surface-variant'}`}>
                    {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
      
      {/* MOBILE & TABLET: TOP BAR (Visible on below LG) */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-md-sys-background/50 backdrop-blur-md px-6 py-4 flex justify-between items-center transition-all shadow-sm">
         {/* Logo PNG */}
         <img 
            src="https://raw.githubusercontent.com/daoquan1002/test/refs/heads/main/logo.png" 
            alt="Logo" 
            className="h-10 w-auto object-contain drop-shadow-sm"
            onClick={() => handleNavClick('home')}
         />

         {/* Social Icons (Black & White) */}
         <div className="flex items-center gap-5">
            {/* X (Twitter) Icon */}
            <a 
              href="https://x.com/daoquan1002" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-md-sys-on-surface hover:opacity-70 transition-opacity"
              aria-label="X (Twitter)"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
            
            {/* YouTube Icon */}
            <a 
              href="https://youtube.com/@Quan-Dot-Tech" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-md-sys-on-surface hover:opacity-70 transition-opacity"
              aria-label="YouTube"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>
              </svg>
            </a>
         </div>
      </div>
    </>
  );
};