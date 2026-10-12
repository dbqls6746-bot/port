import React, { useState, useEffect } from 'react';
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

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  // Scrollspy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      let current = 'home';

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop - 140;
          if (window.scrollY >= top) {
            current = sectionId;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
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
        showToast(`이메일 주소(${email})가 복사되었습니다!`);
      })
      .catch(() => {
        showToast('이메일 복사에 실패했습니다.');
      });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-brand-500 selection:text-white">
      {/* 모바일 상단 헤더 */}
      <Header />

      {/* 데스크톱 고정 사이드바 */}
      <Sidebar activeSection={activeSection} onCopyEmail={handleCopyEmail} />

      {/* 메인 컨텐츠 영역 */}
      <main className="lg:ml-72 min-h-screen">
        <Home />
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

