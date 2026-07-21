import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n'; // Initialize i18next


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

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function NavBar() {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('lng');
      if (savedLang && savedLang !== i18n.language) {
        i18n.changeLanguage(savedLang);
      }
    }
  }, [i18n]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('lng', newLang);
    }
  };

  const navLinks = [
    { label: t('nav.home'), href: '/#home' },
    { label: t('nav.about'), href: '/#about' },
    { label: t('nav.projects'), href: '/#projects' },
  ];

  return (
    <header
      className="fixed top-0 left-0 w-full h-20 text-white z-50 transition-colors duration-300"
      style={{ backgroundColor: scrolled ? 'rgba(0,0,0,0.85)' : 'rgba(0,0,0,0.5)', backdropFilter: 'blur(16px)' }}
    >
      <div className="max-w-[1200px] mx-auto h-full px-4 md:px-5 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-[22px] md:text-[28px] font-bold cursor-pointer transition-colors duration-300 hover:text-purple-500 z-50 relative">
          <span className="text-purple-500">Kazuto</span>_Black
          <span className="text-purple-400">.</span>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 rounded-full px-5 py-2.5 bg-white/5 shadow-sm backdrop-blur-md">
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

        {/* Right Section */}
        <div className="flex items-center gap-3 md:gap-6 z-50 relative">
          <button
            onClick={toggleLanguage}
            className="text-xs md:text-sm font-semibold tracking-wider text-white/90 hover:text-purple-400 transition-colors uppercase px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm"
          >
            {i18n.language}
          </button>

          {/* Desktop Socials */}
          <div className="hidden sm:flex gap-4">
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

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 flex flex-col py-6 px-6 gap-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <nav>
            <ul className="flex flex-col gap-6 list-none m-0 p-0">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block no-underline text-xl font-medium transition-colors duration-300 ${activeSection === href.slice(1)
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

          <div className="flex gap-4 pt-4 border-t border-white/10">
            {[
              { Icon: GithubIcon, href: 'https://github.com/KazutoBlack2004' },
              { Icon: LinkedinIcon, href: 'www.linkedin.com/in/chrystopher-silva-quintanilla-5b2460391' },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full text-white bg-white/5 transition-all duration-300 hover:bg-purple-600 hover:shadow-[0_0_15px_#9333ea]"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
