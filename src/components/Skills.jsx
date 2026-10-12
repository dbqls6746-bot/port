import React from 'react';

export default function Skills() {
  return (
    <section id="skills" className="px-6 sm:px-12 lg:px-16 py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl">
        <div className="flex items-center gap-2 text-brand-600 text-xs font-bold uppercase tracking-wider mb-2">
          <i className="fa-regular fa-circle-dot"></i> Tech Stack & Competencies
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
          핵심 기술 스택 및 실제 활용 역량
        </h2>
        <p className="text-slate-600 text-sm mb-10 max-w-2xl leading-relaxed">
          단순한 문법 암기나 라이브러리 사용을 넘어, 프로덕션 환경에서 발생한 문제를 해결하고 아키텍처를 고도화하는 데 직접 활용한 실무 역량입니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1) Java / Spring */}
          <div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-100">
                <div className="w-11 h-11 rounded-xl bg-brand-900 text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-brand-600 transition-all duration-300">
                  <i className="fa-solid fa-mug-hot text-base"></i>
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-brand-600 transition-colors">
                    Java / Spring
                  </h3>
                  <p className="text-[11px] font-medium text-slate-500">객체지향 설계 & 백엔드 프레임워크</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-slate-50/80 hover:bg-blue-50/60 border border-slate-200/80 hover:border-brand-300 transition-all duration-200">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                      <i className="fa-solid fa-leaf text-emerald-600 text-xs"></i> Spring Boot
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100/70 text-emerald-800 font-semibold">
                      Core
                    </span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside leading-relaxed">
                    <li>
                      <strong className="text-slate-800">RESTful API 설계:</strong> 계층형 아키텍처 및{' '}
                      <code className="text-[11px] bg-slate-100 px-1 py-0.5 rounded text-brand-700 font-mono">
                        @ControllerAdvice
                      </code>{' '}
                      기반 예외 규격화
                    </li>
                    <li>의존성 주입(DI/IoC) 기반 결합도 최소화</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50/80 hover:bg-blue-50/60 border border-slate-200/80 hover:border-brand-300 transition-all duration-200">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                      <i className="fa-solid fa-shield-halved text-brand-600 text-xs"></i> Spring Security
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100/70 text-brand-800 font-semibold">
                      Auth
                    </span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside leading-relaxed">
                    <li>
                      <strong className="text-slate-800">인증/인가 처리:</strong> JWT 커스텀 필터 체인 기반 무상태(Stateless) 세션 관리
                    </li>
                    <li>OAuth 2.0 소셜 로그인 연동</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50/80 hover:bg-blue-50/60 border border-slate-200/80 hover:border-brand-300 transition-all duration-200">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                      <i className="fa-solid fa-link text-indigo-600 text-xs"></i> JPA & QueryDSL
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-indigo-100/70 text-indigo-800 font-semibold">
                      ORM
                    </span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside leading-relaxed">
                    <li>지연 로딩(LAZY) 및 Fetch Join으로 N+1 문제 해결</li>
                    <li>QueryDSL 컴파일 타임 동적 쿼리 모듈화</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-5 border-t border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Key Tags</span>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-brand-600 hover:text-white transition-all cursor-default">Java 17</span>
                <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-brand-600 hover:text-white transition-all cursor-default">Spring Boot 3</span>
                <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-brand-600 hover:text-white transition-all cursor-default">JPA</span>
                <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-brand-600 hover:text-white transition-all cursor-default">QueryDSL</span>
              </div>
            </div>
          </div>

          {/* 2) Database */}
          <div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-100">
                <div className="w-11 h-11 rounded-xl bg-slate-800 text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-brand-600 transition-all duration-300">
                  <i className="fa-solid fa-database text-base"></i>
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-brand-600 transition-colors">
                    Database
                  </h3>
                  <p className="text-[11px] font-medium text-slate-500">데이터 모델링, 캐시 & 튜닝</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-slate-50/80 hover:bg-blue-50/60 border border-slate-200/80 hover:border-brand-300 transition-all duration-200">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                      <i className="fa-solid fa-table text-blue-600 text-xs"></i> MySQL / PostgreSQL
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100/70 text-blue-800 font-semibold">
                      RDBMS
                    </span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside leading-relaxed">
                    <li><strong className="text-slate-800">ERD 모델링:</strong> 정규화 및 조회 최적화 반정규화</li>
                    <li>
                      <strong className="text-slate-800">인덱스 튜닝:</strong> 복합 인덱스 &{' '}
                      <code className="text-[11px] bg-slate-100 px-1 py-0.5 rounded text-brand-700 font-mono">EXPLAIN</code> 분석
                    </li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50/80 hover:bg-blue-50/60 border border-slate-200/80 hover:border-brand-300 transition-all duration-200">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                      <i className="fa-solid fa-bolt-lightning text-red-600 text-xs"></i> Redis
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-red-100/70 text-red-800 font-semibold">
                      In-Memory
                    </span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside leading-relaxed">
                    <li><strong className="text-slate-800">캐싱 전략:</strong> Look-Aside 캐싱으로 DB 부하 경감</li>
                    <li><strong className="text-slate-800">동시성 제어:</strong> Redisson 분산 락 기반 무결성 보장</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-5 border-t border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Key Tags</span>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-brand-600 hover:text-white transition-all cursor-default">ERD 모델링</span>
                <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-brand-600 hover:text-white transition-all cursor-default">인덱스 튜닝</span>
                <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-brand-600 hover:text-white transition-all cursor-default">Redis 캐싱</span>
                <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-brand-600 hover:text-white transition-all cursor-default">분산 락</span>
              </div>
            </div>
          </div>

          {/* 3) Infra / Tools */}
          <div className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 pb-4 mb-5 border-b border-slate-100">
                <div className="w-11 h-11 rounded-xl bg-cyan-700 text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:bg-brand-600 transition-all duration-300">
                  <i className="fa-solid fa-server text-base"></i>
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 text-lg group-hover:text-brand-600 transition-colors">
                    Infra / Tools
                  </h3>
                  <p className="text-[11px] font-medium text-slate-500">컨테이너, 클라우드 & CI/CD</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-slate-50/80 hover:bg-blue-50/60 border border-slate-200/80 hover:border-brand-300 transition-all duration-200">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                      <i className="fa-brands fa-docker text-blue-500 text-sm"></i> Docker
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100/70 text-blue-800 font-semibold">
                      Container
                    </span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside leading-relaxed">
                    <li>멀티 스테이지 빌드로 이미지 용량 최적화</li>
                    <li>Docker Compose 로컬/테스트 환경 표준화</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50/80 hover:bg-blue-50/60 border border-slate-200/80 hover:border-brand-300 transition-all duration-200">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                      <i className="fa-solid fa-code-branch text-purple-600 text-xs"></i> GitHub Actions
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100/70 text-purple-800 font-semibold">
                      CI/CD
                    </span>
                  </div>
                  <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside leading-relaxed">
                    <li>PR 생성 시 자동 테스트 & 빌드 파이프라인 검증</li>
                    <li>Nginx 리버스 프록시 연동 무중단 배포</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-5 border-t border-slate-100">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Key Tags</span>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-brand-600 hover:text-white transition-all cursor-default">Docker</span>
                <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-brand-600 hover:text-white transition-all cursor-default">GitHub Actions</span>
                <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-brand-600 hover:text-white transition-all cursor-default">AWS EC2/S3</span>
                <span className="px-2.5 py-1 text-xs rounded-lg bg-slate-100 text-slate-700 font-medium hover:bg-brand-600 hover:text-white transition-all cursor-default">Swagger UI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

