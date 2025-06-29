import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { GitCompare, Book, Users, Scale, Heart } from 'lucide-react';
import Card from '../components/Common/Card';
import IslamicPattern from '../components/Common/IslamicPattern';

interface ComparisonItem {
  category: string;
  salafi: string;
  other: string;
  explanation: string;
}

const Comparison: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const comparisons: ComparisonItem[] = [
    {
      category: 'methodology',
      salafi: 'Quran, Sunnah, and understanding of Salaf as-Salih',
      other: 'May include additional sources like consensus of later scholars, analogical reasoning, or spiritual experiences',
      explanation: 'Salafis prioritize the first three generations\' understanding as the most authentic interpretation of Islam.'
    },
    {
      category: 'sources',
      salafi: 'Authentic hadith with verified chains of narration',
      other: 'May accept weaker hadith or rely more heavily on scholarly opinions',
      explanation: 'Emphasis on hadith authentication and verification of sources is a key distinguishing factor.'
    },
    {
      category: 'interpretation',
      salafi: 'Literal understanding according to Arabic language and Salaf comprehension',
      other: 'May employ allegorical, mystical, or philosophical interpretations',
      explanation: 'Salafis maintain that the apparent meaning should be accepted unless there\'s clear evidence otherwise.'
    },
    {
      category: 'practices',
      salafi: 'Strict adherence to prophetic practices, avoiding innovations',
      other: 'May incorporate cultural practices or later developments in worship',
      explanation: 'The principle is that worship should be exactly as taught by the Prophet ﷺ and early generations.'
    },
    {
      category: 'scholars',
      salafi: 'Respect scholars but prioritize evidence over scholarly opinion',
      other: 'May give greater authority to particular scholars or schools of thought',
      explanation: 'While respecting scholarship, Salafis maintain that only Allah and His Messenger are infallible.'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Categories', icon: GitCompare },
    { key: 'methodology', label: 'Methodology', icon: Book },
    { key: 'sources', label: 'Sources', icon: Scale },
    { key: 'interpretation', label: 'Interpretation', icon: Users },
    { key: 'practices', label: 'Practices', icon: Heart },
    { key: 'scholars', label: 'Scholars', icon: Users }
  ];

  const filteredComparisons = selectedCategory === 'all' 
    ? comparisons 
    : comparisons.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-navy-600 to-gold-600 text-white py-20">
        <IslamicPattern className="text-white" opacity={0.1} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                <GitCompare className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                {t('navigation.comparison')}
              </h1>
            </div>
            <p className="text-xl text-navy-100 leading-relaxed max-w-3xl mx-auto">
              {t('comparison.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isActive = selectedCategory === category.key;
              return (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    isActive
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-700'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {filteredComparisons.map((comparison, index) => (
              <Card key={comparison.category} delay={index * 0.1}>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 capitalize">
                    {comparison.category}
                  </h3>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                    {/* Salafi Approach */}
                    <div className="bg-primary-50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-primary-800 mb-3 flex items-center">
                        <div className="w-3 h-3 bg-primary-600 rounded-full mr-3"></div>
                        {t('comparison.salafi_approach')}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {comparison.salafi}
                      </p>
                    </div>

                    {/* Other Approaches */}
                    <div className="bg-gold-50 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-gold-800 mb-3 flex items-center">
                        <div className="w-3 h-3 bg-gold-600 rounded-full mr-3"></div>
                        {t('comparison.other_approaches')}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {comparison.other}
                      </p>
                    </div>
                  </div>

                  {/* Explanation */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">
                      {t('comparison.explanation')}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {comparison.explanation}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <div className="p-8">
              <div className="w-16 h-16 bg-navy-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {t('comparison.important_note')}
              </h3>
              <div className="bg-navy-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 leading-relaxed text-center">
                  {t('comparison.note_content')}
                </p>
              </div>
              <p className="text-gray-600 leading-relaxed text-center">
                {t('comparison.unity_message')}
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Comparison;