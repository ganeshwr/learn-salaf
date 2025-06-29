import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { AlertTriangle, Search, Filter, Book, MapPin, Lightbulb, Calendar, Users, Info } from 'lucide-react';
import Card from '../components/Common/Card';
import IslamicPattern from '../components/Common/IslamicPattern';

interface BidahItem {
  id: string;
  name: string;
  nameArabic?: string;
  category: 'worship' | 'belief' | 'celebration' | 'practice' | 'social';
  severity: 'major' | 'minor';
  description: string;
  origin: string;
  evidence: string;
  alternative: string;
  commonIn: string[];
  timeIntroduced?: string;
  prevalence: 'very_common' | 'common' | 'regional' | 'rare';
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
      nameArabic: 'المولد النبوي',
      category: 'celebration',
      severity: 'minor',
      description: 'Celebrating the Prophet\'s birthday with specific rituals, gatherings, and ceremonies not established in Islam',
      origin: 'Started in the 4th century AH by the Fatimid dynasty in Egypt',
      evidence: 'The Prophet ﷺ and his companions never celebrated his birthday. If it were good, they would have done it first.',
      alternative: 'Show love for the Prophet by following his Sunnah daily, sending salawat, and studying his biography',
      commonIn: ['Middle East', 'South Asia', 'North Africa', 'Southeast Asia'],
      timeIntroduced: '4th century AH',
      prevalence: 'very_common'
    },
    {
      id: '2',
      name: 'Grave Worship',
      nameArabic: 'عبادة القبور',
      category: 'worship',
      severity: 'major',
      description: 'Praying to, seeking help from, making offerings at graves, or believing the deceased can benefit or harm',
      origin: 'Influenced by pre-Islamic practices and later Sufi traditions',
      evidence: 'The Prophet ﷺ warned: "May Allah curse the Jews and Christians, they took the graves of their prophets as places of worship"',
      alternative: 'Visit graves only for remembrance of death and making du\'a for the deceased, not to them',
      commonIn: ['Various regions', 'Sufi communities', 'Folk Islam'],
      timeIntroduced: '2nd-3rd century AH',
      prevalence: 'common'
    },
    {
      id: '3',
      name: 'Loud Dhikr in Congregation',
      nameArabic: 'الذكر الجماعي بصوت عال',
      category: 'worship',
      severity: 'minor',
      description: 'Performing dhikr (remembrance) loudly in groups with specific movements, dancing, or rhythmic chanting',
      origin: 'Developed in later Sufi orders and mystical practices',
      evidence: 'The Prophet ﷺ and companions performed dhikr quietly and individually. Allah says: "Remember your Lord within yourself humbly and with fear"',
      alternative: 'Perform dhikr as taught in authentic Sunnah, quietly and with contemplation',
      commonIn: ['Sufi orders', 'Some mosques', 'Mystical groups'],
      timeIntroduced: '3rd-4th century AH',
      prevalence: 'common'
    },
    {
      id: '4',
      name: 'Intercession through Saints',
      nameArabic: 'الاستشفاع بالأولياء',
      category: 'belief',
      severity: 'major',
      description: 'Believing that deceased saints can intercede with Allah on behalf of the living or have special powers',
      origin: 'Influenced by Christian concepts of sainthood and folk beliefs',
      evidence: 'Allah says: "And warn by it those who fear that they will be gathered before their Lord - for them besides Him will be no protector and no intercessor"',
      alternative: 'Make du\'a directly to Allah, as He is always listening and needs no intermediary',
      commonIn: ['Various regions', 'Folk Islam', 'Sufi communities'],
      timeIntroduced: '2nd-3rd century AH',
      prevalence: 'common'
    },
    {
      id: '5',
      name: 'Specific Du\'a for Specific Days',
      nameArabic: 'أدعية مخصوصة لأيام معينة',
      category: 'practice',
      severity: 'minor',
      description: 'Assigning specific du\'as or worship acts to particular days without prophetic basis',
      origin: 'Later scholarly opinions and cultural practices without authentic foundation',
      evidence: 'No authentic evidence for most day-specific worship acts. The Prophet ﷺ said: "Whoever innovates in this matter of ours what is not part of it will have it rejected"',
      alternative: 'Make du\'a and worship Allah consistently throughout all days as taught in authentic Sunnah',
      commonIn: ['Various cultures', 'Popular books', 'Social media'],
      timeIntroduced: 'Various periods',
      prevalence: 'very_common'
    },
    {
      id: '6',
      name: 'Excessive Tarawih Prayer',
      nameArabic: 'الإفراط في صلاة التراويح',
      category: 'worship',
      severity: 'minor',
      description: 'Praying significantly more than 11 rakats in Tarawih prayer during Ramadan as a regular practice',
      origin: 'Later practice during Umar\'s caliphate for practical reasons, then became ritualized',
      evidence: 'The Prophet ﷺ never prayed more than 11 rakats in night prayer. Aisha (RA) said he never exceeded this number',
      alternative: 'Follow the Prophet\'s practice of 11 rakats maximum, focusing on quality over quantity',
      commonIn: ['Many mosques', 'Traditional communities'],
      timeIntroduced: '1st century AH (later ritualized)',
      prevalence: 'very_common'
    },
    {
      id: '7',
      name: 'Isra and Mi\'raj Celebrations',
      nameArabic: 'الاحتفال بالإسراء والمعراج',
      category: 'celebration',
      severity: 'minor',
      description: 'Special celebrations, gatherings, and rituals for the night journey and ascension',
      origin: 'Later cultural developments without prophetic precedent',
      evidence: 'No evidence that the Prophet ﷺ or companions celebrated this event annually',
      alternative: 'Remember and study the event as part of regular Islamic education and reflection',
      commonIn: ['Various Muslim communities', 'Schools', 'Mosques'],
      timeIntroduced: '4th-5th century AH',
      prevalence: 'common'
    },
    {
      id: '8',
      name: 'Seeking Blessings from Objects',
      nameArabic: 'طلب البركة من الأشياء',
      category: 'belief',
      severity: 'major',
      description: 'Believing that certain objects possess inherent blessing, power, or protective qualities',
      origin: 'Pre-Islamic pagan practices that infiltrated Islamic communities',
      evidence: 'The Prophet ﷺ said: "Whoever hangs up an amulet has committed shirk"',
      alternative: 'Seek blessings only from Allah through legitimate means like du\'a, Quran recitation, and righteous deeds',
      commonIn: ['Folk practices', 'Various cultures', 'Superstitious communities'],
      timeIntroduced: 'Pre-Islamic (continued after)',
      prevalence: 'very_common'
    },
    {
      id: '9',
      name: 'Group Recitation After Prayer',
      nameArabic: 'القراءة الجماعية بعد الصلاة',
      category: 'worship',
      severity: 'minor',
      description: 'Reciting Quran or dhikr in unison loudly after congregational prayers as a regular practice',
      origin: 'Later innovation not practiced by the Prophet ﷺ or early generations',
      evidence: 'The companions used to disperse quietly after prayer. Ibn Abbas said: "Raising voices with dhikr when people finished obligatory prayers was practiced during the time of the Prophet ﷺ" - but this was individual, not group recitation',
      alternative: 'Engage in individual dhikr and du\'a quietly after prayer as taught by the Prophet ﷺ',
      commonIn: ['Many mosques', 'Traditional communities'],
      timeIntroduced: '2nd-3rd century AH',
      prevalence: 'very_common'
    },
    {
      id: '10',
      name: 'Witr Prayer in Congregation',
      nameArabic: 'صلاة الوتر في جماعة',
      category: 'worship',
      severity: 'minor',
      description: 'Regularly praying Witr in congregation during Ramadan as an established practice',
      origin: 'Later development not consistently practiced by the Prophet ﷺ',
      evidence: 'The Prophet ﷺ mostly prayed Witr individually. He said: "Make Witr the last of your prayer at night"',
      alternative: 'Pray Witr individually as was the consistent practice of the Prophet ﷺ',
      commonIn: ['Some mosques during Ramadan'],
      timeIntroduced: '1st-2nd century AH',
      prevalence: 'common'
    },
    {
      id: '11',
      name: 'Collective Du\'a After Prayer',
      nameArabic: 'الدعاء الجماعي بعد الصلاة',
      category: 'worship',
      severity: 'minor',
      description: 'Making du\'a collectively with raised hands after every congregational prayer as a regular practice',
      origin: 'Later practice not established by the Prophet ﷺ or early generations',
      evidence: 'The Prophet ﷺ and companions would make individual dhikr and du\'a after prayer, not collective du\'a with raised hands',
      alternative: 'Make individual du\'a and dhikr after prayer as taught in authentic Sunnah',
      commonIn: ['Many mosques', 'Traditional communities'],
      timeIntroduced: '2nd-3rd century AH',
      prevalence: 'very_common'
    },
    {
      id: '12',
      name: 'Celebrating Islamic New Year',
      nameArabic: 'الاحتفال برأس السنة الهجرية',
      category: 'celebration',
      severity: 'minor',
      description: 'Special celebrations, gatherings, and rituals for the Islamic New Year (Muharram 1st)',
      origin: 'Modern innovation without basis in Islamic tradition',
      evidence: 'No evidence that the Prophet ﷺ or companions celebrated the beginning of the Islamic year',
      alternative: 'Use the occasion for reflection, repentance, and planning good deeds without ritualistic celebration',
      commonIn: ['Modern Muslim communities', 'Schools', 'Organizations'],
      timeIntroduced: 'Modern era (20th century)',
      prevalence: 'common'
    },
    {
      id: '13',
      name: 'Seeking Blessings from Scholars\' Graves',
      nameArabic: 'طلب البركة من قبور العلماء',
      category: 'belief',
      severity: 'major',
      description: 'Visiting graves of scholars or righteous people to seek blessings, make requests, or gain spiritual benefit',
      origin: 'Sufi practices and folk beliefs about deceased righteous people',
      evidence: 'The Prophet ﷺ forbade taking graves as places of worship and warned against this practice',
      alternative: 'Visit graves only for remembrance of death and to make du\'a for the deceased',
      commonIn: ['Sufi communities', 'Traditional societies', 'Shrine cultures'],
      timeIntroduced: '2nd-3rd century AH',
      prevalence: 'common'
    },
    {
      id: '14',
      name: 'Ritualistic Dhikr Circles',
      nameArabic: 'حلقات الذكر الطقوسية',
      category: 'worship',
      severity: 'minor',
      description: 'Organized dhikr sessions with specific movements, breathing techniques, or mystical practices',
      origin: 'Sufi orders and mystical traditions',
      evidence: 'The Prophet ﷺ and companions performed dhikr simply and naturally without elaborate rituals',
      alternative: 'Engage in simple dhikr as taught in Quran and Sunnah without added rituals',
      commonIn: ['Sufi orders', 'Mystical groups', 'Some Islamic centers'],
      timeIntroduced: '3rd-4th century AH',
      prevalence: 'regional'
    },
    {
      id: '15',
      name: 'Congregational Qunut in Fajr',
      nameArabic: 'القنوت الجماعي في الفجر',
      category: 'worship',
      severity: 'minor',
      description: 'Regularly reciting Qunut du\'a in Fajr prayer in congregation as an established daily practice',
      origin: 'Misunderstanding of when Qunut should be performed',
      evidence: 'The Prophet ﷺ performed Qunut only during calamities, not as a regular daily practice in Fajr',
      alternative: 'Perform Qunut only during times of calamity as was the practice of the Prophet ﷺ',
      commonIn: ['Some mosques', 'Certain regions'],
      timeIntroduced: '2nd century AH',
      prevalence: 'regional'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Categories' },
    { key: 'worship', label: t('bidah.category_worship') },
    { key: 'belief', label: t('bidah.category_belief') },
    { key: 'celebration', label: t('bidah.category_celebration') },
    { key: 'practice', label: t('bidah.category_practice') },
    { key: 'social', label: 'Social Practices' }
  ];

  const severities = [
    { key: 'all', label: 'All Severities' },
    { key: 'major', label: t('bidah.major') },
    { key: 'minor', label: t('bidah.minor') }
  ];

  const filteredItems = bidahItems.filter(item => {
    const matchesSearch = searchTerm === '' || 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.nameArabic && item.nameArabic.includes(searchTerm));
    
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
      case 'social': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPrevalenceColor = (prevalence: string) => {
    switch (prevalence) {
      case 'very_common': return 'bg-red-100 text-red-700';
      case 'common': return 'bg-orange-100 text-orange-700';
      case 'regional': return 'bg-yellow-100 text-yellow-700';
      case 'rare': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
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

      {/* Statistics */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-red-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-red-600">
                {bidahItems.filter(item => item.severity === 'major').length}
              </div>
              <div className="text-sm text-red-700">Major Bid'ah</div>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-600">
                {bidahItems.filter(item => item.severity === 'minor').length}
              </div>
              <div className="text-sm text-yellow-700">Minor Bid'ah</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">
                {bidahItems.filter(item => item.prevalence === 'very_common').length}
              </div>
              <div className="text-sm text-blue-700">Very Common</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600">
                {filteredItems.length}
              </div>
              <div className="text-sm text-green-700">Showing Results</div>
            </div>
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
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {item.name}
                        </h3>
                        {item.nameArabic && (
                          <p className="text-lg font-arabic text-gray-600 mb-2">
                            {item.nameArabic}
                          </p>
                        )}
                      </div>
                      <div className="flex flex-col space-y-2 ml-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(item.severity)}`}>
                          {item.severity === 'major' ? t('bidah.major') : t('bidah.minor')}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>
                          {t(`bidah.category_${item.category}`) || item.category}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPrevalenceColor(item.prevalence)}`}>
                          {item.prevalence.replace('_', ' ')}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-start space-x-2">
                        <Calendar className="w-4 h-4 text-gray-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium text-gray-700">{t('bidah.origin')}:</span>
                          <span className="text-gray-600 ml-1">{item.origin}</span>
                          {item.timeIntroduced && (
                            <span className="text-gray-500 ml-2">({item.timeIntroduced})</span>
                          )}
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