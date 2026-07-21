import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Send, Check, AlertCircle, Mail, ShieldAlert } from 'lucide-react';
import '../i18n';

// ─── CONFIGURACIÓN DE CORREO ──────────────────────────────────────────────────
// Para recibir correos reales en tu cuenta personal (chrys.oliver.2004@gmail.com):
// 1. Ingresa a https://web3forms.com/ con tu correo
// 2. Te enviarán una clave de acceso (Access Key) a tu bandeja de entrada
// 3. Pega esa clave de acceso aquí:
const WEB3FORMS_ACCESS_KEY = "e7e0f091-6389-46b2-8d5f-56a698975f3b";

export default function ContactSection() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [validationError, setValidationError] = useState('');

  const emailAddress = "chrys.oliver.2004@gmail.com";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationError) setValidationError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if fields are empty
    if (!formData.name.trim() || !formData.message.trim()) {
      setValidationError(t('contact.warningAlert'));
      return;
    }

    setValidationError('');
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: emailAddress,
          message: formData.message,
          subject: 'Nuevo mensaje de contacto del Portafolio',
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submit error:', error);
      setStatus('error');
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 90, damping: 15 } },
  };

  return (
    <section className="min-h-[85vh] w-full flex items-center justify-center py-20 px-4 md:px-6 relative overflow-hidden text-white">
      {/* Background glow blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[350px] h-[350px] rounded-full bg-purple-900/15 blur-[90px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[400px] h-[400px] rounded-full bg-fuchsia-900/15 blur-[110px] pointer-events-none" />

      <motion.div
        initial="hidden"
        animate="visible"
        className="w-full max-w-[850px] flex flex-col items-center z-10 animate-fadeIn"
      >
        {/* Title */}
        <div className="text-center mb-10 max-w-2xl relative px-4">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[40px] md:text-[54px] font-extrabold tracking-tight"
          >
            {t('contact.titleStart')}{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #c084fc, #e879f9, #a855f7)' }}
            >
              {t('contact.titleAccent')}
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-4 text-zinc-400 text-base md:text-lg leading-relaxed"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>

        {/* Main Container Card (cuadrado negro traslúcido con efecto de fondo) */}
        <div className="w-full p-6 md:p-10 rounded-[32px] bg-zinc-950/80 border border-zinc-800/80 shadow-2xl flex flex-col gap-6">

          {/* Notifications & Alerts */}
          <AnimatePresence mode="wait">
            {validationError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-amber-950/40 border border-amber-500/50 text-amber-200 text-sm font-medium shadow-[0_0_15px_rgba(245,158,11,0.1)]"
              >
                <AlertCircle size={18} className="text-amber-400 shrink-0" />
                <span>{validationError}</span>
              </motion.div>
            )}

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/50 text-emerald-200 text-sm font-medium shadow-[0_0_15px_rgba(16,185,129,0.1)]"
              >
                <Check size={18} className="text-emerald-400 shrink-0" />
                <span>{t('contact.successAlert')}</span>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-rose-950/40 border border-rose-500/50 text-rose-200 text-sm font-medium shadow-[0_0_15px_rgba(239,68,68,0.1)]"
              >
                <ShieldAlert size={18} className="text-rose-400 shrink-0" />
                <span>{t('contact.errorAlert')}</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form & Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full">
            {/* Form Column (3 cols) */}
            <div className="md:col-span-3 flex flex-col justify-between">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-zinc-300">
                    {t('contact.nameLabel')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder={t('contact.namePlaceholder')}
                    className="px-4 py-3 rounded-xl bg-zinc-900/40 border border-zinc-800 text-white placeholder-zinc-650 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_12px_rgba(168,85,247,0.3)] transition-all duration-300 text-sm"
                    disabled={status === 'sending'}
                  />
                </div>



                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-zinc-300">
                    {t('contact.messageLabel')}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder={t('contact.messagePlaceholder')}
                    rows={4}
                    className="px-4 py-3 rounded-xl bg-zinc-900/40 border border-zinc-800 text-white placeholder-zinc-650 focus:outline-none focus:border-purple-500 focus:shadow-[0_0_12px_rgba(168,85,247,0.3)] transition-all duration-300 text-sm resize-none"
                    disabled={status === 'sending'}
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full mt-2 flex items-center justify-center gap-2 py-3 rounded-xl text-white font-semibold bg-purple-600 hover:bg-purple-700 hover:shadow-[0_0_15px_#7e22ce] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      {t('contact.sendingButton')}
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      {t('contact.sendButton')}
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Info Column (2 cols) - Contained in a subtle panel */}
            <div className="md:col-span-2 p-6 rounded-[20px] bg-white/5 border border-white/10 flex flex-col justify-between">
              {/* Upper half: Info details */}
              <div className="flex flex-col gap-4">
                <h3 className="text-xl font-bold tracking-tight text-white">
                  {t('contact.detailsTitle')}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {t('contact.detailsDesc')}
                </p>
              </div>

              {/* Lower half: Actions & Copier */}
              <div className="flex flex-col gap-3 mt-8">
                {/* Direct Mailto Anchor */}
                <a
                  href={`mailto:${emailAddress}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white transition-all duration-300 text-sm font-semibold text-center rounded-xl"
                >
                  <Mail size={15} className="text-purple-400" />
                  {t('contact.directMail')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
