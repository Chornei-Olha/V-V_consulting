'use client';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';

import 'swiper/css';

const boardMembers = [
  {
    id: 1,
    photo: '/images/Natalya.webp',
    name: 'Олєйніченко Наталія Валеріївна',
    position: 'Експерт',
    showButton: true,
    description: `Досвідчений експерт у сфері закупівель, оптимізації ланцюгів постачання та категорійного менеджменту з понад 22-річним практичним досвідом у міжнародних та локальних проєктах. Випускниця MIM-Kyiv Business School.

Спеціалізується на підвищенні ефективності procurement-функції, оптимізації витрат та побудові стійких ланцюгів постачання. Має глибоку експертизу у стратегічних та операційних закупівлях, категорійному менеджменті, управлінні постачальниками (SRM), управлінні ризиками та трансформації закупівельних функцій.

Допомагає компаніям знижувати витрати, підвищувати операційну ефективність, забезпечувати прозоре управління постачальниками та формувати стабільні й ефективні моделі supply chain.`,
  },
  {
    id: 2,
    photo: '/images/PetroMikituk.webp',
    name: 'Микитюк Петро',
    position: 'Експерт',
    showButton: true,
    description: `практикуючий експерт з комерційної ефективності рітейлу, із досвідом трансформації комерційних моделей бізнесу. Спеціалізується на побудові системного ціноутворення, управлінні категоріями та розробці ефективних промо-стратегій, орієнтованих на зростання прибутковості.

Ключова експертиза — баланс між оборотом і маржинальністю: від впровадження диференційованих цінових стратегій і управління ціновою чутливістю до оптимізації асортименту та ролей категорій. Має практичний досвід переходу від хаотичних знижок до структурованого промо-менеджменту з чіткими фінансовими цілями та контролем ефективності.

Працює на стику аналітики та операційного управління: впроваджує інструменти контролю маржі, оцінки ефективності SKU, управління промо-міксом і комерційними KPI. Реалізує підходи, що дозволяють збільшувати прибуток без втрати клієнтського потоку та формувати стабільну комерційну модель у висококонкурентному середовищі.

Фокус — практичні рішення, які масштабуються: від аудиту комерційної функції до впровадження системних змін у ціноутворенні, асортиментній політиці та промо, що дають вимірюваний фінансовий результат.`,
  },
  {
    id: 3,
    photo: '/images/ava-2.jpg',
    name: 'ЗАПРОШУЄМО В КОМАНДУ',
    position: 'Експерт',
    showButton: false,
  },
];

export default function BoardSlide_2() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [selectedMember, setSelectedMember] = useState<null | (typeof boardMembers)[0]>(null);
  useLockBodyScroll(!!selectedMember);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const showNavigation = boardMembers.length > slidesPerView;

  return (
    <div id="slider1" className="w-full text-center relative py-12">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center">Залучені експерти</h2>

      <div className="relative max-w-7xl mx-auto">
        {/* Десктоп стрелка влево */}
        {showNavigation && (
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="hidden sm:flex absolute -left-16 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        {/* Десктоп стрелка вправо */}
        {showNavigation && (
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="hidden sm:flex absolute -right-16 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}

        {/* Мобильные стрелки */}
        {showNavigation && (
          <div className="flex justify-center gap-4 sm:hidden mb-4">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-white rounded-full shadow p-2 hover:bg-gray-100 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onInit={(swiper) => {
            const currentSlides =
              typeof swiper.params.slidesPerView === 'number' ? swiper.params.slidesPerView : 1;
            setSlidesPerView(currentSlides);
          }}
          onBreakpoint={(swiper) => {
            const currentSlides =
              typeof swiper.params.slidesPerView === 'number' ? swiper.params.slidesPerView : 1;
            setSlidesPerView(currentSlides);
          }}
          modules={[Autoplay]}
          autoplay={{ delay: 5000 }}
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {boardMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="h-full flex flex-col justify-between p-4 border rounded-xl shadow-md bg-white min-h-[650px] max-h-[650px]">
                <div className="relative mb-2">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={300}
                    height={160}
                    className="w-full h-96 object-cover rounded-lg"
                    priority
                  />
                </div>

                <h3 className="font-bold font-dm text-[20px]">{member.name}</h3>

                <p className="font-bold font-inter text-[16px] text-[#09234B] mt-[15px]">
                  {member.position}
                </p>

                <p className="font-regular font-inter text-[16px] mt-[15px] line-clamp-2">
                  {member.description}
                </p>

                {member.showButton && (
                  <div className="mt-[20px] flex justify-center">
                    <button
                      className="inline-flex items-center gap-2 text-sm font-medium text-white px-5 py-2.5 rounded-full
                      bg-gradient-to-r from-gray-900 to-gray-700
                      hover:from-gray-800 hover:to-gray-600 transition"
                      onClick={() => setSelectedMember(member)}
                    >
                      Детальніше →
                    </button>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Модалка */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white max-w-lg w-full max-h-[80vh] overflow-y-auto rounded-xl shadow-lg p-6 relative">
            {' '}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold mb-2">{selectedMember.name}</h3>
            <p className="text-md font-semibold text-[#09234B] mb-2">{selectedMember.position}</p>
            <p className="text-sm text-gray-700 whitespace-pre-line text-left">
              {selectedMember.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
