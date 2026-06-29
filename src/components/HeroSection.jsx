import React from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 20 } },
  };

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
          Hi I'm Kazuto_Black
        </motion.h4>

        {/* Title */}
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-7xl font-black mb-2 text-white"
        >
          Frontend Developer
        </motion.h2>

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-black mb-6 text-white"
        >
          Based in Algeria
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-[20px] text-neutral-400 mb-8 max-w-xl leading-relaxed"
        >
          I'm Kazuto_Black, a passionate Software Developer who enjoys understanding
          how systems work — from low-level logic circuits to high-level applications.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={itemVariants} className="flex gap-5">
          <a
            href="#about"
            className="text-[18px] font-medium px-6 py-2.5 rounded-full bg-purple-600 text-white border-2 border-purple-600 transition-all duration-300 hover:bg-purple-700 hover:shadow-[0_0_20px_#7e22ce]"
          >
            Contact me
          </a>
          <a
            href="#projects"
            className="text-[18px] font-medium px-6 py-2.5 rounded-full bg-transparent text-purple-400 border-2 border-purple-600 transition-all duration-300 hover:bg-purple-600 hover:text-white hover:shadow-[0_0_20px_#7e22ce]"
          >
            My work
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
