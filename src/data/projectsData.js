export const projectsData = {
  p1: {
    id: "p1",
    category: "fullstack",
    title: "PL:UG : 2026-2027 프리미어리그 데이터 & 팬 커뮤니티",
    subtitle: "입문자부터 열혈 팬까지 만족시키는 2026-2027 시즌 데이터 중심 축구 인터랙티브 웹 플랫폼",
    image: "/projects/plug.png",
    tags: ["React", "Spring Boot", "Oracle DB", "RESTful API", "Tailwind CSS", "MyBatis"],
    github: "https://github.com/dbqls6746-bot/Team_BuildUp.git",
    demo: "https://github.com/dbqls6746-bot/Team_BuildUp.git",
    overview: {
      period: "2026.08 ~ 2026.10 (최종 프로젝트)",
      team: "Team BUILDUP (4인 팀, 팀장 최유빈)",
      role: "팀장 & 풀스택 개발 (메인, 20개 구단 소개, 포인트샵, 밸런스게임 전담)",
      oneLiner: "프리미어리그 입문자에게는 PL의 이해를, 팬에게는 재미를 추가시켜주고 두 가지 니즈를 충족시키는 2026-2027 시즌 데이터 중점 프리미어리그 플랫폼"
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
      erdSummary: "Users (1:N) Points/Shop (N:1) Items. Clubs (1:N) Players (1:N) Matches. BalanceGames (1:N) Votes. 정규화 모델링과 외래키 무결성 설계."
    },
    keyContributions: [
      {
        title: "팀 프로젝트 총괄 리더 (Architecture & PM)",
        desc: "프로젝트 킥오프부터 요구사항 정의, WBS 마일스톤 관리, DB ERD 모델링, Git-Flow 협업 규칙 수립 및 프론트-백엔드 완전 분리 설계를 총괄하여 성공적으로 배포까지 완주했습니다."
      },
      {
        title: "메인 대시보드 및 20개 구단 상세 소개 시스템 구축",
        desc: "20개 구단의 역사, 전술 포메이션, 스쿼드 라인업, 최근 전적 데이터를 시각화하는 인터랙티브 카드 컴포넌트를 설계하고 비동기 데이터 패칭 및 상태 관리를 구현했습니다."
      },
      {
        title: "팬 참여형 포인트샵 & 밸런스게임 기능 개발",
        desc: "커뮤니티 활동을 통해 획득한 포인트로 디지털 굿즈를 구매하는 상점 트랜잭션 로직과 팬들의 참여도를 높이는 실시간 축구 밸런스게임 투표 로직을 풀스택으로 완성했습니다."
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
      "팀장으로서 기술적인 설계뿐만 아니라 팀원 간의 소통과 일정 조율의 중요성을 온몸으로 체득한 프로젝트였습니다.",
      "외부 API 의존성이 높은 시스템에서 데이터 소스 다중화와 추상화 계층(Adapter Pattern)이 시스템 신뢰성에 미치는 결정적인 영향을 확인했습니다.",
      "프론트엔드와 백엔드를 모두 아우르는 풀스택 엔지니어로서 서비스의 전체 라이프사이클을 주도할 수 있는 역량을 증명했습니다."
    ]
  },
  p2: {
    id: "p2",
    category: "backend",
    title: "RE:DAY : 통합 라이프 리뷰 커뮤니티 플랫폼",
    subtitle: "데일리 일상 총평과 제품·장소 세부 서브 리뷰를 결합하고 제휴 BM을 접목한 차세대 라이프 리뷰 서비스",
    image: "/projects/reday.png",
    tags: ["Java", "Spring Boot", "Oracle DB", "MyBatis", "JSP", "Spring MVC"],
    github: "https://github.com/dbqls6746-bot/second-project.git",
    demo: "https://github.com/dbqls6746-bot/second-project.git",
    overview: {
      period: "2026.06 ~ 2026.07 (2차 프로젝트)",
      team: "Team RE:DAY (팀 프로젝트)",
      role: "백엔드 핵심 설계 및 개발 (메인, 탐색 페이지, 평점/리뷰 통계 집계, 공개/비공개 접근 제어 로직 전담)",
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
      erdSummary: "Users (1:N) DailyReviews (1:N) SubReviews (N:1) Categories. 서브 리뷰 카테고리별 평점 집계 및 공개/비공개 플래그 설계."
    },
    keyContributions: [
      {
        title: "메인 피드 및 다차원 탐색 페이지 백엔드 구축",
        desc: "데일리 총평과 다중 서브 리뷰를 한눈에 볼 수 있는 메인 피드 로직 및 장소/식당/아이템 등 카테고리별 동적 필터링 비즈니스 로직을 구현했습니다."
      },
      {
        title: "평점 및 리뷰 통계 집계 엔진 개발",
        desc: "사용자별 주간 평균 하루 점수, 서브 리뷰 누적 수, 카테고리별 평점 분포 등을 정밀 산출하는 MyBatis 집계 쿼리를 작성하고 최적화했습니다."
      },
      {
        title: "세분화된 공개/비공개(Public/Private) 접근 제어 로직 구현",
        desc: "작성자 본인만 열람 가능한 비공개 일기 데이터와 전체 커뮤니티 공유 피드를 철저히 분리하는 서버 사이드 인가 및 세션 검증 로직을 완성했습니다."
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
      "기술 스택의 숙련도만큼이나 팀 내 커뮤니케이션 프로세스와 Git 협업 규칙이 프로젝트 성공에 직결된다는 것을 깊이 깨달았습니다.",
      "일상 총평과 다중 서브 리뷰 간의 1:N 관계를 정규화하고, 사용자 권한에 따른 데이터 무결성을 유지하는 백엔드 설계 감각을 확립했습니다."
    ]
  },
  p3: {
    id: "p3",
    category: "frontend",
    title: "greenWay : 도심 속 힐링 산책로 & 공원 소개 웹",
    subtitle: "전자기기에 지친 현대인을 위한 산책로 탐색 및 도심 속 자연 힐링 공원 아카이빙 웹 서비스",
    image: "/projects/greenway.jpg",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Web", "Flexbox", "Grid"],
    github: "https://github.com/dbqls6746-bot/first-project.git",
    demo: "https://github.com/dbqls6746-bot/first-project.git",
    overview: {
      period: "2026.04 ~ 2026.05 (1차 프로젝트)",
      team: "Team OneCode (팀 프로젝트)",
      role: "산책로 상세 페이지 HTML/CSS 퍼블리싱 및 반응형 레이아웃 구현",
      oneLiner: "전자기기에 의존해 살아가는 현대인들을 산책시키고자하는 목적으로 제작한 산책로/공원 소개 페이지"
    },
    architecture: {
      flowDescription: "웹 표준을 준수하는 시맨틱 HTML5 구조와 모던 CSS3(Flexbox/Grid), 바닐라 자바스크립트를 활용한 반응형 웹 퍼블리싱 아키텍처입니다. 다양한 뷰포트 크기에서도 깨짐 없는 유연한 뷰를 제공합니다.",
      flowSteps: [
        { icon: "fa-brands fa-html5", label: "Semantic HTML5", desc: "구조적 시맨틱 태그 마크업" },
        { icon: "fa-brands fa-css3-alt", label: "Flexbox & Grid", desc: "2차원 반응형 컨테이너 레이아웃" },
        { icon: "fa-solid fa-mobile-screen", label: "Media Queries", desc: "모바일/태블릿/데스크톱 뷰포트 대응" },
        { icon: "fa-brands fa-js", label: "Vanilla JS", desc: "산책로 코스 탭 & 뷰어 인터랙션" },
        { icon: "fa-solid fa-universal-access", label: "Web Standard", desc: "웹 접근성 준수 및 렌더링 최적화" }
      ],
      erdSummary: "정적 산책로 코스 메타데이터(구간 거리, 소요 시간, 난이도, 편의시설 안내) 시맨틱 문서 구조 매핑."
    },
    keyContributions: [
      {
        title: "산책로 상세 페이지 시맨틱 마크업 및 퍼블리싱",
        desc: "코스 개요, 소요 시간, 난이도, 주요 뷰포인트를 시각적으로 명확히 전달하는 산책로 상세 페이지 전반의 HTML/CSS 구조를 퍼블리싱했습니다."
      },
      {
        title: "Flexbox와 Grid를 결합한 모바일 우선 반응형 레이아웃 구현",
        desc: "야외에서 모바일로 산책로를 검색하는 사용자를 고려해 모바일 1열 카드 배치와 데스크톱 멀티 컬럼 그리드를 매끄럽게 전환하도록 구현했습니다."
      },
      {
        title: "바닐라 자바스크립트 기반 산책로 코스 탭 인터랙션",
        desc: "외부 라이브러리 없이 순수 JavaScript DOM 제어를 통해 코스별 세부 안내 탭 전환 및 이미지 뷰어 인터랙션을 가볍고 직관적으로 구현했습니다."
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
      "웹 개발의 가장 기초이자 뼈대인 시맨틱 마크업과 CSS 박스 모델의 원리를 확실하게 체득했습니다.",
      "체계적인 레이아웃 구획화가 UI 안정성과 사용자 경험(UX)에 미치는 결정적 영향을 경험하며 프론트엔드의 튼튼한 기초를 다졌습니다."
    ]
  }
};
