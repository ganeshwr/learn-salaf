import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, CheckCircle, XCircle, RotateCcw, Trophy, Clock, Target, ArrowRight } from 'lucide-react';
import Card from '../components/Common/Card';
import IslamicPattern from '../components/Common/IslamicPattern';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: 'aqeedah' | 'fiqh' | 'hadith' | 'seerah' | 'general';
  difficulty: 'easy' | 'medium' | 'hard';
  source?: string;
}

interface QuizResult {
  score: number;
  totalQuestions: number;
  timeSpent: number;
  category: string;
  difficulty: string;
}

const Quiz: React.FC = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [currentQuiz, setCurrentQuiz] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [startTime, setStartTime] = useState<number>(0);
  const [timeSpent, setTimeSpent] = useState(0);

  const questions: QuizQuestion[] = [
    {
      id: '1',
      question: 'What does "Salaf as-Salih" mean?',
      options: [
        'The righteous predecessors',
        'The modern scholars',
        'The four Imams only',
        'The companions only'
      ],
      correctAnswer: 0,
      explanation: 'Salaf as-Salih refers to the righteous predecessors, specifically the first three generations of Muslims praised by the Prophet ﷺ.',
      category: 'general',
      difficulty: 'easy',
      source: 'Hadith: "The best of people are my generation, then those who come after them, then those who come after them."'
    },
    {
      id: '2',
      question: 'How many generations are included in the Salaf as-Salih?',
      options: ['Two', 'Three', 'Four', 'Five'],
      correctAnswer: 1,
      explanation: 'The Salaf as-Salih includes three generations: the Sahabah (Companions), Tabi\'een (Followers), and Taba\' at-Tabi\'een (Followers of the Followers).',
      category: 'general',
      difficulty: 'easy'
    },
    {
      id: '3',
      question: 'What is the primary source of Islamic guidance after the Quran?',
      options: ['Scholarly consensus', 'The Sunnah', 'Analogical reasoning', 'Local customs'],
      correctAnswer: 1,
      explanation: 'The Sunnah (teachings and practices of Prophet Muhammad ﷺ) is the second primary source of Islamic guidance after the Quran.',
      category: 'hadith',
      difficulty: 'easy'
    },
    {
      id: '4',
      question: 'What is Tawheed?',
      options: [
        'Islamic law',
        'Prayer methodology',
        'Islamic monotheism',
        'Pilgrimage rituals'
      ],
      correctAnswer: 2,
      explanation: 'Tawheed is the fundamental concept of Islamic monotheism - the belief in the absolute unity and uniqueness of Allah.',
      category: 'aqeedah',
      difficulty: 'easy'
    },
    {
      id: '5',
      question: 'What is Bid\'ah in Islamic terminology?',
      options: [
        'Good innovation',
        'Religious innovation not from Islam',
        'Cultural practice',
        'Scientific advancement'
      ],
      correctAnswer: 1,
      explanation: 'Bid\'ah refers to religious innovations - introducing new practices, beliefs, or rituals into Islam that were not established by the Prophet ﷺ or his companions.',
      category: 'fiqh',
      difficulty: 'medium'
    },
    {
      id: '6',
      question: 'Who was the first Caliph after Prophet Muhammad ﷺ?',
      options: ['Umar ibn al-Khattab', 'Abu Bakr as-Siddiq', 'Uthman ibn Affan', 'Ali ibn Abi Talib'],
      correctAnswer: 1,
      explanation: 'Abu Bakr as-Siddiq (RA) was the first Rightly-Guided Caliph after the death of Prophet Muhammad ﷺ.',
      category: 'seerah',
      difficulty: 'easy'
    },
    {
      id: '7',
      question: 'What are the three categories of Tawheed?',
      options: [
        'Belief, worship, and practice',
        'Rububiyyah, Uluhiyyah, and Asma was-Sifat',
        'Faith, hope, and charity',
        'Prayer, fasting, and pilgrimage'
      ],
      correctAnswer: 1,
      explanation: 'The three categories of Tawheed are: Tawheed ar-Rububiyyah (Lordship), Tawheed al-Uluhiyyah (Worship), and Tawheed al-Asma\' was-Sifat (Names and Attributes).',
      category: 'aqeedah',
      difficulty: 'medium'
    },
    {
      id: '8',
      question: 'What is the most authentic collection of hadith after the Quran?',
      options: ['Sahih Muslim', 'Sahih al-Bukhari', 'Sunan Abu Dawud', 'Jami\' at-Tirmidhi'],
      correctAnswer: 1,
      explanation: 'Sahih al-Bukhari is considered the most authentic collection of hadith after the Quran, compiled by Imam al-Bukhari.',
      category: 'hadith',
      difficulty: 'medium'
    },
    {
      id: '9',
      question: 'What does "Manhaj" mean in Islamic context?',
      options: ['Prayer direction', 'Methodology or approach', 'Charity amount', 'Fasting period'],
      correctAnswer: 1,
      explanation: 'Manhaj means methodology or approach, particularly referring to the way of understanding and practicing Islam.',
      category: 'general',
      difficulty: 'medium'
    },
    {
      id: '10',
      question: 'Which scholar wrote "Kitab at-Tawheed"?',
      options: [
        'Ibn Taymiyyah',
        'Muhammad ibn Abdul Wahhab',
        'Ibn Katheer',
        'Imam Ahmad'
      ],
      correctAnswer: 1,
      explanation: 'Muhammad ibn Abdul Wahhab wrote "Kitab at-Tawheed," a fundamental book on Islamic monotheism.',
      category: 'aqeedah',
      difficulty: 'medium'
    },
    {
      id: '11',
      question: 'What is the difference between Taqleed and Ittiba\'?',
      options: [
        'No difference',
        'Taqleed is following with evidence, Ittiba\' is blind following',
        'Ittiba\' is following with evidence, Taqleed is blind following',
        'Both mean the same thing'
      ],
      correctAnswer: 2,
      explanation: 'Ittiba\' means following with evidence and understanding, while Taqleed refers to blind following without knowing the evidence.',
      category: 'fiqh',
      difficulty: 'hard'
    },
    {
      id: '12',
      question: 'What is the correct understanding of Allah\'s attribute "Al-Istawa" (rising above the Throne)?',
      options: [
        'Metaphorical only',
        'Physical sitting',
        'Real but not like creation',
        'Symbolic representation'
      ],
      correctAnswer: 2,
      explanation: 'According to Salafi aqeedah, Allah\'s Istawa is real and literal, but not like the creation. We affirm it without asking how (bila kayf).',
      category: 'aqeedah',
      difficulty: 'hard'
    },
    {
      id: '13',
      question: 'Which battle is known as the first major victory for Muslims?',
      options: ['Battle of Uhud', 'Battle of Badr', 'Battle of Khandaq', 'Conquest of Makkah'],
      correctAnswer: 1,
      explanation: 'The Battle of Badr was the first major military victory for the Muslim community, occurring in the second year of Hijra.',
      category: 'seerah',
      difficulty: 'medium'
    },
    {
      id: '14',
      question: 'What is the ruling on celebrating the Prophet\'s birthday (Mawlid)?',
      options: [
        'Recommended',
        'Obligatory',
        'Bid\'ah (innovation)',
        'Permissible'
      ],
      correctAnswer: 2,
      explanation: 'According to Salafi understanding, celebrating Mawlid is considered bid\'ah because the Prophet ﷺ and his companions never celebrated his birthday.',
      category: 'fiqh',
      difficulty: 'hard'
    },
    {
      id: '15',
      question: 'What does "Sahih" mean in hadith terminology?',
      options: ['Weak', 'Authentic', 'Fabricated', 'Good'],
      correctAnswer: 1,
      explanation: 'Sahih means authentic in hadith terminology, indicating that the hadith meets all the criteria for authenticity.',
      category: 'hadith',
      difficulty: 'easy'
    }
  ];

  const categories = [
    { key: 'all', label: 'All Categories' },
    { key: 'aqeedah', label: 'Aqeedah (Creed)' },
    { key: 'fiqh', label: 'Fiqh (Jurisprudence)' },
    { key: 'hadith', label: 'Hadith Sciences' },
    { key: 'seerah', label: 'Seerah (Biography)' },
    { key: 'general', label: 'General Knowledge' }
  ];

  const difficulties = [
    { key: 'all', label: 'All Difficulties' },
    { key: 'easy', label: 'Easy' },
    { key: 'medium', label: 'Medium' },
    { key: 'hard', label: 'Hard' }
  ];

  const startQuiz = () => {
    let filteredQuestions = questions;
    
    if (selectedCategory !== 'all') {
      filteredQuestions = filteredQuestions.filter(q => q.category === selectedCategory);
    }
    
    if (selectedDifficulty !== 'all') {
      filteredQuestions = filteredQuestions.filter(q => q.difficulty === selectedDifficulty);
    }

    // Shuffle questions and take up to 10
    const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);
    setCurrentQuiz(shuffled.slice(0, Math.min(10, shuffled.length)));
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizStarted(true);
    setQuizCompleted(false);
    setStartTime(Date.now());
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === currentQuiz[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex + 1 < currentQuiz.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
      setTimeSpent(Math.round((Date.now() - startTime) / 1000));
    }
  };

  const showAnswer = () => {
    setShowExplanation(true);
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setQuizCompleted(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setTimeSpent(0);
  };

  const getScoreColor = () => {
    const percentage = (score / currentQuiz.length) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreMessage = () => {
    const percentage = (score / currentQuiz.length) * 100;
    if (percentage >= 90) return 'Excellent! You have mastered this topic.';
    if (percentage >= 80) return 'Very good! You have a strong understanding.';
    if (percentage >= 70) return 'Good! Keep studying to improve further.';
    if (percentage >= 60) return 'Fair. Review the topics and try again.';
    return 'Keep studying! Knowledge comes with consistent effort.';
  };

  if (!quizStarted) {
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
                  <HelpCircle className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold">
                  {t('navigation.quiz')}
                </h1>
              </div>
              <p className="text-xl text-primary-100 leading-relaxed max-w-3xl mx-auto">
                Test and reinforce your knowledge with interactive quizzes covering various aspects of Salafi methodology and Islamic fundamentals
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quiz Setup */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Choose Your Quiz Settings
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {/* Category Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      {categories.map(category => (
                        <option key={category.key} value={category.key}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Difficulty Selection */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Difficulty
                    </label>
                    <select
                      value={selectedDifficulty}
                      onChange={(e) => setSelectedDifficulty(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      {difficulties.map(difficulty => (
                        <option key={difficulty.key} value={difficulty.key}>
                          {difficulty.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Quiz Info */}
                <div className="bg-primary-50 rounded-lg p-6 mb-8">
                  <h3 className="text-lg font-semibold text-primary-800 mb-4">Quiz Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary-600">10</div>
                      <div className="text-sm text-primary-700">Questions</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary-600">~5</div>
                      <div className="text-sm text-primary-700">Minutes</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-primary-600">80%</div>
                      <div className="text-sm text-primary-700">Pass Score</div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    onClick={startQuiz}
                    className="inline-flex items-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    <HelpCircle className="w-5 h-5 mr-2" />
                    Start Quiz
                  </button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
    );
  }

  if (quizCompleted) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <div className="p-8 text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Quiz Completed!
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className={`text-3xl font-bold mb-2 ${getScoreColor()}`}>
                    {score}/{currentQuiz.length}
                  </div>
                  <div className="text-gray-600">Score</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {Math.round((score / currentQuiz.length) * 100)}%
                  </div>
                  <div className="text-gray-600">Percentage</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    {Math.floor(timeSpent / 60)}:{(timeSpent % 60).toString().padStart(2, '0')}
                  </div>
                  <div className="text-gray-600">Time</div>
                </div>
              </div>

              <div className="bg-primary-50 rounded-lg p-6 mb-8">
                <p className={`text-lg font-semibold mb-2 ${getScoreColor()}`}>
                  {getScoreMessage()}
                </p>
                <p className="text-gray-600">
                  "And say: My Lord, increase me in knowledge." - Quran 20:114
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={resetQuiz}
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <RotateCcw className="w-5 h-5 mr-2" />
                  Take Another Quiz
                </button>
                <button
                  onClick={() => window.location.href = '/'}
                  className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Back to Home
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  const currentQuestion = currentQuiz[currentQuestionIndex];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Question {currentQuestionIndex + 1} of {currentQuiz.length}
            </span>
            <span className="text-sm font-medium text-gray-700">
              Score: {score}/{currentQuiz.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / currentQuiz.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <Card>
          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 leading-relaxed">
                {currentQuestion.question}
              </h2>
              <div className="flex flex-col space-y-2 ml-4">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  currentQuestion.difficulty === 'easy' ? 'bg-green-100 text-green-800' :
                  currentQuestion.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {currentQuestion.difficulty}
                </span>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {currentQuestion.category}
                </span>
              </div>
            </div>

            {/* Answer Options */}
            <div className="space-y-3 mb-8">
              {currentQuestion.options.map((option, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                    selectedAnswer === index
                      ? showExplanation
                        ? index === currentQuestion.correctAnswer
                          ? 'border-green-500 bg-green-50 text-green-800'
                          : 'border-red-500 bg-red-50 text-red-800'
                        : 'border-primary-500 bg-primary-50 text-primary-800'
                      : showExplanation && index === currentQuestion.correctAnswer
                        ? 'border-green-500 bg-green-50 text-green-800'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-primary-300'
                  } ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  whileHover={!showExplanation ? { scale: 1.02 } : {}}
                  whileTap={!showExplanation ? { scale: 0.98 } : {}}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      selectedAnswer === index
                        ? showExplanation
                          ? index === currentQuestion.correctAnswer
                            ? 'border-green-500 bg-green-500'
                            : 'border-red-500 bg-red-500'
                          : 'border-primary-500 bg-primary-500'
                        : showExplanation && index === currentQuestion.correctAnswer
                          ? 'border-green-500 bg-green-500'
                          : 'border-gray-300'
                    }`}>
                      {(selectedAnswer === index && showExplanation) || (showExplanation && index === currentQuestion.correctAnswer) ? (
                        index === currentQuestion.correctAnswer ? (
                          <CheckCircle className="w-4 h-4 text-white" />
                        ) : (
                          <XCircle className="w-4 h-4 text-white" />
                        )
                      ) : null}
                    </div>
                    <span className="font-medium">{option}</span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Explanation */}
            <AnimatePresence>
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mb-8"
                >
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-3">Explanation</h3>
                    <p className="text-blue-700 leading-relaxed mb-3">
                      {currentQuestion.explanation}
                    </p>
                    {currentQuestion.source && (
                      <p className="text-blue-600 text-sm italic">
                        Source: {currentQuestion.source}
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Buttons */}
            <div className="flex justify-between">
              <button
                onClick={resetQuiz}
                className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset Quiz
              </button>

              <div className="space-x-3">
                {selectedAnswer !== null && !showExplanation && (
                  <button
                    onClick={showAnswer}
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Show Answer
                  </button>
                )}
                
                {showExplanation && (
                  <button
                    onClick={handleNextQuestion}
                    className="inline-flex items-center px-6 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    {currentQuestionIndex + 1 < currentQuiz.length ? 'Next Question' : 'Finish Quiz'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;