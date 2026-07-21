import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../i18n';

// ─── Icons ────────────────────────────────────────────────────────────────────
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

// ─── Project Card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, t, isActive }) {
  return (
    <div
      className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12 justify-center w-full h-full p-7 lg:p-10 rounded-[26px] border overflow-hidden select-none"
      style={{
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(20px)',
        borderColor: isActive ? 'rgba(168,85,247,0.5)' : 'rgba(255,255,255,0.07)',
        boxShadow: isActive
          ? '0 0 60px rgba(168,85,247,0.2), inset 0 0 40px rgba(168,85,247,0.04)'
          : '0 4px 40px rgba(0,0,0,0.5)',
        transition: 'border-color 0.5s, box-shadow 0.5s',
      }}
    >
      {/* Glow blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] h-[55%] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 70%)',
          filter: 'blur(40px)',
          opacity: isActive ? 1 : 0,
          transition: 'opacity 0.5s',
        }}
      />

      {/* Image */}
      <div
        className="relative w-full lg:w-[52%] overflow-hidden rounded-[16px] border border-white/10 shadow-2xl flex-shrink-0 z-10"
        style={{ pointerEvents: 'none' }}
      >
        <div className="absolute inset-0 bg-purple-900/10 mix-blend-overlay z-10 pointer-events-none" />
        <img
          src={project.image}
          alt={`${project.titleStart} ${project.titleAccent}`}
          className="w-full h-[200px] lg:h-[260px] object-cover"
          style={{
            transform: isActive ? 'scale(1.04)' : 'scale(1)',
            transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)',
          }}
          loading="lazy"
          draggable={false}
        />
      </div>

      {/* Info */}
      <div className="flex flex-col items-start text-left justify-center w-full lg:w-[48%] z-10 gap-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-semibold text-purple-200 rounded-full border"
              style={{ background: 'rgba(126,34,206,0.25)', borderColor: 'rgba(168,85,247,0.35)' }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h2 className="text-[26px] lg:text-[34px] font-extrabold leading-tight text-white">
          {project.titleStart}{' '}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(135deg, #c084fc, #e879f9, #a855f7)' }}
          >
            {project.titleAccent}
          </span>
        </h2>

        {/* Description */}
        <p className="text-white/60 text-[14px] leading-relaxed max-w-[460px]">
          {project.description}
        </p>

        {/* Links */}
        <div className="flex flex-wrap gap-3 mt-1">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300"
              style={{
                background: 'rgba(126,34,206,0.25)',
                border: '1px solid rgba(168,85,247,0.5)',
                boxShadow: '0 0 12px rgba(168,85,247,0.25)',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 24px rgba(168,85,247,0.6)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 12px rgba(168,85,247,0.25)')}
            >
              <ExternalLink size={15} /> {t('projects.website')}
            </a>
          )}
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.18)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
            >
              <GithubIcon /> {t('projects.github')}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Nav Button ───────────────────────────────────────────────────────────────
function NavButton({ onClick, label, children }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="flex-shrink-0 flex items-center justify-center w-11 h-11 rounded-full border transition-all duration-300 z-10"
      style={{
        background: 'rgba(126,34,206,0.18)',
        borderColor: 'rgba(168,85,247,0.45)',
        backdropFilter: 'blur(12px)',
        boxShadow: '0 0 14px rgba(168,85,247,0.18)',
      }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 26px rgba(168,85,247,0.6)')}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 14px rgba(168,85,247,0.18)')}
    >
      {children}
    </button>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function ProjectsSection() {
  const { t } = useTranslation();

  const projects = [
    {
      titleStart: t('projects.items.chilebite.titleStart'),
      titleAccent: t('projects.items.chilebite.titleAccent'),
      description: t('projects.items.chilebite.desc'),
      image: '/images/ChileBite.png',
      demoLink: 'https://chilebite.cl',
      repoLink: null,
      tags: ['Astro', 'React', 'Tailwind CSS', 'HeroUI'],
    },
    {
      titleStart: t('projects.items.apuntes.titleStart'),
      titleAccent: t('projects.items.apuntes.titleAccent'),
      description: t('projects.items.apuntes.desc'),
      image: '/images/Apuntes de Oli.png',
      demoLink: 'https://apuntesdeoli.vercel.app',
      repoLink: 'https://github.com/KazutoBlack2004/ApuntesDeOli',
      tags: ['Astro', 'React', 'Tailwind CSS'],
    },
    {
      titleStart: t('projects.items.love.titleStart'),
      titleAccent: t('projects.items.love.titleAccent'),
      description: t('projects.items.love.desc'),
      image: '/images/Love Messages.png',
      demoLink: 'https://lovemessages.onrender.com',
      repoLink: 'https://github.com/KazutoBlack2004/LoveMessages',
      tags: ['React', 'Node.js', 'Express'],
    },
    {
      titleStart: t('projects.items.pokemon.titleStart'),
      titleAccent: t('projects.items.pokemon.titleAccent'),
      description: t('projects.items.pokemon.desc'),
      image: '/images/Pokedex.png',
      demoLink: 'https://pokemon-e66b.onrender.com',
      repoLink: 'https://github.com/KazutoBlack2004/Pokemon',
      tags: ['JavaScript', 'HTML/CSS', 'PokeAPI'],
    },
  ];

  const N = projects.length;
  // Triple the array so we always have items before and after for a seamless infinite loop
  const extended = [...projects, ...projects, ...projects];

  // ── Constants ────────────────────────────────────────────────────────────────
  const DRIFT_SPEED = 1.6;   // px per frame at 60fps → smooth continuous drift
  const GAP         = 20;    // px gap between cards
  const CARD_RATIO  = 0.84;  // card = 84% of track container width

  // ── Refs ─────────────────────────────────────────────────────────────────────
  const containerRef   = useRef(null); // the overflow:hidden wrapper
  const trackRef       = useRef(null); // the flex strip
  const posRef         = useRef(null); // current translateX (pixels), null = not yet init
  const rafRef         = useRef(null);
  const isHoveredRef   = useRef(false);
  const isSnappingRef  = useRef(false); // true during a smooth snap transition

  // ── State ─────────────────────────────────────────────────────────────────────
  const [containerWidth, setContainerWidth] = useState(0);
  const [activeDot, setActiveDot]           = useState(0);
  const [isHovered, setIsHovered]           = useState(false);

  // ── Derived metrics ───────────────────────────────────────────────────────────
  const cardWidth  = containerWidth * CARD_RATIO;
  const cardStep   = cardWidth + GAP;
  const sideOffset = containerWidth > 0 ? (containerWidth - cardWidth) / 2 : 0;

  // ── ResizeObserver ────────────────────────────────────────────────────────────
  useEffect(() => {
    const ro = new ResizeObserver(entries => {
      setContainerWidth(entries[0].contentRect.width);
    });
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, []);

  // ── Initialize transform once metrics are ready ───────────────────────────────
  useEffect(() => {
    if (!containerWidth || !trackRef.current) return;
    if (posRef.current === null) {
      posRef.current = sideOffset - N * cardStep;
    }
    trackRef.current.style.transition = 'none';
    trackRef.current.style.transform  = `translateX(${posRef.current}px)`;
  }, [containerWidth, sideOffset, cardStep, N]);

  // ── Get active real project index (0..N-1) ───────────────────────────────────
  const getActiveDot = useCallback((pos) => {
    if (!cardStep) return 0;
    const extIdx = (sideOffset - pos) / cardStep;
    return ((Math.round(extIdx) % N) + N) % N;
  }, [sideOffset, cardStep, N]);

  // ── Snap to a real project index ─────────────────────────────────────────────
  const snapToDot = useCallback((dotIdx) => {
    if (!trackRef.current || !cardStep) return;
    const target = sideOffset - (N + dotIdx) * cardStep;
    posRef.current = target;
    isSnappingRef.current = true;
    trackRef.current.style.transition = 'transform 0.55s cubic-bezier(0.4,0,0.2,1)';
    trackRef.current.style.transform  = `translateX(${target}px)`;
    setActiveDot(dotIdx);
    setTimeout(() => {
      if (trackRef.current) trackRef.current.style.transition = 'none';
      isSnappingRef.current = false;
    }, 600);
  }, [sideOffset, cardStep, N]);

  // ── Navigation ────────────────────────────────────────────────────────────────
  const goNext = useCallback(() => snapToDot((activeDot + 1) % N),     [snapToDot, activeDot, N]);
  const goPrev = useCallback(() => snapToDot((activeDot - 1 + N) % N), [snapToDot, activeDot, N]);

  // ── RAF continuous drift loop ────────────────────────────────────────────────
  useEffect(() => {
    if (!containerWidth) return;

    let lastDot = -1;

    const tick = () => {
      if (!isHoveredRef.current && !isSnappingRef.current && trackRef.current && posRef.current !== null) {
        posRef.current -= DRIFT_SPEED;

        // Seamless infinite reset when entering third set
        const extIdx = (sideOffset - posRef.current) / cardStep;
        if (extIdx >= 2 * N) {
          posRef.current += N * cardStep;
        }

        trackRef.current.style.transform = `translateX(${posRef.current}px)`;

        const dot = getActiveDot(posRef.current);
        if (dot !== lastDot) {
          lastDot = dot;
          setActiveDot(dot);
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [containerWidth, cardStep, sideOffset, N, getActiveDot]);

  useEffect(() => { isHoveredRef.current = isHovered; }, [isHovered]);

  // ── Wheel scroll ──────────────────────────────────────────────────────────────
  const wheelAccum  = useRef(0);
  const wheelTimer  = useRef(null);
  const handleWheel = useCallback((e) => {
    e.preventDefault();
    wheelAccum.current += e.deltaY;
    clearTimeout(wheelTimer.current);
    wheelTimer.current = setTimeout(() => {
      if (Math.abs(wheelAccum.current) > 40) {
        wheelAccum.current > 0 ? goNext() : goPrev();
      }
      wheelAccum.current = 0;
    }, 80);
  }, [goNext, goPrev]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [handleWheel]);

  // ── Touch / mouse drag ────────────────────────────────────────────────────────
  const dragStartX = useRef(null);

  const handleTouchStart = (e) => { dragStartX.current = e.touches[0].clientX; };
  const handleTouchEnd   = (e) => {
    const dx = e.changedTouches[0].clientX - dragStartX.current;
    if (Math.abs(dx) > 50) dx < 0 ? goNext() : goPrev();
    dragStartX.current = null;
  };
  const handleMouseDown = (e) => { dragStartX.current = e.clientX; };
  const handleMouseUp   = (e) => {
    if (dragStartX.current === null) return;
    const dx = e.clientX - dragStartX.current;
    dragStartX.current = null;
    if (Math.abs(dx) > 50) dx < 0 ? goNext() : goPrev();
  };

  // ── Render ────────────────────────────────────────────────────────────────────
  return (
    <section
      id="projects"
      className="w-full min-h-screen flex flex-col items-center justify-center text-white relative py-24"
    >
      {/* Title */}
      <div className="flex flex-col items-center text-center mb-14 relative px-4">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[60px] pointer-events-none"
          style={{ background: 'rgba(126,34,206,0.22)', filter: 'blur(60px)' }}
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[40px] md:text-[56px] font-extrabold tracking-tight"
        >
          {t('projects.titleStart')}{' '}
          <span
            className="text-transparent bg-clip-text"
            style={{ backgroundImage: 'linear-gradient(135deg, #c084fc, #e879f9, #a855f7)' }}
          >
            {t('projects.titleAccent')}
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 text-white/50 text-lg max-w-2xl"
        >
          {t('projects.subtitle')}
        </motion.p>
      </div>

      {/* ── Carousel row: [←] [track with mask fade] [→] ── */}
      <div className="flex items-center gap-4 w-full px-6 lg:px-10">

        {/* ← button */}
        <NavButton onClick={goPrev} label="Previous project">
          <ChevronLeft size={20} className="text-purple-300" />
        </NavButton>

        {/* Track container — flex-1, clips cards, gradient fade via mask-image */}
        <div
          ref={containerRef}
          className="flex-1 overflow-hidden"
          style={{
            cursor: isHovered ? 'grab' : 'default',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
            maskImage:        'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Sliding strip: Hover detection is strictly attached to trackRef (the cards area) */}
          <div
            ref={trackRef}
            className="flex"
            style={{ gap: `${GAP}px` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {extended.map((project, i) => {
              const isActive = (i % N) === activeDot;
              return (
                <div
                  key={i}
                  className="flex-shrink-0"
                  style={{
                    width: containerWidth ? `${cardWidth}px` : '84%',
                    opacity:   isActive ? 1 : 0.42,
                    transform: isActive ? 'scale(1)' : 'scale(0.95)',
                    transition: 'opacity 0.5s, transform 0.5s',
                  }}
                >
                  <ProjectCard project={project} t={t} isActive={isActive} />
                </div>
              );
            })}
          </div>
        </div>

        {/* → button */}
        <NavButton onClick={goNext} label="Next project">
          <ChevronRight size={20} className="text-purple-300" />
        </NavButton>
      </div>

      {/* ── Dot indicators (clickable) ── */}
      <div className="flex items-center gap-3 mt-10">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => snapToDot(i)}
            aria-label={`Ver proyecto ${i + 1}`}
            className="rounded-full transition-all duration-400"
            style={{
              width:      activeDot === i ? '28px' : '8px',
              height:     '8px',
              background: activeDot === i
                ? 'linear-gradient(90deg, #a855f7, #e879f9)'
                : 'rgba(255,255,255,0.18)',
              boxShadow: activeDot === i ? '0 0 10px rgba(168,85,247,0.6)' : 'none',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>

      {/* Hint */}
      <p className="mt-4 text-white/20 text-xs select-none tracking-wide">
        {isHovered ? t('projects.hintInteract') : t('projects.hintDrift')}
      </p>
    </section>
  );
}
