import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n'; // Initialize i18next

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function NavBar() {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((section) => {
        if (window.scrollY >= section.offsetTop - 150) {
          current = section.getAttribute('id');
        }
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.projects'), href: '#projects' },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full h-20 text-white z-50 transition-colors duration-300"
      style={{ backgroundColor: scrolled ? 'rgba(0,0,0,0.85)' : 'rgba(0,0,0,0.5)', backdropFilter: 'blur(16px)' }}
    >
      <div className="max-w-[1200px] mx-auto h-full px-5 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-[28px] font-bold cursor-pointer transition-colors duration-300 hover:text-purple-500">
          <span className="text-purple-500">Kazuto</span>_black
          <span className="text-purple-400">.</span>
        </h1>

        {/* Nav */}
        <nav className="flex gap-8 rounded-full px-5 py-2.5 bg-white/5 shadow-sm backdrop-blur-md">
          <ul className="flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`no-underline text-[18px] font-medium transition-colors duration-300 ${activeSection === href.slice(1)
                    ? 'text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]'
                    : 'text-white/90 hover:text-purple-300'
                    }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Section: Language Toggle & Social Icons */}
        <div className="flex items-center gap-6">
          <button 
            onClick={toggleLanguage}
            className="text-sm font-semibold tracking-wider text-white/90 hover:text-purple-400 transition-colors uppercase px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm"
          >
            {i18n.language}
          </button>

          <div className="flex gap-4">
            {[
              { Icon: GithubIcon, href: 'https://github.com/KazutoBlack2004' },
              { Icon: LinkedinIcon, href: 'www.linkedin.com/in/chrystopher-silva-quintanilla-5b2460391' },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-9 h-9 rounded-full text-white/90 bg-white/5 transition-all duration-300 hover:bg-purple-600 hover:text-white hover:shadow-[0_0_15px_#9333ea]"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
