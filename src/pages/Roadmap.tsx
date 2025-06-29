import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Map, CheckCircle, Clock, Book, Users, Target, ArrowRight, Star } from 'lucide-react';
import Card from '../components/Common/Card';
import IslamicPattern from '../components/Common/IslamicPattern';

interface LearningStep {
  id: string;
  title: string;
  description: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  prerequisites: string[];
  resources: string[];
  keyTopics: string[];
  goals: string[];
  assessment: string;
}

interface LearningPath {
  id: string;
  name: string;
  description: string;
  totalDuration: string;
  steps: LearningStep[];
  targetAudience: string;
}

const Roadmap: React.FC = () => {
  const { t } = useTranslation();
  const [selectedPath, setSelectedPath] = useState<string>('foundation');
  const [completedSteps, setCompletedSteps] = useState<Set<string>>(new Set());

  const learningPaths: LearningPath[] = [
    {
      id: 'foundation',
      name: 'Foundation Path',
      description: 'Essential knowledge every Muslim should have about Salafi methodology',
      totalDuration: '6-12 months',
      targetAudience: 'New Muslims, beginners, those wanting to strengthen their foundation',
      steps: [
        {
          id: 'step1',
          title: 'Basic Islamic Beliefs (Aqeedah)',
          description: 'Learn the fundamental beliefs of Islam and the concept of Tawheed',
          duration: '2-3 months',
          difficulty: 'beginner',
          prerequisites: [],
          resources: [
            'Kitab at-Tawheed by Muhammad ibn Abdul Wahhab',
            'The Three Fundamental Principles',
            'Basic Aqeedah lectures'
          ],
          keyTopics: [
            'Tawheed (Islamic Monotheism)',
            'Shirk and its types',
            'Six pillars of faith',
            'Basic Islamic creed'
          ],
          goals: [
            'Understand the concept of Tawheed',
            'Identify and avoid shirk',
            'Know the six pillars of faith',
            'Establish correct Islamic beliefs'
          ],
          assessment: 'Complete quiz on basic aqeedah concepts'
        },
        {
          id: 'step2',
          title: 'Five Pillars of Islam',
          description: 'Master the practical aspects of Islamic worship',
          duration: '2-3 months',
          difficulty: 'beginner',
          prerequisites: ['Basic Islamic Beliefs'],
          resources: [
            'Fiqh us-Sunnah by Sayyid Sabiq',
            'Prayer guides and videos',
            'Local mosque classes'
          ],
          keyTopics: [
            'Shahada (Declaration of Faith)',
            'Salah (Prayer)',
            'Zakah (Charity)',
            'Sawm (Fasting)',
            'Hajj (Pilgrimage)'
          ],
          goals: [
            'Perform prayers correctly',
            'Understand zakah obligations',
            'Fast properly during Ramadan',
            'Know Hajj requirements'
          ],
          assessment: 'Demonstrate proper prayer and explain other pillars'
        },
        {
          id: 'step3',
          title: 'Prophet\'s Biography (Seerah)',
          description: 'Study the life and character of Prophet Muhammad ﷺ',
          duration: '2-3 months',
          difficulty: 'beginner',
          prerequisites: ['Five Pillars of Islam'],
          resources: [
            'The Sealed Nectar by Safi-ur-Rahman al-Mubarakpuri',
            'Seerah lectures',
            'Authentic hadith collections'
          ],
          keyTopics: [
            'Prophet\'s early life',
            'Meccan period',
            'Medinan period',
            'Prophet\'s character and teachings'
          ],
          goals: [
            'Know major events in Prophet\'s life',
            'Understand his character and methodology',
            'Learn practical lessons from his life',
            'Develop love and respect for the Prophet'
          ],
          assessment: 'Write summary of key lessons from Prophet\'s life'
        },
        {
          id: 'step4',
          title: 'Introduction to Salaf as-Salih',
          description: 'Learn about the righteous predecessors and their methodology',
          duration: '1-2 months',
          difficulty: 'beginner',
          prerequisites: ['Prophet\'s Biography'],
          resources: [
            'Books on the Companions',
            'Stories of the Salaf',
            'Methodology books'
          ],
          keyTopics: [
            'Who are the Salaf as-Salih',
            'The three praised generations',
            'Their methodology in understanding Islam',
            'Why follow their understanding'
          ],
          goals: [
            'Understand who the Salaf are',
            'Know the three generations',
            'Appreciate their methodology',
            'Commit to following their path'
          ],
          assessment: 'Explain the importance of following the Salaf'
        }
      ]
    },
    {
      id: 'intermediate',
      name: 'Intermediate Path',
      description: 'Deeper study of Islamic sciences and Salafi methodology',
      totalDuration: '12-24 months',
      targetAudience: 'Those who completed foundation, students of knowledge',
      steps: [
        {
          id: 'step5',
          title: 'Advanced Aqeedah Studies',
          description: 'Study detailed aspects of Islamic creed and refutations of deviations',
          duration: '3-4 months',
          difficulty: 'intermediate',
          prerequisites: ['Foundation Path completion'],
          resources: [
            'Aqeedah al-Wasitiyyah by Ibn Taymiyyah',
            'Sharh as-Sunnah by Imam al-Barbahaaree',
            'Advanced aqeedah texts'
          ],
          keyTopics: [
            'Allah\'s names and attributes',
            'Predestination (Qadar)',
            'Refutation of deviant sects',
            'Issues of faith and disbelief'
          ],
          goals: [
            'Master Allah\'s names and attributes',
            'Understand predestination correctly',
            'Identify and refute deviations',
            'Strengthen conviction in correct beliefs'
          ],
          assessment: 'Analyze and refute a deviant belief using authentic sources'
        },
        {
          id: 'step6',
          title: 'Hadith Sciences (Mustalah al-Hadith)',
          description: 'Learn the science of hadith authentication and classification',
          duration: '4-6 months',
          difficulty: 'intermediate',
          prerequisites: ['Advanced Aqeedah Studies'],
          resources: [
            'Nukhbat al-Fikar by Ibn Hajar',
            'Hadith terminology books',
            'Practical hadith analysis'
          ],
          keyTopics: [
            'Hadith terminology',
            'Chain of narration (Isnad)',
            'Hadith classification',
            'Narrator criticism'
          ],
          goals: [
            'Understand hadith terminology',
            'Evaluate hadith authenticity',
            'Appreciate the science of hadith',
            'Use authentic sources confidently'
          ],
          assessment: 'Analyze the authenticity of given hadith'
        },
        {
          id: 'step7',
          title: 'Islamic Jurisprudence (Fiqh)',
          description: 'Study Islamic law based on Quran and Sunnah',
          duration: '4-6 months',
          difficulty: 'intermediate',
          prerequisites: ['Hadith Sciences'],
          resources: [
            'Bulugh al-Maram by Ibn Hajar',
            'Fiqh books with evidence',
            'Comparative fiqh studies'
          ],
          keyTopics: [
            'Principles of Islamic law',
            'Worship (Ibadah)',
            'Transactions (Muamalat)',
            'Family law'
          ],
          goals: [
            'Understand fiqh principles',
            'Know rulings with evidence',
            'Apply Islamic law correctly',
            'Distinguish between authentic and weak opinions'
          ],
          assessment: 'Derive Islamic ruling from Quran and Sunnah'
        },
        {
          id: 'step8',
          title: 'Quranic Studies (Tafseer)',
          description: 'Study Quranic commentary following Salafi methodology',
          duration: '4-6 months',
          difficulty: 'intermediate',
          prerequisites: ['Islamic Jurisprudence'],
          resources: [
            'Tafseer Ibn Katheer',
            'Tafseer as-Sa\'di',
            'Principles of Tafseer'
          ],
          keyTopics: [
            'Principles of Quranic interpretation',
            'Tafseer methodology',
            'Abrogation (Naskh)',
            'Quranic sciences'
          ],
          goals: [
            'Understand Quranic interpretation principles',
            'Read tafseer correctly',
            'Avoid misinterpretation',
            'Appreciate Quranic guidance'
          ],
          assessment: 'Explain verses using authentic tafseer methodology'
        }
      ]
    },
    {
      id: 'advanced',
      name: 'Advanced Path',
      description: 'Specialized studies for serious students of knowledge',
      totalDuration: '24+ months',
      targetAudience: 'Advanced students, those seeking to teach others',
      steps: [
        {
          id: 'step9',
          title: 'Comparative Religion and Sects',
          description: 'Study different Islamic sects and other religions for da\'wah purposes',
          duration: '6-8 months',
          difficulty: 'advanced',
          prerequisites: ['Intermediate Path completion'],
          resources: [
            'Books on Islamic sects',
            'Comparative religion studies',
            'Refutation literature'
          ],
          keyTopics: [
            'History of Islamic sects',
            'Deviant beliefs and practices',
            'Refutation methodology',
            'Da\'wah to different groups'
          ],
          goals: [
            'Understand various sects',
            'Refute deviations effectively',
            'Engage in informed da\'wah',
            'Protect others from misguidance'
          ],
          assessment: 'Prepare comprehensive refutation of a deviant sect'
        },
        {
          id: 'step10',
          title: 'Arabic Language Mastery',
          description: 'Achieve proficiency in Arabic for direct access to sources',
          duration: '12+ months',
          difficulty: 'advanced',
          prerequisites: ['Comparative Religion and Sects'],
          resources: [
            'Arabic grammar books',
            'Classical Arabic texts',
            'Language immersion programs'
          ],
          keyTopics: [
            'Arabic grammar (Nahw)',
            'Arabic morphology (Sarf)',
            'Classical Arabic literature',
            'Quranic Arabic'
          ],
          goals: [
            'Read classical Arabic texts',
            'Understand Quran in Arabic',
            'Access original scholarly works',
            'Teach Arabic to others'
          ],
          assessment: 'Translate and analyze classical Arabic text'
        },
        {
          id: 'step11',
          title: 'Teaching and Da\'wah Methodology',
          description: 'Learn how to teach Islam and call others to the truth',
          duration: '6-8 months',
          difficulty: 'advanced',
          prerequisites: ['Arabic Language Mastery'],
          resources: [
            'Da\'wah methodology books',
            'Teaching techniques',
            'Practical training'
          ],
          keyTopics: [
            'Principles of da\'wah',
            'Teaching methodology',
            'Dealing with different audiences',
            'Wisdom in calling to Islam'
          ],
          goals: [
            'Develop teaching skills',
            'Learn effective da\'wah methods',
            'Train others properly',
            'Spread authentic knowledge'
          ],
          assessment: 'Conduct teaching session and receive feedback'
        }
      ]
    }
  ];

  const currentPath = learningPaths.find(path => path.id === selectedPath);

  const toggleStepCompletion = (stepId: string) => {
    const newCompleted = new Set(completedSteps);
    if (newCompleted.has(stepId)) {
      newCompleted.delete(stepId);
    } else {
      newCompleted.add(stepId);
    }
    setCompletedSteps(newCompleted);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressPercentage = () => {
    if (!currentPath) return 0;
    const completed = currentPath.steps.filter(step => completedSteps.has(step.id)).length;
    return Math.round((completed / currentPath.steps.length) * 100);
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
                <Map className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold">
                Learning Roadmap
              </h1>
            </div>
            <p className="text-xl text-navy-100 leading-relaxed max-w-3xl mx-auto">
              Structured learning paths to master Salafi methodology and authentic Islamic knowledge
            </p>
          </motion.div>
        </div>
      </section>

      {/* Path Selection */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
            {learningPaths.map((path) => (
              <button
                key={path.id}
                onClick={() => setSelectedPath(path.id)}
                className={`flex-1 max-w-sm p-4 rounded-lg border-2 transition-all ${
                  selectedPath === path.id
                    ? 'border-primary-500 bg-primary-50 text-primary-800'
                    : 'border-gray-200 bg-white text-gray-600 hover:border-primary-300'
                }`}
              >
                <h3 className="text-lg font-semibold mb-2">{path.name}</h3>
                <p className="text-sm mb-2">{path.description}</p>
                <div className="flex items-center justify-between text-xs">
                  <span>{path.totalDuration}</span>
                  <span>{path.steps.length} steps</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Overview */}
      {currentPath && (
        <section className="py-8 bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{currentPath.name}</h2>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-600">{getProgressPercentage()}%</div>
                    <div className="text-sm text-gray-500">Complete</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{currentPath.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <Clock className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                    <div className="font-semibold">{currentPath.totalDuration}</div>
                    <div className="text-sm text-gray-500">Duration</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <Target className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                    <div className="font-semibold">{currentPath.steps.length} Steps</div>
                    <div className="text-sm text-gray-500">Learning Modules</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <Users className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                    <div className="font-semibold">Structured</div>
                    <div className="text-sm text-gray-500">Progressive Learning</div>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-sm text-gray-600 mb-2">Target Audience: {currentPath.targetAudience}</div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${getProgressPercentage()}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Learning Steps */}
      {currentPath && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {currentPath.steps.map((step, index) => (
                <Card key={step.id} delay={index * 0.1}>
                  <div className="p-6">
                    <div className="flex items-start space-x-4">
                      {/* Step Number and Completion */}
                      <div className="flex-shrink-0">
                        <button
                          onClick={() => toggleStepCompletion(step.id)}
                          className={`w-12 h-12 rounded-full border-2 flex items-center justify-center font-bold transition-all ${
                            completedSteps.has(step.id)
                              ? 'bg-green-500 border-green-500 text-white'
                              : 'border-gray-300 text-gray-500 hover:border-primary-500'
                          }`}
                        >
                          {completedSteps.has(step.id) ? (
                            <CheckCircle className="w-6 h-6" />
                          ) : (
                            index + 1
                          )}
                        </button>
                      </div>

                      {/* Step Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-3">
                              {step.description}
                            </p>
                          </div>
                          <div className="flex flex-col space-y-2 ml-4">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(step.difficulty)}`}>
                              {step.difficulty}
                            </span>
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {step.duration}
                            </span>
                          </div>
                        </div>

                        {/* Prerequisites */}
                        {step.prerequisites.length > 0 && (
                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-900 mb-2">Prerequisites</h4>
                            <div className="flex flex-wrap gap-2">
                              {step.prerequisites.map((prereq, idx) => (
                                <span
                                  key={idx}
                                  className="inline-flex items-center px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-md"
                                >
                                  {prereq}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Key Topics */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Key Topics</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {step.keyTopics.map((topic, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <ArrowRight className="w-4 h-4 text-primary-600" />
                                <span className="text-gray-700 text-sm">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Learning Goals */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Learning Goals</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {step.goals.map((goal, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <Target className="w-4 h-4 text-green-600" />
                                <span className="text-gray-700 text-sm">{goal}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Resources */}
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-2">Recommended Resources</h4>
                          <div className="space-y-2">
                            {step.resources.map((resource, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <Book className="w-4 h-4 text-blue-600" />
                                <span className="text-gray-700 text-sm">{resource}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Assessment */}
                        <div className="bg-primary-50 rounded-lg p-4">
                          <h4 className="font-semibold text-primary-800 mb-2 flex items-center">
                            <Star className="w-4 h-4 mr-2" />
                            Assessment
                          </h4>
                          <p className="text-primary-700 text-sm">{step.assessment}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card>
            <div className="p-8">
              <div className="w-16 h-16 bg-navy-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Map className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Begin Your Journey
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Choose the path that matches your current level and commit to consistent learning. 
                Remember that seeking knowledge is a lifelong journey, and every step brings you closer to Allah.
              </p>
              <div className="text-primary-600 font-medium">
                "And whoever follows a path in pursuit of knowledge, Allah will make easy for him a path to Paradise." - Prophet Muhammad ﷺ
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Roadmap;