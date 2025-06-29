import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Heart, Book, Users, Shield } from 'lucide-react';
import Card from '../components/Common/Card';
import IslamicPattern from '../components/Common/IslamicPattern';

const CoreBeliefs: React.FC = () => {
  const { t } = useTranslation();

  const beliefs = [
    {
      key: 'tawheed',
      icon: Heart,
      color: 'primary',
      verse: 'Say: He is Allah, the One! Allah, the Eternal, Absolute.' // Quran 112:1-2
    },
    {
      key: 'sunnah',
      icon: Book,
      color: 'gold',
      verse: 'Say: If you love Allah, then follow me, Allah will love you.' // Quran 3:31
    },
    {
      key: 'salaf_understanding',
      icon: Users,
      color: 'navy',
      verse: 'And whoever opposes the Messenger after guidance has been clarified...' // Quran 4:115
    },
    {
      key: 'avoiding_bidah',
      icon: Shield,
      color: 'primary',
      verse: 'This day I have perfected your religion for you.' // Quran 5:3
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
      <section className="relative bg-gradient-to-br from-primary-600 to-gold-600 text-white py-20">
        <IslamicPattern className="text-white" opacity={0.1} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                {t('core_beliefs.title')}
              </h1>
            </div>
            <p className="text-xl text-primary-100 leading-relaxed max-w-3xl mx-auto">
              The fundamental principles that guide the methodology of the Salaf as-Salih
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Beliefs Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {beliefs.map((belief, index) => {
              const IconComponent = belief.icon;
              return (
                <Card key={belief.key} delay={index * 0.2}>
                  <div className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`p-3 rounded-lg ${getColorClasses(belief.color)} flex-shrink-0`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                          {t(`core_beliefs.${belief.key}`)}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {t(`core_beliefs.${belief.key}_desc`)}
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-gold-500">
                      <p className="text-gray-700 italic leading-relaxed">
                        "{belief.verse}"
                      </p>
                    </div>
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
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Book className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Foundation of Faith</h3>
              <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-4">
                "I have left among you two things which, if you hold fast to them, you will never go astray: 
                The Book of Allah and my Sunnah."
              </blockquote>
              <p className="text-primary-600 font-medium mb-6">
                — Prophet Muhammad ﷺ (Muwatta Malik)
              </p>
              <div className="bg-primary-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">
                  The methodology of the Salaf is built upon these core foundations, ensuring that every belief 
                  and practice is rooted in the Quran and authentic Sunnah, understood through the lens of 
                  the righteous predecessors.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default CoreBeliefs;