import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';

export default function Projects({ onOpenModal }) {
  const [filter, setFilter] = useState('all');

  const projectList = Object.values(projectsData);
  const filteredProjects =
    filter === 'all'
      ? projectList
      : projectList.filter((p) => p.category === filter);

  const getRoleBadge = (category) => {
    switch (category) {
      case 'frontend':
        return {
          label: 'Frontend',
          className: 'bg-cyan-50 text-cyan-700 border border-cyan-200/60',
        };
      case 'backend':
        return {
          label: 'Backend',
          className: 'bg-blue-50 text-brand-700 border border-blue-200/60',
        };
      case 'fullstack':
        return {
          label: 'Fullstack (팀장)',
          className: 'bg-emerald-50 text-emerald-700 border border-emerald-200/60',
        };
      default:
        return {
          label: 'Developer',
          className: 'bg-slate-100 text-slate-700',
        };
    }
  };

  return (
    <section id="projects" className="px-6 sm:px-12 lg:px-16 py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl lg:max-w-5xl">
        <div className="flex items-center gap-2 text-brand-600 text-xs font-bold uppercase tracking-wider mb-2">
          <i className="fa-regular fa-circle-dot"></i> Selected Works
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              주요 프로젝트
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              문제를 정의하고 기술을 통해 해결한 3대 대표 프로젝트 목록입니다. 카드를 클릭하면 프로젝트 상세정보를 볼수 있습니다.
            </p>
          </div>

          {/* 필터 태그 */}
          <div className="shrink-0 flex items-center gap-1.5 self-start sm:self-auto bg-slate-100 p-1 rounded-xl text-xs font-medium whitespace-nowrap">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-all ${
                filter === 'all'
                  ? 'bg-white text-slate-900 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              전체
            </button>
            <button
              onClick={() => setFilter('frontend')}
              className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-all ${
                filter === 'frontend'
                  ? 'bg-white text-slate-900 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setFilter('backend')}
              className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-all ${
                filter === 'backend'
                  ? 'bg-white text-slate-900 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setFilter('fullstack')}
              className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap shrink-0 transition-all ${
                filter === 'fullstack'
                  ? 'bg-white text-slate-900 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Fullstack
            </button>
          </div>
        </div>

        {/* 3대 대표 프로젝트 카드 그리드 (데스크톱 3열) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredProjects.map((p) => {
            const badge = getRoleBadge(p.category);

            return (
              <div
                key={p.id}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* 16:9 비율 캡처 썸네일 (호버 줌인 효과) */}
                <div
                  className="relative overflow-hidden aspect-[16/9] bg-slate-100 cursor-pointer"
                  onClick={() => onOpenModal(p.id)}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3.5 py-1.5 bg-white/95 rounded-full text-xs font-bold text-slate-900 shadow-md flex items-center gap-1.5">
                      <i className="fa-solid fa-magnifying-glass-plus text-brand-600"></i>
                      <span>상세 보기</span>
                    </span>
                  </div>
                </div>

                {/* 카드 본문 */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* 카테고리/역할 뱃지 태그만 단독 노출 */}
                    <div className="mb-2.5">
                      <span className={`inline-block px-2.5 py-0.5 rounded-md font-semibold text-[11px] ${badge.className}`}>
                        {badge.label}
                      </span>
                    </div>

                    <h3
                      className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-brand-600 transition-colors cursor-pointer leading-snug"
                      onClick={() => onOpenModal(p.id)}
                    >
                      {p.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm mt-2.5 line-clamp-2 leading-relaxed">
                      {p.overview.oneLiner}
                    </p>

                    {/* 기술 스택 뱃지 */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {p.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 카드 하단 액션 */}
                  <div className="flex items-center justify-between pt-4 mt-5 border-t border-slate-100">
                    <button
                      onClick={() => onOpenModal(p.id)}
                      className="text-xs font-semibold text-brand-600 hover:text-brand-800 flex items-center gap-1 group/btn"
                    >
                      <span>자세히 보기</span>
                      <i className="fa-solid fa-angle-right text-[10px] group-hover/btn:translate-x-0.5 transition-transform"></i>
                    </button>
                    <div className="flex items-center gap-2">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition"
                        title="GitHub 저장소"
                      >
                        <i className="fa-brands fa-github text-base"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
