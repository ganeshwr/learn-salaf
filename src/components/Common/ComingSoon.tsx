import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Card from './Card';
import IslamicPattern from './IslamicPattern';

interface ComingSoonProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features?: string[];
  expectedDate?: string;
  color?: 'primary' | 'gold' | 'navy';
}

const ComingSoon: React.FC<ComingSoonProps> = ({
  title,
  description,
  icon: IconComponent,
  features = [],
  expectedDate,
  color = 'primary'
}) => {
  const { t } = useTranslation();

  const getColorClasses = () => {
    switch (color) {
      case 'gold':
        return {
          gradient: 'from-gold-500 to-gold-600',
          bg: 'bg-gold-500',
          text: 'text-gold-600',
          border: 'border-gold-200'
        };
      case 'navy':
        return {
          gradient: 'from-navy-600 to-navy-700',
          bg: 'bg-navy-600',
          text: 'text-navy-600',
          border: 'border-navy-200'
        };
      default:
        return {
          gradient: 'from-primary-600 to-primary-700',
          bg: 'bg-primary-600',
          text: 'text-primary-600',
          border: 'border-primary-200'
        };
    }
  };

  const colors = getColorClasses();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className={`relative bg-gradient-to-br ${colors.gradient} text-white py-20`}>
        <IslamicPattern className="text-white" opacity={0.1} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white bg-opacity-20 p-4 rounded-full mr-4">
                <IconComponent className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                {title}
              </h1>
            </div>
            <p className="text-xl text-white text-opacity-90 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Main Card */}
            <Card>
              <div className="p-8 text-center">
                <div className={`w-20 h-20 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {t('coming_soon.under_development')}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {t('coming_soon.working_hard')}
                </p>
                {expectedDate && (
                  <div className={`inline-flex items-center px-4 py-2 ${colors.border} border rounded-full ${colors.text} text-sm font-medium`}>
                    {t('coming_soon.expected')}: {expectedDate}
                  </div>
                )}
              </div>
            </Card>

            {/* Features Preview */}
            {features.length > 0 && (
              <Card>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    {t('coming_soon.what_to_expect')}
                  </h3>
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-3"
                      >
                        <div className={`w-2 h-2 ${colors.bg} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('coming_soon.continue_learning')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('coming_soon.explore_other_modules')}
              </p>
              <Link
                to="/"
                className={`inline-flex items-center px-6 py-3 ${colors.bg} text-white font-semibold rounded-lg hover:opacity-90 transition-opacity`}
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                {t('coming_soon.back_to_home')}
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ComingSoon;