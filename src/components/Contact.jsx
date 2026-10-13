import React, { useState } from 'react';

export default function Contact({ onCopyEmail, onShowToast }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/dbqls6746@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `[포트폴리오 문의] ${formData.subject} - ${formData.name} 님`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const data = await response.json();

      if (response.ok || data.success === 'true' || data.success === true) {
        onShowToast(`${formData.name} 님, 메시지가 성공적으로 전송되었습니다!`);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error(data.message || '전송 실패');
      }
    } catch (error) {
      console.error('메일 전송 실패:', error);
      onShowToast('전송 중 오류가 발생했습니다. dbqls6746@gmail.com 으로 직접 연락 부탁드립니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="px-6 sm:px-12 lg:px-16 py-24 bg-white">
      <div className="max-w-4xl">
        <div className="flex items-center gap-2 text-brand-600 text-xs font-bold uppercase tracking-wider mb-2">
          <i className="fa-regular fa-circle-dot"></i> Get In Touch
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
          새로운 기회와 협업을 기다립니다
        </h2>
        <p className="text-slate-600 text-sm mb-10 max-w-xl">
          팀 합류 제안, 기술 자문, 커피챗 등 어떤 이야기든 환영합니다. 아래 이메일 복사 또는 폼을 통해 언제든 연락해주세요!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Direct Email</span>
              <div className="flex items-center justify-between gap-2 mt-2">
                <span className="font-mono text-sm font-bold text-slate-900 truncate">
                  dbqls6746@gmail.com
                </span>
                <button
                  onClick={onCopyEmail}
                  className="shrink-0 px-3 py-1.5 bg-white hover:bg-brand-50 border border-slate-300 hover:border-brand-300 text-slate-700 hover:text-brand-600 text-xs font-semibold rounded-lg transition-all flex items-center gap-1 shadow-xs"
                >
                  <i className="fa-regular fa-copy"></i>
                  <span>복사</span>
                </button>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-xs space-y-3">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Channels & Quick Mail</span>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=dbqls6746@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200/80 hover:border-brand-400 hover:text-brand-600 transition text-xs font-medium text-slate-800"
              >
                <div className="flex items-center gap-2.5">
                  <i className="fa-regular fa-envelope text-base text-brand-600"></i>
                  <span>Gmail로 바로 작성하기</span>
                </div>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-slate-400"></i>
              </a>

              <a
                href="https://github.com/dbqls6746-bot?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200/80 hover:border-slate-400 transition text-xs font-medium text-slate-800"
              >
                <div className="flex items-center gap-2.5">
                  <i className="fa-brands fa-github text-base text-slate-900"></i>
                  <span>GitHub 프로필</span>
                </div>
                <i className="fa-solid fa-arrow-up-right-from-square text-[10px] text-slate-400"></i>
              </a>
            </div>
          </div>

          <div className="md:col-span-3 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
            <h3 className="font-bold text-slate-900 text-base mb-1">메시지 보내기</h3>
            <p className="text-xs text-slate-500 mb-6">폼을 작성하시면 확인 후 24시간 이내에 회신드리겠습니다.</p>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="sender-name" className="block font-semibold text-slate-700 mb-1.5">
                    이름 / 기업명
                  </label>
                  <input
                    type="text"
                    id="sender-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="홍길동 또는 OO기업"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
                  />
                </div>
                <div>
                  <label htmlFor="sender-email" className="block font-semibold text-slate-700 mb-1.5">
                    회신받을 이메일
                  </label>
                  <input
                    type="email"
                    id="sender-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@example.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="sender-subject" className="block font-semibold text-slate-700 mb-1.5">
                  제목
                </label>
                <input
                  type="text"
                  id="sender-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="예: 풀스택 포지션 채용 제안 드립니다"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition"
                />
              </div>

              <div>
                <label htmlFor="sender-message" className="block font-semibold text-slate-700 mb-1.5">
                  내용
                </label>
                <textarea
                  id="sender-message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="상세한 내용이나 미팅 제안을 남겨주세요."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-brand-900 hover:bg-brand-800 text-white font-semibold rounded-xl text-sm transition shadow-sm hover:shadow flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin"></i>
                    <span>전송 중...</span>
                  </>
                ) : (
                  <>
                    <i className="fa-regular fa-paper-plane"></i>
                    <span>메시지 전송</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* 각오 한마디 배너 */}
        <div className="mt-12 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-slate-900 via-brand-900 to-slate-900 text-white shadow-md relative overflow-hidden">
          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-brand-300">
              <i className="fa-solid fa-quote-left text-base"></i>
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-300 block mb-1">
                각오 한마디
              </span>
              <p className="text-xs sm:text-sm md:text-base font-medium text-slate-100 leading-relaxed">
                &ldquo;설비의 작은 결함도 놓치지 않던 현장의 꼼꼼함으로, 데이터 한 줄의 정합성과 서비스의 안정성을 지키는 개발자가 되겠습니다. 언제든 편하게 연락 부탁드립니다.&rdquo;
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-slate-200 text-center text-xs text-slate-500">
          <p>© 2026 Choi Yubin. Built with React, Vite & Tailwind CSS.</p>
        </div>
      </div>
    </section>
  );
}

