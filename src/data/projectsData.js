export const projectsData = {
  p1: {
    id: "p1",
    category: "backend",
    title: "TicketWave : 대규모 동시성 제어 티켓팅 플랫폼",
    subtitle: "티켓 오픈 순간 트래픽 폭주 환경에서의 데이터 정합성 보장 및 락 메커니즘 최적화",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    tags: ["Java 17", "Spring Boot 3", "Redis (Redisson)", "Apache Kafka", "MySQL", "Docker", "nGrinder"],
    github: "https://github.com",
    demo: "https://ticketwave.example.com",
    overview: {
      period: "2024.03 - 2024.06 (4개월)",
      team: "4인 팀 프로젝트 (백엔드 2인, 프론트엔드 2인)",
      role: "백엔드 리드 (좌석 선점 동시성 제어, 대기열 시스템 및 아키텍처 설계 전담)",
      oneLiner: "순간 트래픽 폭주 환경에서 좌석 중복 결제를 원천 차단하고 서버 다운을 방지하는 분산 티켓팅 시스템"
    },
    architecture: {
      flowDescription: "클라이언트의 대량 접속 요청은 Nginx를 거쳐 Spring Boot 게이트웨이로 유입되며, Redis Sorted Set 기반 대기열을 통해 초당 허용량만큼만 예매 서비스로 진입합니다. 좌석 선택은 Redisson 분산 락으로 1차 정합성을 검증하고, 결제 요청은 Kafka 비동기 큐로 분리하여 DB 부하를 최소화했습니다.",
      flowSteps: [
        { icon: "fa-desktop", label: "Client Web", desc: "예매 및 대기열 폴링" },
        { icon: "fa-network-wired", label: "Nginx LB", desc: "리버스 프록시 / 로드밸런싱" },
        { icon: "fa-clock", label: "Redis Waiting Queue", desc: "ZSet 기반 순번 발급" },
        { icon: "fa-lock", label: "Redisson Lock", desc: "좌석 단위 분산 락 선점" },
        { icon: "fa-comments", label: "Kafka Event Queue", desc: "비동기 결제/주문 처리" },
        { icon: "fa-database", label: "MySQL Database", desc: "주문 및 티켓 영속화" }
      ],
      erdSummary: "Users (1:N) Orders (1:N) OrderTickets (N:1) Seats (N:1) Performances. 좌석 상태 캐싱을 통해 DB 직행 조회 방지."
    },
    keyContributions: [
      {
        title: "Redisson 분산 락(Distributed Lock) 기반 좌석 선점 제어",
        desc: "초당 수천 건의 동일 좌석 동시 클릭 요청에 대해 좌석별 고유 락 키를 획득한 단 1명의 요청만 트랜잭션으로 진입하도록 보장."
      },
      {
        title: "Redis Sorted Set(ZSet) 기반 대기열 구현",
        desc: "타임스탬프 기반 순번 발급 및 1초당 500명씩 정원 토큰(Active Token)을 발급하여 백엔드 오버로드 방어."
      },
      {
        title: "Kafka 기반 비동기 결제 디커플링",
        desc: "결제 완료 처리를 이벤트 브로커로 분리 발행하여 외부 PG사 통신 지연 시에도 티켓팅 API 스레드가 블로킹되지 않도록 격리."
      }
    ],
    troubleshooting: [
      {
        problem: "티켓 오픈 직후 DB 커넥션 풀(HikariCP) 고갈로 504 게이트웨이 타임아웃 발생",
        cause: "초기 비관적 락(Pessimistic Lock) 설계로 1만 명 동시 접근 시 DB 트랜잭션 대기열 급증.",
        solution: "DB 락을 제거하고 Redis 인메모리 분산 락(Redisson)으로 선점 유효성 검증을 1차 위임. 대기 시간 초과 시 DB 접근 없이 즉시 실패 반환.",
        result: "DB 커넥션 사용률 95% → 25% 안정화, 평균 응답 지연 2,800ms → 340ms로 약 87% 단축."
      }
    ],
    retrospective: [
      "대용량 트래픽 환경에서는 인메모리 캐시, 락, 큐를 결합한 계층적 방어선 설계가 필수적임을 체득했습니다.",
      "nGrinder 부하 테스트를 통해 정량적 지표 기반 성능 튜닝 사이클을 경험했습니다."
    ]
  },
  p2: {
    id: "p2",
    category: "fullstack",
    title: "LogiFlow : 실시간 물류·재고 통합 관제 SaaS",
    subtitle: "다지점 물류 창고 실시간 재고 추적 및 WebSocket 기반 상태 동기화 대시보드",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    tags: ["React", "TypeScript", "Node.js (NestJS)", "PostgreSQL", "Socket.io", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://logiflow.example.com",
    overview: {
      period: "2023.09 - 2024.01 (5개월)",
      team: "기업 협력 5인 프로젝트",
      role: "풀스택 엔지니어 (물류 이벤트 실시간 브로드캐스팅 및 프론트 가상화 테이블 구현)",
      oneLiner: "수도권 12개 거점 창고의 입출고 상태와 재고 변동을 실시간으로 동기화하는 B2B 관제 플랫폼"
    },
    architecture: {
      flowDescription: "현장 바코드 스캐너의 입출고 이벤트가 인입되면 PostgreSQL에 트랜잭션 기록 후 Socket.io 룸 단위로 해당 거점 브라우저에 실시간 푸시됩니다.",
      flowSteps: [
        { icon: "fa-barcode", label: "Scanner / Web", desc: "입출고 이벤트 발생" },
        { icon: "fa-server", label: "NestJS API", desc: "비즈니스 검증 및 기록" },
        { icon: "fa-database", label: "PostgreSQL", desc: "재고 원장 트랜잭션" },
        { icon: "fa-tower-broadcast", label: "Socket.io", desc: "거점별 룸 브로드캐스팅" },
        { icon: "fa-chart-pie", label: "React Dashboard", desc: "가상화 그리드 실시간 갱신" }
      ],
      erdSummary: "Warehouses (1:N) InventoryZones (1:N) StockItems. 복합 인덱스 설계를 통한 고속 검색 지원."
    },
    keyContributions: [
      {
        title: "Socket.io 룸 기반 지점별 맞춤 스트리밍",
        desc: "불필요한 전체 브로드캐스팅을 제거하고 거점 창고 ID별 클러스터링으로 네트워크 트래픽 80% 절감."
      },
      {
        title: "React-Window 기반 5만 건 재고 가상화 렌더링",
        desc: "뷰포트 영역의 DOM 노드만 동적으로 렌더링하여 60fps 스크롤 퍼포먼스 달성."
      }
    ],
    troubleshooting: [
      {
        problem: "수만 건 재고 목록 조회 시 브라우저 메모리 폭증 및 스크롤 멈춤 현상 발생",
        cause: "대량의 DOM 노드가 브라우저 트리에 일시 생성되어 렌더링 파이프라인 과부하.",
        solution: "React-Window 기반 윈도잉 기법을 도입하여 화면에 노출되는 30여 개 행만 선택적 렌더링.",
        result: "초기 렌더링 시간 3.2초 → 0.2초로 단축, 메모리 사용량 83% 감소."
      }
    ],
    retrospective: [
      "백엔드 쿼리 튜닝뿐만 아니라 프론트엔드의 렌더링 파이프라인 최적화가 필수적임을 체득했습니다."
    ]
  },
  p3: {
    id: "p3",
    category: "backend",
    title: "Sentinell : MSA 환경 분산 추적 & 에러 수집 엔진",
    subtitle: "경량 마이크로서비스 간 HTTP TraceId 전파 및 비동기 장애 알림 파이프라인",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200",
    tags: ["Go", "Elasticsearch", "Docker", "Kibana", "Slack Webhook"],
    github: "https://github.com",
    demo: "https://sentinell.example.com",
    overview: {
      period: "2023.03 - 2023.07 (5개월)",
      team: "개인 단독 프로젝트",
      role: "단독 개발 (Go 기반 수집 데몬 및 Elasticsearch 인덱싱 파이프라인 전담)",
      oneLiner: "서비스 간 호출 맥락을 TraceId로 추적하고 이상 에러를 2초 내에 실시간 통보하는 분산 로깅 엔진"
    },
    architecture: {
      flowDescription: "서비스 클러스터의 미들웨어가 X-Trace-ID를 주입하여 통신하며, Sentinell 수집기가 버퍼링 후 Elasticsearch로 고속 벌크 인덱싱합니다.",
      flowSteps: [
        { icon: "fa-cubes", label: "Microservices", desc: "TraceId 주입 로깅" },
        { icon: "fa-memory", label: "Go Channel Buffer", desc: "인메모리 버퍼링" },
        { icon: "fa-magnifying-glass", label: "Elasticsearch", desc: "벌크 색인" },
        { icon: "fa-bell", label: "Slack Notifier", desc: "장애 실시간 통보" }
      ],
      erdSummary: "Elasticsearch Time-series Index: trace_id, timestamp, log_level, message, stack_trace."
    },
    keyContributions: [
      {
        title: "Go Goroutine & Channel 기반 배치 버퍼 엔진 구현",
        desc: "I/O 병목 해소를 위해 내부 링버퍼 채널에서 1,000건 도달 시 Bulk API로 일괄 전송."
      }
    ],
    troubleshooting: [
      {
        problem: "대량 로그 유입 시 네트워크 소켓 고갈로 인한 로그 유실",
        cause: "로그 발생 건마다 개별 HTTP 요청을 발송하여 오버헤드 급증.",
        solution: "Go의 sync.Pool과 고루틴 워커 풀을 적용해 일정한 커넥션 유지 및 벌크 전송으로 전환.",
        result: "초당 처리량 1,500 RPS → 25,000 RPS로 16배 향상, 메모리 점유율 64MB 이하 유지."
      }
    ],
    retrospective: [
      "Go의 경량 동시성 모델을 실전 데몬에 적용하며 하드웨어 리소스 효율을 극한으로 제어하는 법을 배웠습니다."
    ]
  },
  p4: {
    id: "p4",
    category: "fullstack",
    title: "DevFeed : IT 개발 블로그 자동 피드 & 큐레이션",
    subtitle: "국내외 주요 테크 블로그 RSS 자동 수집, 카테고리 분류 및 뉴스레터 플랫폼",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1200",
    tags: ["Next.js 14", "FastAPI", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://devfeed.example.com",
    overview: {
      period: "2022.10 - 2023.01 (4개월)",
      team: "2인 사이드 프로젝트",
      role: "백엔드 및 크롤러 개발 (RSS 파싱, DB 정규화, 검색 API 구축)",
      oneLiner: "매일 수십 곳의 IT 기업 블로그를 자동 수집하여 요약 제공하는 테크 큐레이션 서비스"
    },
    architecture: {
      flowDescription: "FastAPI 크롤러가 블로그 피드를 수집하여 PostgreSQL에 저장하고 Next.js ISR을 통해 SEO 최적화된 정적 페이지로 제공합니다.",
      flowSteps: [
        { icon: "fa-rss", label: "Tech RSS", desc: "피드 자동 수집" },
        { icon: "fa-robot", label: "FastAPI Worker", desc: "본문 정제 및 분류" },
        { icon: "fa-database", label: "PostgreSQL", desc: "GIN 인덱스 저장" },
        { icon: "fa-globe", label: "Next.js ISR", desc: "SEO 최적화 서빙" }
      ],
      erdSummary: "Feeds (1:N) Articles (M:N) Tags. 전문 검색을 위한 GIN 인덱스 적용."
    },
    keyContributions: [
      {
        title: "Next.js ISR을 통한 초고속 페이지 로딩 및 SEO 확보",
        desc: "새 글 발행 시에만 증분 재생성하여 초기 페이지 로딩 0.4초 달성."
      }
    ],
    troubleshooting: [
      {
        problem: "다양한 블로그의 인코딩 불일치 및 상대경로 파싱 에러로 인한 수집 누락",
        cause: "EUC-KR 인코딩 혼재 및 이미지 태그 상대경로 문제.",
        solution: "Chardet 인코딩 자동 판별기 및 절대 URL 변환기를 크롤러 전단에 배치.",
        result: "수집 성공률 81% → 99.8% 달성, 12,000건 이상 안정적 수집."
      }
    ],
    retrospective: [
      "외부 시스템의 불확실성에 대응하는 견고한 예외 방어 로직의 가치를 확인했습니다."
    ]
  }
};

