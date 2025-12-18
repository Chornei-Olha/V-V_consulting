'use client';

import { useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

const directions = [
  {
    title: 'Юридичний супровід договірних відносин',
    content: `складання оферт, договорів, контрактів, угод з контрагентами, в тому числі типових з урахуванням інтересів клієнта;\n
аналіз проектів договорів, угод, отриманих від контрагентів з метою виявлення і нівелювання ризиків для клієнта;\n
ведення роботи щодо узгодження умов договорів, угод, контрактів з контрагентами (складання протоколів розбіжностей, участь в переговорах, супровід відповідної ділової переписки).
`,
  },
  {
    title: 'Юридичний аутсорсинг претензійної роботи щодо виконання контрактних зобов’язань',
    content: `складання претензій контрагентам у разі невиконання ними умов договорів;\n
аналіз і складання відповідей на претензії контрагентів;\n
представництво інтересів клієнта при примусовому виконанні судових рішень.
`,
  },
  {
    title: 'Юридичне обслуговування в сфері податкового права',
    content: `підготовка клієнта до проведення податкових перевірок та їх юридичний супровід;\n
підготовка відповідей на запити податкових органів.
`,
  },
  {
    title: 'Юридичний супровід судового захисту інтересів клієнта',
    content: `захист інтересів клієнта в судах всіх юрисдикцій у спорах, що виникли з договірних відносин;\n
оскарження податкових повідомлень-рішень та інших незаконних рішень і дій податкових органів;\n
оспорювання в судах незаконних дій і рішень інших державних органів і органів місцевого самоврядування;\n
представництво інтересів клієнта при розгляді митних, корпоративних, трудових, цивільних суперечок, суперечок щодо прав інтелектуальної власності і по іншим категоріям спорів, які можуть виникнути в діяльності підприємства.
`,
  },
  {
    title: 'Юридичне обслуговування внутрішньої і корпоративної діяльності підприємства',
    content: `розробка і юридична експертиза внутрішніх документів правового характеру, в тому числі, щодо кадрової діяльності і трудових відносин, щодо побудови внутрішньої структури підприємства, положень, правил;\n
підготовка документів у сфері корпоративного управління підприємств різних організаційно-правових форм, юридичний супровід діяльності органів управління, складання необхідних документів (повідомлень учасникам / акціонерам, проектів рішень);
`,
  },
  {
    title: 'Юридичний супровід і захист у відносинах з контролюючими та іншими державними органам',
    content: `юридичний аналіз регуляторних та інших актів державних органів, що впливають на діяльність клієнта;\n
ведення переписки з державними органами;\n
підготовка до перевірок контролюючих органів та їх юридичний супровід;\n
представлення інтересів клієнта в органах державної влади і місцевого самоврядування.
`,
  },
  {
    title: 'Юридичний супровід і захист у відносинах з правоохоронними органами',
    content: `оперативний захист клієнта (співробітників / менеджменту) при раптових візитах правоохоронців, супровід слідчих та інших дій в рамках кримінального процесу (тимчасовий доступ до документів, обшук, арешт майна і т.п.);\n
оскарження незаконних дій правоохоронних органів, в т.ч. у судовому порядку;\n
складання відповідей на запити правоохоронних органів;\n
складання заяв в правоохоронні органи про дії, що завдають шкоди клієнту.
`,
  },
  {
    title: 'Банкрутство фізичних осіб та фізичних осіб підприємців',
    content: ``,
  },
  {
    title: 'Захист інтелектуальної власності',
    content: ``,
  },
];

export default function LegalPage() {
  return (
    <>
      <div className="relative w-full h-[600px] flex items-center overflow-hidden">
        <Image
          src="/images/bg1.webp"
          alt="Legal and business consulting"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-0">
          <h1 className="text-4xl md:text-7xl font-extrabold text-white leading-tight">
            Юридичні послуги для бізнесу та приватних клієнтів
          </h1>
          <p className="text-xl md:text-2xl mt-16 text-gray-200 max-w-4xl">
            Консультування, захист, супровід. Ми — ваш надійний партнер у правовій сфері.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-block bg-[#fec104] text-black px-6 py-3 rounded-full border border-white/20 font-medium hover:bg-white/5 hover:text-white transition"
            >
              Отримати консультацію
            </a>
            <a
              href="#services"
              className="inline-block text-white/90 px-6 py-3 rounded-full border border-white/20 hover:bg-white/5 transition text-center"
            >
              Наші послуги
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Коротке описання */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-4">Юридичні та фінансові послуги</h1>
          <p className="text-gray-700">
            Ми надаємо комплексний супровід для бізнесу: юридичний, фінансовий та консалтинговий.
            Наші експерти допомагають мінімізувати ризики та оптимізувати процеси.
          </p>
        </div>

        {/* Поднапрямки - аккордеон */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Наші напрямки</h2>
          <div className="space-y-4 whitespace-pre-line">
            {directions.map((item, idx) => (
              <Disclosure as="div" key={idx} className="border rounded-lg">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-left bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500">
                      <span className="font-medium">{item.title}</span>
                      <ChevronUpIcon
                        className={`${open ? 'rotate-180 transform' : ''} w-5 h-5 text-purple-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-700">
                      {item.content}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>

        {/* Як ми працюємо */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Як ми працюємо</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Аналіз потреб клієнта та визначення задач</li>
            <li>Розробка стратегії та плану дій</li>
            <li>Виконання робіт та супровід</li>
            <li>Звітність та контроль результату</li>
          </ol>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Готові співпрацювати?</h2>
          <p className="text-gray-700 mb-6">
            Заповніть форму і ми зв’яжемося з вами для детальної консультації.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition"
          >
            Зв’язатися з нами
          </a>
        </div>
      </div>
    </>
  );
}
