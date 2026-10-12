import React from 'react';

export default function Experience() {
  const timelineItems = [
    {
      badge: 'Education & Training',
      badgeColor: 'bg-blue-50 text-brand-700 border-blue-200/70',
      bulletBorder: 'border-brand-600 text-brand-600 group-hover:bg-brand-600',
      icon: 'fa-solid fa-laptop-code',
      title: '휴먼교육센터',
      dept: '| 풀스택 웹 개발자 과정',
      period: '2026.04 ~ 2026.10 (수료)',
      role: '팀 프로젝트 총괄 리더 & 풀스택 개발',
      roleColor: 'text-brand-600',
      bullets: [
        'Java, Spring Boot 기반 RESTful API 설계 및 Oracle Database(MyBatis) 연동',
        'React 및 Tailwind CSS를 활용한 반응형 프론트엔드 컴포넌트 설계',
        '팀 프로젝트 리더로서 요구사항 정의, DB 모델링(ERD), Git-Flow 협업 프로세스 총괄',
      ],
    },
    {
      badge: 'Education',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200/70',
      bulletBorder: 'border-amber-500 text-amber-600 group-hover:bg-amber-500',
      icon: 'fa-solid fa-graduation-cap',
      title: '한양사이버대학교',
      dept: '| 전기전자통신공학부',
      period: '2026.03 ~ 현재 (재학 중)',
      role: '공학 학사 과정',
      roleColor: 'text-amber-700',
      bullets: [
        '전기·전자 회로 및 컴퓨터/통신 네트워크 기초 이론 심화',
        '하드웨어 제어 원리와 웹 소프트웨어 기술을 융합하는 시스템적 사고 확립',
      ],
    },
    {
      badge: 'Experience',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/70',
      bulletBorder: 'border-emerald-600 text-emerald-600 group-hover:bg-emerald-600',
      icon: 'fa-solid fa-industry',
      title: '필텍 (FEELTECH)',
      dept: '| 생산관리 및 설비운용',
      period: '2025.02 ~ 2025.10 (9개월)',
      role: '설비 운용 및 원자재 데이터 관리',
      roleColor: 'text-emerald-700',
      bullets: [
        '정밀 제조 자동화 설비 모니터링 및 생산 라인 트러블슈팅',
        '원자재 수불 및 재고 데이터 전산 관리 (작은 오차가 시스템 전체를 멈춘다는 무결성 원칙 체득)',
        '물리적 장비를 실시간 웹 관제 시스템으로 다루고 싶다는 개발 동기 확립',
      ],
    },
    {
      badge: 'High School',
      badgeColor: 'bg-slate-100 text-slate-700 border-slate-200/70',
      bulletBorder: 'border-slate-400 text-slate-500 group-hover:bg-slate-700',
      icon: 'fa-solid fa-school',
      title: '군산기계공업고등학교',
      dept: '| 전기시스템제어과',
      period: '2022.03 ~ 2025.02 (졸업)',
      role: '전기기능사, 자동화설비기능사, 설비보전기능사, 승강기기능사 취득',
      roleColor: 'text-slate-700',
      bullets: [
        '전기 시퀀스 회로 및 PLC 자동화 설비 제어 기초 실무 이수',
      ],
    },
  ];

  return (
    <section id="experience" className="px-6 sm:px-12 lg:px-16 py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl">
        <div className="flex items-center gap-2 text-brand-600 text-xs font-bold uppercase tracking-wider mb-2">
          <i className="fa-regular fa-circle-dot"></i> Career & Growth
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
          경력 및 교육 이력
        </h2>
        <p className="text-slate-600 text-sm mb-12 max-w-xl">
          하드웨어 현장 실무부터 공학 학사 과정, 소프트웨어 풀스택 역량 강화까지의 시간 역순 성장 타임라인입니다.
        </p>

        <div className="relative timeline-line space-y-10 pl-2">
          {timelineItems.map((item, idx) => (
            <div key={idx} className="relative pl-10 group">
              {/* 타임라인 불릿 아이콘 */}
              <div
                className={`absolute -left-[1px] top-1.5 w-10 h-10 rounded-full bg-white border-2 ${item.bulletBorder} flex items-center justify-center shadow-sm group-hover:text-white transition-colors z-10`}
              >
                <i className={`${item.icon} text-xs`}></i>
              </div>

              {/* 타임라인 카드 */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {item.title} <span className="text-xs sm:text-sm font-normal text-slate-500">{item.dept}</span>
                    </h3>
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-md border ${item.badgeColor}`}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full w-fit shrink-0">
                    {item.period}
                  </span>
                </div>

                <p className={`text-xs sm:text-sm font-semibold ${item.roleColor} mb-3.5`}>
                  {item.role}
                </p>

                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 list-disc list-inside leading-relaxed">
                  {item.bullets.map((bullet, bIdx) => (
                    <li key={bIdx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
