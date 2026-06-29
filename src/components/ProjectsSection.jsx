import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../i18n';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

function ProjectCard({ project, index, t }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: 'easeOut' }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-[5%] justify-center w-full min-h-[40vh] p-8 lg:p-10 rounded-[30px] bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] transition-all duration-500 group relative overflow-hidden`}
    >
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-600/20 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Image Box */}
      <div className="relative flex items-center justify-center w-full lg:w-1/2 overflow-hidden rounded-[20px] shadow-lg border border-white/10 group-hover:border-purple-500/30 transition-all duration-500 z-10">
        <div className="absolute inset-0 bg-purple-900/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500" />
        <img
          src={project.image}
          alt={`${project.titleStart} ${project.titleAccent}`}
          className="w-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className={`flex flex-col ${isEven ? 'items-start text-left' : 'items-start lg:items-end text-left lg:text-right'} justify-center w-full lg:w-1/2 z-10`}>
        {/* Tech Badges */}
        <div className={`flex flex-wrap gap-2 mb-4 ${isEven ? 'justify-start' : 'justify-start lg:justify-end'}`}>
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 text-xs font-semibold text-purple-200 bg-purple-900/40 border border-purple-500/30 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <h2 className="text-[32px] font-bold mb-4">
          {project.titleStart}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-300 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
            {project.titleAccent}
          </span>
        </h2>

        <p className="text-white/70 text-base leading-relaxed mb-8 max-w-[500px]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-4">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white px-6 py-2.5 rounded-full border border-purple-500/50 bg-purple-600/20 shadow-[0_0_10px_rgba(168,85,247,0.2)] hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:bg-purple-500/40 transition-all duration-300 text-sm font-medium"
            >
              <ExternalLink size={18} /> {t('projects.website')}
            </a>
          )}

          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white px-6 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all duration-300 text-sm font-medium"
            >
              <GithubIcon /> {t('projects.github')}
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const { t } = useTranslation();

  const projects = [
    {
      titleStart: t('projects.items.chilebite.titleStart'),
      titleAccent: t('projects.items.chilebite.titleAccent'),
      description: t('projects.items.chilebite.desc'),
      image: 'https://api.microlink.io/?url=https://chilebite.cl&screenshot=true&meta=false&embed=screenshot.url',
      demoLink: 'https://chilebite.cl',
      repoLink: null,
      tags: ['Astro', 'React', 'Tailwind CSS', 'HeroUI']
    },
    {
      titleStart: t('projects.items.apuntes.titleStart'),
      titleAccent: t('projects.items.apuntes.titleAccent'),
      description: t('projects.items.apuntes.desc'),
      image: 'https://api.microlink.io/?url=https://apuntesdeoli.vercel.app&screenshot=true&meta=false&embed=screenshot.url',
      demoLink: 'https://apuntesdeoli.vercel.app',
      repoLink: 'https://github.com/KazutoBlack2004/ApuntesDeOli',
      tags: ['Astro', 'React', 'Tailwind CSS']
    },
    {
      titleStart: t('projects.items.love.titleStart'),
      titleAccent: t('projects.items.love.titleAccent'),
      description: t('projects.items.love.desc'),
      image: 'https://api.microlink.io/?url=https://lovemessages.onrender.com&screenshot=true&meta=false&embed=screenshot.url',
      demoLink: 'https://lovemessages.onrender.com',
      repoLink: 'https://github.com/KazutoBlack2004/LoveMessages',
      tags: ['React', 'Node.js', 'Express']
    },
    {
      titleStart: t('projects.items.pokemon.titleStart'),
      titleAccent: t('projects.items.pokemon.titleAccent'),
      description: t('projects.items.pokemon.desc'),
      image: 'https://api.microlink.io/?url=https://pokemon-e66b.onrender.com&screenshot=true&meta=false&embed=screenshot.url',
      demoLink: 'https://pokemon-e66b.onrender.com',
      repoLink: 'https://github.com/KazutoBlack2004/Pokemon',
      tags: ['JavaScript', 'HTML/CSS', 'PokeAPI']
    },
  ];

  return (
    <section
      id="projects"
      className="w-[85%] max-w-[1200px] min-h-screen mx-auto flex flex-col items-center justify-center text-center text-white relative mt-[150px] mb-[200px] gap-16"
    >
      <div className="flex flex-col items-center justify-center text-center mb-16 relative">
        {/* Glow effect behind title */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[50px] bg-purple-600/30 blur-[60px] pointer-events-none" />

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[40px] md:text-[56px] font-extrabold tracking-tight"
        >
          {t('projects.titleStart')}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-600 drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            {t('projects.titleAccent')}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-white/60 text-lg max-w-2xl px-4"
        >
          {t('projects.subtitle')}
        </motion.p>
      </div>

      <div className="flex flex-col gap-16 w-full">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} t={t} />
        ))}
      </div>
    </section>
  );
}
