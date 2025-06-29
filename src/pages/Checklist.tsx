import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckSquare, X, Check, AlertCircle, Book, Users, Heart, Lightbulb } from 'lucide-react';
import Card from '../components/Common/Card';
import IslamicPattern from '../components/Common/IslamicPattern';

interface ChecklistItem {
  id: string;
  category: 'methodology' | 'behavior' | 'knowledge' | 'practice';
  importance: 'high' | 'medium' | 'low';
  authentic: string;
  fake: string;
  explanation: string;
}

const Checklist: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const checklistItems: ChecklistItem[] = [
    {
      id: '1',
      category: 'methodology',
      importance: 'high',
      authentic: 'Follows Quran, Sunnah, and understanding of Salaf as-Salih',
      fake: 'Adds personal opinions or cultural practices as religious obligations',
      explanation: 'The foundation of authentic Salafi methodology is strict adherence to the three primary sources.'
    },
    {
      id: '2',
      category: 'behavior',
      importance: 'high',
      authentic: 'Shows wisdom, patience, and kindness in teaching and correcting',
      fake: 'Is harsh, arrogant, or quick to condemn others',
      explanation: 'True Salafi behavior reflects the Prophet\'s character of gentleness and wisdom.'
    },
    {
      id: '3',
      category: 'knowledge',
      importance: 'high',
      authentic: 'Seeks knowledge from qualified scholars and authentic sources',
      fake: 'Claims knowledge without proper study or relies on weak sources',
      explanation: 'Authentic Salafis emphasize the importance of learning from qualified teachers.'
    },
    {
      id: '4',
      category: 'practice',
      importance: 'high',
      authentic: 'Practices Islam exactly as taught by the Prophet ﷺ',
      fake: 'Introduces new forms of worship or modifies established practices',
      explanation: 'Worship should be performed exactly as demonstrated by the Prophet and early generations.'
    },
    {
      id: '5',
      category: 'behavior',
      importance: 'medium',
      authentic: 'Maintains good relationships with all Muslims despite differences',
      fake: 'Boycotts or treats other Muslims harshly due to minor differences',
      explanation: 'Unity among Muslims is important, and differences should be handled with wisdom.'
    },
    {
      id: '6',
      category: 'methodology',
      importance: 'medium',
      authentic: 'Accepts authentic hadith regardless of which scholar reported it',
      fake: 'Rejects authentic evidence because it contradicts preferred opinions',
      explanation: 'Evidence should be accepted based on authenticity, not personal preference.'
    },
    {
      id: '7',
      category: 'knowledge',
      importance: 'medium',
      authentic: 'Admits when they don\'t know something and refers to scholars',
      fake: 'Pretends to know everything or gives religious rulings without qualification',
      explanation: 'Humility in knowledge is a sign of authentic Islamic character.'
    },
    {
      id: '8',
      category: 'practice',
      importance: 'medium',
      authentic: 'Focuses on major issues before minor ones',
      fake: 'Obsesses over minor issues while neglecting major obligations',
      explanation: 'Proper prioritization is essential in Islamic practice and da\'wah.'
    },
    {
      id: '9',
      category: 'behavior',
      importance: 'low',
      authentic: 'Dresses modestly according to Islamic guidelines',
      fake: 'Uses appearance to show off religiosity or judges others by appearance',
      explanation: 'Modesty is important, but it shouldn\'t become a source of pride or judgment.'
    },
    {
      id: '10',
      category: 'methodology',
      importance: 'low',
      authentic: 'Studies Arabic to better understand Islamic texts',
      fake: 'Claims only Arabic speakers can understand Islam properly',
      explanation: 'While Arabic knowledge is beneficial, Islam is accessible to all people.'
    },
    {
      id: '11',
      category: 'knowledge',
      importance: 'low',
      authentic: 'Memorizes Quran and hadith for understanding and practice',
      fake: 'Memorizes only to impress others or win arguments',
      explanation: 'Memorization should serve the purpose of better understanding and practice.'
    },
    {
      id: '12',
      category: 'practice',
      importance: 'low',
      authentic: 'Performs extra voluntary acts of worship consistently',
      fake: 'Shows off voluntary acts or criticizes others for not doing them',
      explanation: 'Voluntary worship should be done sincerely and without showing off.'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Categories', icon: CheckSquare },
    { key: 'methodology', label: 'Methodology', icon: Book },
    { key: 'behavior', label: 'Behavior', icon: Heart },
    { key: 'knowledge', label: 'Knowledge', icon: Users },
    { key: 'practice', label: 'Practice', icon: Lightbulb }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? checklistItems 
    : checklistItems.filter(item => item.category === selectedCategory);

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getImportanceLabel = (importance: string) => {
    switch (importance) {
      case 'high': return t('checklist.high_importance');
      case 'medium': return t('checklist.medium_importance');
      case 'low': return t('checklist.low_importance');
      default: return importance;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-primary-700 text-white py-20">
        <IslamicPattern className="text-white" opacity={0.1} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                <CheckSquare className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                {t('navigation.checklist')}
              </h1>
            </div>
            <p className="text-xl text-green-100 leading-relaxed max-w-3xl mx-auto">
              {t('checklist.description')}
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

      {/* Checklist Items */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {filteredItems.map((item, index) => (
              <Card key={item.id} delay={index * 0.1}>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900 capitalize">
                      {item.category} #{item.id}
                    </h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getImportanceColor(item.importance)}`}>
                      {getImportanceLabel(item.importance)}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                    {/* Authentic */}
                    <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                      <h4 className="text-lg font-semibold text-green-800 mb-3 flex items-center">
                        <Check className="w-5 h-5 mr-2" />
                        {t('checklist.authentic_salafi')}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {item.authentic}
                      </p>
                    </div>

                    {/* Fake */}
                    <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
                      <h4 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
                        <X className="w-5 h-5 mr-2" />
                        {t('checklist.fake_salafi')}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {item.fake}
                      </p>
                    </div>
                  </div>

                  {/* Explanation */}
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-blue-800 mb-3 flex items-center">
                      <AlertCircle className="w-5 h-5 mr-2" />
                      {t('checklist.why_important')}
                    </h4>
                    <p className="text-gray-700 leading-relaxed">
                      {item.explanation}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final Advice */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card>
            <div className="p-8">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('checklist.remember')}
              </h3>
              <div className="bg-green-50 rounded-lg p-6 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  {t('checklist.final_advice')}
                </p>
              </div>
              <div className="text-primary-600 font-medium">
                {t('checklist.seek_guidance')}
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Checklist;