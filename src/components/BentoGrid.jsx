import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function BentoGrid() {
  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80, damping: 15 } },
  };

  return (
    <section id="about" className="w-[80%] min-h-screen mx-auto flex flex-col items-center justify-center text-center text-white py-24">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-[40px] font-bold mb-8"
      >
        Hello, There 👋
      </motion.h1>

      {/* Bento Grid — Responsive layout */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        transition={{ staggerChildren: 0.1 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full mt-2"
      >
        {/* Card 1 */}
        <motion.div
          variants={cardVariants}
          whileHover={{ boxShadow: '0 0 15px #7e22ce' }}
          className="relative flex items-start justify-center overflow-hidden min-h-[35vh] lg:h-[40vh] bg-black border border-zinc-700 rounded-[20px] transition-all duration-300"
        >
          <h1 className="absolute bottom-[45%] md:bottom-[40%] left-[5%] text-[22px] md:text-[25px] text-white z-10">
            Hi there, I'm Kazuto_Black
          </h1>
          <p className="absolute bottom-[5%] md:bottom-[3%] left-[5%] z-10 max-w-[90%] md:max-w-[300px] text-zinc-400 text-[13px] leading-5">
            With 2 years of experience, I have honed my skills in both frontend and backend development, creating dynamic and responsive websites.
          </p>
          <img src="/images/grid1.png" alt="" className="w-[80%] h-[50%] object-cover absolute top-0" />
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={cardVariants}
          whileHover={{ boxShadow: '0 0 15px #7e22ce' }}
          className="relative flex items-start justify-center overflow-hidden min-h-[35vh] lg:h-[40vh] bg-black border border-zinc-700 rounded-[20px] transition-all duration-300"
        >
          <h1 className="absolute bottom-[40%] left-[5%] text-[22px] md:text-[25px] text-white z-10">Tech Stack</h1>
          <p className="absolute bottom-[5%] md:bottom-[3%] left-[5%] z-10 max-w-[90%] md:max-w-[300px] text-zinc-400 text-[13px] leading-5">
            I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications.
          </p>
          <img src="/images/grid2.png" alt="" className="w-[80%] h-[50%] object-cover absolute top-0" />
        </motion.div>

        {/* Card 3 — spans 2 rows on large screens */}
        <motion.div
          variants={cardVariants}
          whileHover={{ boxShadow: '0 0 15px #7e22ce' }}
          className="relative flex items-start justify-center overflow-hidden bg-black border border-zinc-700 rounded-[20px] transition-all duration-300 lg:row-span-2 min-h-[50vh] lg:h-auto"
        >
          <h1 className="absolute bottom-[25%] lg:bottom-[21%] left-[5%] text-[20px] lg:text-[25px] text-white z-10 pr-4">
            I'm flexible with time zones & locations
          </h1>
          <p className="absolute bottom-[15%] lg:bottom-[12%] left-[5%] z-10 text-zinc-400 text-[13px] leading-5">
            I'm based in Chile and open to remote work worldwide.
          </p>
          <video
            src="/video/glob.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="mt-[10%] w-[90%] lg:w-[70%] h-[50%] object-cover mix-blend-lighten"
          />
          <a
            href="/contact"
            className="absolute bottom-[4%] lg:bottom-[5%] left-[5%] z-10 flex items-center gap-2 text-white px-4 py-1.5 rounded-xl border border-purple-500/60 bg-purple-950/30 shadow-[0_0_5px_rgba(126,34,206,0.5)] hover:shadow-[0_0_15px_rgba(126,34,206,0.7)] transition-all duration-300 text-sm font-medium"
          >
            <Send size={14} /> Contact Me
          </a>
        </motion.div>

        {/* Card 4 — spans 2 columns on large screens */}
        <motion.div
          variants={cardVariants}
          whileHover={{ boxShadow: '0 0 15px #7e22ce' }}
          className="relative flex items-start justify-center overflow-hidden min-h-[35vh] lg:h-[40vh] bg-black border border-zinc-700 rounded-[20px] transition-all duration-300 lg:col-span-2"
        >
          <h1 className="absolute bottom-[40%] md:bottom-[35%] left-[5%] text-[22px] md:text-[25px] text-white z-10">
            My Passion for Coding
          </h1>
          <p className="absolute bottom-[5%] md:bottom-[3%] left-[5%] z-10 max-w-[90%] md:max-w-[650px] text-zinc-400 text-[13px] leading-5">
            I love solving problems and building things through code. Programming isn't just my profession—it's my passion.
          </p>
          <img src="/images/grid4.png" alt="" className="w-[80%] h-[50%] object-cover absolute top-0" />
        </motion.div>
      </motion.div>
    </section>
  );
}
