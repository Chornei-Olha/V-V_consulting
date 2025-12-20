'use client';

import { Calculator, FileText, Search, Briefcase } from 'lucide-react';

const blocks = [
  {
    title: 'Аутсорсинг бухгалтерського обліку',
    icon: Calculator,
    items: [
      'Відновлення бухгалтерського та податкового обліку за стандартами України та МСФЗ',
      'Ведення поточного бухгалтерського обліку на постійній основі',
      'Підготовка квартальної та річної фінансової звітності',
      'Розрахунок податків та подання звітності до податкових органів',
      'Координація взаємодії з податковою інспекцією',
      'Щомісячна та щотижнева управлінська звітність (IAS / GAAP)',
      'Консультації та впровадження фінансових систем (ERP, SAP)',
      'Навчання персоналу роботі з фінансовими системами',
      'Оптимізація податкового навантаження',
      'Розробка моделей кредитування, мотивації та зарплатних проєктів',
    ],
  },
  {
    title: 'Фінансова та управлінська звітність',
    icon: FileText,
    items: [
      'Підготовка управлінської та фінансової звітності за стандартами МСФЗ та GAAP',
      'Консолідована фінансова звітність (P&L, Balance Sheet, Cash Flow, Equity)',
      'Формування файлів для систем автоматизації бізнесу (SAP, ERP)',
      'Щомісячні GAAP-коригування з детальними поясненнями',
      'Фінансова звітність для материнських компаній та інвесторів',
      'Річна фінансова звітність у форматах, погоджених із клієнтом',
    ],
  },
  {
    title: 'Фінансові розслідування та ризики',
    icon: Search,
    items: [
      'Аналіз та вирішення фінансових спорів',
      'Проведення фінансових розслідувань',
      'Оцінка матеріальних та нематеріальних збитків',
      'Виявлення фактів фінансових махінацій',
      'Антикорупційні розслідування відповідно до законодавства України',
      'Аналіз доцільності витрат',
      'Виявлення податкових та регуляторних ризиків',
    ],
  },
  {
    title: 'Фінансовий директор (CFO as a Service)',
    icon: Briefcase,
    items: [
      'Організація управління фінансовими ресурсами підприємства',
      'Фінансово-економічний аналіз діяльності компанії',
      'Розробка та контроль облікової, податкової та інвестиційної політики',
      'Управління активами підприємства',
      'Бюджетування та фінансове планування',
      'Контроль виконання фінансових планів',
      'Участь у бюджетному контролі',
      'Підготовка управлінської звітності',
      'Участь у формуванні річного бюджету',
    ],
  },
];

export default function FinancePage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">
      {/* ===== TITLE ===== */}
      <div className="text-center mb-24">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
          Бухгалтерський та фінансовий консалтинг
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Стратегічний та операційний фінансовий супровід бізнесу — від бухгалтерського обліку до
          управління фінансовими рішеннями.
        </p>
      </div>

      {/* ===== BLOCKS ===== */}
      <div className="grid gap-10 sm:grid-cols-2">
        {blocks.map((block, idx) => {
          const Icon = block.icon;
          return (
            <div
              key={idx}
              className="
                relative rounded-2xl p-8
                bg-gradient-to-br from-white/10 via-white/5 to-transparent
                border border-white/15
                backdrop-blur-xl
                hover:border-blue-400/40
                transition
              "
            >
              {/* subtle accent */}
              <div className="absolute inset-0 rounded-2xl bg-blue-400/5 pointer-events-none" />

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <Icon className="w-9 h-9 text-blue-400" />
                  <h3 className="text-xl md:text-2xl font-semibold">{block.title}</h3>
                </div>

                <ul className="space-y-3 text-gray-600">
                  {block.items.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-blue-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
