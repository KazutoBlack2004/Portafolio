import React from 'react';


const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

import { useTranslation } from 'react-i18next';
import '../i18n'; // Initialize i18next

export default function FooterSection() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  const navLinks = [
    { label: t('nav.home'), href: '#home' },
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.projects'), href: '#projects' },
  ];

  return (
    <footer className="relative bg-black/60 backdrop-blur-md text-white pt-12 pb-12 px-5">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
      <div className="relative max-w-[1200px] mx-auto text-center z-10">
        {/* Logo */}
        <h2 className="text-[28px] font-bold tracking-widest mb-6 animate-fadeIn transition-colors duration-300">
          <span className="text-purple-500 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">Kazuto</span>
          <span className="text-white/80">_Black</span>
        </h2>

        {/* Nav links */}
        <div className="flex justify-center gap-8 flex-wrap mb-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-white/70 text-sm font-medium uppercase tracking-wider no-underline hover:text-purple-400 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all duration-300"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-6 mb-8">
          {[
            { Icon: GithubIcon, href: 'https://github.com/KazutoBlack2004' },
            { Icon: LinkedinIcon, href: 'https://www.linkedin.com/in/chrystopher-silva-quintanilla-5b2460391' },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white/80 hover:bg-purple-600 hover:text-white hover:shadow-[0_0_15px_#9333ea] transition-all duration-300"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/10">
          <p className="text-white/50 text-xs tracking-widest uppercase">
            &copy; {year} Kazuto_Black | {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
