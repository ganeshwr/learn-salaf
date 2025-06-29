import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Users, Star, Book } from 'lucide-react';
import Card from '../components/Common/Card';
import IslamicPattern from '../components/Common/IslamicPattern';

const WhatIsSalafiyyah: React.FC = () => {
  const { t } = useTranslation();

  const generations = [
    {
      key: 'sahabah',
      icon: Star,
      color: 'gold',
      period: '610-661 CE'
    },
    {
      key: 'tabieen',
      icon: Users,
      color: 'primary',
      period: '661-750 CE'
    },
    {
      key: 'taba_tabieen',
      icon: Book,
      color: 'navy',
      period: '750-850 CE'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'gold':
        return 'bg-gold-500 text-white';
      case 'navy':
        return 'bg-navy-600 text-white';
      default:
        return 'bg-primary-600 text-white';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-navy-700 text-white py-20">
        <IslamicPattern className="text-white" opacity={0.1} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              {t('what_is_salafiyyah.title')}
            </h1>
            <p className="text-xl text-primary-100 leading-relaxed max-w-3xl mx-auto">
              {t('what_is_salafiyyah.definition')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Generations Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t('what_is_salafiyyah.three_generations')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The Prophet ﷺ said: "The best of people are my generation, then those who come after them, then those who come after them."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {generations.map((generation, index) => {
              const IconComponent = generation.icon;
              return (
                <Card key={generation.key} delay={index * 0.2}>
                  <div className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${getColorClasses(generation.color)}`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {t(`what_is_salafiyyah.${generation.key}`)}
                    </h3>
                    <p className="text-sm text-gray-500 mb-4 font-medium">
                      {generation.period}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {t(`what_is_salafiyyah.${generation.key}_desc`)}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hadith Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Book className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Authentic Hadith</h3>
              <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-4">
                "The best of people are my generation, then those who come after them, then those who come after them."
              </blockquote>
              <p className="text-primary-600 font-medium">
                — Prophet Muhammad ﷺ (Bukhari & Muslim)
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default WhatIsSalafiyyah;