import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Star, Users, Book, Calendar, MapPin, User } from 'lucide-react';
import Card from '../components/Common/Card';
import IslamicPattern from '../components/Common/IslamicPattern';

interface TimelineEvent {
  id: string;
  year: string;
  hijriYear: string;
  title: string;
  description: string;
  category: 'prophet' | 'sahabah' | 'tabieen' | 'taba_tabieen' | 'scholars';
  location?: string;
  keyFigures?: string[];
  significance: string;
}

const Timeline: React.FC = () => {
  const { t } = useTranslation();
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const timelineEvents: TimelineEvent[] = [
    {
      id: '1',
      year: '570 CE',
      hijriYear: '53 BH',
      title: 'Birth of Prophet Muhammad ﷺ',
      description: 'The birth of the final messenger, marking the beginning of the prophetic lineage.',
      category: 'prophet',
      location: 'Makkah',
      keyFigures: ['Prophet Muhammad ﷺ'],
      significance: 'The foundation of Islamic guidance and the beginning of the Salafi methodology.'
    },
    {
      id: '2',
      year: '610 CE',
      hijriYear: '1 BH',
      title: 'First Revelation',
      description: 'The beginning of the Quranic revelation in the cave of Hira.',
      category: 'prophet',
      location: 'Cave of Hira, Makkah',
      keyFigures: ['Prophet Muhammad ﷺ', 'Angel Jibril (Gabriel)'],
      significance: 'The start of divine guidance that forms the basis of Salafi understanding.'
    },
    {
      id: '3',
      year: '622 CE',
      hijriYear: '1 AH',
      title: 'The Hijra (Migration)',
      description: 'The Prophet ﷺ and his companions migrated from Makkah to Madinah.',
      category: 'prophet',
      location: 'Makkah to Madinah',
      keyFigures: ['Prophet Muhammad ﷺ', 'Abu Bakr رضي الله عنه'],
      significance: 'Establishment of the first Islamic community and state.'
    },
    {
      id: '4',
      year: '632 CE',
      hijriYear: '11 AH',
      title: 'Death of Prophet Muhammad ﷺ',
      description: 'The completion of the prophetic mission and the beginning of the Rightly-Guided Caliphate.',
      category: 'prophet',
      location: 'Madinah',
      keyFigures: ['Prophet Muhammad ﷺ'],
      significance: 'End of revelation and beginning of the Sahabah era of leadership.'
    },
    {
      id: '5',
      year: '632-661 CE',
      hijriYear: '11-40 AH',
      title: 'Era of the Rightly-Guided Caliphs',
      description: 'The period of the four Rightly-Guided Caliphs who were direct companions of the Prophet ﷺ.',
      category: 'sahabah',
      location: 'Arabian Peninsula',
      keyFigures: ['Abu Bakr', 'Umar ibn al-Khattab', 'Uthman ibn Affan', 'Ali ibn Abi Talib'],
      significance: 'The golden age of Islamic governance following prophetic guidance.'
    },
    {
      id: '6',
      year: '661-750 CE',
      hijriYear: '40-132 AH',
      title: 'Era of the Tabi\'een',
      description: 'The generation that learned directly from the Sahabah and preserved their teachings.',
      category: 'tabieen',
      location: 'Islamic Empire',
      keyFigures: ['Sa\'id ibn al-Musayyib', 'Al-Hasan al-Basri', 'Ibn Sirin'],
      significance: 'Preservation and transmission of prophetic traditions and Islamic knowledge.'
    },
    {
      id: '7',
      year: '750-850 CE',
      hijriYear: '132-235 AH',
      title: 'Era of Taba\' at-Tabi\'een',
      description: 'The third praised generation who learned from the Tabi\'een.',
      category: 'taba_tabieen',
      location: 'Islamic Empire',
      keyFigures: ['Imam Malik', 'Imam Abu Hanifa', 'Imam Shafi\'i', 'Imam Ahmad'],
      significance: 'Codification of Islamic jurisprudence and systematic preservation of Sunnah.'
    },
    {
      id: '8',
      year: '1263-1328 CE',
      hijriYear: '661-728 AH',
      title: 'Ibn Taymiyyah',
      description: 'The great scholar who revived Salafi methodology during times of innovation.',
      category: 'scholars',
      location: 'Damascus, Syria',
      keyFigures: ['Ibn Taymiyyah'],
      significance: 'Revival of authentic Islamic methodology and refutation of innovations.'
    },
    {
      id: '9',
      year: '1703-1792 CE',
      hijriYear: '1115-1206 AH',
      title: 'Muhammad ibn Abdul Wahhab',
      description: 'Scholar who called for return to pure Tawheed and Salafi methodology.',
      category: 'scholars',
      location: 'Najd, Arabian Peninsula',
      keyFigures: ['Muhammad ibn Abdul Wahhab'],
      significance: 'Renewal of Tawheed and call to authentic Islamic practice.'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Events', icon: Clock, color: 'primary' },
    { key: 'prophet', label: 'Prophetic Era', icon: Star, color: 'gold' },
    { key: 'sahabah', label: 'Sahabah', icon: Users, color: 'primary' },
    { key: 'tabieen', label: 'Tabi\'een', icon: Book, color: 'navy' },
    { key: 'taba_tabieen', label: 'Taba\' at-Tabi\'een', icon: User, color: 'gold' },
    { key: 'scholars', label: 'Later Scholars', icon: Book, color: 'primary' }
  ];

  const filteredEvents = activeCategory === 'all' 
    ? timelineEvents 
    : timelineEvents.filter(event => event.category === activeCategory);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'prophet': return 'bg-gold-500 border-gold-200';
      case 'sahabah': return 'bg-primary-500 border-primary-200';
      case 'tabieen': return 'bg-navy-500 border-navy-200';
      case 'taba_tabieen': return 'bg-gold-600 border-gold-300';
      case 'scholars': return 'bg-primary-600 border-primary-300';
      default: return 'bg-gray-500 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-navy-600 to-gold-600 text-white py-20">
        <IslamicPattern className="text-white" opacity={0.1} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                {t('navigation.timeline')}
              </h1>
            </div>
            <p className="text-xl text-white text-opacity-90 leading-relaxed max-w-3xl mx-auto">
              Journey through the blessed generations of the Salaf as-Salih and discover the historical foundations of authentic Islamic methodology.
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
              const isActive = activeCategory === category.key;
              return (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
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

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200"></div>

            {/* Timeline Events */}
            <div className="space-y-12">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-start space-x-8"
                >
                  {/* Timeline Dot */}
                  <div className={`relative z-10 w-16 h-16 rounded-full border-4 ${getCategoryColor(event.category)} flex items-center justify-center flex-shrink-0`}>
                    <div className="w-6 h-6 bg-white rounded-full"></div>
                  </div>

                  {/* Event Card */}
                  <Card className="flex-1 cursor-pointer hover:shadow-xl transition-shadow" hover={false}>
                    <div 
                      className="p-6"
                      onClick={() => setSelectedEvent(event)}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {event.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {event.year}
                            </div>
                            <div className="flex items-center">
                              <span className="font-arabic">{event.hijriYear}</span>
                            </div>
                            {event.location && (
                              <div className="flex items-center">
                                <MapPin className="w-4 h-4 mr-1" />
                                {event.location}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(event.category).split(' ')[0]} mt-2 sm:mt-0`}>
                          {categories.find(c => c.key === event.category)?.label}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {event.description}
                      </p>
                      
                      {event.keyFigures && event.keyFigures.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {event.keyFigures.map((figure, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                            >
                              <User className="w-3 h-3 mr-1" />
                              {figure}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedEvent.title}
                    </h2>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {selectedEvent.year}
                      </div>
                      <div className="flex items-center">
                        <span className="font-arabic">{selectedEvent.hijriYear}</span>
                      </div>
                      {selectedEvent.location && (
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {selectedEvent.location}
                        </div>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                  >
                    ×
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedEvent.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Historical Significance</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedEvent.significance}
                    </p>
                  </div>

                  {selectedEvent.keyFigures && selectedEvent.keyFigures.length > 0 && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Figures</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {selectedEvent.keyFigures.map((figure, idx) => (
                          <div
                            key={idx}
                            className="flex items-center p-3 bg-gray-50 rounded-lg"
                          >
                            <User className="w-5 h-5 text-primary-600 mr-3" />
                            <span className="font-medium text-gray-900">{figure}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hadith Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <div className="p-8 text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Blessed Generations</h3>
              <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-4">
                "The best of people are my generation, then those who come after them, then those who come after them."
              </blockquote>
              <p className="text-primary-600 font-medium mb-6">
                — Prophet Muhammad ﷺ (Bukhari & Muslim)
              </p>
              <div className="bg-primary-50 rounded-lg p-6">
                <p className="text-gray-700 leading-relaxed">
                  This timeline showcases the blessed generations praised by the Prophet ﷺ and the scholars 
                  who preserved and transmitted their methodology throughout Islamic history. Each generation 
                  built upon the foundation laid by those before them, maintaining the authentic understanding 
                  of Islam.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Timeline;