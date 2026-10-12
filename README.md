# 최유빈 개발자 포트폴리오 (React + Vite)

Frontend와 Backend를 아우르는 풀스택 개발자 최유빈의 원페이지 포트폴리오 웹사이트입니다.

## 🛠 기술 스택
- **Framework**: React 19
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS
- **Font & Icons**: Pretendard, Font Awesome

## 📁 디렉토리 구조
```
port/
├── public/               # 정적 애셋 (profile.png 등)
├── src/
│   ├── assets/          # 이미지 애셋
│   ├── components/      # React 컴포넌트 분리
│   │   ├── Header.jsx         # 모바일 헤더 및 네비게이션 드로어
│   │   ├── Sidebar.jsx        # 데스크톱 사이드바 (Scrollspy 연동)
│   │   ├── Home.jsx           # Hero 섹션 (타이핑 인터랙션)
│   │   ├── About.jsx          # About Me (소개글, 4대 역량, Quick Info)
│   │   ├── Skills.jsx         # 기술 스택 상세 활용 역량 카드
│   │   ├── Projects.jsx       # 프로젝트 그리드 및 카테고리 필터링
│   │   ├── ProjectModal.jsx   # 프로젝트 심층 분석 모달 (아키텍처, 트러블슈팅)
│   │   ├── Experience.jsx     # 타임라인 경력 및 학력
│   │   ├── Contact.jsx        # 문의 폼 및 이메일 복사 연동
│   │   ├── BackToTop.jsx      # 맨 위로 가기 버튼
│   │   └── Toast.jsx          # 토스트 알림 컴포넌트
│   ├── data/
│   │   └── projectsData.js    # 프로젝트 상세 데이터 모델
│   ├── App.jsx                # 메인 레이아웃 및 상태 관리
│   ├── index.css              # Tailwind 및 커스텀 스타일
│   └── main.jsx               # React 진입점
├── .gitignore
├── index.html                 # Vite HTML 템플릿
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## 🚀 실행 방법

### 1. 패키지 설치
```bash
npm install
```

### 2. 로컬 개발 서버 실행
```bash
npm run dev
```
브라우저에서 `http://localhost:5173`으로 접속합니다.

### 3. 프로덕션 빌드
```bash
npm run build
```
빌드된 파일은 `dist/` 폴더에 생성됩니다.

### 4. 빌드 미리보기
```bash
npm run preview
```

