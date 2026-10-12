import React from 'react';

export default function Sidebar({ activeSection, onCopyEmail }) {
  const navItems = [
    { id: 'home', label: 'Home', icon: 'fa-house' },
    { id: 'about', label: 'About Me', icon: 'fa-user' },
    { id: 'skills', label: 'Skills', icon: 'fa-layer-group' },
    { id: 'projects', label: 'Projects', icon: 'fa-laptop-code' },
    { id: 'experience', label: 'Experience & Edu', icon: 'fa-timeline' },
    { id: 'contact', label: 'Contact', icon: 'fa-envelope' },
  ];

  return (
    <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-72 bg-white border-r border-slate-200 flex-col justify-between p-6 z-30 shadow-[1px_0_10px_rgba(0,0,0,0.03)]">
      <div>
        {/* 프로필 헤더 */}
        <div className="flex flex-col items-center text-center pb-6 border-b border-slate-100">
          <div className="relative w-28 h-28 mb-4">
            <img
              src="/profile.png"
              alt="최유빈 프로필 사진"
              onError={(e) => {
                e.currentTarget.src =
                  'https://ui-avatars.com/api/?name=%EC%B5%9C%EC%9C%A0%EB%B9%88&background=1e3a8a&color=fff&size=200';
              }}
              className="w-full h-full object-cover object-top rounded-2xl shadow-md border-2 border-white ring-2 ring-brand-100"
            />
          </div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">최유빈</h1>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 mt-1">
            Full-stack Developer
          </p>
          <p className="text-xs text-slate-500 mt-1">Frontend & Backend</p>
        </div>

        {/* 네비게이션 메뉴 (Scrollspy 타겟) */}
        <nav className="mt-6">
          <ul className="space-y-1.5" id="desktop-nav">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`nav-link flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-all ${
                      isActive ? 'active' : ''
                    }`}
                  >
                    <i className={`fa-solid ${item.icon} w-5 text-center text-slate-400`}></i>
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* 사이드바 하단 정보 및 SNS 링크 */}
      <div className="pt-4 border-t border-slate-100">
        <div className="flex items-center justify-center gap-3 mb-3 text-slate-500">
          <a
            href="https://github.com/dbqls6746-bot?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-brand-900 hover:text-white transition-colors"
            title="GitHub"
          >
            <i className="fa-brands fa-github text-sm"></i>
          </a>
          <button
            onClick={onCopyEmail}
            className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors"
            title="이메일 복사"
          >
            <i className="fa-solid fa-envelope text-xs"></i>
          </button>
        </div>
        <p className="text-[11px] text-center text-slate-400">
          © 2026 Yubin Choi.<br />
          All rights reserved.
        </p>
      </div>
    </aside>
  );
}

