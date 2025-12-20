'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TrendingUp, Settings, Wallet, Target, Shield, GraduationCap } from 'lucide-react';

/* ================= ANIMATION PRESETS ================= */

const transition = {
  duration: 0.8,
  ease: [0.22, 1, 0.36, 1], // premium easing
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition,
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.22,
    },
  },
};

/* ================= DATA ================= */

const serviceBlocks = [
  {
    title: 'Стратегія та розвиток',
    icon: TrendingUp,
    items: [
      'Стратегічне планування',
      'Розробка бізнес-моделей (EBITDA +15% мін.)',
      'Комерційна та цінова стратегія',
      'Вихід на міжнародні ринки',
    ],
  },
  {
    title: 'Бізнес-процеси та ефективність',
    icon: Settings,
    items: [
      'Аудит бізнес-процесів',
      'Оптимізація витрат',
      'Управління змінами',
      'Управління ризиками',
    ],
  },
  {
    title: 'Фінанси та інвестиції',
    icon: Wallet,
    items: [
      'Фінансовий консалтинг',
      'Бюджетування та фінансове планування',
      'Інвестиційні та бізнес-плани',
    ],
  },
  {
    title: 'Управління та контроль',
    icon: Target,
    items: ['Розробка системи KPI', 'Управління проєктами', 'Організаційна структура'],
  },
  {
    title: 'Право та відповідальність',
    icon: Shield,
    items: ['Правове регулювання бізнесу', 'Корпоративна соціальна відповідальність (CSR)'],
  },
  {
    title: 'Навчання та розвиток команд',
    icon: GraduationCap,
    items: ['Тренінги та семінари', 'Підвищення кваліфікації персоналу'],
  },
];

/* ================= COMPONENT ================= */

export default function ConsultingPage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <Image
          src="/images/bg1.webp"
          alt="Business consulting"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative max-w-7xl mx-auto px-6 pt-28 md:pt-36"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-semibold text-white leading-tight max-w-4xl"
          >
            Преміальний бізнес-консалтинг для зростання та масштабування
          </motion.h1>

          <motion.p variants={fadeUp} className="text-lg md:text-2xl mt-10 text-gray-200 max-w-3xl">
            Стратегія, фінанси та управління — комплексні рішення для стабільного розвитку бізнесу.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-16 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-blue-400 text-white px-6 py-3 rounded-full border border-white/20 font-medium hover:bg-white/10 transition shadow-lg text-center"
            >
              Отримати консультацію
            </a>

            <Link
              href="#services"
              className="text-white/90 px-6 py-3 rounded-full border border-white/20 hover:bg-white/10 transition text-center"
            >
              Наші послуги
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= SERVICES ================= */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-28">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-3xl md:text-5xl font-semibold mb-20 text-center"
        >
          Напрямки бізнес-консалтингу
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {serviceBlocks.map((block, idx) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="
                  rounded-2xl
                  bg-white/5
                  border border-white/10
                  p-7
                  backdrop-blur-xl
                  transition-all
                  hover:border-blue-400/40
                "
              >
                <div className="flex items-center gap-4 mb-6">
                  <Icon className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-semibold">{block.title}</h3>
                </div>

                <ul className="space-y-3 text-gray-600">
                  {block.items.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-blue-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* ================= HOW WE WORK ================= */}
      <section className="bg-gray-50 py-28">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="text-3xl md:text-5xl font-semibold mb-16 text-center"
          >
            Як ми працюємо
          </motion.h2>

          <motion.ol
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="grid gap-8 md:grid-cols-4 text-gray-600"
          >
            {[
              'Аналіз бізнесу та задач',
              'Розробка стратегії',
              'Реалізація та супровід',
              'Контроль та масштабування',
            ].map((step, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className="bg-white rounded-xl p-6 shadow-sm text-center"
              >
                <div className="text-2xl font-semibold text-blue-400 mb-4">{i + 1}</div>
                {step}
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </section>
    </>
  );
}
