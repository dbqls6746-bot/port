import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Backend',
      subTitle: 'Java & Spring Boot',
      icon: 'fa-brands fa-java',
      iconBg: 'bg-brand-900 text-white group-hover:bg-brand-600',
      hoverBorder: 'hover:border-brand-500',
      tagHover: 'hover:bg-brand-600 hover:text-white',
      whyBorder: 'border-l-brand-600 bg-blue-50/60',
      whyLabelColor: 'text-brand-700',
      quoteIconColor: 'text-brand-600',
      whyText:
        '대규모 비즈니스 로직을 계층형(Layered) 구조로 분리하고, 유지보수성과 확장성이 뛰어난 백엔드 시스템을 구축하기 위해 도입했습니다.',
      items: [
        {
          label: 'Java',
          desc: '객체지향 원칙을 준수한 Controller - Service - Repository 계층형 아키텍처 설계',
        },
        {
          label: 'Spring Boot',
          desc: 'RESTful API 엔드포인트 구축 및 @RestControllerAdvice 기반 표준 예외 규격화',
        },
        {
          label: '보안/인증',
          desc: 'Spring Security 기반 사용자 인증·인가 및 세션 상태 제어',
        },
      ],
      tags: ['#Java', '#SpringBoot', '#REST_API', '#Security'],
    },
    {
      category: 'Database',
      subTitle: 'Oracle DB & MyBatis',
      icon: 'fa-solid fa-database',
      iconBg: 'bg-slate-800 text-white group-hover:bg-emerald-600',
      hoverBorder: 'hover:border-emerald-500',
      tagHover: 'hover:bg-emerald-600 hover:text-white',
      whyBorder: 'border-l-emerald-600 bg-emerald-50/40',
      whyLabelColor: 'text-emerald-700',
      quoteIconColor: 'text-emerald-600',
      whyText:
        '복잡한 도메인 간의 관계를 명확히 정규화하고, 트랜잭션 상황에서도 데이터 정합성과 무결성을 견고하게 보장하기 위해 채택했습니다.',
      items: [
        {
          label: 'Oracle DB & ERD',
          desc: '정규화 원칙에 입각한 관계형 테이블 모델링 및 무결성 제약조건 수립',
        },
        {
          label: 'MyBatis 연동',
          desc: '복잡한 다중 테이블 JOIN 처리 및 동적 SQL(Dynamic Query) 작성',
        },
        {
          label: '트랜잭션 & 인덱스',
          desc: '데이터베이스 트랜잭션 원리와 인덱스 기본 구조에 대한 깊은 이해',
        },
      ],
      tags: ['#Oracle', '#MyBatis', '#SQL', '#ERD_Modeling'],
    },
    {
      category: 'Frontend',
      subTitle: 'React & Modern Web',
      icon: 'fa-brands fa-react',
      iconBg: 'bg-cyan-700 text-white group-hover:bg-cyan-600',
      hoverBorder: 'hover:border-cyan-500',
      tagHover: 'hover:bg-cyan-600 hover:text-white',
      whyBorder: 'border-l-cyan-600 bg-cyan-50/40',
      whyLabelColor: 'text-cyan-700',
      quoteIconColor: 'text-cyan-600',
      whyText:
        '컴포넌트 재사용성을 극대화하고, 상태 기반의 반응형 렌더링을 통해 실시간 데이터가 오가는 인터랙티브한 사용자 경험(UX)을 만들기 위해 선택했습니다.',
      items: [
        {
          label: 'React',
          desc: '함수형 컴포넌트와 React Hooks(useState, useEffect)를 활용한 상태 제어',
        },
        {
          label: 'API 비동기 통신',
          desc: 'Axios를 이용한 백엔드 RESTful API 연동 및 예외 상태 처리',
        },
        {
          label: 'UI/Styling',
          desc: 'Tailwind CSS 기반 모바일/데스크톱 완벽 대응 반응형 웹 구현',
        },
      ],
      tags: ['#React', '#JavaScript', '#TailwindCSS', '#Axios'],
    },
  ];

  const certificationCards = [
    {
      category: 'Hardware & Engineering',
      title: 'National Technical Qualifications',
      subLabel: '국가기술자격',
      icon: 'fa-solid fa-gears',
      iconStyle: 'bg-emerald-50 text-emerald-600 border border-emerald-200/70',
      badgeStyle: 'bg-emerald-50 text-emerald-700',
      hoverBorder: 'hover:border-emerald-400',
      descStyle: 'bg-emerald-50/50 text-emerald-800 border-emerald-100',
      certs: [
        {
          name: '승강기기능사',
          meta: '한국산업인력공단 (2024.09)',
        },
        {
          name: '생산자동화기능사',
          meta: '한국산업인력공단 (2024.07)',
        },
        {
          name: '설비보전기능사',
          meta: '한국산업인력공단 (2024.04)',
        },
        {
          name: '전기기능사',
          meta: '한국산업인력공단 (2023.07)',
        },
      ],
      desc: '전기 시퀀스 제어 및 생산 자동화 설비 운용 역량 공인',
    },
    {
      category: 'IT & Office Literacy',
      title: 'Office & Document Skills',
      icon: 'fa-solid fa-file-lines',
      iconStyle: 'bg-purple-50 text-purple-600 border border-purple-200/70',
      badgeStyle: 'bg-purple-50 text-purple-700',
      hoverBorder: 'hover:border-purple-400',
      descStyle: 'bg-purple-50/50 text-purple-800 border-purple-100',
      certs: [
        {
          name: 'ITQ 한글엑셀 / 아래한글 A등급, 한글파워포인트 B등급',
          meta: '한국생산성본부',
        },
        {
          name: 'DIAT 스프레드시트 / 프리젠테이션 고급, 워드프로세서 중급',
          meta: '한국정보통신진흥협회',
        },
      ],
      desc: '프로젝트 요구사항 명세서, WBS, 결과보고서 등 체계적인 문서화 기초',
    },
  ];

  return (
    <section id="skills" className="px-6 sm:px-12 lg:px-16 py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl lg:max-w-5xl">
        {/* 섹션 타이틀 헤더 */}
        <div className="flex items-center gap-2 text-brand-600 text-xs font-bold uppercase tracking-wider mb-2">
          <i className="fa-regular fa-circle-dot"></i> Tech Stack & Competencies
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-8">
          핵심 기술 스택 및 실제 활용 역량
        </h2>

        {/* 카테고리별 카드 3열 그리드 (Backend / Database / Frontend) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className={`group bg-white p-6 rounded-2xl border border-slate-200 ${cat.hoverBorder} shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                {/* 1. 카드 상단: 아이콘 + 카테고리 제목 */}
                <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-100">
                  <div
                    className={`w-11 h-11 rounded-xl ${cat.iconBg} flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300`}
                  >
                    <i className={`${cat.icon} text-lg`}></i>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900 text-lg transition-colors">
                      {cat.category}
                    </h3>
                    <p className="text-[11px] font-medium text-slate-500">{cat.subTitle}</p>
                  </div>
                </div>

                {/* 2. 기술 선정 이유 (Why 박스 - 인용구 스타일) */}
                <div className={`p-4 rounded-xl border-l-4 ${cat.whyBorder} mb-5`}>
                  <div
                    className={`flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider mb-1.5 ${cat.whyLabelColor}`}
                  >
                    <i className={`fa-solid fa-quote-left text-[10px] ${cat.quoteIconColor}`}></i>
                    <span>기술 선정 이유 (Why)</span>
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    &ldquo;{cat.whyText}&rdquo;
                  </p>
                </div>

                {/* 3. 핵심 역량 (How - 세부 활용 내용) */}
                <div className="space-y-2.5 mb-5">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 mb-2">
                    <i className="fa-solid fa-wrench text-[10px]"></i>
                    <span>핵심 역량 (How)</span>
                  </div>
                  {cat.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="p-3 rounded-xl bg-slate-50/70 hover:bg-slate-50 border border-slate-200/70 transition-colors"
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-600 shrink-0"></span>
                        <span className="font-bold text-slate-900 text-xs sm:text-[13px]">
                          {item.label}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed pl-3">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. 카드 하단: 핵심 태그 모음 */}
              <div className="pt-4 mt-2 border-t border-slate-100">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Key Tags
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {cat.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className={`px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-medium ${cat.tagHover} transition-all cursor-default`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 보유 자격증 (Certifications) 서브 섹션 */}
        <div className="mt-12 pt-10 border-t border-slate-200/80">
          <div className="flex items-center gap-2 text-brand-600 text-xs font-bold uppercase tracking-wider mb-1.5">
            <i className="fa-solid fa-certificate"></i> Certifications & Qualifications
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-6">
            보유 자격증
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {certificationCards.map((card, cIdx) => (
              <div
                key={cIdx}
                className={`bg-white border border-slate-200 ${card.hoverBorder} rounded-2xl p-5 hover:shadow-md transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  {/* 카드 상단 헤더 */}
                  <div className="flex items-center gap-3 pb-3.5 mb-4 border-b border-slate-100">
                    <div
                      className={`w-10 h-10 rounded-xl ${card.iconStyle} flex items-center justify-center shrink-0 shadow-2xs`}
                    >
                      <i className={`${card.icon} text-sm`}></i>
                    </div>
                    <div className="min-w-0">
                      <span
                        className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${card.badgeStyle} mb-0.5`}
                      >
                        {card.category}
                      </span>
                      <h4 className="font-bold text-slate-900 text-sm leading-snug truncate">
                        {card.title}
                      </h4>
                      {card.subLabel && (
                        <span className="text-[11px] text-slate-400 font-medium block">
                          {card.subLabel}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* 자격증 목록 */}
                  <ul className="space-y-2.5">
                    {card.certs.map((cert, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="p-2.5 rounded-xl bg-slate-50/80 border border-slate-100 flex flex-col gap-0.5"
                      >
                        <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5">
                          <span className="font-bold text-slate-800 text-xs leading-snug">
                            {cert.name}
                          </span>
                          <span className="text-xs text-slate-400 font-medium shrink-0">
                            {cert.meta}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 하단 부연 설명 */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <p
                    className={`text-xs px-3 py-2 rounded-xl border ${card.descStyle} font-medium leading-relaxed`}
                  >
                    &ldquo;{card.desc}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
