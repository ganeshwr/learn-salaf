import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { AlertTriangle, Search, Filter, Book, MapPin, Lightbulb } from 'lucide-react';
import Card from '../components/Common/Card';
import IslamicPattern from '../components/Common/IslamicPattern';

interface BidahItem {
  id: string;
  name: string;
  category: 'worship' | 'belief' | 'celebration' | 'practice';
  severity: 'major' | 'minor';
  description: string;
  origin: string;
  evidence: string;
  alternative: string;
  commonIn: string[];
}

const Bidah: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSeverity, setSelectedSeverity] = useState<string>('all');

  const bidahItems: BidahItem[] = [
    {
      id: '1',
      name: 'Mawlid Celebrations',
      category: 'celebration',
      severity: 'minor',
      description: 'Celebrating the Prophet\'s birthday with specific rituals and gatherings',
      origin: 'Started in the 4th century AH by the Fatimid dynasty',
      evidence: 'The Prophet ﷺ and his companions never celebrated his birthday',
      alternative: 'Show love for the Prophet by following his Sunnah daily',
      commonIn: ['Middle East', 'South Asia', 'North Africa']
    },
    {
      id: '2',
      name: 'Grave Worship',
      category: 'worship',
      severity: 'major',
      description: 'Praying to, seeking help from, or making offerings at graves',
      origin: 'Influenced by pre-Islamic practices and later Sufi traditions',
      evidence: 'The Prophet ﷺ warned: "May Allah curse the Jews and Christians, they took the graves of their prophets as places of worship"',
      alternative: 'Visit graves only for remembrance of death and making du\'a for the deceased',
      commonIn: ['Various regions', 'Sufi communities']
    },
    {
      id: '3',
      name: 'Loud Dhikr in Congregation',
      category: 'worship',
      severity: 'minor',
      description: 'Performing dhikr (remembrance) loudly in groups with specific movements',
      origin: 'Developed in later Sufi orders',
      evidence: 'The Prophet ﷺ and companions performed dhikr quietly and individually',
      alternative: 'Perform dhikr as taught in authentic Sunnah, quietly and with contemplation',
      commonIn: ['Sufi orders', 'Some mosques']
    },
    {
      id: '4',
      name: 'Intercession through Saints',
      category: 'belief',
      severity: 'major',
      description: 'Believing that deceased saints can intercede with Allah on behalf of the living',
      origin: 'Influenced by Christian concepts and folk beliefs',
      evidence: 'Allah says: "And warn by it those who fear that they will be gathered before their Lord"',
      alternative: 'Make du\'a directly to Allah, as He is always listening',
      commonIn: ['Various regions', 'Folk Islam']
    },
    {
      id: '5',
      name: 'Specific Du\'a for Specific Days',
      category: 'practice',
      severity: 'minor',
      description: 'Assigning specific du\'as or worship acts to particular days without prophetic basis',
      origin: 'Later scholarly opinions and cultural practices',
      evidence: 'No authentic evidence for most day-specific worship acts',
      alternative: 'Make du\'a and worship Allah consistently throughout all days',
      commonIn: ['Various cultures', 'Popular books']
    },
    {
      id: '6',
      name: 'Tarawih Prayer More Than 11 Rakats',
      category: 'worship',
      severity: 'minor',
      description: 'Praying more than 11 rakats in Tarawih prayer during Ramadan',
      origin: 'Later practice during Umar\'s caliphate for practical reasons',
      evidence: 'The Prophet ﷺ never prayed more than 11 rakats in night prayer',
      alternative: 'Follow the Prophet\'s practice of 11 rakats maximum',
      commonIn: ['Many mosques', 'Traditional communities']
    },
    {
      id: '7',
      name: 'Isra and Mi\'raj Celebrations',
      category: 'celebration',
      severity: 'minor',
      description: 'Special celebrations and gatherings for the night journey',
      origin: 'Later cultural developments',
      evidence: 'No evidence that the Prophet ﷺ or companions celebrated this event',
      alternative: 'Remember and study the event as part of regular Islamic education',
      commonIn: ['Various Muslim communities']
    },
    {
      id: '8',
      name: 'Seeking Blessings from Objects',
      category: 'belief',
      severity: 'major',
      description: 'Believing that certain objects possess inherent blessing or power',
      origin: 'Pre-Islamic pagan practices',
      evidence: 'The Prophet ﷺ said: "Whoever hangs up an amulet has committed shirk"',
      alternative: 'Seek blessings only from Allah through legitimate means',
      commonIn: ['Folk practices', 'Various cultures']
    }
  ];

  const categories = [
    { key: 'all', label: 'All Categories' },
    { key: 'worship', label: t('bidah.category_worship') },
    { key: 'belief', label: t('bidah.category_belief') },
    { key: 'celebration', label: t('bidah.category_celebration') },
    { key: 'practice', label: t('bidah.category_practice') }
  ];

  const severities = [
    { key: 'all', label: 'All Severities' },
    { key: 'major', label: t('bidah.major') },
    { key: 'minor', label: t('bidah.minor') }
  ];

  const filteredItems = bidahItems.filter(item => {
    const matchesSearch = searchTerm === '' || 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSeverity = selectedSeverity === 'all' || item.severity === selectedSeverity;
    
    return matchesSearch && matchesCategory && matchesSeverity;
  });

  const getSeverityColor = (severity: string) => {
    return severity === 'major' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800';
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'worship': return 'bg-primary-100 text-primary-800';
      case 'belief': return 'bg-red-100 text-red-800';
      case 'celebration': return 'bg-gold-100 text-gold-800';
      case 'practice': return 'bg-navy-100 text-navy-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-600 to-primary-700 text-white py-20">
        <IslamicPattern className="text-white" opacity={0.1} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                {t('navigation.bidah')}
              </h1>
            </div>
            <p className="text-xl text-red-100 leading-relaxed max-w-3xl mx-auto">
              {t('bidah.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Important Warning */}
      <section className="py-8 bg-yellow-50 border-b border-yellow-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                {t('bidah.important_note')}
              </h3>
              <p className="text-yellow-700">
                {t('bidah.warning_message')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t('bidah.search_placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.key} value={category.key}>
                  {category.label}
                </option>
              ))}
            </select>

            {/* Severity Filter */}
            <select
              value={selectedSeverity}
              onChange={(e) => setSelectedSeverity(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {severities.map(severity => (
                <option key={severity.key} value={severity.key}>
                  {severity.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Bidah Items Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('bidah.no_results')}
              </h3>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredItems.map((item, index) => (
                <Card key={item.id} delay={index * 0.1}>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">
                        {item.name}
                      </h3>
                      <div className="flex flex-col space-y-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(item.severity)}`}>
                          {item.severity === 'major' ? t('bidah.major') : t('bidah.minor')}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                          {t(`bidah.category_${item.category}`)}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-start space-x-2">
                        <Book className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-gray-700">{t('bidah.origin')}:</span>
                          <span className="text-gray-600 ml-1">{item.origin}</span>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-gray-700">{t('bidah.evidence')}:</span>
                          <span className="text-gray-600 ml-1">{item.evidence}</span>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Lightbulb className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-gray-700">{t('bidah.alternative')}:</span>
                          <span className="text-gray-600 ml-1">{item.alternative}</span>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <MapPin className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-gray-700">{t('bidah.common_in')}:</span>
                          <span className="text-gray-600 ml-1">{item.commonIn.join(', ')}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Prophetic Warning */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card>
            <div className="p-8">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('bidah.prophetic_warning')}
              </h3>
              <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-4">
                {t('bidah.hadith_quote')}
              </blockquote>
              <p className="text-red-600 font-medium mb-6">
                {t('bidah.hadith_source')}
              </p>
              <div className="bg-red-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">
                  {t('bidah.closing_message')}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Bidah;