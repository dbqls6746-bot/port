import React, { useState } from 'react';

export default function Header({ activeSection, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (open) => {
    setIsOpen(open);
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const handleLinkClick = (e, id) => {
    toggleMenu(false);
    if (onNavigate) {
      onNavigate(e, id);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: 'fa-house' },
    { id: 'about', label: 'About Me', icon: 'fa-user' },
    { id: 'skills', label: 'Skills', icon: 'fa-layer-group' },
    { id: 'projects', label: 'Projects', icon: 'fa-laptop-code' },
    { id: 'experience', label: 'Experience & Edu', icon: 'fa-timeline' },
    { id: 'contact', label: 'Contact', icon: 'fa-envelope' },
  ];

  return (
    <>
      {/* 모바일 상단 고정 헤더 */}
      <header className="lg:hidden sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 px-4 py-3 flex items-center justify-between shadow-sm">
        <a
          href="#home"
          onClick={(e) => onNavigate && onNavigate(e, 'home')}
          className="flex items-center gap-2.5"
        >
          <img
            src="/favicon.png"
            alt="YB 로고"
            className="w-8 h-8 rounded-lg object-contain shadow bg-white border border-slate-200"
          />
          <span className="font-bold text-slate-900 text-base tracking-tight">
            최유빈 <span className="text-xs text-brand-600 font-medium">Portfolio</span>
          </span>
        </a>

        <button
          onClick={() => toggleMenu(true)}
          className="p-2 text-slate-600 hover:text-brand-600 hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="메뉴 열기"
        >
          <i className="fa-solid fa-bars text-xl"></i>
        </button>
      </header>

      {/* 모바일 네비게이션 드롭다운 오버레이 */}
      {isOpen && (
        <div
          onClick={() => toggleMenu(false)}
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden transition-opacity"
        />
      )}

      {/* 모바일 사이드 메뉴 */}
      <nav
        className={`fixed top-0 right-0 bottom-0 w-72 bg-white z-50 shadow-2xl p-6 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col justify-between ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <span className="font-bold text-slate-900 text-lg">메뉴</span>
            <button
              onClick={() => toggleMenu(false)}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-lg"
              aria-label="메뉴 닫기"
            >
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>
          </div>
          <ul className="mt-6 space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => handleLinkClick(e, item.id)}
                    className={`nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                      isActive
                        ? 'active text-brand-600 bg-brand-50 font-bold'
                        : 'text-slate-700 hover:bg-slate-100 font-medium'
                    }`}
                  >
                    <i
                      className={`fa-solid ${item.icon} w-5 text-center ${
                        isActive ? 'text-brand-600' : 'text-slate-400'
                      }`}
                    ></i>
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="pt-6 border-t border-slate-100 text-center">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className="w-full inline-block py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-medium text-sm transition shadow-sm"
          >
            연락하기
          </a>
        </div>
      </nav>
    </>
  );
}
