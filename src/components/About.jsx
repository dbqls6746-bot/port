import React from 'react';

export default function About() {
  const competenceCards = [
    {
      borderColor: 'border-b-blue-500 hover:border-blue-300',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-500',
      icon: 'fa-solid fa-bolt',
      title: 'Hardware & Electricity',
      desc: '전기·설비 및 자동화 시스템 이해',
    },
    {
      borderColor: 'border-b-amber-500 hover:border-amber-300',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-500',
      icon: 'fa-brands fa-java text-xl',
      title: 'Java & Spring Boot',
      desc: 'MVC 아키텍처 및 RESTful API 서버 구축',
    },
    {
      borderColor: 'border-b-emerald-500 hover:border-emerald-300',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-500',
      icon: 'fa-solid fa-database',
      title: 'Oracle DB & SQL',
      desc: '정규화 모델링 & MyBatis 쿼리 설계',
    },
    {
      borderColor: 'border-b-purple-500 hover:border-purple-300',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-500',
      icon: 'fa-solid fa-code',
      title: 'Web Full-Stack',
      desc: 'JSP, Tailwind CSS, React 반응형 웹',
    },
  ];

  return (
    <section id="about" className="px-6 sm:px-12 lg:px-16 py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl">
        {/* 섹션 헤더 */}
        <div className="flex items-center gap-2 text-brand-600 text-xs font-bold uppercase tracking-wider mb-2">
          <i className="fa-regular fa-circle-dot"></i> ABOUT ME
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight mb-8">
          '전기'에 접목하고자 시작한 '풀스택 개발'
        </h2>

        {/* 소개 본문 (전체 너비) */}
        <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base mb-10">
          <p>
            안녕하세요.{' '}
            <strong className="text-slate-900 font-semibold">
              하드웨어의 흐름에서 소프트웨어의 가능성을 발견하고 도전하는 신입 풀스택 개발자 최유빈
            </strong>
            입니다.
          </p>
          <p>
            고등학교에서 <strong className="text-slate-900 font-semibold">전기와 자동화 설비를 전공</strong>
            하고 관련 기능사 자격증을 취득한 뒤, 생산 현장에서 기계 운용과 자재 관리를 직접 경험했습니다.
            물리적으로 장비와 전기가 제어되는 현장을 지키며,{' '}
            <strong className="text-slate-900 font-semibold">
              &ldquo;이 하드웨어 시스템들을 웹과 데이터베이스를 통해 실시간으로 관제하고 제어할 수 있다면 얼마나 효율적일까?&rdquo;
            </strong>
            라는 강한 호기심을 갖게 되었습니다.
          </p>
          <p>
            그 호기심을 계기로 프로그래밍에 뛰어들었습니다.{' '}
            <strong className="text-slate-900 font-semibold">Java와 Spring Boot</strong>를 학습하며 데이터가
            Controller와 Service를 거쳐 DB로 흐르는 메커니즘을 체득했고, 화면과 서버가 유기적으로 맞물려
            돌아가는 것에 깊은 흥미를 느꼈습니다. 전기 분야의 기초 지식을 더 깊이 다지고 성장시키고자{' '}
            <strong className="text-slate-900 font-semibold">한양사이버대학교 전기전자통신공학부</strong>에
            진학하여 학업과 개발을 병행하고 있으며, 학원에서의{' '}
            <strong className="text-slate-900 font-semibold">팀 프로젝트의 리더</strong>로서 설계부터 배포까지
            완주했습니다.
          </p>
          <p>
            저는 단순한 코드 작성을 넘어{' '}
            <strong className="text-slate-900 font-semibold">
              실제 산업과 사용자에게 가치를 전달하는 단단한 풀스택 개발자
            </strong>
            가 되는 것이 목표입니다.
          </p>
        </div>

        {/* 3. 4대 핵심 역량 카드 (4분할 그리드) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 mb-10">
          {competenceCards.map((card, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl bg-slate-50/80 border border-slate-200 border-b-4 ${card.borderColor} hover:bg-white hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <div
                  className={`w-10 h-10 rounded-xl ${card.bgColor} flex items-center justify-center mb-3.5 ${card.textColor} text-lg shadow-2xs`}
                >
                  <i className={card.icon}></i>
                </div>
                <h4 className="font-bold text-slate-900 text-sm mb-1.5">{card.title}</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* 4. Quick Information (하단 메타 정보 카드) */}
        <div className="bg-slate-50 p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-200">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
              <i className="fa-solid fa-id-card text-brand-600 text-sm"></i> Quick Information
            </h3>
            <span className="text-xs text-slate-400 font-medium">주요 정보 요약</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-white border border-slate-200/80 flex flex-col justify-between shadow-2xs">
              <span className="text-slate-400 font-medium text-xs mb-1.5 flex items-center gap-1.5">
                <i className="fa-regular fa-user text-slate-400 text-[11px]"></i> 이름
              </span>
              <span className="font-bold text-slate-800 text-sm sm:text-base">최유빈</span>
              <span className="text-[11px] text-slate-500 mt-0.5">Choi Yubin</span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 flex flex-col justify-between shadow-2xs">
              <span className="text-slate-400 font-medium text-xs mb-1.5 flex items-center gap-1.5">
                <i className="fa-solid fa-laptop-code text-slate-400 text-[11px]"></i> 포지션
              </span>
              <span className="font-bold text-brand-700 text-sm sm:text-base">풀스택 개발자</span>
              <span className="text-[11px] text-slate-500 mt-0.5">Java / Spring & Web</span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 flex flex-col justify-between shadow-2xs">
              <span className="text-slate-400 font-medium text-xs mb-1.5 flex items-center gap-1.5">
                <i className="fa-solid fa-graduation-cap text-slate-400 text-[11px]"></i> 학력
              </span>
              <span className="font-bold text-slate-800 text-xs sm:text-sm">한양사이버대학교</span>
              <span className="text-[11px] text-slate-500 mt-0.5">전기전자통신공학부 (재학)</span>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200/80 flex flex-col justify-between shadow-2xs">
              <span className="text-slate-400 font-medium text-xs mb-1.5 flex items-center gap-1.5">
                <i className="fa-solid fa-certificate text-slate-400 text-[11px]"></i> 보유 자격
              </span>
              <span className="font-bold text-slate-800 text-xs sm:text-sm">전기기능사</span>
              <span className="text-[11px] text-slate-500 mt-0.5">자동화설비기능사 등</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

