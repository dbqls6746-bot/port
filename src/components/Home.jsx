import React, { useState, useEffect } from 'react';

const heroPhrases = [
  "안녕하세요! 저는 최유빈입니다.",
  "Frontend와 Backend를 다룰 줄 알고 계속해서 성장하는 풀스택 개발자입니다."
];

const statsItems = [
  {
    value: '3+',
    label: '완주 프로젝트',
    sub: 'PL:UG, RE:DAY, GreenWay',
    color: 'text-brand-600',
  },
  {
    value: '4개',
    label: '국가기술자격 보유',
    sub: '전기/설비보전/생산자동화/승강기',
    color: 'text-emerald-600',
  },
  {
    value: '9개월',
    label: '산업 현장 실무',
    sub: '정밀 제조 설비 운용 및 자재 데이터 관리',
    color: 'text-amber-600',
  },
];

export default function Home() {
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = heroPhrases[phraseIndex];
    let timer;

    if (!isDeleting) {
      if (displayText.length < currentPhrase.length) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, 80);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        }, 35);
      } else {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % heroPhrases.length);
        timer = setTimeout(() => {}, 400);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center px-6 sm:px-12 lg:px-16 py-20 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200 relative"
    >
      <div className="max-w-4xl w-full mx-auto flex flex-col items-center justify-center my-auto text-center">
        {/* 타이핑 문구 영역 */}
        <div className="min-h-[130px] sm:min-h-[160px] flex items-center justify-center px-4">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-snug sm:leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-brand-900 to-brand-600">
              {displayText}
            </span>
            <span className="inline-block w-0.5 sm:w-1 h-7 sm:h-11 bg-brand-600 ml-1.5 animate-pulse align-middle"></span>
          </h1>
        </div>

        {/* CTA 액션 버튼 */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-xl bg-brand-900 hover:bg-brand-800 text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow transition flex items-center gap-2"
          >
            <i className="fa-solid fa-laptop-code text-xs"></i>
            <span>주요 프로젝트 보기</span>
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-brand-600 border border-slate-300 text-xs sm:text-sm font-semibold shadow-2xs transition flex items-center gap-2"
          >
            <i className="fa-regular fa-paper-plane text-xs"></i>
            <span>연락하기 &amp; 이력서</span>
          </a>
        </div>

        {/* 실시간 통계 바 (Stats Counter) */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-10 text-left">
          {statsItems.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-xl p-4 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${stat.color}`}>
                  {stat.value}
                </span>
                <h2 className="text-xs sm:text-sm font-bold text-slate-900 mt-1">
                  {stat.label}
                </h2>
              </div>
              <p className="text-[11px] text-slate-500 mt-1.5 leading-snug">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 hover:text-brand-600 transition-colors group"
        aria-label="About Me 섹션으로 이동"
      >
        <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-400 group-hover:text-brand-600">
          Scroll
        </span>
        <i className="fa-solid fa-chevron-down text-xs animate-bounce"></i>
      </a>
    </section>
  );
}
