export const projectsData = {
  p1: {
    id: "p1",
    category: "frontend",
    title: "GreenWay : 힐링 산책로 & 공원 소개 플랫폼",
    subtitle: "전자기기 과의존 현대인을 위한 위치 기반 산책로 탐색 및 힐링 공원 아카이빙 웹 서비스",
    image: "/projects/greenway.jpg",
    tags: ["React", "JavaScript", "Tailwind CSS", "REST API", "Responsive Web"],
    github: "https://github.com/dbqls6746-bot/first-project.git",
    demo: "https://github.com/dbqls6746-bot/first-project.git",
    overview: {
      period: "1차 프로젝트 (팀 프로젝트)",
      team: "Team OneCode (팀 프로젝트)",
      role: "프론트엔드 개발 (컴포넌트 설계, 비동기 API 연동 및 상태 관리 전담)",
      oneLiner: "전자기기에 의존해 살아가는 현대인들을 산책시키고자하는 목적으로 제작한 산책로/공원 소개 페이지"
    },
    architecture: {
      flowDescription: "React 기반 Single Page Application(SPA) 아키텍처로 설계되어 공공데이터 REST API 및 산책로 데이터를 비동기로 패칭하고, 재사용 가능한 모듈형 컴포넌트와 반응형 레이아웃을 통해 모바일/데스크톱 최적의 힐링 탐색 경험을 제공합니다.",
      flowSteps: [
        { icon: "fa-desktop", label: "Client UI", desc: "React 컴포넌트 뷰" },
        { icon: "fa-route", label: "Trail List", desc: "산책로/공원 필터링" },
        { icon: "fa-arrows-rotate", label: "State Store", desc: "React Hooks 상태 관리" },
        { icon: "fa-cloud", label: "REST API", desc: "산책로 및 공원 데이터" },
        { icon: "fa-map-location-dot", label: "Map Service", desc: "지도 및 위치 시각화" },
        { icon: "fa-mobile-screen", label: "Responsive", desc: "Tailwind 반응형 뷰" }
      ],
      erdSummary: "Trails (산책로 정보) - Parks (공원 메타데이터) - Reviews (사용자 한줄평 및 평점) 구조 기반 데이터 매핑."
    },
    keyContributions: [
      {
        title: "컴포넌트 재사용성 극대화 및 모듈화",
        desc: "산책로 카드, 필터 바, 모달 뷰 등 반복되는 UI 요소를 원자 단위 컴포넌트로 분리하여 유지보수성과 확장성을 높였습니다."
      },
      {
        title: "비동기 REST API 연동 및 상태 관리",
        desc: "외부 산책로/공원 API 호출 시 비동기 통신 에러 방어 로직과 로딩 스켈레톤을 구현하여 매끄러운 사용자 경험을 제공했습니다."
      },
      {
        title: "Tailwind CSS 기반 모바일 우선 반응형 UI",
        desc: "다양한 디바이스 뷰포트에 맞춘 완벽한 반응형 인터페이스를 구현하여 야외 산책 시 모바일 접근성을 극대화했습니다."
      }
    ],
    troubleshooting: [
      {
        problem: "산책로 데이터 비동기 호출 시 네트워크 지연으로 인한 화면 깜빡임 및 레이아웃 시프트(CLS)",
        cause: "데이터 로딩 완료 전 빈 컨테이너 렌더링으로 뷰 높이가 순간 변경됨.",
        solution: "스켈레톤 로더 컴포넌트 도입 및 데이터 패칭 상태를 세분화하여 전환 애니메이션 적용.",
        result: "시각적 불안정성 해소 및 초기 로딩 체감 속도 대폭 개선."
      }
    ],
    retrospective: [
      "컴포넌트 기반 아키텍처에서 props drilling을 방지하고 재사용 가능한 UI를 설계하는 프론트엔드의 기초 원리를 깊이 체득했습니다.",
      "실제 사용자 관점에서 산책을 유도할 수 있는 직관적인 UI/UX 흐름을 고민하고 팀원들과 소통하며 구현한 뜻깊은 첫 프로젝트였습니다."
    ]
  },
  p2: {
    id: "p2",
    category: "backend",
    title: "RE:DAY : 통합 라이프 리뷰 커뮤니티 플랫폼",
    subtitle: "데일리 일상 총평과 제품·장소 세부 서브 리뷰를 결합하고 제휴 BM을 접목한 차세대 리뷰 커뮤니티",
    image: "/projects/reday.png",
    tags: ["Java", "Spring Boot", "Spring MVC", "Oracle DB", "MyBatis"],
    github: "https://github.com/dbqls6746-bot/second-project.git",
    demo: "https://github.com/dbqls6746-bot/second-project.git",
    overview: {
      period: "2차 프로젝트 (팀 프로젝트)",
      team: "Team RE:DAY (팀 프로젝트)",
      role: "백엔드 핵심 설계 및 DB 모델링 (MVC 아키텍처, MyBatis 연동, 비즈니스 로직 전담)",
      oneLiner: "일상 기록(데일리 총평)에 제품·장소 등의 세부 경험(서브 리뷰)과 수익형 제휴 BM을 결합한 통합 라이프 리뷰 커뮤니티"
    },
    architecture: {
      flowDescription: "Spring MVC 계층형 아키텍처(Controller-Service-DAO/Mapper)를 바탕으로 클라이언트 요청을 처리하며, Oracle DB와 MyBatis를 활용한 정규화 모델링 및 트랜잭션 관리로 견고한 비즈니스 로직을 완성했습니다.",
      flowSteps: [
        { icon: "fa-browser", label: "Client View", desc: "웹 UI 요청" },
        { icon: "fa-diagram-project", label: "Spring Controller", desc: "요청 라우팅 & 바인딩" },
        { icon: "fa-gears", label: "Service Layer", desc: "비즈니스 트랜잭션 처리" },
        { icon: "fa-database", label: "MyBatis Mapper", desc: "SQL 매핑 & 바인딩" },
        { icon: "fa-server", label: "Oracle Database", desc: "정규화 RDBMS 영속화" },
        { icon: "fa-shield-halved", label: "Security & Auth", desc: "회원 인증 및 권한 검증" }
      ],
      erdSummary: "Users (1:N) DailyReviews (1:N) SubReviews (N:1) Products/Places. 수익형 제휴 링크 및 포인트 적립 테이블 정규화 설계."
    },
    keyContributions: [
      {
        title: "정규화된 ERD 설계 및 무결성 제약조건 구축",
        desc: "데일리 총평과 서브 리뷰 간 1:N 종속 관계를 명확히 설계하고 무결성 제약조건을 부여하여 데이터 중복 및 이상 현상을 원천 방지했습니다."
      },
      {
        title: "Spring MVC 계층형 아키텍처 기반 비즈니스 로직 모듈화",
        desc: "Controller, Service, Mapper 책임을 엄격히 분리하여 결합도를 낮추고 비즈니스 로직 재사용성을 확보했습니다."
      },
      {
        title: "MyBatis 기반 정밀 SQL 작성 및 쿼리 최적화",
        desc: "복잡한 서브 리뷰 집계와 제휴 상품 클릭 로그 조회를 위한 JOIN 쿼리를 정교하게 작성하여 DB 부하를 경감시켰습니다."
      }
    ],
    troubleshooting: [
      {
        problem: "데일리 총평 삭제 시 연관된 다수의 서브 리뷰 및 제휴 링크 레코드 간 외래키 제약조건 위배 에러 발생",
        cause: "종속 자식 테이블 데이터에 대한 캐스케이드 삭제 정책 부재 및 트랜잭션 롤백 미처리.",
        solution: "Spring @Transactional 기반 원자성 보장 및 Oracle DB ON DELETE CASCADE 제약조건과 사전 검증 로직 적용.",
        result: "데이터 정합성 100% 보장 및 예외 발생 시 안전한 롤백 체계 확립."
      }
    ],
    retrospective: [
      "데이터베이스 모델링 단계에서의 꼼꼼한 설계가 전체 시스템의 안정성과 개발 생산성을 좌우한다는 것을 실감했습니다.",
      "MyBatis와 Spring MVC를 연동하며 SQL과 자바 객체 간 매핑 흐름을 깊이 있게 학습할 수 있었습니다."
    ]
  },
  p3: {
    id: "p3",
    category: "fullstack",
    title: "PL:UG : 2026-27 프리미어리그 데이터 & 팬 커뮤니티",
    subtitle: "입문자부터 열혈 팬까지 만족시키는 2026-2027 시즌 데이터 중심 축구 인터랙티브 웹 플랫폼",
    image: "/projects/plug.png",
    tags: ["React", "Spring Boot", "Oracle DB", "RESTful API", "Tailwind CSS"],
    github: "https://github.com/dbqls6746-bot/Team_BuildUp.git",
    demo: "https://github.com/dbqls6746-bot/Team_BuildUp.git",
    overview: {
      period: "최종 파이널 프로젝트 (팀 프로젝트)",
      team: "Team BUILDUP (팀장 최유빈)",
      role: "팀 프로젝트 총괄 리더 / 풀스택 개발 (아키텍처 설계, RESTful API 표준화, DB 스키마 구축 완주)",
      oneLiner: "프리미어리그 입문자에게는 PL의 이해를, 팬에게는 재미를 더해주는 2026-2027 시즌 데이터 중점 축구 페이지"
    },
    architecture: {
      flowDescription: "React 프론트엔드와 Spring Boot 백엔드가 완전 분리된 RESTful 아키텍처로 구축되었습니다. 20개 구단 엠블럼 인터랙션, 경기 일정/순위, 실시간 승부 예측 및 미니게임, 20개 구단별 커뮤니티를 하나의 유기적인 풀스택 서비스로 제공합니다.",
      flowSteps: [
        { icon: "fa-react", label: "React Frontend", desc: "Axios 기반 SPA 비동기 UI" },
        { icon: "fa-network-wired", label: "RESTful API", desc: "표준 JSON 규격 통신" },
        { icon: "fa-leaf", label: "Spring Boot", desc: "비즈니스 도메인 서비스" },
        { icon: "fa-futbol", label: "EPL Match Engine", desc: "경기 일정/순위/승부예측" },
        { icon: "fa-comments", label: "Club Community", desc: "20개 구단별 전용 게시판" },
        { icon: "fa-database", label: "Oracle Database", desc: "회원/경기/예측 데이터 영속화" }
      ],
      erdSummary: "Users (1:N) Predictions (N:1) Matches. Clubs (1:N) CommunityPosts (1:N) Comments. 포인트샵 & 미니게임 트랜잭션."
    },
    keyContributions: [
      {
        title: "프론트-백엔드 완전 분리 아키텍처 설계 및 RESTful API 표준화",
        desc: "React와 Spring Boot 간의 통신 규격을 JSON 표준으로 통일하고, 독립적인 배포 및 개발 환경을 구축했습니다."
      },
      {
        title: "팀 프로젝트 총괄 리더로서 설계부터 배포까지 완주",
        desc: "프로젝트 킥오프부터 요구사항 정의, WBS 일정 관리, DB 스키마 설계 표준화, 코드 리뷰까지 리더로서 프로젝트를 성공적으로 완주했습니다."
      },
      {
        title: "EPL 20개 구단 인터랙티브 휠 UI 및 비동기 승부예측 시스템 구축",
        desc: "구단 엠블럼 인터랙티브 휠 선택 UI 및 실시간 포인트 적립 승부예측 로직을 비동기 처리하여 매끄러운 사용자 경험을 완성했습니다."
      }
    ],
    troubleshooting: [
      {
        problem: "프론트엔드(React) 개발 서버와 백엔드(Spring Boot) 간 API 통신 시 브라우저 CORS 차단 에러 발생",
        cause: "서로 다른 포트 및 도메인 출처 간 요청에 대해 백엔드 HTTP Response Header에 CORS 허용 정책 부재.",
        solution: "Spring Boot WebMvcConfigurer 기반 전역 CORS 허용 매핑(AllowedOrigins, Methods) 설정 및 Axios 인터셉터 구성.",
        result: "CORS 에러 완전 해소 및 프론트-백엔드 간 원활한 비동기 데이터 통신 보장."
      }
    ],
    retrospective: [
      "팀장으로서 기술적인 설계뿐만 아니라 팀원 간의 소통과 일정 조율의 중요성을 온몸으로 체득한 프로젝트였습니다.",
      "프론트엔드와 백엔드를 모두 아우르는 풀스택 엔지니어로서 서비스의 전체 라이프사이클을 주도할 수 있는 역량을 증명했습니다."
    ]
  }
};
