import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { BookMarked, Search, Filter, Volume2, Book, Tag } from 'lucide-react';
import Card from '../components/Common/Card';
import IslamicPattern from '../components/Common/IslamicPattern';

interface GlossaryTerm {
  id: string;
  term: string;
  arabic: string;
  pronunciation: string;
  category: 'theology' | 'jurisprudence' | 'hadith' | 'quran' | 'worship' | 'general';
  definition: string;
  context: string;
  relatedTerms: string[];
  importance: 'essential' | 'important' | 'useful';
}

const Glossary: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedImportance, setSelectedImportance] = useState<string>('all');

  const glossaryTerms: GlossaryTerm[] = [
    {
      id: '1',
      term: 'Salaf as-Salih',
      arabic: 'السلف الصالح',
      pronunciation: 'sa-laf as-saa-lih',
      category: 'general',
      definition: 'The righteous predecessors, referring to the first three generations of Muslims: the Companions (Sahabah), their followers (Tabi\'een), and the followers of the followers (Taba\' at-Tabi\'een).',
      context: 'These generations are considered the best examples of Islamic practice and understanding, as praised by the Prophet ﷺ.',
      relatedTerms: ['Sahabah', 'Tabi\'een', 'Taba\' at-Tabi\'een', 'Salafiyyah'],
      importance: 'essential'
    },
    {
      id: '2',
      term: 'Tawheed',
      arabic: 'التوحيد',
      pronunciation: 'taw-heed',
      category: 'theology',
      definition: 'The fundamental concept of Islamic monotheism, affirming the absolute unity and uniqueness of Allah in His essence, attributes, and actions.',
      context: 'Tawheed is divided into three categories: Tawheed ar-Rububiyyah (Lordship), Tawheed al-Uluhiyyah (Worship), and Tawheed al-Asma\' was-Sifat (Names and Attributes).',
      relatedTerms: ['Shirk', 'Rububiyyah', 'Uluhiyyah', 'Asma was-Sifat'],
      importance: 'essential'
    },
    {
      id: '3',
      term: 'Bid\'ah',
      arabic: 'البدعة',
      pronunciation: 'bid-ah',
      category: 'jurisprudence',
      definition: 'Innovation in religious matters; introducing new practices, beliefs, or rituals into Islam that were not established by the Prophet ﷺ or his companions.',
      context: 'The Prophet ﷺ warned: "Every innovation is misguidance, and every misguidance leads to the Fire." Bid\'ah is categorized as major (affecting beliefs) or minor (affecting practices).',
      relatedTerms: ['Sunnah', 'Daleel', 'Manhaj'],
      importance: 'essential'
    },
    {
      id: '4',
      term: 'Sunnah',
      arabic: 'السنة',
      pronunciation: 'sun-nah',
      category: 'hadith',
      definition: 'The teachings, practices, sayings, and approvals of Prophet Muhammad ﷺ, serving as the second source of Islamic guidance after the Quran.',
      context: 'The Sunnah explains and clarifies the Quran, providing practical examples of how to implement Islamic teachings in daily life.',
      relatedTerms: ['Hadith', 'Quran', 'Daleel', 'Manhaj'],
      importance: 'essential'
    },
    {
      id: '5',
      term: 'Sahabah',
      arabic: 'الصحابة',
      pronunciation: 'sa-haa-bah',
      category: 'general',
      definition: 'The Companions of Prophet Muhammad ﷺ; those who met him, believed in him, and died as Muslims.',
      context: 'The Sahabah are considered the most virtuous generation after the prophets, having learned Islam directly from the Prophet ﷺ.',
      relatedTerms: ['Tabi\'een', 'Salaf as-Salih', 'Khulafa ar-Rashideen'],
      importance: 'essential'
    },
    {
      id: '6',
      term: 'Tabi\'een',
      arabic: 'التابعون',
      pronunciation: 'taa-bi-een',
      category: 'general',
      definition: 'The generation that followed the Companions; those who met and learned from the Sahabah but did not meet the Prophet ﷺ.',
      context: 'The Tabi\'een preserved and transmitted the teachings of the Companions, forming the second praised generation.',
      relatedTerms: ['Sahabah', 'Taba\' at-Tabi\'een', 'Salaf as-Salih'],
      importance: 'important'
    },
    {
      id: '7',
      term: 'Taba\' at-Tabi\'een',
      arabic: 'تابع التابعين',
      pronunciation: 'ta-ba at-taa-bi-een',
      category: 'general',
      definition: 'The followers of the Tabi\'een; the third generation that learned from the Tabi\'een.',
      context: 'This generation completes the three praised generations mentioned by the Prophet ﷺ in his hadith about the best of people.',
      relatedTerms: ['Tabi\'een', 'Sahabah', 'Salaf as-Salih'],
      importance: 'important'
    },
    {
      id: '8',
      term: 'Manhaj',
      arabic: 'المنهج',
      pronunciation: 'man-haj',
      category: 'general',
      definition: 'Methodology or approach; in Islamic context, it refers to the way of understanding and practicing Islam.',
      context: 'Salafi manhaj refers to following the methodology of the Salaf as-Salih in understanding and practicing Islam.',
      relatedTerms: ['Salafiyyah', 'Usul', 'Daleel'],
      importance: 'essential'
    },
    {
      id: '9',
      term: 'Daleel',
      arabic: 'الدليل',
      pronunciation: 'da-leel',
      category: 'jurisprudence',
      definition: 'Evidence or proof from Islamic sources (Quran, Sunnah, Ijma\', Qiyas) used to support religious rulings or beliefs.',
      context: 'Salafis emphasize the importance of daleel from Quran and authentic Sunnah as understood by the Salaf.',
      relatedTerms: ['Quran', 'Sunnah', 'Ijma\'', 'Qiyas'],
      importance: 'essential'
    },
    {
      id: '10',
      term: 'Shirk',
      arabic: 'الشرك',
      pronunciation: 'shirk',
      category: 'theology',
      definition: 'Associating partners with Allah; the gravest sin in Islam, opposite of Tawheed.',
      context: 'Shirk can be major (taking one out of Islam) or minor (diminishing one\'s faith). It includes worshipping others besides Allah or attributing divine qualities to creation.',
      relatedTerms: ['Tawheed', 'Kufr', 'Bid\'ah'],
      importance: 'essential'
    },
    {
      id: '11',
      term: 'Hadith',
      arabic: 'الحديث',
      pronunciation: 'ha-deeth',
      category: 'hadith',
      definition: 'Recorded sayings, actions, and approvals of Prophet Muhammad ﷺ, transmitted through chains of narrators.',
      context: 'Hadith are classified by authenticity: Sahih (authentic), Hasan (good), Da\'if (weak), and Mawdu\' (fabricated).',
      relatedTerms: ['Sunnah', 'Isnad', 'Sanad', 'Matn'],
      importance: 'essential'
    },
    {
      id: '12',
      term: 'Isnad',
      arabic: 'الإسناد',
      pronunciation: 'is-naad',
      category: 'hadith',
      definition: 'The chain of narrators who transmitted a hadith from the Prophet ﷺ to the compiler.',
      context: 'The science of Isnad is crucial for determining the authenticity of hadith. A strong isnad with reliable narrators increases the hadith\'s credibility.',
      relatedTerms: ['Hadith', 'Sanad', 'Rijal', 'Jarh wa Ta\'deel'],
      importance: 'important'
    },
    {
      id: '13',
      term: 'Ijma\'',
      arabic: 'الإجماع',
      pronunciation: 'ij-maa',
      category: 'jurisprudence',
      definition: 'Scholarly consensus; unanimous agreement of qualified Islamic scholars on a religious matter.',
      context: 'Ijma\' is considered a source of Islamic law, but Salafis emphasize that true ijma\' is rare and must be based on clear evidence.',
      relatedTerms: ['Qiyas', 'Daleel', 'Ijtihad'],
      importance: 'important'
    },
    {
      id: '14',
      term: 'Qiyas',
      arabic: 'القياس',
      pronunciation: 'qi-yaas',
      category: 'jurisprudence',
      definition: 'Analogical reasoning; deriving Islamic rulings by comparing new situations to established precedents from Quran and Sunnah.',
      context: 'Qiyas is used when direct evidence is not available, but it must be based on clear reasoning and similarity of circumstances.',
      relatedTerms: ['Ijma\'', 'Ijtihad', 'Daleel'],
      importance: 'important'
    },
    {
      id: '15',
      term: 'Ijtihad',
      arabic: 'الاجتهاد',
      pronunciation: 'ij-ti-haad',
      category: 'jurisprudence',
      definition: 'Independent reasoning and effort exerted by qualified scholars to derive Islamic rulings from primary sources.',
      context: 'Ijtihad is necessary for new issues not directly addressed in Quran and Sunnah, but must follow established principles.',
      relatedTerms: ['Qiyas', 'Ijma\'', 'Mujtahid'],
      importance: 'important'
    },
    {
      id: '16',
      term: 'Aqeedah',
      arabic: 'العقيدة',
      pronunciation: 'a-qee-dah',
      category: 'theology',
      definition: 'Islamic creed or belief system; the fundamental beliefs that every Muslim must hold.',
      context: 'Aqeedah covers beliefs about Allah, His attributes, angels, books, messengers, Day of Judgment, and divine decree.',
      relatedTerms: ['Tawheed', 'Iman', 'Arkan al-Iman'],
      importance: 'essential'
    },
    {
      id: '17',
      term: 'Fiqh',
      arabic: 'الفقه',
      pronunciation: 'fiqh',
      category: 'jurisprudence',
      definition: 'Islamic jurisprudence; the human understanding and application of Sharia (Islamic law).',
      context: 'Fiqh deals with practical aspects of Islamic life, including worship, transactions, family law, and criminal law.',
      relatedTerms: ['Sharia', 'Usul al-Fiqh', 'Madhab'],
      importance: 'important'
    },
    {
      id: '18',
      term: 'Madhab',
      arabic: 'المذهب',
      pronunciation: 'madh-hab',
      category: 'jurisprudence',
      definition: 'School of Islamic jurisprudence; a systematic approach to deriving Islamic law.',
      context: 'The four main Sunni madhabs are Hanafi, Maliki, Shafi\'i, and Hanbali. Salafis respect the imams but prioritize evidence over madhab opinions.',
      relatedTerms: ['Fiqh', 'Imam', 'Taqleed'],
      importance: 'useful'
    },
    {
      id: '19',
      term: 'Taqleed',
      arabic: 'التقليد',
      pronunciation: 'taq-leed',
      category: 'jurisprudence',
      definition: 'Blind following; accepting religious rulings without knowing the evidence or reasoning behind them.',
      context: 'Salafis discourage blind taqleed and encourage following evidence (daleel) while respecting scholarly opinions.',
      relatedTerms: ['Ittiba\'', 'Daleel', 'Madhab'],
      importance: 'important'
    },
    {
      id: '20',
      term: 'Ittiba\'',
      arabic: 'الاتباع',
      pronunciation: 'it-ti-baa',
      category: 'general',
      definition: 'Following with evidence; accepting teachings based on proof and understanding, as opposed to blind following.',
      context: 'Ittiba\' represents the Salafi approach of following the Prophet ﷺ and scholars based on evidence rather than blind imitation.',
      relatedTerms: ['Taqleed', 'Daleel', 'Sunnah'],
      importance: 'important'
    },
    {
      id: '21',
      term: 'Khulafa ar-Rashideen',
      arabic: 'الخلفاء الراشدون',
      pronunciation: 'khu-la-faa ar-raa-shi-deen',
      category: 'general',
      definition: 'The Rightly-Guided Caliphs; the first four caliphs after Prophet Muhammad ﷺ: Abu Bakr, Umar, Uthman, and Ali.',
      context: 'They are considered the best examples of Islamic leadership and governance after the Prophet ﷺ.',
      relatedTerms: ['Sahabah', 'Khilafah', 'Salaf as-Salih'],
      importance: 'important'
    },
    {
      id: '22',
      term: 'Dhikr',
      arabic: 'الذكر',
      pronunciation: 'dhikr',
      category: 'worship',
      definition: 'Remembrance of Allah; various forms of worship involving the mention and remembrance of Allah.',
      context: 'Dhikr includes reciting Quran, saying prescribed supplications, and remembering Allah in daily activities.',
      relatedTerms: ['Du\'a', 'Tasbih', 'Istighfar'],
      importance: 'important'
    },
    {
      id: '23',
      term: 'Du\'a',
      arabic: 'الدعاء',
      pronunciation: 'du-aa',
      category: 'worship',
      definition: 'Supplication; calling upon Allah for help, guidance, forgiveness, or any need.',
      context: 'Du\'a is considered the essence of worship and can be made in any language, though Arabic supplications from Quran and Sunnah are preferred.',
      relatedTerms: ['Dhikr', 'Istighfar', 'Tawassul'],
      importance: 'essential'
    },
    {
      id: '24',
      term: 'Tawassul',
      arabic: 'التوسل',
      pronunciation: 'ta-was-sul',
      category: 'worship',
      definition: 'Seeking means of approach to Allah; using legitimate intermediaries in supplication.',
      context: 'Legitimate tawassul includes using Allah\'s names and attributes, righteous deeds, or asking living righteous people to make du\'a. Seeking intercession from the dead is rejected.',
      relatedTerms: ['Du\'a', 'Shafa\'ah', 'Wasilah'],
      importance: 'important'
    },
    {
      id: '25',
      term: 'Takfir',
      arabic: 'التكفير',
      pronunciation: 'tak-feer',
      category: 'theology',
      definition: 'Declaring someone to be a disbeliever (kafir); a serious matter in Islam with strict conditions.',
      context: 'Takfir requires clear evidence and must meet specific conditions. Salafis are generally very cautious about takfir and emphasize following scholarly guidelines.',
      relatedTerms: ['Kufr', 'Iman', 'Fasiq'],
      importance: 'important'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Categories', icon: BookMarked },
    { key: 'theology', label: 'Theology (Aqeedah)', icon: Book },
    { key: 'jurisprudence', label: 'Jurisprudence (Fiqh)', icon: Book },
    { key: 'hadith', label: 'Hadith Sciences', icon: Book },
    { key: 'quran', label: 'Quranic Studies', icon: Book },
    { key: 'worship', label: 'Worship (Ibadah)', icon: Book },
    { key: 'general', label: 'General Terms', icon: Book }
  ];

  const importanceLevels = [
    { key: 'all', label: 'All Levels' },
    { key: 'essential', label: 'Essential' },
    { key: 'important', label: 'Important' },
    { key: 'useful', label: 'Useful' }
  ];

  const filteredTerms = glossaryTerms.filter(term => {
    const matchesSearch = searchTerm === '' || 
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.arabic.includes(searchTerm) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.pronunciation.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
    const matchesImportance = selectedImportance === 'all' || term.importance === selectedImportance;
    
    return matchesSearch && matchesCategory && matchesImportance;
  });

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'essential': return 'bg-red-100 text-red-800';
      case 'important': return 'bg-yellow-100 text-yellow-800';
      case 'useful': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'theology': return 'bg-purple-100 text-purple-800';
      case 'jurisprudence': return 'bg-blue-100 text-blue-800';
      case 'hadith': return 'bg-green-100 text-green-800';
      case 'quran': return 'bg-gold-100 text-gold-800';
      case 'worship': return 'bg-primary-100 text-primary-800';
      case 'general': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
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
              <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                <BookMarked className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                {t('navigation.glossary')}
              </h1>
            </div>
            <p className="text-xl text-navy-100 leading-relaxed max-w-3xl mx-auto">
              Comprehensive dictionary of Islamic terms, Arabic phrases, and Salafi terminology with pronunciations and detailed explanations.
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
                placeholder="Search terms, Arabic, or definitions..."
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

            {/* Importance Filter */}
            <select
              value={selectedImportance}
              onChange={(e) => setSelectedImportance(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {importanceLevels.map(level => (
                <option key={level.key} value={level.key}>
                  {level.label}
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
                {glossaryTerms.filter(term => term.importance === 'essential').length}
              </div>
              <div className="text-sm text-red-700">Essential Terms</div>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-600">
                {glossaryTerms.filter(term => term.importance === 'important').length}
              </div>
              <div className="text-sm text-yellow-700">Important Terms</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600">
                {glossaryTerms.filter(term => term.importance === 'useful').length}
              </div>
              <div className="text-sm text-green-700">Useful Terms</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">
                {filteredTerms.length}
              </div>
              <div className="text-sm text-blue-700">Showing Results</div>
            </div>
          </div>
        </div>
      </section>

      {/* Glossary Terms */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTerms.length === 0 ? (
            <div className="text-center py-12">
              <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No terms found matching your criteria.
              </h3>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredTerms.map((term, index) => (
                <Card key={term.id} delay={index * 0.05}>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {term.term}
                        </h3>
                        <div className="flex items-center space-x-4 mb-2">
                          <p className="text-2xl font-arabic text-primary-600">
                            {term.arabic}
                          </p>
                          <button className="text-primary-600 hover:text-primary-700">
                            <Volume2 className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-sm text-gray-500 italic">
                          /{term.pronunciation}/
                        </p>
                      </div>
                      <div className="flex flex-col space-y-2 ml-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getImportanceColor(term.importance)}`}>
                          {term.importance}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(term.category)}`}>
                          {term.category}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Definition</h4>
                        <p className="text-gray-700 leading-relaxed">
                          {term.definition}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Context</h4>
                        <p className="text-gray-600 leading-relaxed text-sm">
                          {term.context}
                        </p>
                      </div>

                      {term.relatedTerms.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Related Terms</h4>
                          <div className="flex flex-wrap gap-2">
                            {term.relatedTerms.map((relatedTerm, idx) => (
                              <span
                                key={idx}
                                className="inline-flex items-center px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-md hover:bg-primary-100 cursor-pointer"
                              >
                                <Tag className="w-3 h-3 mr-1" />
                                {relatedTerm}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
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
              <div className="w-16 h-16 bg-navy-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookMarked className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Continue Learning
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Understanding Islamic terminology is essential for proper comprehension of religious texts and teachings. 
                Continue exploring these terms and their applications in Islamic knowledge.
              </p>
              <div className="text-primary-600 font-medium">
                "And say: My Lord, increase me in knowledge." - Quran 20:114
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Glossary;