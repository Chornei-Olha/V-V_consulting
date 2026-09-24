'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const directions = [
  {
    title: 'Юридичні послуги для бізнесу',
    description: [
      'Юридичний супровід діяльності компаній',
      'Розробка та аналіз договорів',
      'Податкове право',
      'Корпоративне структурування бізнесу та представництво інтересів у судових спорах',
      'Ми допомагаємо бізнесу взаємодіяти з державними органами, вирішувати конфлікти та захищати активи компанії.',
    ],
    accent: 'from-blue-700 to-blue-900',
    link: '/legal',
  },
  {
    title: 'Бухгалтерські послуги',
    description: [
      'Аутсторсинг бухгалтерського обліку',
      'Підготовка фінансової та податкової звітності',
      'Фінансовий аудит та аналіз діяльності компанії',
      'Ми забезпечуємо прозору фінансову структуру бізнесу та допомагаємо оптимізувати фінансові процеси. ',
    ],
    accent: 'from-emerald-600 to-emerald-800',
    link: '/finance',
  },
  {
    title: 'Бізнес консалтинг',
    description: [
      'Аудит бізнес-процесів',
      'Стратегічне планування',
      'Розробка бізнес-моделей та оптимізація витрат компанії',
      'Ми допомагаємо власникам бізнесу приймати ефективні управлінські рішення та будувати стабільну систему розвитку компанії.',
    ],
    accent: 'from-amber-500 to-amber-700',
    link: '/consulting',
  },
];

export default function DirectionsSection() {
  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">
            Наші напрямки консалтингу та супроводу бізнесу
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            TriVista Consulting надає комплексні юридичні, бухгалтерські та бізнес-консалтингові
            послуги для підприємців і компаній. Ми допомагаємо бізнесу вибудувати ефективну юридичну
            структуру, оптимізувати податкове навантаження, організувати бухгалтерський облік та
            розробити стратегію розвитку компанії.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {directions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -6 }}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Accent line */}
              <div className={`h-1 w-full bg-gradient-to-r ${item.accent}`} />

              <div className="p-8 flex flex-col h-full">
                <h3 className="text-2xl font-semibold text-[#2E334E] mb-4">{item.title}</h3>

                <ul className="space-y-2 text-gray-600 flex-grow">
                  {item.description.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-2 text-sm font-medium text-white px-5 py-2.5 rounded-full
                    bg-gradient-to-r from-gray-900 to-gray-700
                    hover:from-gray-800 hover:to-gray-600 transition"
                  >
                    Детальніше
                    <span className="transition group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
