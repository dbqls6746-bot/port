import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="px-6 sm:px-12 lg:px-16 py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl">
        {/* 섹션 타이틀 헤더 */}
        <div className="flex items-center gap-2 text-brand-600 text-xs font-bold uppercase tracking-wider mb-2">
          <i className="fa-regular fa-circle-dot"></i> Tech Stack & Competencies
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-8">
          핵심 기술 스택 및 실제 활용 역량
        </h2>

        {/* 카테고리별 카드 3열 그리드 (Backend / Database / Frontend) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* 1) Backend */}
          <div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* 카드 상단: 아이콘 + 카테고리 제목 */}
              <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-100">
                <div className="w-11 h-11 rounded-xl bg-brand-900 text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-brand-600 transition-all duration-300">
                  <i className="fa-solid fa-server text-base"></i>
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-brand-600 transition-colors">
                    Backend
                  </h3>
                  <p className="text-[11px] font-medium text-slate-500">Java & Spring 기반 서버 아키텍처</p>
                </div>
              </div>

              {/* 기술별 세부 활용 내용 */}
              <div className="space-y-4">
                {/* Java */}
                <div className="p-3.5 rounded-xl bg-slate-50/80 hover:bg-blue-50/60 border border-slate-200/80 hover:border-brand-300 transition-all duration-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                      <i className="fa-brands fa-java text-amber-600 text-sm"></i> Java
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100/80 text-brand-800 font-semibold">
                      Core
                    </span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside leading-relaxed">
                    <li>
                      <strong className="text-slate-800">계층형 아키텍처:</strong> 객체지향 설계 원칙을 고려한 Controller, Service, Repository 구조 설계
                    </li>
                    <li>
                      <strong className="text-slate-800">데이터 처리:</strong> Collection Framework 및 Stream API를 활용한 비즈니스 로직 처리
                    </li>
                  </ul>
                </div>

                {/* Spring Boot & MVC */}
                <div className="p-3.5 rounded-xl bg-slate-50/80 hover:bg-blue-50/60 border border-slate-200/80 hover:border-brand-300 transition-all duration-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                      <i className="fa-solid fa-leaf text-emerald-600 text-xs"></i> Spring Boot & MVC
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100/80 text-emerald-800 font-semibold">
                      Framework
                    </span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside leading-relaxed">
                    <li>
                      <strong className="text-slate-800">RESTful API 설계:</strong> 일관된 표준 응답 포맷 및 글로벌 예외 처리 체계 구축
                    </li>
                    <li>
                      <strong className="text-slate-800">보안 & 영속성:</strong> MyBatis 및 Spring Security를 활용한 데이터 처리와 사용자 인증/인가 로직 구현
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 카드 하단: 핵심 태그 모음 */}
            <div className="pt-4 mt-5 border-t border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Key Tags</span>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-brand-600 hover:text-white transition-all cursor-default">#Java</span>
                <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-brand-600 hover:text-white transition-all cursor-default">#SpringBoot</span>
                <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-brand-600 hover:text-white transition-all cursor-default">#SpringMVC</span>
                <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-brand-600 hover:text-white transition-all cursor-default">#MyBatis</span>
                <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-brand-600 hover:text-white transition-all cursor-default">#SpringSecurity</span>
              </div>
            </div>
          </div>

          {/* 2) Database */}
          <div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-emerald-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* 카드 상단: 아이콘 + 카테고리 제목 */}
              <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-100">
                <div className="w-11 h-11 rounded-xl bg-slate-800 text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-emerald-600 transition-all duration-300">
                  <i className="fa-solid fa-database text-base"></i>
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-emerald-600 transition-colors">
                    Database
                  </h3>
                  <p className="text-[11px] font-medium text-slate-500">데이터 모델링 & SQL 최적화</p>
                </div>
              </div>

              {/* 기술별 세부 활용 내용 */}
              <div className="space-y-4">
                {/* Oracle DB */}
                <div className="p-3.5 rounded-xl bg-slate-50/80 hover:bg-emerald-50/60 border border-slate-200/80 hover:border-emerald-300 transition-all duration-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                      <i className="fa-solid fa-server text-red-600 text-xs"></i> Oracle DB
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-100/80 text-red-800 font-semibold">
                      RDBMS
                    </span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside leading-relaxed">
                    <li>
                      <strong className="text-slate-800">관계형 모델링:</strong> 정규화 원칙을 적용한 RDBMS 데이터 모델링 및 무결성 제약조건 설계
                    </li>
                    <li>
                      <strong className="text-slate-800">쿼리 최적화:</strong> 복잡한 JOIN, 서브쿼리 작성 및 MyBatis 연동 쿼리 최적화
                    </li>
                  </ul>
                </div>

                {/* SQL & 트랜잭션 */}
                <div className="p-3.5 rounded-xl bg-slate-50/80 hover:bg-emerald-50/60 border border-slate-200/80 hover:border-emerald-300 transition-all duration-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                      <i className="fa-solid fa-table text-emerald-600 text-xs"></i> SQL & 트랜잭션
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100/80 text-emerald-800 font-semibold">
                      Data Core
                    </span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside leading-relaxed">
                    <li>
                      <strong className="text-slate-800">트랜잭션 이해:</strong> 데이터베이스 트랜잭션 격리수준과 기본 인덱스 구조 이해
                    </li>
                    <li>
                      <strong className="text-slate-800">데이터 제어:</strong> DDL, DML을 활용한 테이블 구조 정의 및 데이터 무결성 보장
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 카드 하단: 핵심 태그 모음 */}
            <div className="pt-4 mt-5 border-t border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Key Tags</span>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-emerald-600 hover:text-white transition-all cursor-default">#Oracle</span>
                <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-emerald-600 hover:text-white transition-all cursor-default">#RDBMS</span>
                <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-emerald-600 hover:text-white transition-all cursor-default">#ERD모델링</span>
                <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-emerald-600 hover:text-white transition-all cursor-default">#SQL</span>
                <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-emerald-600 hover:text-white transition-all cursor-default">#MyBatis</span>
                <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-emerald-600 hover:text-white transition-all cursor-default">#트랜잭션</span>
              </div>
            </div>
          </div>

          {/* 3) Frontend */}
          <div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-cyan-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              {/* 카드 상단: 아이콘 + 카테고리 제목 */}
              <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-100">
                <div className="w-11 h-11 rounded-xl bg-cyan-700 text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-cyan-600 transition-all duration-300">
                  <i className="fa-solid fa-laptop-code text-base"></i>
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-cyan-600 transition-colors">
                    Frontend
                  </h3>
                  <p className="text-[11px] font-medium text-slate-500">반응형 UI & 비동기 인터랙션</p>
                </div>
              </div>

              {/* 기술별 세부 활용 내용 */}
              <div className="space-y-4">
                {/* React */}
                <div className="p-3.5 rounded-xl bg-slate-50/80 hover:bg-cyan-50/60 border border-slate-200/80 hover:border-cyan-300 transition-all duration-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                      <i className="fa-brands fa-react text-cyan-500 text-sm"></i> React
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-100/80 text-cyan-800 font-semibold">
                      SPA
                    </span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside leading-relaxed">
                    <li>
                      <strong className="text-slate-800">컴포넌트 설계:</strong> 재사용 가능한 컴포넌트 UI 분리 및 React Hooks(useState, useEffect) 기반 상태 관리
                    </li>
                    <li>
                      <strong className="text-slate-800">비동기 통신:</strong> Axios 라이브러리를 활용한 백엔드 RESTful API 비동기 연동 및 에러 핸들링
                    </li>
                  </ul>
                </div>

                {/* HTML5 / CSS3 / JavaScript (ES6+) */}
                <div className="p-3.5 rounded-xl bg-slate-50/80 hover:bg-cyan-50/60 border border-slate-200/80 hover:border-cyan-300 transition-all duration-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                      <i className="fa-brands fa-js text-amber-500 text-sm"></i> HTML / CSS / JS
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100/80 text-amber-800 font-semibold">
                      Web Standard
                    </span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1.5 list-disc list-inside leading-relaxed">
                    <li>
                      <strong className="text-slate-800">웹 표준 & 반응형:</strong> 시맨틱 태그 기반의 웹 표준 준수 및 미디어 쿼리를 통한 반응형 웹 디자인
                    </li>
                    <li>
                      <strong className="text-slate-800">Tailwind CSS:</strong> 유틸리티 퍼스트 클래스를 활용한 빠르고 일관된 모던 UI 스타일링
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 카드 하단: 핵심 태그 모음 */}
            <div className="pt-4 mt-5 border-t border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Key Tags</span>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-cyan-600 hover:text-white transition-all cursor-default">#React</span>
                <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-cyan-600 hover:text-white transition-all cursor-default">#JavaScript</span>
                <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-cyan-600 hover:text-white transition-all cursor-default">#HTML5</span>
                <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-cyan-600 hover:text-white transition-all cursor-default">#TailwindCSS</span>
                <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-cyan-600 hover:text-white transition-all cursor-default">#Axios</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
