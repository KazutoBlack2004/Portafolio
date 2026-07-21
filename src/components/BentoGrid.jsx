import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Send, Award, CheckCircle, ExternalLink, Brain, Globe } from 'lucide-react';

export default function BentoGrid() {
  const { t, i18n } = useTranslation();
  const [activeTab, setActiveTab] = useState('inacap');

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80, damping: 15 } },
  };

  const technologies = [
    { 
      name: 'HTML5', 
      color: '#e34f26', 
      glowColor: 'rgba(227, 79, 38, 0.3)',
      path: 'M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z'
    },
    { 
      name: 'CSS3', 
      color: '#1572b6', 
      glowColor: 'rgba(21, 114, 182, 0.3)',
      path: 'M1.5 0h21l-1.91 21.63L12 24l-8.59-2.37L1.5 0Zm17.265 3.375H5.245l.439 12.35 6.315 1.742 6.307-1.742.417-4.665h-3.342l-.226 2.079-2.937.785-3.036-.785-.246-2.61h9.457l.321-4.75Z'
    },
    { 
      name: 'Tailwind CSS', 
      color: '#38bdf8', 
      glowColor: 'rgba(56, 189, 248, 0.3)',
      path: 'M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z'
    },
    { 
      name: 'JavaScript', 
      color: '#f7df1e', 
      glowColor: 'rgba(247, 223, 30, 0.3)',
      path: 'M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z'
    },
    { 
      name: 'PostgreSQL', 
      color: '#336791', 
      glowColor: 'rgba(51, 103, 145, 0.3)',
      path: 'M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z'
    },
    { 
      name: 'Git & GitHub', 
      color: '#f05032', 
      glowColor: 'rgba(240, 80, 50, 0.3)',
      path: 'M13.09 23.549a1.54 1.54 0 0 1-2.18 0L.451 13.089a1.54 1.54 0 0 1 0-2.179l7.191-7.19 2.733 2.733a1.85 1.85 0 0 0 .964 2.326v6.66a1.849 1.849 0 1 0 1.54 0V8.957l2.508 2.508a1.85 1.85 0 1 0 1.09-1.09l-2.634-2.634a1.85 1.85 0 0 0-2.378-2.377L8.73 2.63 10.91.451a1.54 1.54 0 0 1 2.179 0l10.459 10.46a1.54 1.54 0 0 1 0 2.179z'
    },
    { 
      name: 'Node.js', 
      color: '#339933', 
      glowColor: 'rgba(51, 153, 51, 0.3)',
      path: 'M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z'
    },
    { 
      name: 'Astro', 
      color: '#ff5d01', 
      glowColor: 'rgba(255, 93, 1, 0.3)',
      path: 'M8.358 20.162c-1.186-1.07-1.532-3.316-1.038-4.944.856 1.026 2.043 1.352 3.272 1.535 1.897.283 3.76.177 5.522-.678.202-.098.388-.229.608-.36.166.473.209.95.151 1.437-.14 1.185-.738 2.1-1.688 2.794-.38.277-.782.525-1.175.787-1.205.804-1.531 1.747-1.078 3.119l.044.148a3.158 3.158 0 0 1-1.407-1.188 3.31 3.31 0 0 1-.544-1.815c-.004-.32-.004-.642-.048-.958-.106-.769-.472-1.113-1.161-1.133-.707-.02-1.267.411-1.415 1.09-.012.053-.028.104-.045.165h.002zm-5.961-4.445s3.24-1.575 6.49-1.575l2.451-7.565c.092-.366.36-.614.662-.614.302 0 .57.248.662.614l2.45 7.565c3.85 0 6.491 1.575 6.491 1.575L16.088.727C15.93.285 15.663 0 15.303 0H8.697c-.36 0-.615.285-.784.727l-5.516 14.99z'
    },
    { 
      name: 'Unity', 
      color: '#ffffff', 
      glowColor: 'rgba(255, 255, 255, 0.2)',
      path: 'm12.9288 4.2939 3.7997 2.1929c.1366.077.1415.2905 0 .3675l-4.515 2.6076a.4192.4192 0 0 1-.4246 0L7.274 6.8543c-.139-.0745-.1415-.293 0-.3675l3.7972-2.193V0L1.3758 5.5977V16.793l3.7177-2.1456v-4.3858c-.0025-.1565.1813-.2682.318-.1838l4.5148 2.6076a.4252.4252 0 0 1 .2136.3676v5.2127c.0025.1565-.1813.2682-.3179.1838l-3.7996-2.1929-3.7178 2.1457L12 24l9.6954-5.5977-3.7178-2.1457-3.7996 2.1929c-.1341.082-.3229-.0248-.3179-.1838V13.053c0-.1565.087-.2956.2136-.3676l4.5149-2.6076c.134-.082.3228.0224.3179.1838v4.3858l3.7177 2.1456V5.5977L12.9288 0Z'
    }
  ];

  const certificatesData = {
    inacap: {
      institution: t('about.institutions.inacap'),
      items: [
        { name: 'CERTIFICADO EN DESARROLLADOR FULL STACK', file: 'CERTIFICADO EN DESARROLLADOR FULL STACK.pdf' },
        { name: 'CERTIFICADO EN DESARROLLO DE APLICACIONES BÁSICAS', file: 'CERTIFICADO EN DESARROLLO DE APLICACIONES BÁSICAS.pdf' },
        { name: 'CERTIFICADO EN DISEÑO Y GESTIÓN DE BASE DE DATOS', file: 'CERTIFICADO EN DISEÑO Y GESTIÓN DE BASE DE DATOS.pdf' },
        { name: 'CERTIFICADO EN DISEÑO ÁGIL DE SISTEMAS', file: 'CERTIFICADO EN DISEÑO ÁGIL DE SISTEMAS.pdf' },
        { name: 'CERTIFICADO EN SOPORTE COMPUTACIONAL', file: 'CERTIFICADO EN SOPORTE COMPUTACIONAL.pdf' }
      ]
    },
    santander: {
      institution: t('about.institutions.santander'),
      items: [
        { name: 'Certificado Copilot', file: 'Certificado Copilot.pdf' },
        { name: 'Introducción a la Ciencia de Datos', file: 'Introducción a la Ciencia de Datos.pdf' },
        { name: 'Power BI', file: 'Power BI.pdf' },
        { name: 'Python desarrollo inteligente con IA', file: 'Python desarrollo inteligente con IA.pdf' },
        { name: 'Santander Python', file: 'Santander Python.pdf' }
      ]
    },
    aws: {
      institution: t('about.institutions.aws'),
      badge: '/docs/certificados/AWS/Insignia.png',
      items: [
        { name: 'AWS Academy Graduate - AWS Academy Cloud Foundations', file: 'AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20250620-28-n33zug.pdf' }
      ]
    },
    cisco: {
      institution: t('about.institutions.cisco'),
      badge: '/docs/certificados/Cisco Netacad/Insignia cisco.png',
      items: [
        { name: 'Introducción a las Redes', file: 'Introducción a las redes.pdf' }
      ]
    }
  };

  return (
    <section id="about" className="w-[80%] min-h-screen mx-auto flex flex-col items-center justify-center text-center text-white py-24">
      {/* Bento Grid — Responsive layout */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        transition={{ staggerChildren: 0.1 }}
        className="grid grid-cols-1 lg:grid-cols-3 gap-5 w-full mt-2"
      >
        {/* Card 1: About Me Bio */}
        <motion.div
          variants={cardVariants}
          whileHover={{ boxShadow: '0 0 20px rgba(126, 34, 206, 0.3)', borderColor: '#a855f7' }}
          className="lg:col-span-2 flex flex-col justify-between p-8 bg-zinc-950/80 border border-zinc-800 rounded-[24px] relative overflow-hidden backdrop-blur-md transition-all duration-300 min-h-[40vh]"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute -left-12 -bottom-12 w-48 h-48 bg-blue-600/10 rounded-full blur-[60px] pointer-events-none" />
          
          <div className="relative z-10 text-left">
            <div className="flex items-center gap-3 mb-6">
              <span className="flex h-3.5 w-3.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-purple-500"></span>
              </span>
              <h2 className="text-[24px] font-bold text-white tracking-wide">
                {t('about.title')}
              </h2>
            </div>
            
            <div className="space-y-4 text-zinc-300 text-[15px] md:text-[16px] leading-relaxed font-normal">
              <p>{t('about.bioPart1')}</p>
              <p>{t('about.bioPart2')}</p>
            </div>
          </div>
          
          <div className="relative z-10 mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-500">
            <span>Kazuto_Black · Software Developer</span>
            <span>Based in Chile</span>
          </div>
        </motion.div>

        {/* Card 2: Tech Stack */}
        <motion.div
          variants={cardVariants}
          whileHover={{ boxShadow: '0 0 20px rgba(126, 34, 206, 0.3)', borderColor: '#a855f7' }}
          className="flex flex-col justify-between p-8 bg-zinc-950/80 border border-zinc-800 rounded-[24px] relative overflow-hidden backdrop-blur-md transition-all duration-300 min-h-[40vh]"
        >
          <div className="absolute top-0 left-0 w-48 h-48 bg-purple-600/5 rounded-full blur-[60px] pointer-events-none" />
          
          <div className="relative z-10 text-left">
            <h2 className="text-[22px] font-bold text-white tracking-wide mb-2 flex items-center gap-2">
              <Brain className="text-purple-400 animate-pulse" size={20} />
              {t('about.techStack')}
            </h2>
            <p className="text-zinc-400 text-xs mb-6">
              {t('about.techStackDesc')}
            </p>
            
            <div className="grid grid-cols-3 gap-3">
              {technologies.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ 
                    scale: 1.08, 
                    borderColor: tech.color,
                    boxShadow: `0 0 16px ${tech.glowColor}`,
                    color: tech.color
                  }}
                  className="relative group flex items-center justify-center h-16 rounded-xl bg-zinc-900/55 border border-zinc-800/85 text-zinc-400 transition-all duration-300 cursor-default"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-8 h-8 fill-current transition-transform duration-300 group-hover:scale-110"
                    role="img"
                    aria-label={tech.name}
                  >
                    <path d={tech.path} />
                  </svg>
                  
                  {/* Glassmorphic Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5 px-3 py-1.5 text-xs font-semibold text-zinc-100 bg-zinc-950/95 border border-zinc-800 rounded-lg opacity-0 scale-90 pointer-events-none transition-all duration-200 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)] backdrop-blur-md z-50 group-hover:opacity-100 group-hover:scale-100 group-hover:-translate-y-1.5 flex flex-col items-center">
                    <span className="whitespace-nowrap tracking-wide">{tech.name}</span>
                    {/* Tooltip Arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-zinc-950/95" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative z-10 text-zinc-500 text-xs mt-6 text-center">
            {i18n.language === 'es' ? 'Pasa el cursor para ver los nombres' : 'Hover to reveal tech names'}
          </div>
        </motion.div>

        {/* Card 3: Location */}
        <motion.div
          variants={cardVariants}
          whileHover={{ boxShadow: '0 0 20px rgba(126, 34, 206, 0.3)', borderColor: '#a855f7' }}
          className="relative flex flex-col justify-between p-8 bg-zinc-950/80 border border-zinc-800 rounded-[24px] overflow-hidden transition-all duration-300 min-h-[40vh] lg:h-[440px]"
        >
          <div className="absolute top-0 right-0 w-full h-[55%] flex justify-center items-center pointer-events-none overflow-hidden mix-blend-lighten opacity-85">
            <video
              src="/images/Planeta%20rotando.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-[65%] lg:w-[70%] max-w-none object-contain"
            />
          </div>
          
          {/* Spacer to push content down below the globe */}
          <div className="h-[45%] pointer-events-none" />

          <div className="relative z-10 text-left mt-4">
            <h2 className="text-[22px] font-bold text-white mb-2 flex items-center gap-2">
              <Globe className="text-purple-400 animate-spin" style={{ animationDuration: '20s' }} size={20} />
              {t('about.locationTitle')}
            </h2>
            <p className="text-zinc-300 text-[14px] leading-relaxed mb-6 font-normal">
              {t('about.locationDesc')}
            </p>
            
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-white px-5 py-2.5 rounded-xl border border-purple-500/50 bg-purple-950/20 shadow-[0_0_8px_rgba(126,34,206,0.3)] hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:bg-purple-800/40 hover:border-purple-400 transition-all duration-300 text-sm font-semibold w-full justify-center"
            >
              <Send size={15} /> {i18n.language === 'es' ? 'Contáctame' : 'Contact Me'}
            </a>
          </div>
        </motion.div>

        {/* Card 4: Certifications & Badges */}
        <motion.div
          variants={cardVariants}
          whileHover={{ boxShadow: '0 0 20px rgba(126, 34, 206, 0.3)', borderColor: '#a855f7' }}
          className="lg:col-span-2 flex flex-col justify-between p-8 bg-zinc-950/80 border border-zinc-800 rounded-[24px] relative overflow-hidden backdrop-blur-md transition-all duration-300 min-h-[48vh] lg:h-[440px]"
        >
          <style>{`
            .custom-scrollbar::-webkit-scrollbar {
              width: 5px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: rgba(24, 24, 27, 0.2);
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: #3f3f46;
              border-radius: 10px;
              transition: background-color 0.2s;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: #a855f7;
            }
          `}</style>

          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 text-left w-full flex flex-col h-full">
            <h2 className="text-[22px] font-bold text-white tracking-wide mb-2 flex items-center gap-2">
              <Award className="text-purple-400" size={20} />
              {t('about.certifications')}
            </h2>
            <p className="text-zinc-400 text-xs mb-6">
              {t('about.certificationsDesc')}
            </p>
            
            {/* Tabs Selector */}
            <div className="flex flex-wrap gap-2 mb-6 border-b border-zinc-800/80 pb-3">
              {Object.keys(certificatesData).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                    activeTab === key
                      ? 'bg-purple-600 text-white shadow-[0_0_12px_rgba(147,51,234,0.4)]'
                      : 'bg-zinc-900/60 text-zinc-400 hover:text-zinc-200 border border-zinc-800/50 hover:bg-zinc-800/80'
                  }`}
                >
                  {certificatesData[key].institution}
                </button>
              ))}
            </div>
            
            {/* Tab Content */}
            <div className="flex-grow flex flex-col justify-center">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center w-full"
              >
                {/* Dynamic Badge Section */}
                {certificatesData[activeTab].badge && (
                  <div className="md:col-span-3 flex justify-center md:justify-start mb-4 md:mb-0">
                    <div className={`p-3 bg-zinc-900/85 rounded-2xl border border-zinc-800/80 flex justify-center items-center ${
                      activeTab === 'aws' 
                        ? 'shadow-[0_0_15px_rgba(249,115,22,0.15)]' 
                        : 'shadow-[0_0_15px_rgba(59,130,246,0.15)]'
                    }`}>
                      <img 
                        src={certificatesData[activeTab].badge} 
                        alt={`${certificatesData[activeTab].institution} Badge`} 
                        className="w-20 h-20 object-contain hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                )}
                
                {/* List of Certificates */}
                <div className={`${certificatesData[activeTab].badge ? 'md:col-span-9' : 'md:col-span-12'} w-full`}>
                  <div className="h-[210px] overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                    {certificatesData[activeTab].items.map((cert, index) => {
                      const encodedInstitution = activeTab === 'aws' ? 'AWS' 
                                              : activeTab === 'cisco' ? 'Cisco Netacad'
                                              : activeTab === 'inacap' ? 'Inacap'
                                              : 'Santander';
                      const fileUrl = `/docs/certificados/${encodedInstitution}/${cert.file}`;
                      
                      return (
                        <div
                          key={index}
                          className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/50 hover:bg-zinc-900/80 hover:border-zinc-700/80 transition-all duration-300 gap-3 group"
                        >
                          <div className="flex items-start gap-3">
                            <CheckCircle className="text-purple-500 shrink-0 mt-0.5" size={16} />
                            <span className="text-zinc-200 text-[14px] font-medium leading-tight group-hover:text-white transition-colors">
                              {cert.name}
                            </span>
                          </div>
                          <a
                            href={fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-950/30 text-purple-300 hover:text-white hover:bg-purple-600 border border-purple-500/30 hover:border-purple-500 transition-all duration-300 text-xs font-semibold shrink-0 self-end sm:self-center"
                          >
                            <ExternalLink size={12} />
                            {t('about.viewCertificate')}
                          </a>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
