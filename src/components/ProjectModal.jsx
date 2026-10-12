import React, { useEffect } from 'react';
import { projectsData } from '../data/projectsData';

export default function ProjectModal({ projectId, onClose }) {
  const p = projectId ? projectsData[projectId] : null;

  useEffect(() => {
    if (!p) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [p, onClose]);

  if (!p) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 z-10 p-6 sm:p-10 transform transition-all duration-300">
        <div className="sticky -top-6 sm:-top-10 -mx-6 sm:-mx-10 px-6 sm:px-10 py-4 bg-white/95 backdrop-blur-md border-b border-slate-200 flex items-center justify-between z-30 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-brand-600"></span>
            <span className="font-bold text-slate-800 text-sm tracking-tight">Project Deep Dive</span>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors"
            aria-label="모달 닫기 (ESC)"
          >
            <i className="fa-solid fa-xmark text-base"></i>
          </button>
        </div>

        <article className="space-y-10 text-slate-800">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded-md bg-brand-50 text-brand-700 font-bold text-xs">
                {p.overview.period}
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-semibold text-xs">
                {p.overview.team}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug">
              {p.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-500 mt-2 font-medium">{p.subtitle}</p>
            <div className="mt-5 rounded-2xl overflow-hidden aspect-[16/9] bg-slate-100 shadow-md border border-slate-200">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-medium cursor-default"
                  >
                    #{t}
                  </span>
                ))}
              </div>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition"
              >
                <i className="fa-brands fa-github text-sm"></i>
                <span>GitHub 저장소 바로가기</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-slate-400"></i>
              </a>
            </div>
          </div>

          {/* 1. 프로젝트 개요 */}
          <section className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200">
            <h3 className="text-sm sm:text-base font-bold text-brand-900 flex items-center gap-2 mb-4">
              <span className="w-6 h-6 rounded-lg bg-brand-900 text-white flex items-center justify-center text-xs font-bold">
                1
              </span>
              프로젝트 개요 (Overview)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="space-y-1">
                <span className="font-semibold text-slate-400 block text-[11px] uppercase tracking-wider">
                  진행 기간
                </span>
                <span className="font-medium text-slate-800">{p.overview.period}</span>
              </div>
              <div className="space-y-1">
                <span className="font-semibold text-slate-400 block text-[11px] uppercase tracking-wider">
                  팀 구성
                </span>
                <span className="font-medium text-slate-800">{p.overview.team}</span>
              </div>
              <div className="space-y-1 sm:col-span-2">
                <span className="font-semibold text-slate-400 block text-[11px] uppercase tracking-wider">
                  담당 역할
                </span>
                <span className="font-semibold text-brand-700">{p.overview.role}</span>
              </div>
              <div className="space-y-1 sm:col-span-2 pt-2 border-t border-slate-200/60">
                <span className="font-semibold text-slate-400 block text-[11px] uppercase tracking-wider">
                  서비스 한 줄 설명
                </span>
                <p className="font-medium text-slate-800 leading-relaxed">{p.overview.oneLiner}</p>
              </div>
            </div>
          </section>

          {/* 2. 느낀 점 및 배운 점 */}
          <section className="p-5 sm:p-6 rounded-2xl bg-blue-50/40 border border-brand-100">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-brand-900 text-white flex items-center justify-center text-xs font-bold">
                2
              </span>
              느낀 점 및 배운 점 (Learnings &amp; Retrospective)
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed">
              {p.retrospective.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <i className="fa-solid fa-check text-brand-600 mt-1 text-xs shrink-0"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </article>

        <div className="mt-10 pt-6 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            키보드{' '}
            <kbd className="px-2 py-1 bg-slate-100 rounded border border-slate-300 font-mono text-[11px] text-slate-600">
              ESC
            </kbd>{' '}
            또는 바깥 영역 클릭으로 닫기
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

