import React from 'react';

export default function Experience() {
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
          실제 비즈니스 가치를 창출했던 실무 경력과 전공 및 교육 과정을 시간 역순으로 정리했습니다.
        </p>

        <div className="relative timeline-line space-y-12 pl-2">
          {/* 1) 경력 1 */}
          <div className="relative pl-10 group">
            <div className="absolute -left-[1px] top-1.5 w-10 h-10 rounded-full bg-white border-2 border-brand-600 flex items-center justify-center text-brand-600 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-colors">
              <i className="fa-solid fa-briefcase text-xs"></i>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  (주)알파테크놀로지 <span className="text-xs font-normal text-slate-500">| 플랫폼개발팀</span>
                </h3>
                <span className="text-xs font-semibold px-2.5 py-1 bg-blue-50 text-brand-700 rounded-full w-fit">
                  2023.04 - 현재 (재직 중)
                </span>
              </div>
              <p className="text-xs font-medium text-brand-600 mb-4">백엔드 소프트웨어 엔지니어 (매니저)</p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside leading-relaxed">
                <li>
                  <strong className="text-slate-800">이커머스 결제/정산 모듈 재설계:</strong> 단일 장애점(SPOF) 제거 및 Spring Retry/DLQ 도입으로 결제 실패율 0.05% 이하로 감소.
                </li>
                <li>
                  <strong className="text-slate-800">대규모 상품 검색 쿼리 튜닝:</strong> 복합 인덱스 및 Redis 캐시 적용을 통해 일일 200만 건 요청 기준 평균 지연 320ms → 45ms로 단축.
                </li>
                <li>
                  <strong className="text-slate-800">CI/CD 무중단 배포 구축:</strong> GitHub Actions 및 Docker/Nginx를 이용한 블루/그린 무중단 배포 파이프라인 완성.
                </li>
              </ul>
            </div>
          </div>

          {/* 2) 경력 2 */}
          <div className="relative pl-10 group">
            <div className="absolute -left-[1px] top-1.5 w-10 h-10 rounded-full bg-white border-2 border-slate-400 flex items-center justify-center text-slate-500 shadow-sm group-hover:bg-brand-600 group-hover:border-brand-600 group-hover:text-white transition-colors">
              <i className="fa-solid fa-building text-xs"></i>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  (주)베타소프트웨어 <span className="text-xs font-normal text-slate-500">| 솔루션개발파트</span>
                </h3>
                <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full w-fit">
                  2022.03 - 2023.03 (1년 1개월)
                </span>
              </div>
              <p className="text-xs font-medium text-slate-700 mb-4">주니어 풀스택 개발자</p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 list-disc list-inside leading-relaxed">
                <li>
                  <strong className="text-slate-800">사내 ERP 대시보드 리뉴얼:</strong> 레거시 JSP 시스템을 Node.js & React 기반 SPA로 마이그레이션.
                </li>
                <li>
                  <strong className="text-slate-800">REST API 표준화:</strong> 전사 표준 응답 포맷(Envelope) 및 Swagger 자동화 문서 구축.
                </li>
              </ul>
            </div>
          </div>

          {/* 3) 교육 */}
          <div className="relative pl-10 group">
            <div className="absolute -left-[1px] top-1.5 w-10 h-10 rounded-full bg-white border-2 border-slate-400 flex items-center justify-center text-slate-500 shadow-sm group-hover:bg-brand-600 group-hover:border-brand-600 group-hover:text-white transition-colors">
              <i className="fa-solid fa-graduation-cap text-xs"></i>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  한국소프트웨어인재개발원 <span className="text-xs font-normal text-slate-500">| 백엔드 부트캠프</span>
                </h3>
                <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full w-fit">
                  2021.08 - 2022.02 (6개월 수료)
                </span>
              </div>
              <p className="text-xs font-medium text-slate-700 mb-3">클라우드 기반 자바 풀스택 엔지니어링 과정 (840시간)</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Java, Spring Framework, 관계형 데이터베이스, Linux 기반 웹 서버 배포 및 실무형 팀 프로젝트 2회 최우수 프로젝트 선정.
              </p>
            </div>
          </div>

          {/* 4) 학력 */}
          <div className="relative pl-10 group">
            <div className="absolute -left-[1px] top-1.5 w-10 h-10 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center text-slate-400 shadow-sm group-hover:bg-brand-600 group-hover:border-brand-600 group-hover:text-white transition-colors">
              <i className="fa-solid fa-school text-xs"></i>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  한국대학교 <span className="text-xs font-normal text-slate-500">| 서울캠퍼스</span>
                </h3>
                <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full w-fit">
                  2016.03 - 2021.02
                </span>
              </div>
              <p className="text-xs font-medium text-slate-700 mb-2">컴퓨터공학과 학사 졸업</p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                자료구조, 알고리즘, 운영체제, 컴퓨터 네트워크, 데이터베이스 시스템 등 컴퓨터 과학 기초 전공 심화 이수.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

