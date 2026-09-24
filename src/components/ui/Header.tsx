'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
  Scale,
  Calculator,
  BriefcaseBusiness,
  Phone,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import PopupForm from '@/components/ui/PopupForm';

const services = [
  {
    href: '/legal',
    title: 'Юридичні послуги',
    description: 'Юридичний супровід та рішення для бізнесу',
    icon: Scale,
  },
  {
    href: '/finance',
    title: 'Бухгалтерські послуги',
    description: 'Облік, звітність та фінансовий супровід',
    icon: Calculator,
  },
  {
    href: '/consulting',
    title: 'Бізнес послуги',
    description: 'Консалтинг та підтримка розвитку бізнесу',
    icon: BriefcaseBusiness,
  },
];

export default function Header() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    setProductOpen(false);
  };

  return (
    <>
      <header
        className="
          sticky top-0 z-50
          w-full
          border-b border-gray-100
          bg-white/90
          backdrop-blur-xl
        "
      >
        <div
          className="
            container mx-auto
            flex h-[76px] sm:h-[96px]
            items-center justify-between
            px-5 sm:px-6 lg:px-8
          "
        >
          {/* LOGO */}
          <div className="flex flex-1 items-center">
            <Link href="/" className="relative z-10 block transition-opacity hover:opacity-80">
              <Image
                src="/logo-light.webp"
                alt="Logo"
                width={70}
                height={100}
                priority
                className="h-[52px] sm:h-[70px] w-auto"
              />
            </Link>
          </div>

          {/* DESKTOP NAV */}
          <nav
            className="
              hidden md:flex
              items-center justify-center
              gap-10 lg:gap-14
              font-montserrat
              text-[15px]
              font-medium
              text-gray-700
            "
          >
            {/* HOME */}
            <Link
              href="/"
              className="
                group relative py-3
                transition-colors duration-200
                hover:text-blue-500
              "
            >
              Головна
              <span
                className="
                  absolute bottom-1 left-0
                  h-[2px] w-0
                  rounded-full bg-blue-400
                  transition-all duration-300
                  group-hover:w-full
                "
              />
            </Link>

            {/* SERVICES */}
            <div
              className="relative"
              onMouseEnter={() => setProductOpen(true)}
              onMouseLeave={() => setProductOpen(false)}
            >
              <button
                type="button"
                className="
                  group relative
                  flex items-center gap-1.5
                  py-3
                  transition-colors duration-200
                  hover:text-blue-500
                "
              >
                <span>Послуги</span>

                <ChevronDown
                  size={15}
                  strokeWidth={2}
                  className={`
                    transition-transform duration-300
                    ${productOpen ? 'rotate-180' : ''}
                  `}
                />

                <span
                  className={`
                    absolute bottom-1 left-0
                    h-[2px]
                    rounded-full bg-blue-400
                    transition-all duration-300
                    ${productOpen ? 'w-full' : 'w-0 group-hover:w-full'}
                  `}
                />
              </button>

              {/* Invisible bridge */}
              <div className="absolute left-1/2 top-full h-5 w-[440px] -translate-x-1/2" />

              <AnimatePresence>
                {productOpen && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 10,
                      scale: 0.98,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      y: 8,
                      scale: 0.98,
                    }}
                    transition={{
                      duration: 0.18,
                      ease: 'easeOut',
                    }}
                    className="
                      absolute
                      left-1/2 top-full
                      mt-4
                      w-[440px]
                      -translate-x-1/2
                      overflow-hidden
                      rounded-2xl
                      border border-gray-100
                      bg-white
                      p-2
                      shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                    "
                  >
                    {/* Dropdown title */}
                    <div className="px-4 pb-2 pt-3">
                      <p
                        className="
                          text-[11px]
                          font-semibold
                          uppercase
                          tracking-[0.18em]
                          text-gray-400
                        "
                      >
                        Наші послуги
                      </p>
                    </div>

                    {/* SERVICES */}
                    <div className="space-y-1">
                      {services.map((service) => {
                        const Icon = service.icon;

                        return (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="
                              group/service
                              flex items-center gap-4
                              rounded-xl
                              px-4 py-4
                              transition-all duration-200
                              hover:bg-blue-50/80
                            "
                          >
                            {/* Icon */}
                            <div
                              className="
                                flex h-11 w-11
                                shrink-0
                                items-center justify-center
                                rounded-xl
                                bg-gray-50
                                text-gray-600
                                transition-all duration-200
                                group-hover/service:bg-white
                                group-hover/service:text-blue-500
                                group-hover/service:shadow-sm
                              "
                            >
                              <Icon size={20} strokeWidth={1.7} />
                            </div>

                            {/* TEXT */}
                            <div className="min-w-0 flex-1">
                              <div
                                className="
                                  mb-1
                                  text-[14px]
                                  font-semibold
                                  text-gray-900
                                  transition-colors
                                  group-hover/service:text-blue-500
                                "
                              >
                                {service.title}
                              </div>

                              <p
                                className="
                                  text-[12px]
                                  font-normal
                                  leading-5
                                  text-gray-500
                                "
                              >
                                {service.description}
                              </p>
                            </div>

                            {/* ARROW */}
                            <ArrowUpRight
                              size={17}
                              className="
                                shrink-0
                                text-gray-300
                                transition-all duration-200
                                group-hover/service:-translate-y-0.5
                                group-hover/service:translate-x-0.5
                                group-hover/service:text-blue-500
                              "
                            />
                          </Link>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CONTACT */}
            <Link
              href="#footer"
              className="
                group relative py-3
                transition-colors duration-200
                hover:text-blue-500
              "
            >
              Контакти
              <span
                className="
                  absolute bottom-1 left-0
                  h-[2px] w-0
                  rounded-full bg-blue-400
                  transition-all duration-300
                  group-hover:w-full
                "
              />
            </Link>
          </nav>

          {/* DESKTOP BUTTON */}
          <div className="hidden flex-1 items-center justify-end md:flex">
            <button
              type="button"
              onClick={() => setPopupOpen(true)}
              className="
                group
                inline-flex items-center gap-2
                rounded-full
                bg-gray-900
                px-5 py-3
                text-[13px]
                font-medium
                text-white
                shadow-sm
                transition-all duration-300
                hover:-translate-y-[1px]
                hover:bg-blue-500
                hover:shadow-lg
              "
            >
              <span>Зв’язатися з нами</span>

              <ArrowUpRight
                size={15}
                className="
                  transition-transform duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </button>
          </div>

          {/* MOBILE BURGER */}
          <div className="flex flex-1 justify-end md:hidden">
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className="
                flex h-11 w-11
                items-center justify-center
                rounded-full
                bg-gray-50
                text-gray-900
                transition-colors
                hover:bg-gray-100
              "
            >
              {mobileOpen ? (
                <X size={23} strokeWidth={1.8} />
              ) : (
                <Menu size={23} strokeWidth={1.8} />
              )}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: 0.3,
                ease: 'easeInOut',
              }}
              className="
                overflow-hidden
                border-t border-gray-100
                bg-white
                md:hidden
              "
            >
              <div
                className="
                  flex min-h-[calc(100vh-76px)]
                  flex-col
                  px-6 pb-8 pt-5
                "
              >
                {/* HOME */}
                <Link
                  href="/"
                  onClick={closeMobile}
                  className="
                    border-b border-gray-100
                    py-5
                    text-[17px]
                    font-medium
                    text-gray-900
                  "
                >
                  Головна
                </Link>

                {/* MOBILE SERVICES */}
                <div className="border-b border-gray-100">
                  <button
                    type="button"
                    onClick={() => setProductOpen(!productOpen)}
                    className="
                      flex w-full
                      items-center justify-between
                      py-5
                      text-left
                      text-[17px]
                      font-medium
                      text-gray-900
                    "
                  >
                    <span>Послуги</span>

                    <ChevronDown
                      size={19}
                      className={`
                        mr-1
                        transition-transform duration-300
                        ${productOpen ? 'rotate-180' : ''}
                      `}
                    />
                  </button>

                  <AnimatePresence>
                    {productOpen && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          height: 0,
                        }}
                        animate={{
                          opacity: 1,
                          height: 'auto',
                        }}
                        exit={{
                          opacity: 0,
                          height: 0,
                        }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-2 pb-5">
                          {services.map((service) => {
                            const Icon = service.icon;

                            return (
                              <Link
                                key={service.href}
                                href={service.href}
                                onClick={closeMobile}
                                className="
                                  flex items-center gap-3
                                  rounded-xl
                                  bg-gray-50
                                  px-4 py-3.5
                                  transition-colors
                                  hover:bg-blue-50
                                "
                              >
                                <div
                                  className="
                                    flex h-9 w-9
                                    shrink-0
                                    items-center justify-center
                                    rounded-lg
                                    bg-white
                                    text-blue-500
                                  "
                                >
                                  <Icon size={17} />
                                </div>

                                <div className="flex-1">
                                  <p className="text-[14px] font-medium text-gray-900">
                                    {service.title}
                                  </p>

                                  <p className="mt-0.5 text-[11px] leading-4 text-gray-500">
                                    {service.description}
                                  </p>
                                </div>

                                <ArrowUpRight size={15} className="text-gray-400" />
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* CONTACTS */}
                <Link
                  href="#footer"
                  onClick={closeMobile}
                  className="
                    border-b border-gray-100
                    py-5
                    text-[17px]
                    font-medium
                    text-gray-900
                  "
                >
                  Контакти
                </Link>

                {/* MOBILE BOTTOM */}
                <div className="mt-auto pt-10">
                  <a
                    href="tel:+380970144014"
                    className="
                      mb-5
                      flex items-center gap-3
                      text-[16px]
                      font-medium
                      text-gray-900
                    "
                  >
                    <span
                      className="
                        flex h-10 w-10
                        items-center justify-center
                        rounded-full
                        bg-blue-50
                        text-blue-500
                      "
                    >
                      <Phone size={17} />
                    </span>
                    +38 (097) 01 44 014
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setMobileOpen(false);
                      setPopupOpen(true);
                    }}
                    className="
                      flex w-full
                      items-center justify-center
                      gap-2
                      rounded-full
                      bg-gray-900
                      px-6 py-4
                      text-[14px]
                      font-medium
                      text-white
                      transition-colors
                      hover:bg-blue-500
                    "
                  >
                    Зв’язатися з нами
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* POPUP */}
      <PopupForm isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
    </>
  );
}
