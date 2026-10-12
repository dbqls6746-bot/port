import React, { useState, useEffect } from 'react';

const heroPhrases = [
  "안녕하세요! 저는 최유빈입니다.",
  "Frontend와 Backend를 다룰 줄 알고 계속해서 성장하는 풀스택 개발자입니다."
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
        <div className="min-h-[140px] sm:min-h-[180px] flex items-center justify-center px-4">
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-snug sm:leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-brand-900 to-brand-600">
              {displayText}
            </span>
            <span className="inline-block w-0.5 sm:w-1 h-7 sm:h-11 bg-brand-600 ml-1.5 animate-pulse align-middle"></span>
          </h1>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 hover:text-brand-600 transition-colors group"
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

