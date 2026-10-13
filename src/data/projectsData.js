export const projectsData = {
  p1: {
    id: "p1",
    category: "fullstack",
    title: "PL:UG : 2026-2027 프리미어리그 통합 플랫폼",
    subtitle: "입문자부터 열혈 팬까지 만족시키는 2026-2027 시즌 데이터 중심 축구 인터랙티브 웹 플랫폼",
    image: "/projects/plug.png",
    tags: ["React", "Spring Boot", "Oracle DB", "RESTful API", "Tailwind CSS", "MyBatis"],
    github: "https://github.com/dbqls6746-bot/Team_BuildUp.git",
    demo: "https://github.com/dbqls6746-bot/Team_BuildUp.git",
    reportUrl: "/projects/plug_report.pdf",
    overview: {
      period: "2026.08 ~ 2026.10 (최종 프로젝트)",
      team: "Team BUILDUP (총괄 팀장 최유빈)",
      role: "총괄 팀장 & 풀스택 개발 (PM/산출물 총괄, 메인, 팀·20개 구단 소개, 선수 스탯 모달, 포인트샵, 퀵 밸런스게임)",
      oneLiner: "프리미어리그 입문자에게는 PL의 이해를, 팬에게는 재미를 추가시켜주고 두 가지 니즈를 충족시키는 2026-2027 시즌 데이터 중점 프리미어리그 페이지"
    },
    architecture: {
      flowDescription: "React 기반 SPA 프론트엔드와 Spring Boot RESTful API 백엔드가 완전 분리된 아키텍처입니다. 외부 축구 데이터 어댑터 계층을 두어 복수 API 소스를 표준 DTO로 통합 정규화하고, 비동기 Axios 통신과 계층형 백엔드(Controller-Service-Mapper)를 통해 안정적인 데이터 스트림을 구축했습니다.",
      flowSteps: [
        { icon: "fa-brands fa-react", label: "React Frontend", desc: "Axios 기반 SPA 비동기 UI & 반응형 뷰" },
        { icon: "fa-solid fa-network-wired", label: "RESTful API", desc: "표준 JSON 응답 및 예외 처리" },
        { icon: "fa-solid fa-leaf", label: "Spring Boot", desc: "도메인 주도 계층형 비즈니스 서버" },
        { icon: "fa-solid fa-shuffle", label: "Multi-API Adapter", desc: "축구 데이터 다중화 & DTO 정규화" },
        { icon: "fa-solid fa-gamepad", label: "Interactive Service", desc: "포인트샵 및 밸런스게임 트랜잭션" },
        { icon: "fa-solid fa-database", label: "Oracle Database", desc: "구단/회원/포인트/투표 데이터 영속화" }
      ],
      erdSummary: "Users (1:N) Points/Shop (N:1) Items. Clubs (1:N) Players (1:N) Stats. BalanceGames (1:N) Votes. 정규화 모델링과 외래키 무결성 설계."
    },
    keyContributions: [
      {
        title: "총괄 팀장 리더십 및 프로젝트 산출물·문서화 총괄",
        badge: "PM & 문서화 총괄",
        bullets: [
          "프로젝트 전체 작업 일정 조율, 팀원 역량별 작업량 분배 및 지속적인 팀원 동기부여 리딩",
          "WBS(작업분할구조도), 요구사항 명세서, 기능별 테스트 케이스(TC) 설계 및 작성",
          "프로젝트 시연 영상 편집 및 최종 결과보고서 작성 총괄"
        ]
      },
      {
        title: "메인페이지 & 팀 소개·20개 구단 아카이브 및 선수 세부 스탯 모달 구현",
        badge: "Fullstack 개발",
        bullets: [
          "메인페이지 반응형 UI 설계 및 백엔드 RESTful API·Oracle DB 전체 연동",
          "팀 소개 페이지 UI 구현 및 데이터베이스 연동",
          "EPL 20개 구단 소개 페이지(구단 응원가, 역사, 감독, 홈구장, 선수명단) UI 및 DB 구축",
          "선수 클릭 시 세부 능력치와 기록을 비동기로 조회하는 선수 세부 스탯 모달창 구현"
        ]
      },
      {
        title: "포인트샵 테이블 모델링/DB 연동 & 퀵 밸런스게임 구현",
        badge: "Fullstack & DB 모델링",
        bullets: [
          "포인트샵 페이지 UI 구현 및 상품·포인트 내역·구매 트랜잭션 테이블 모델링 및 DB 연동",
          "팬들의 흥미와 참여를 유도하는 실시간 퀵 밸런스게임 기능 구현"
        ]
      }
    ],
    troubleshooting: [
      {
        problem: "단일 외부 축구 API 데이터 누락 및 실시간 갱신 지연 발생",
        cause: "무료 플랜 외부 API의 일일 호출 쿼터 제한(Rate Limit)과 비정기적 데이터 누락 및 응답 지연으로 경기 일정과 구단 데이터 로딩이 실패하거나 지연됨.",
        solution: "멀티 API 데이터 소스 다중화(Primary API 장애 시 Fallback 보조 API로 자동 전환) 및 백엔드 어댑터 패턴 기반의 통합 DTO 정규화 계층 구축.",
        result: "외부 API 일시 장애 시에도 데이터 누락율 0% 달성, 안정적인 데이터 갱신 주기 확보 및 외부 변경에 독립적인 시스템 아키텍처 완성."
      }
    ],
    retrospective: [
      "총괄 팀장으로서 WBS, 요구사항 명세서, 테스트 케이스, 결과보고서까지 전 과정을 문서화하고 팀원들의 일정을 조율하며 프로젝트 매니징 역량을 크게 길렀습니다.",
      "20개 구단 데이터와 포인트샵 테이블 모델링부터 React UI 및 모달 인터랙션까지 프론트와 백엔드를 아우르는 풀스택 개발의 전 과정을 주도적으로 완주했습니다.",
      "외부 API 의존성이 높은 환경에서 멀티 API 다중화와 DTO 어댑터 정규화를 통해 시스템 안정성을 확보하는 실전 아키텍처 설계를 경험했습니다."
    ]
  },
  p2: {
    id: "p2",
    category: "backend",
    title: "RE:DAY : 일상 기록 & 통합 라이프 리뷰 플랫폼",
    subtitle: "데일리 일상 총평과 제품·장소 세부 서브 리뷰를 결합하고 제휴 BM을 접목한 차세대 라이프 리뷰 서비스",
    image: "/projects/reday.png",
    tags: ["Java", "Spring Boot", "Oracle DB", "MyBatis", "JSP", "Spring MVC"],
    github: "https://github.com/dbqls6746-bot/second-project.git",
    demo: "https://github.com/dbqls6746-bot/second-project.git",
    reportUrl: "/projects/reday_report.pdf",
    overview: {
      period: "2026.06 ~ 2026.07 (2차 프로젝트)",
      team: "Team RE:DAY (팀장 최유빈)",
      role: "팀장 & 풀스택 개발 (PM/일정·영상 총괄, 메인·탐색 프론트엔드, 평점 통계 풀스택, 응원하기, 공개/비공개 제어)",
      oneLiner: "일상 기록(데일리 총평)에 제품·장소 등의 세부 경험(서브 리뷰)과 수익형 제휴 BM을 결합한 통합 라이프 리뷰 커뮤니티"
    },
    architecture: {
      flowDescription: "Spring Boot 기반 MVC 계층형 아키텍처(Controller-Service-DAO/Mapper)로 설계되었습니다. 일상 총평과 다중 서브 리뷰를 유기적으로 바인딩하고, Oracle DB와 MyBatis를 활용한 정규화 모델링과 복합 집계 쿼리를 최적화했습니다.",
      flowSteps: [
        { icon: "fa-solid fa-window-maximize", label: "Client View", desc: "JSP 기반 동적 렌더링 뷰" },
        { icon: "fa-solid fa-diagram-project", label: "Spring Controller", desc: "요청 매핑 및 세션 기반 사용자 인증" },
        { icon: "fa-solid fa-gears", label: "Service Layer", desc: "통계 집계 및 비즈니스 트랜잭션 처리" },
        { icon: "fa-solid fa-shield-halved", label: "Access Control", desc: "공개/비공개 접근 권한 제어" },
        { icon: "fa-solid fa-code-merge", label: "MyBatis Mapper", desc: "복합 집계 쿼리 및 동적 SQL 매핑" },
        { icon: "fa-solid fa-database", label: "Oracle Database", desc: "정규화 관계형 데이터베이스 영속화" }
      ],
      erdSummary: "Users (1:N) DailyReviews (1:N) SubReviews (N:1) Categories. 서브 리뷰 카테고리별 평점 집계, 응원하기 및 공개/비공개 플래그 설계."
    },
    keyContributions: [
      {
        title: "팀장 리더십 및 프로젝트 관리·시연 촬영 총괄",
        badge: "PM & QA 총괄",
        bullets: [
          "프로젝트 작업 일정 조율, 팀원 간 작업량 분배 및 팀원 동기부여 주도",
          "WBS 일정 관리표 작성 및 기능별 테스트 케이스(TC) 설계·검증",
          "최종 발표를 위한 프로젝트 시연 영상 촬영 총괄"
        ]
      },
      {
        title: "메인페이지 & 탐색페이지 프론트엔드 UI 구현",
        badge: "Frontend 개발",
        bullets: [
          "일상 총평 피드와 서브 리뷰 카드를 직관적으로 보여주는 메인페이지 프론트엔드 구현",
          "카테고리별 필터링과 트렌드를 탐색할 수 있는 탐색페이지 프론트엔드 화면 구현"
        ]
      },
      {
        title: "평점 통계(풀스택), 응원하기 기능 및 게시글 공개/비공개 접근 제어",
        badge: "Fullstack & Backend",
        bullets: [
          "주간 평균 하루 점수 및 리뷰 데이터를 분석·시각화하는 평점 통계 기능(백엔드 집계 쿼리 & 프론트엔드 UI) 풀스택 구현",
          "유저 간 공감과 소통을 돕는 게시글 응원하기(좋아요) 비동기 기능 구현",
          "작성자 권한 및 설정에 따른 게시글 공개/비공개(Public/Private) 접근 제어 로직 구현"
        ]
      }
    ],
    troubleshooting: [
      {
        problem: "소통 부재로 인한 작업 영역 중복 및 Git 대규모 병합 충돌(Merge Conflict) 발생",
        cause: "초기 기능 명세와 파일별 분장이 모호한 상태에서 여러 팀원이 동일한 JSP 및 Controller 코드를 동시에 수정하여 브랜치 병합 시 잦은 충돌 발생.",
        solution: "노션(Notion) 칸반 보드를 도입하여 기능/파일 단위로 담당자(R&R)를 명확히 정의하고, 매일 오전 15분 데일리 스크럼을 정례화하여 당일 작업 영역을 사전 공유.",
        result: "작업 중복 및 병합 충돌 발생 빈도 90% 이상 급감, 개발 스프린트 일정 2일 단축 및 팀 협업 생산성 극대화."
      }
    ],
    retrospective: [
      "팀장으로서 작업량 분배와 데일리 스크럼 정례화를 이끌며, 원활한 소통 프로세스가 개발 속도와 코드 품질을 어떻게 높이는지 직접 체감했습니다.",
      "평점 통계 기능을 백엔드 SQL 집계부터 프론트엔드 화면까지 풀스택으로 직접 연결하며 데이터의 전체 흐름을 깊이 이해하게 되었습니다."
    ]
  },
  p3: {
    id: "p3",
    category: "frontend",
    title: "GreenWay : 도심 속 힐링 산책로 & 공원 웹 가이드",
    subtitle: "전자기기에 지친 현대인을 위한 산책로 탐색 및 도심 속 자연 힐링 공원 아카이빙 웹 서비스",
    image: "/projects/greenway.jpg",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Web", "Flexbox", "Grid"],
    github: "https://github.com/dbqls6746-bot/first-project.git",
    demo: "https://github.com/dbqls6746-bot/first-project.git",
    reportUrl: "/projects/greenway_report.pdf",
    overview: {
      period: "2026.04 ~ 2026.05 (1차 프로젝트)",
      team: "Team OneCode (팀 프로젝트)",
      role: "프론트엔드 퍼블리싱 & 기능 구현 (산책로 UI, 길 찾기, 평가/후기 댓글/즐겨찾기/공유, 유스케이스·TC·시연 영상)",
      oneLiner: "전자기기에 의존해 살아가는 현대인들을 산책시키고자하는 목적으로 제작한 산책로/공원 소개 페이지"
    },
    architecture: {
      flowDescription: "웹 표준을 준수하는 시맨틱 HTML5 구조와 모던 CSS3(Flexbox/Grid), 바닐라 자바스크립트를 활용한 반응형 웹 퍼블리싱 아키텍처입니다. 다양한 뷰포트 크기에서도 깨짐 없는 유연한 뷰와 사용자 참여 인터랙션을 제공합니다.",
      flowSteps: [
        { icon: "fa-brands fa-html5", label: "Semantic HTML5", desc: "구조적 시맨틱 태그 마크업" },
        { icon: "fa-brands fa-css3-alt", label: "Flexbox & Grid", desc: "2차원 반응형 컨테이너 레이아웃" },
        { icon: "fa-solid fa-route", label: "Route Finder", desc: "산책로 길 찾기 안내 연동" },
        { icon: "fa-brands fa-js", label: "Interactive JS", desc: "평가(따봉/다운)·댓글·즐겨찾기·공유" },
        { icon: "fa-solid fa-clipboard-check", label: "UseCase & QA", desc: "유스케이스 설계 및 TC 검증" }
      ],
      erdSummary: "산책로 코스 메타데이터, 사용자 평가(따봉/다운), 후기 댓글, 즐겨찾기 상태 및 공유 링크 인터페이스 구조화."
    },
    keyContributions: [
      {
        title: "산책로 상세 UI 배치 및 길 찾기 기능 구현",
        badge: "UI 퍼블리싱 & 길 찾기",
        bullets: [
          "산책로 코스 정보와 주요 뷰포인트를 한눈에 파악할 수 있는 산책로 상세 페이지 UI 배치 및 반응형 퍼블리싱",
          "사용자가 선택한 산책로까지의 경로를 직관적으로 확인할 수 있는 길 찾기 기능 구현"
        ]
      },
      {
        title: "산책로 평가(따봉/다운), 후기 댓글, 즐겨찾기 및 공유 기능 구현",
        badge: "Frontend 기능 구현",
        bullets: [
          "산책로에 대한 만족도를 표시하는 산책로 평가(따봉/다운 좋아요·비추천) 카운팅 인터랙션 구현",
          "방문자 간 생생한 산책 경험을 나눌 수 있는 후기 댓글 작성 및 렌더링 기능 구현",
          "자주 찾는 코스를 저장하는 즐겨찾기 토글 기능 및 외부로 산책로를 알리는 공유 기능 구현"
        ]
      },
      {
        title: "유스케이스 제작, 테스트 케이스 검증 및 시연 영상 촬영",
        badge: "기획 & QA",
        bullets: [
          "기획 단계에서 사용자 흐름을 정의하는 유스케이스(Use Case) 제작",
          "구현된 기능의 결함을 점검하는 테스트 케이스(TC) 검증 수행 및 프로젝트 시연 영상 촬영"
        ]
      }
    ],
    troubleshooting: [
      {
        problem: "구역 미구분으로 인한 UI 중구난방 배치 및 디바이스별 레이아웃 깨짐 현상",
        cause: "구조적 컨테이너(Wrapper)의 부재와 비시맨틱 태그 남발 및 무분별한 절대 위치(absolute) 사용으로 뷰포트 변경 시 요소들이 겹치거나 화면 밖으로 밀려남.",
        solution: "시맨틱 태그(<header>, <nav>, <main>, <section>, <article>)로 마크업 뼈대를 재설계하고, Flexbox 및 CSS Grid 컨테이너를 구획화하여 유동형(Fluid) 레이아웃으로 전면 리팩토링.",
        result: "모든 해상도(360px 모바일 ~ 1920px 데스크톱)에서 일관되고 안정적인 레이아웃 완성 및 웹 표준/접근성 향상."
      }
    ],
    retrospective: [
      "시맨틱 마크업과 Flexbox/Grid 레이아웃 구획화를 통해 복잡한 UI 요소(길 찾기, 댓글, 평가, 즐겨찾기)를 깔끔하게 정돈하는 퍼블리싱 기본기를 다졌습니다.",
      "유스케이스 설계부터 기능 구현, 테스트 케이스 검증, 시연 영상 촬영까지 소프트웨어 개발의 전반적인 프로세스를 경험한 뜻깊은 프로젝트였습니다."
    ]
  }
};
