import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';

export default function Projects({ onOpenModal }) {
  const [filter, setFilter] = useState('all');

  const projectList = Object.values(projectsData);
  const filteredProjects =
    filter === 'all'
      ? projectList
      : projectList.filter((p) => p.category === filter);

  return (
    <section id="projects" className="px-6 sm:px-12 lg:px-16 py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl">
        <div className="flex items-center gap-2 text-brand-600 text-xs font-bold uppercase tracking-wider mb-2">
          <i className="fa-regular fa-circle-dot"></i> Selected Works
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              주요 프로젝트
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              문제를 정의하고 기술을 통해 해결한 대표 프로젝트 목록입니다. 카드를 클릭하면 상세 트러블슈팅을 볼 수 있습니다.
            </p>
          </div>
          {/* 필터 태그 */}
          <div className="flex items-center gap-1.5 self-start sm:self-auto bg-slate-100 p-1 rounded-xl text-xs font-medium">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg transition ${
                filter === 'all'
                  ? 'bg-white text-slate-900 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              전체
            </button>
            <button
              onClick={() => setFilter('backend')}
              className={`px-3 py-1.5 rounded-lg transition ${
                filter === 'backend'
                  ? 'bg-white text-slate-900 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setFilter('fullstack')}
              className={`px-3 py-1.5 rounded-lg transition ${
                filter === 'fullstack'
                  ? 'bg-white text-slate-900 font-semibold shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Fullstack
            </button>
          </div>
        </div>

        {/* 프로젝트 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {filteredProjects.map((p) => {
            const roleBadgeClass =
              p.category === 'backend'
                ? 'bg-blue-50 text-brand-700'
                : 'bg-emerald-50 text-emerald-700';

            return (
              <div
                key={p.id}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div
                  className="relative overflow-hidden aspect-[16/9] bg-slate-100 cursor-pointer"
                  onClick={() => onOpenModal(p.id)}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3.5 py-1.5 bg-white/95 rounded-full text-xs font-bold text-slate-900 shadow-md">
                      <i className="fa-solid fa-magnifying-glass-plus mr-1"></i> 상세 보기
                    </span>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-medium">
                      <span>{p.overview.period}</span>
                      <span className={`px-2 py-0.5 rounded font-semibold text-[11px] ${roleBadgeClass}`}>
                        {p.category === 'backend' ? 'Backend' : 'Fullstack'}
                      </span>
                    </div>
                    <h3
                      className="text-lg font-bold text-slate-900 group-hover:text-brand-600 transition cursor-pointer"
                      onClick={() => onOpenModal(p.id)}
                    >
                      {p.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mt-2 line-clamp-2 leading-relaxed">
                      {p.overview.oneLiner}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {p.tags.slice(0, 4).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-5 mt-5 border-t border-slate-100">
                    <button
                      onClick={() => onOpenModal(p.id)}
                      className="text-xs font-semibold text-brand-600 hover:text-brand-800 flex items-center gap-1"
                    >
                      자세히 보기 <i className="fa-solid fa-angle-right text-[10px]"></i>
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
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-500 hover:text-brand-600 hover:bg-slate-100 rounded-lg transition"
                        title="데모 사이트"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square text-sm"></i>
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

