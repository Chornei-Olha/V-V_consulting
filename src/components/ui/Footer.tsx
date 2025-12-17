// import React from 'react';
// import Image from 'next/image';

// export default function Footer() {
//   return (
//     <footer className="w-full bg-[#E9F6F6]">
//       {/* Верхняя часть */}
//       <div className="text-center py-16 px-4">
//         <h2 className="text-3xl md:text-4xl font-semibold text-[#2E334E] mb-6">
//           Become a Member of CLA Group
//         </h2>
//         <p className="max-w-2xl mx-auto text-lg text-gray-700 leading-relaxed">
//           Join our professional services network designed to help realize the ambitions of privately
//           owned, fast-growing, mid-market clients with cross-border needs. It's an opportunity for
//           you to increase collaboration and gain exposure to new skills and capabilities, bring
//           career opportunities and build new relationships.
//         </p>

//         <button
//           onClick={() => alert('Open contact form')}
//           className="mt-8 bg-[#2E334E] text-white text-lg font-medium px-8 py-3 rounded-md hover:bg-[#3E4258] transition"
//         >
//           Join GLA Group
//         </button>
//       </div>

//       {/* Наклонная граница */}
//       {/* <div className="w-full h-20 bg-[#2E334E] rotate-[2deg] origin-top"></div> */}

//       {/* Нижняя часть футера */}
//       <div className="bg-[#2E334E] text-white px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
//         {/* Логотип */}
//         <div className="flex items-center gap-2">
//           <div className="relative">
//             <Image
//               src="/images/logo_white.png"
//               alt="V&V_consulting"
//               width={120} // можно менять — отвечает за ширину
//               height={0} // игнорируется, потому что objectFit сохраняет пропорции
//               className="h-auto w-32 object-contain"
//             />
//           </div>
//         </div>

//         {/* Ссылки */}
//         <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-300">
//           <a href="#" className="hover:text-white transition">
//             Legal
//           </a>
//           <a href="#" className="hover:text-white transition">
//             Privacy
//           </a>
//           <a href="#" className="hover:text-white transition">
//             Connect
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }
'use client';

import { motion } from 'framer-motion';

export default function ContactSectionDark() {
  return (
    <section id="contact" className="bg-gray-900 py-20 text-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Звʼяжіться з нами</h2>
          <p className="mt-4 text-gray-300">
            Залиште запит — ми повернемось до вас із рішенням, а не загальною консультацією.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-12 md:grid-cols-3 items-start">
          {/* LEFT — CONTACTS */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm text-gray-400">Телефон</p>
              <p className="text-lg font-medium text-blue-400">+380 (12) 345-67-89</p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="text-lg font-medium text-blue-400">info@miysait.com</p>
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-2">Месенджери</p>
              <div className="flex gap-3">
                {['F', 'I', 'X', 'T'].map((m) => (
                  <span
                    key={m}
                    className="w-10 h-10 rounded-full bg-blue-400 text-gray-900 flex items-center justify-center font-bold"
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CENTER — FORM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gray-800 rounded-2xl shadow-lg p-8"
          >
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Ваше імʼя"
                required
                className="w-full border border-gray-600 rounded-lg px-4 py-3 bg-gray-900 text-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full border border-gray-600 rounded-lg px-4 py-3 bg-gray-900 text-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
              />
              <textarea
                placeholder="Опишіть вашу ситуацію"
                rows={4}
                required
                className="w-full border border-gray-600 rounded-lg px-4 py-3 bg-gray-900 text-gray-100 focus:ring-2 focus:ring-blue-400 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-blue-400 text-gray-900 py-3 rounded-lg font-medium hover:bg-blue-500 transition"
              >
                Отримати консультацію
              </button>

              <p className="text-xs text-gray-400 text-center">Ваша інформація конфіденційна</p>
            </form>
          </motion.div>

          {/* RIGHT — LEGAL */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {[
              'Політика конфіденційності',
              'Умови й положення',
              'Правила повернення коштів',
              'Заява про доступність',
            ].map((link) => (
              <a key={link} href="#" className="block text-blue-400 hover:underline">
                {link}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
