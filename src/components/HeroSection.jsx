import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Download } from 'lucide-react';
import '../i18n'; // Initialize i18next

export default function HeroSection() {
  const { t, i18n } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 20 } },
  };

  const cvPath = i18n.language === 'es'
    ? '/docs/CV%20Espa%C3%B1ol%20%20KazutoBlack.docx'
    : '/docs/CV%20Ingles%20%20KazutoBlack.docx';

  return (
    <section
      id="home"
      className="min-h-screen mt-20 flex items-center justify-center bg-black text-white"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center text-center px-6"
      >
        {/* Avatar */}
        <motion.div
          variants={itemVariants}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="relative mb-8"
        >
          <div className="absolute inset-0 rounded-full bg-purple-600/50 blur-lg animate-pulse" />
          <img
            src="/images/Thats the Gohan that i like.jpg"
            alt="Kazuto_Black avatar"
            className="relative w-48 h-48 rounded-full object-cover border-2 border-purple-600 z-10"
          />
        </motion.div>

        {/* Greeting */}
        <motion.h4
          variants={itemVariants}
          className="text-lg font-semibold text-purple-400 mb-6 tracking-wider"
        >
          {t('hero.greeting')}
        </motion.h4>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-7xl font-black mb-2 text-white"
        >
          {t('hero.role')}
        </motion.h2>

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-black mb-6 text-white"
        >
          {t('hero.location')}
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-[20px] text-neutral-400 mb-8 max-w-xl leading-relaxed"
        >
          {t('hero.description')}
        </motion.p>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-center">
          <a
            href="/contact"
            className="text-[18px] font-medium px-6 py-2.5 rounded-full bg-purple-600 text-white border-2 border-purple-600 transition-all duration-300 hover:bg-purple-700 hover:shadow-[0_0_20px_#7e22ce]"
          >
            {t('hero.contact')}
          </a>
          <a
            href="#projects"
            className="text-[18px] font-medium px-6 py-2.5 rounded-full bg-transparent text-purple-400 border-2 border-purple-600 transition-all duration-300 hover:bg-purple-600 hover:text-white hover:shadow-[0_0_20px_#7e22ce]"
          >
            {t('hero.work')}
          </a>
          <a
            href={cvPath}
            download
            className="flex items-center gap-2 text-[18px] font-medium px-6 py-2.5 rounded-full bg-white/10 text-white border border-white/20 backdrop-blur-md transition-all duration-300 hover:bg-white/25 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            <Download size={18} className="text-purple-400" />
            {t('hero.downloadCv')}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

