import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Experience from './components/Experience';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import Toast from './components/Toast';

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return SECTION_IDS.includes(hash) ? hash : 'home';
  });
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  // Smooth scroll navigation handler
  const handleNavigate = useCallback((e, sectionId) => {
    if (e) e.preventDefault();
    const targetEl = document.getElementById(sectionId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveSection(sectionId);
      window.history.replaceState(null, null, `#${sectionId}`);
    }
  }, []);

  // Intersection Observer API 기반 ScrollSpy & URL Hash 실시간 동기화
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-25% 0px -55% 0px',
      threshold: [0, 0.2, 0.4],
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection((prev) => {
            if (prev !== sectionId) {
              window.history.replaceState(null, null, `#${sectionId}`);
            }
            return sectionId;
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // 페이지 최하단(Contact) 및 최상단(Home) 도달 보정
    const handleScrollEdge = () => {
      if (window.scrollY < 100) {
        setActiveSection((prev) => {
          if (prev !== 'home') {
            window.history.replaceState(null, null, '#home');
          }
          return 'home';
        });
      } else if (
        window.innerHeight + Math.round(window.scrollY) >=
        document.documentElement.scrollHeight - 80
      ) {
        setActiveSection((prev) => {
          if (prev !== 'contact') {
            window.history.replaceState(null, null, '#contact');
          }
          return 'contact';
        });
      }
    };

    window.addEventListener('scroll', handleScrollEdge, { passive: true });

    // 초기 해시가 없으면 기본 #home 반영
    if (!window.location.hash) {
      window.history.replaceState(null, null, '#home');
    }

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollEdge);
    };
  }, []);

  // Toast notification
  const showToast = (message) => {
    setToastMessage(message);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3000);
  };

  // Copy email to clipboard
  const handleCopyEmail = () => {
    const email = 'dbqls6746@gmail.com';
    navigator.clipboard
      .writeText(email)
      .then(() => {
        showToast('이메일 주소가 클립보드에 복사되었습니다!');
      })
      .catch(() => {
        showToast('이메일 복사에 실패했습니다.');
      });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-brand-500 selection:text-white">
      {/* 모바일 상단 헤더 */}
      <Header activeSection={activeSection} onNavigate={handleNavigate} />

      {/* 데스크톱 고정 사이드바 */}
      <Sidebar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onCopyEmail={handleCopyEmail}
      />

      {/* 메인 컨텐츠 영역 */}
      <main className="lg:ml-72 min-h-screen">
        <Home onNavigate={handleNavigate} />
        <About />
        <Skills />
        <Projects onOpenModal={(id) => setSelectedProjectId(id)} />
        <Experience />
        <Contact onCopyEmail={handleCopyEmail} onShowToast={showToast} />
      </main>

      {/* 프로젝트 상세 모달 */}
      <ProjectModal
        projectId={selectedProjectId}
        onClose={() => setSelectedProjectId(null)}
      />

      {/* 맨 위로 가기 플로팅 버튼 */}
      <BackToTop />

      {/* 토스트 알림 */}
      <Toast message={toastMessage} visible={toastVisible} />
    </div>
  );
}
