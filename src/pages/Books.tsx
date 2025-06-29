import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { BookOpen, Star, User, Calendar, ExternalLink, Filter, Search, Download } from 'lucide-react';
import Card from '../components/Common/Card';
import IslamicPattern from '../components/Common/IslamicPattern';

interface Book {
  id: string;
  title: string;
  titleArabic?: string;
  author: string;
  authorArabic?: string;
  category: 'aqeedah' | 'fiqh' | 'hadith' | 'tafseer' | 'biography' | 'general';
  level: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  keyTopics: string[];
  whyRecommended: string;
  availability: 'free' | 'paid' | 'both';
  language: 'arabic' | 'english' | 'both';
  pages?: number;
  publishedYear?: string;
  rating: number;
  downloadLink?: string;
  purchaseLink?: string;
}

const Books: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');

  const books: Book[] = [
    {
      id: '1',
      title: 'Kitab at-Tawheed',
      titleArabic: 'كتاب التوحيد',
      author: 'Muhammad ibn Abdul Wahhab',
      authorArabic: 'محمد بن عبد الوهاب',
      category: 'aqeedah',
      level: 'beginner',
      description: 'The fundamental book on Islamic monotheism (Tawheed), explaining the concept of worshipping Allah alone.',
      keyTopics: ['Tawheed', 'Shirk', 'Islamic Monotheism', 'Worship'],
      whyRecommended: 'Essential foundation for understanding Islamic creed. Clear, concise, and based on Quranic verses and authentic hadith.',
      availability: 'free',
      language: 'both',
      pages: 120,
      publishedYear: '1200 AH',
      rating: 5,
      downloadLink: '#'
    },
    {
      id: '2',
      title: 'The Three Fundamental Principles',
      titleArabic: 'ثلاثة الأصول',
      author: 'Muhammad ibn Abdul Wahhab',
      authorArabic: 'محمد بن عبد الوهاب',
      category: 'aqeedah',
      level: 'beginner',
      description: 'Explains the three questions every Muslim will be asked in the grave: Who is your Lord? What is your religion? Who is your Prophet?',
      keyTopics: ['Basic Beliefs', 'Fundamental Principles', 'Islamic Creed'],
      whyRecommended: 'Perfect starting point for new Muslims or those wanting to strengthen their foundation in Islamic beliefs.',
      availability: 'free',
      language: 'both',
      pages: 40,
      publishedYear: '1200 AH',
      rating: 5,
      downloadLink: '#'
    },
    {
      id: '3',
      title: 'Aqeedah al-Wasitiyyah',
      titleArabic: 'العقيدة الواسطية',
      author: 'Ibn Taymiyyah',
      authorArabic: 'ابن تيمية',
      category: 'aqeedah',
      level: 'intermediate',
      description: 'Comprehensive treatise on Islamic creed covering Allah\'s names and attributes, and refuting deviant beliefs.',
      keyTopics: ['Names and Attributes of Allah', 'Islamic Creed', 'Refutation of Deviations'],
      whyRecommended: 'Detailed explanation of Salafi aqeedah by one of the greatest scholars. Essential for intermediate students.',
      availability: 'free',
      language: 'both',
      pages: 80,
      publishedYear: '700 AH',
      rating: 5,
      downloadLink: '#'
    },
    {
      id: '4',
      title: 'Sahih al-Bukhari',
      titleArabic: 'صحيح البخاري',
      author: 'Imam al-Bukhari',
      authorArabic: 'الإمام البخاري',
      category: 'hadith',
      level: 'intermediate',
      description: 'The most authentic collection of hadith after the Quran, containing over 7,000 authentic narrations.',
      keyTopics: ['Authentic Hadith', 'Prophetic Traditions', 'Islamic Law', 'Worship'],
      whyRecommended: 'The gold standard of hadith authenticity. Essential reference for understanding Islamic teachings.',
      availability: 'free',
      language: 'both',
      pages: 3000,
      publishedYear: '256 AH',
      rating: 5,
      downloadLink: '#'
    },
    {
      id: '5',
      title: 'Tafseer Ibn Katheer',
      titleArabic: 'تفسير ابن كثير',
      author: 'Ibn Katheer',
      authorArabic: 'ابن كثير',
      category: 'tafseer',
      level: 'intermediate',
      description: 'Comprehensive Quranic commentary explaining verses through other Quranic verses, hadith, and statements of companions.',
      keyTopics: ['Quranic Commentary', 'Tafseer', 'Islamic Exegesis'],
      whyRecommended: 'Most reliable tafseer following Salafi methodology. Explains Quran through Quran, hadith, and Salaf understanding.',
      availability: 'free',
      language: 'both',
      pages: 4000,
      publishedYear: '774 AH',
      rating: 5,
      downloadLink: '#'
    },
    {
      id: '6',
      title: 'Fiqh us-Sunnah',
      titleArabic: 'فقه السنة',
      author: 'Sayyid Sabiq',
      authorArabic: 'سيد سابق',
      category: 'fiqh',
      level: 'beginner',
      description: 'Practical guide to Islamic jurisprudence based on Quran and Sunnah, covering worship, transactions, and daily life.',
      keyTopics: ['Islamic Jurisprudence', 'Worship', 'Daily Life', 'Practical Islam'],
      whyRecommended: 'Easy-to-understand fiqh book focusing on evidence from Quran and Sunnah rather than blind following.',
      availability: 'both',
      language: 'both',
      pages: 1200,
      publishedYear: '1365 AH',
      rating: 4,
      purchaseLink: '#'
    },
    {
      id: '7',
      title: 'The Sealed Nectar',
      titleArabic: 'الرحيق المختوم',
      author: 'Safi-ur-Rahman al-Mubarakpuri',
      authorArabic: 'صفي الرحمن المباركفوري',
      category: 'biography',
      level: 'beginner',
      description: 'Comprehensive biography of Prophet Muhammad ﷺ, winner of the first prize in the worldwide competition on the Prophet\'s biography.',
      keyTopics: ['Prophet\'s Biography', 'Seerah', 'Islamic History', 'Prophetic Life'],
      whyRecommended: 'Award-winning, authentic, and comprehensive biography. Essential for understanding the Prophet\'s life and character.',
      availability: 'both',
      language: 'both',
      pages: 600,
      publishedYear: '1396 AH',
      rating: 5,
      purchaseLink: '#'
    },
    {
      id: '8',
      title: 'Explanation of the Beautiful and Perfect Names of Allah',
      author: 'Dr. Ahmad ibn Muhammad as-Sayyid',
      category: 'aqeedah',
      level: 'intermediate',
      description: 'Detailed explanation of Allah\'s 99 beautiful names and their meanings, with practical applications.',
      keyTopics: ['Names of Allah', 'Divine Attributes', 'Worship', 'Spirituality'],
      whyRecommended: 'Helps develop a deeper connection with Allah through understanding His names and attributes.',
      availability: 'paid',
      language: 'english',
      pages: 400,
      publishedYear: '1420 AH',
      rating: 4,
      purchaseLink: '#'
    },
    {
      id: '9',
      title: 'The Methodology of the Prophets in Calling to Allah',
      author: 'Rabee ibn Haadee al-Madkhalee',
      category: 'general',
      level: 'intermediate',
      description: 'Explains the correct methodology of calling people to Islam based on the way of the prophets.',
      keyTopics: ['Da\'wah', 'Methodology', 'Calling to Islam', 'Prophetic Way'],
      whyRecommended: 'Essential for understanding the correct approach to da\'wah and avoiding common mistakes.',
      availability: 'free',
      language: 'english',
      pages: 200,
      publishedYear: '1415 AH',
      rating: 4,
      downloadLink: '#'
    },
    {
      id: '10',
      title: 'The Creed of the Four Imams',
      author: 'Muhammad ibn Abdul Rahman al-Khumayyis',
      category: 'aqeedah',
      level: 'advanced',
      description: 'Documents the authentic creed of the four great imams (Abu Hanifa, Malik, Shafi\'i, Ahmad) showing their Salafi beliefs.',
      keyTopics: ['Four Imams', 'Classical Scholars', 'Authentic Creed', 'Historical Documentation'],
      whyRecommended: 'Proves that the great imams followed Salafi aqeedah, refuting claims that Salafiyyah is a new movement.',
      availability: 'paid',
      language: 'english',
      pages: 300,
      publishedYear: '1415 AH',
      rating: 4,
      purchaseLink: '#'
    },
    {
      id: '11',
      title: 'Beneficial Answers to Questions on Innovated Methodologies',
      author: 'Salih ibn Fawzan al-Fawzan',
      category: 'general',
      level: 'intermediate',
      description: 'Contemporary scholar\'s answers to modern questions about Islamic methodology and current issues.',
      keyTopics: ['Contemporary Issues', 'Islamic Methodology', 'Modern Challenges', 'Scholarly Guidance'],
      whyRecommended: 'Addresses modern challenges facing Muslims with authentic Islamic solutions from a senior scholar.',
      availability: 'free',
      language: 'english',
      pages: 250,
      publishedYear: '1425 AH',
      rating: 4,
      downloadLink: '#'
    },
    {
      id: '12',
      title: 'The Concise Collection on Creed',
      author: 'Salih ibn Abdul Aziz Aal ash-Shaykh',
      category: 'aqeedah',
      level: 'beginner',
      description: 'Simple and clear explanation of Islamic creed suitable for beginners and new Muslims.',
      keyTopics: ['Basic Creed', 'Islamic Beliefs', 'Beginner Friendly', 'Clear Explanations'],
      whyRecommended: 'Perfect introduction to Islamic creed with clear language and practical examples.',
      availability: 'free',
      language: 'english',
      pages: 150,
      publishedYear: '1420 AH',
      rating: 4,
      downloadLink: '#'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Categories' },
    { key: 'aqeedah', label: 'Aqeedah (Creed)' },
    { key: 'fiqh', label: 'Fiqh (Jurisprudence)' },
    { key: 'hadith', label: 'Hadith Sciences' },
    { key: 'tafseer', label: 'Tafseer (Quranic Commentary)' },
    { key: 'biography', label: 'Biography (Seerah)' },
    { key: 'general', label: 'General Islamic Studies' }
  ];

  const levels = [
    { key: 'all', label: 'All Levels' },
    { key: 'beginner', label: 'Beginner' },
    { key: 'intermediate', label: 'Intermediate' },
    { key: 'advanced', label: 'Advanced' }
  ];

  const languages = [
    { key: 'all', label: 'All Languages' },
    { key: 'english', label: 'English' },
    { key: 'arabic', label: 'Arabic' },
    { key: 'both', label: 'Both Languages' }
  ];

  const filteredBooks = books.filter(book => {
    const matchesSearch = searchTerm === '' || 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (book.titleArabic && book.titleArabic.includes(searchTerm)) ||
      (book.authorArabic && book.authorArabic.includes(searchTerm));
    
    const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || book.level === selectedLevel;
    const matchesLanguage = selectedLanguage === 'all' || book.language === selectedLanguage;
    
    return matchesSearch && matchesCategory && matchesLevel && matchesLanguage;
  });

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'aqeedah': return 'bg-purple-100 text-purple-800';
      case 'fiqh': return 'bg-blue-100 text-blue-800';
      case 'hadith': return 'bg-green-100 text-green-800';
      case 'tafseer': return 'bg-gold-100 text-gold-800';
      case 'biography': return 'bg-primary-100 text-primary-800';
      case 'general': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
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
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                Book Recommendations
              </h1>
            </div>
            <p className="text-xl text-primary-100 leading-relaxed max-w-3xl mx-auto">
              Carefully curated collection of authentic Islamic books following the methodology of the Salaf as-Salih
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
                placeholder="Search books, authors, or topics..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
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

            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {levels.map(level => (
                <option key={level.key} value={level.key}>
                  {level.label}
                </option>
              ))}
            </select>

            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {languages.map(language => (
                <option key={language.key} value={language.key}>
                  {language.label}
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
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600">
                {books.filter(book => book.level === 'beginner').length}
              </div>
              <div className="text-sm text-green-700">Beginner Books</div>
            </div>
            <div className="bg-yellow-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-yellow-600">
                {books.filter(book => book.level === 'intermediate').length}
              </div>
              <div className="text-sm text-yellow-700">Intermediate Books</div>
            </div>
            <div className="bg-red-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-red-600">
                {books.filter(book => book.level === 'advanced').length}
              </div>
              <div className="text-sm text-red-700">Advanced Books</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">
                {books.filter(book => book.availability === 'free').length}
              </div>
              <div className="text-sm text-blue-700">Free Books</div>
            </div>
          </div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredBooks.length === 0 ? (
            <div className="text-center py-12">
              <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No books found matching your criteria.
              </h3>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredBooks.map((book, index) => (
                <Card key={book.id} delay={index * 0.1}>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {book.title}
                        </h3>
                        {book.titleArabic && (
                          <p className="text-lg font-arabic text-gray-600 mb-2">
                            {book.titleArabic}
                          </p>
                        )}
                        <div className="flex items-center space-x-2 mb-2">
                          <User className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-700">{book.author}</span>
                          {book.authorArabic && (
                            <span className="text-gray-500 font-arabic">({book.authorArabic})</span>
                          )}
                        </div>
                        <div className="flex items-center space-x-1 mb-2">
                          {renderStars(book.rating)}
                          <span className="text-sm text-gray-500 ml-2">({book.rating}/5)</span>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-2 ml-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getLevelColor(book.level)}`}>
                          {book.level}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(book.category)}`}>
                          {book.category}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-4">
                      {book.description}
                    </p>

                    <div className="space-y-3 mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Topics</h4>
                        <div className="flex flex-wrap gap-2">
                          {book.keyTopics.map((topic, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-md"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Why Recommended</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {book.whyRecommended}
                        </p>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          {book.pages && (
                            <span>{book.pages} pages</span>
                          )}
                          {book.publishedYear && (
                            <span>{book.publishedYear}</span>
                          )}
                          <span className="capitalize">{book.language}</span>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          book.availability === 'free' ? 'bg-green-100 text-green-800' :
                          book.availability === 'paid' ? 'bg-red-100 text-red-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {book.availability}
                        </span>
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      {book.downloadLink && (
                        <a
                          href={book.downloadLink}
                          className="flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Free Download
                        </a>
                      )}
                      {book.purchaseLink && (
                        <a
                          href={book.purchaseLink}
                          className="flex items-center px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-700 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Purchase
                        </a>
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
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Start Your Learning Journey
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                These books represent authentic Islamic knowledge following the methodology of the Salaf as-Salih. 
                Start with beginner books and gradually progress to more advanced texts. Always verify with qualified scholars.
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

export default Books;