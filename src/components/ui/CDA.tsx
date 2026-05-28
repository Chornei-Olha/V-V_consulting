'use client';

import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function CDA() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [phone, setPhone] = useState('+380');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let digits = e.target.value.replace(/\D/g, '');

    if (!digits.startsWith('380')) {
      digits = '380' + digits.replace(/^380/, '');
    }

    digits = digits.slice(0, 12);
    setPhone('+' + digits);
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current || isSubmitting) return;

    if (!/^\+380\d{9}$/.test(phone)) {
      alert('Введіть коректний номер телефону у форматі +380XXXXXXXXX');
      return;
    }

    try {
      setIsSubmitting(true);
      setIsSuccess(false);

      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      formRef.current.reset();
      setPhone('+380');
      setIsSuccess(true);
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Помилка. Спробуйте ще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="who-we-help"
      className="relative overflow-hidden py-20 md:py-28 bg-[url('/images/cda_bg.webp')] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-slate-950/70" />

      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mb-4 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-md"
            >
              TriVista Consulting
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.22, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl"
            >
              Потрібне рішення
              <span className="block text-blue-300">для вашого бізнесу?</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.32, duration: 0.8 }}
              className="mt-6 max-w-lg text-base leading-7 text-white/75 md:text-lg"
            >
              Опишіть вашу ситуацію, і команда TriVista Consulting підготує практичну консультацію з
              урахуванням специфіки вашого бізнесу, ризиків і пріоритетів.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.42, duration: 0.8 }}
              className="mt-8 grid gap-4 sm:grid-cols-2"
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-sm text-white/50">Фокус</p>
                <p className="mt-2 text-white">Конкретне рішення, а не загальні поради</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                <p className="text-sm text-white/50">Підхід</p>
                <p className="mt-2 text-white">З урахуванням структури саме вашого бізнесу</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.96, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-br from-blue-400/30 via-cyan-300/10 to-white/10 blur-xl" />

            <div className="relative rounded-[28px] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl md:p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-white">Запит на консультацію</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">
                  Заповніть форму, і ми зв’яжемося з вами найближчим часом.
                </p>
              </div>

              <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Ваше імʼя"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/90 px-4 py-3.5 text-gray-900 placeholder:text-gray-500 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20"
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="+380XXXXXXXXX"
                  value={phone}
                  onChange={handlePhoneChange}
                  required
                  pattern="^\+380\d{9}$"
                  title="Введіть коректний номер телефону у форматі +380XXXXXXXXX"
                  className="w-full rounded-xl border border-white/10 bg-white/90 px-4 py-3.5 text-gray-900 placeholder:text-gray-500 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/90 px-4 py-3.5 text-gray-900 placeholder:text-gray-500 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20"
                />

                <textarea
                  name="message"
                  placeholder="Опишіть вашу ситуацію"
                  rows={5}
                  required
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/90 px-4 py-3.5 text-gray-900 placeholder:text-gray-500 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-400/20"
                />

                <motion.button
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-5 py-3.5 font-medium text-white shadow-lg shadow-blue-500/20 transition disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? 'Надсилання...' : 'Отримати консультацію'}
                </motion.button>

                {isSuccess && (
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
                    Дякуємо. Ваш запит успішно надіслано.
                  </div>
                )}
              </form>

              <div className="mt-6 flex flex-col gap-2 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
                <span>Конфіденційно та безпечно</span>
                <a
                  href="/file.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 transition hover:text-white/80"
                >
                  Політика конфіденційності
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
