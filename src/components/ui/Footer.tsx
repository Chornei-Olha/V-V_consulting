'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactSectionDark() {
  return (
    <footer id="footer" className="relative overflow-hidden bg-slate-950 py-12 text-gray-100">
      {/* background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.10),transparent_30%)]" />
      <div className="absolute inset-0 border-t border-white/10" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {/* LEFT — LOGO + ADDRESS */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div>
              <Link href="/" className="inline-block">
                <img
                  src="/logo-dark.webp"
                  alt="V&V consulting"
                  className="h-[80px] sm:h-[96px] opacity-90 transition hover:opacity-100"
                />
              </Link>
            </div>

            <div className="mt-6 space-y-2 text-sm leading-6 text-white/65">
              <p className="text-white/90">ТОВ ТріВіста Консалтинг</p>
              <p>
                м. Київ
                <br />
                вул. Братства Тарасівців, 12/37
              </p>
            </div>
          </motion.div>

          {/* CENTER — TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="flex flex-col justify-between"
          >
            <div>
              <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60 backdrop-blur-sm">
                TriVista Consulting
              </span>

              <h2 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                Юридичний супровід
                <span className="block text-blue-300">для сучасного бізнесу</span>
              </h2>

              <p className="mt-4 max-w-md text-sm leading-6 text-white/65 md:text-base">
                Допомагаємо підприємцям і компаніям ухвалювати сильні юридичні рішення: структурно,
                конфіденційно та з фокусом на результат.
              </p>
            </div>
          </motion.div>

          {/* RIGHT — CONTACTS */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-md"
          >
            <h3 className="text-lg font-semibold text-white">Контакти</h3>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">Телефон</p>
                <div className="mt-2 space-y-1">
                  <a
                    href="tel:+380970144014"
                    className="block text-base font-medium text-blue-300 transition hover:text-blue-200"
                  >
                    +38 097 014 40 14
                  </a>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">Email</p>
                <a
                  href="mailto:thevvvgroup@gmail.com"
                  className="mt-2 block text-base font-medium text-blue-300 transition hover:text-blue-200"
                >
                  thevvvgroup@gmail.com
                </a>
              </div>

              <div className="pt-2">
                <a
                  href="/file.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/55 underline underline-offset-4 transition hover:text-white/80"
                >
                  Політика конфіденційності
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* bottom line */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/35">
          © {new Date().getFullYear()} TriVista Consulting. Усі права захищені.
        </div>
      </div>

      {/* FLOAT PHONE BUTTON */}
      <div
        className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full
        border border-white/15 bg-white/10 shadow-[0_0_30px_6px_rgba(59,130,246,0.35)] backdrop-blur-xl
        transition hover:scale-105 sm:h-20 sm:w-20 lg:h-[92px] lg:w-[92px]"
      >
        <a
          href="tel:+380970144014"
          className="flex h-full w-full items-center justify-center rounded-full"
          aria-label="Зателефонувати"
        >
          <div className="flex h-full w-full items-center justify-center rounded-full transition-transform active:scale-95">
            <Image
              src="/images/img_phone_call_2_svg.svg"
              alt="Phone Call"
              width={60}
              height={60}
              className="h-12 w-12 animate-wiggle sm:h-14 sm:w-14 lg:h-[60px] lg:w-[60px]"
            />
          </div>
        </a>
      </div>
    </footer>
  );
}
