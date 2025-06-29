import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, CheckCircle, RotateCcw } from 'lucide-react';
import Card from '../components/Common/Card';
import IslamicPattern from '../components/Common/IslamicPattern';

const Misconceptions: React.FC = () => {
  const { t } = useTranslation();
  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const misconceptions = [
    { key: 'wahabi', category: 'labels' },
    { key: 'harsh', category: 'behavior' },
    { key: 'political', category: 'involvement' },
    { key: 'takfir', category: 'practices' },
    { key: 'anti_scholars', category: 'behavior' },
    { key: 'literalist', category: 'methodology' },
    { key: 'extremist', category: 'behavior' },
    { key: 'anti_sufism', category: 'practices' },
    { key: 'anti_madhab', category: 'methodology' },
    { key: 'modern_sect', category: 'labels' },
    { key: 'saudi_funded', category: 'politics' },
    { key: 'anti_culture', category: 'practices' }
  ];

  const toggleCard = (key: string) => {
    setFlippedCards(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-600 to-primary-700 text-white py-20">
        <IslamicPattern className="text-white" opacity={0.1} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gold-500 p-3 rounded-full mr-4">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                {t('misconceptions.title')}
              </h1>
            </div>
            <p className="text-xl text-navy-100 leading-relaxed max-w-3xl mx-auto">
              {t('misconceptions.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Misconceptions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {misconceptions.map((misconception, index) => (
              <motion.div
                key={misconception.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="relative h-80 perspective-1000">
                  <motion.div
                    className="relative w-full h-full cursor-pointer preserve-3d"
                    animate={{
                      rotateY: flippedCards[misconception.key] ? 180 : 0
                    }}
                    transition={{ duration: 0.6 }}
                    onClick={() => toggleCard(misconception.key)}
                  >
                    {/* Front of card - Misconception */}
                    <div className="absolute inset-0 backface-hidden">
                      <Card className="h-full hover:shadow-xl">
                        <div className="p-6 h-full flex flex-col justify-between">
                          <div>
                            <div className="flex items-center mb-4">
                              <AlertTriangle className="w-6 h-6 text-red-500 mr-3" />
                              <span className="text-sm font-medium text-red-600 uppercase tracking-wide">
                                {t('misconceptions.misconception')}
                              </span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                              {t(`misconceptions.${misconception.key}_myth`)}
                            </h3>
                          </div>
                          <div className="flex items-center text-primary-600">
                            <RotateCcw className="w-5 h-5 mr-2" />
                            <span className="font-medium">{t('misconceptions.click_truth')}</span>
                          </div>
                        </div>
                      </Card>
                    </div>

                    {/* Back of card - Truth */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180">
                      <Card className="h-full bg-gradient-to-br from-green-50 to-primary-50">
                        <div className="p-6 h-full flex flex-col justify-between">
                          <div>
                            <div className="flex items-center mb-4">
                              <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                              <span className="text-sm font-medium text-green-600 uppercase tracking-wide">
                                {t('misconceptions.the_truth')}
                              </span>
                            </div>
                            <p className="text-gray-700 leading-relaxed text-sm">
                              {t(`misconceptions.${misconception.key}_truth`)}
                            </p>
                          </div>
                          <div className="flex items-center text-primary-600">
                            <RotateCcw className="w-5 h-5 mr-2" />
                            <span className="font-medium">{t('misconceptions.click_back')}</span>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card>
            <div className="p-8">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('misconceptions.seek_knowledge')}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('misconceptions.verify_sources')}
              </p>
              <div className="text-primary-600 font-medium">
                {t('misconceptions.quran_quote')}
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Misconceptions;