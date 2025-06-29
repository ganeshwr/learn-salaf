import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Users, Search, Book, Quote, Filter } from 'lucide-react';
import Card from '../components/Common/Card';
import IslamicPattern from '../components/Common/IslamicPattern';

interface Scholar {
  id: string;
  name: string;
  nameArabic: string;
  period: string;
  category: 'classical' | 'contemporary';
  description: string;
  quotes: Quote[];
}

interface Quote {
  id: string;
  text: string;
  textArabic?: string;
  topic: string;
  source: string;
  context: string;
}

const Scholars: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedScholar, setSelectedScholar] = useState<string>('all');
  const [selectedTopic, setSelectedTopic] = useState<string>('all');

  const scholars: Scholar[] = [
    {
      id: 'ibn-taymiyyah',
      name: 'Ibn Taymiyyah',
      nameArabic: 'ابن تيمية',
      period: '1263-1328 CE',
      category: 'classical',
      description: 'Great scholar who revived Salafi methodology during times of innovation',
      quotes: [
        {
          id: '1',
          text: 'The foundation of all corruption in beliefs and religions is making analogies between Allah and His creation.',
          textArabic: 'أصل كل فساد في الاعتقاد والدين إنما هو من التشبيه والتمثيل',
          topic: 'tawheed',
          source: 'Majmu al-Fatawa',
          context: 'Explaining the importance of maintaining Allah\'s uniqueness'
        },
        {
          id: '2',
          text: 'Whoever claims that the meanings of the Quran and Sunnah cannot be known except by a particular group has made a false claim.',
          topic: 'methodology',
          source: 'Majmu al-Fatawa',
          context: 'Refuting claims that Islamic texts are incomprehensible'
        }
      ]
    },
    {
      id: 'ibn-abdul-wahhab',
      name: 'Muhammad ibn Abdul Wahhab',
      nameArabic: 'محمد بن عبد الوهاب',
      period: '1703-1792 CE',
      category: 'classical',
      description: 'Scholar who called for return to pure Tawheed and Salafi methodology',
      quotes: [
        {
          id: '3',
          text: 'Know that Tawheed is singling out Allah in worship, and this is the religion of all the messengers.',
          textArabic: 'اعلم أن التوحيد هو إفراد الله بالعبادة وهو دين الرسل',
          topic: 'tawheed',
          source: 'Kitab at-Tawheed',
          context: 'Defining the essence of Islamic monotheism'
        }
      ]
    },
    {
      id: 'albani',
      name: 'Muhammad Nasiruddin al-Albani',
      nameArabic: 'محمد ناصر الدين الألباني',
      period: '1914-1999 CE',
      category: 'contemporary',
      description: 'Renowned hadith scholar who authenticated thousands of prophetic traditions',
      quotes: [
        {
          id: '4',
          text: 'The authentic Sunnah explains the Quran, and there is no contradiction between them when both are authentic.',
          topic: 'sunnah',
          source: 'Silsilah as-Sahihah',
          context: 'Explaining the relationship between Quran and Sunnah'
        },
        {
          id: '5',
          text: 'We must return to the Quran and Sunnah with the understanding of the righteous predecessors.',
          topic: 'methodology',
          source: 'Various lectures',
          context: 'Emphasizing the Salafi approach to Islamic knowledge'
        }
      ]
    },
    {
      id: 'ibn-baz',
      name: 'Abdul Aziz ibn Baz',
      nameArabic: 'عبد العزيز بن باز',
      period: '1910-1999 CE',
      category: 'contemporary',
      description: 'Former Grand Mufti of Saudi Arabia, known for his knowledge and humility',
      quotes: [
        {
          id: '6',
          text: 'The Muslim should be keen to follow the truth wherever it may be, and not be fanatical about any particular school of thought.',
          topic: 'methodology',
          source: 'Majmu Fatawa Ibn Baz',
          context: 'Advising about following evidence over blind following'
        }
      ]
    },
    {
      id: 'ibn-uthaymeen',
      name: 'Muhammad ibn Salih al-Uthaymeen',
      nameArabic: 'محمد بن صالح العثيمين',
      period: '1925-2001 CE',
      category: 'contemporary',
      description: 'Beloved teacher and scholar known for his clear explanations',
      quotes: [
        {
          id: '7',
          text: 'Knowledge is not just memorization, but understanding, acting upon it, and calling others to it.',
          topic: 'knowledge',
          source: 'Liqaat al-Baab al-Maftooh',
          context: 'Defining true Islamic knowledge'
        }
      ]
    },
    {
      id: 'fawzan',
      name: 'Salih ibn Fawzan al-Fawzan',
      nameArabic: 'صالح بن فوزان الفوزان',
      period: '1933-Present',
      category: 'contemporary',
      description: 'Senior scholar and member of the Permanent Committee for Islamic Research',
      quotes: [
        {
          id: '8',
          text: 'Bid\'ah (innovation) in religion is more dangerous than sins, because the sinner knows he is sinning, but the innovator thinks he is doing good.',
          topic: 'bidah',
          source: 'Al-Mulakhkhas al-Fiqhi',
          context: 'Warning against religious innovations'
        }
      ]
    }
  ];

  const topics = [
    { key: 'all', label: 'All Topics' },
    { key: 'tawheed', label: 'Tawheed' },
    { key: 'sunnah', label: 'Following Sunnah' },
    { key: 'methodology', label: 'Methodology' },
    { key: 'knowledge', label: 'Seeking Knowledge' },
    { key: 'bidah', label: 'Avoiding Bid\'ah' }
  ];

  const categories = [
    { key: 'all', label: t('scholars.all_scholars') },
    { key: 'classical', label: t('scholars.classical') },
    { key: 'contemporary', label: t('scholars.contemporary') }
  ];

  // Get all quotes from all scholars
  const allQuotes = scholars.flatMap(scholar => 
    scholar.quotes.map(quote => ({ ...quote, scholarName: scholar.name, scholarId: scholar.id }))
  );

  // Filter quotes based on search and filters
  const filteredQuotes = allQuotes.filter(quote => {
    const matchesSearch = searchTerm === '' || 
      quote.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.scholarName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesScholar = selectedScholar === 'all' || quote.scholarId === selectedScholar;
    const matchesTopic = selectedTopic === 'all' || quote.topic === selectedTopic;
    
    return matchesSearch && matchesScholar && matchesTopic;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gold-500 to-primary-600 text-white py-20">
        <IslamicPattern className="text-white" opacity={0.1} />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                {t('navigation.scholars')}
              </h1>
            </div>
            <p className="text-xl text-gold-100 leading-relaxed max-w-3xl mx-auto">
              {t('scholars.description')}
            </p>
          </motion.div>
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
                placeholder={t('scholars.search_placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Scholar Filter */}
            <select
              value={selectedScholar}
              onChange={(e) => setSelectedScholar(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.key} value={category.key}>
                  {category.label}
                </option>
              ))}
              {scholars.map(scholar => (
                <option key={scholar.id} value={scholar.id}>
                  {scholar.name}
                </option>
              ))}
            </select>

            {/* Topic Filter */}
            <select
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {topics.map(topic => (
                <option key={topic.key} value={topic.key}>
                  {topic.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Quotes Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredQuotes.length === 0 ? (
            <div className="text-center py-12">
              <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t('scholars.no_results')}
              </h3>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredQuotes.map((quote, index) => (
                <Card key={quote.id} delay={index * 0.1}>
                  <div className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="bg-gold-500 p-2 rounded-full flex-shrink-0">
                        <Quote className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {quote.scholarName}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-medium">
                            {quote.topic}
                          </span>
                        </div>
                      </div>
                    </div>

                    {quote.textArabic && (
                      <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                        <p className="text-right font-arabic text-lg text-gray-800 leading-relaxed">
                          {quote.textArabic}
                        </p>
                      </div>
                    )}

                    <blockquote className="text-gray-700 leading-relaxed mb-4 italic">
                      "{quote.text}"
                    </blockquote>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Book className="w-4 h-4 mr-2" />
                        <span className="font-medium">{t('scholars.source')}:</span>
                        <span className="ml-1">{quote.source}</span>
                      </div>
                      <div className="text-gray-600">
                        <span className="font-medium">{t('scholars.context')}:</span>
                        <span className="ml-1">{quote.context}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card>
            <div className="p-8">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t('scholars.learn_from_scholars')}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {t('scholars.scholars_guidance')}
              </p>
              <div className="text-primary-600 font-medium">
                {t('scholars.hadith_quote')}
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Scholars;