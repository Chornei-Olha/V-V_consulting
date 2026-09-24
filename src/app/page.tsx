import React from 'react';
import Header from '../components/ui/Header';
import HeroSection from '../components/ui/HeroSection';
import AboutSection from '../components/ui/AboutSection';
import DirectionsSection from '../components/ui/DirectionsSection';
import WhyUs from '../components/ui/WhyUs';
import Footer from '../components/ui/Footer';
import BoardSlider from '../components/ui/BoardSlider';
import BoardSlide_2 from '../components/ui/BoardSlider_2';

import type { Metadata } from 'next';
import CDA from '../components/ui/CDA';

export const metadata: Metadata = {
  title: 'Юридичний, фінансовий та бізнес-консалтинг в Україні | TriVista Consulting',
  description:
    'TriVista Consulting — комплексний юридичний, фінансовий та бізнес-консалтинг для компаній. Захист інтересів бізнесу, податкова оптимізація, супровід діяльності в Україні та за кордоном',

  openGraph: {
    title: 'Юридичний, фінансовий та бізнес-консалтинг в Україні | TriVista Consulting',
    description:
      'TriVista Consulting — комплексний юридичний, фінансовий та бізнес-консалтинг для компаній. Захист інтересів бізнесу, податкова оптимізація, супровід діяльності в Україні та за кордоном',
    url: 'https://trivista-consulting.com.ua',
    siteName: 'TriVista Consulting',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TriVista Consulting',
      },
    ],
    locale: 'uk_UA',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Юридичний, фінансовий та бізнес-консалтинг в Україні | TriVista Consulting',
    description:
      'TriVista Consulting — комплексний юридичний, фінансовий та бізнес-консалтинг для компаній. Захист інтересів бізнесу, податкова оптимізація, супровід діяльності в Україні та за кордоном',
    images: ['/og-image.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'TriVista Consulting',
  url: 'https://trivista-consulting.com.ua',
  logo: 'https://trivista-consulting.com.ua/logo.png',
  image: 'https://trivista-consulting.com.ua/og-image.png',
  description: 'Юридичний, фінансовий та бізнес-консалтинг для компаній та підприємців.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'вул. Братства Тарасівців, 12/37',
    addressLocality: 'Київ',
    addressCountry: 'UA',
  },
  telephone: ['+380970144014'],
  email: 'thevvvgroup@gmail.com',
  areaServed: 'UA',
};

const LandingPage: React.FC = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen font-inter overflow-x-hidden">
        <Header />
        <HeroSection />
        <BoardSlider />
        <BoardSlide_2 />
        <AboutSection />
        <CDA />
        <DirectionsSection />
        <WhyUs />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
