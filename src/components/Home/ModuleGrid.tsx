import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Heart, 
  Shield, 
  Clock, 
  Users, 
  MessageCircle, 
  BookMarked, 
  HelpCircle 
} from 'lucide-react';
import Card from '../Common/Card';

const ModuleGrid: React.FC = () => {
  const { t } = useTranslation();

  const modules = [
    {
      key: 'what_is_salafiyyah',
      path: '/what-is-salafiyyah',
      icon: BookOpen,
      color: 'primary',
      description: 'Learn the foundations and authentic definition of Salafiyyah'
    },
    {
      key: 'core_beliefs',
      path: '/core-beliefs',
      icon: Heart,
      color: 'gold',
      description: 'Understand the fundamental beliefs and practices'
    },
    {
      key: 'misconceptions',
      path: '/misconceptions',
      icon: Shield,
      color: 'navy',
      description: 'Clarify common myths with evidence-based responses'
    },
    {
      key: 'timeline',
      path: '/timeline',
      icon: Clock,
      color: 'primary',
      description: 'Explore the generations of the Salaf as-Salih'
    },
    {
      key: 'scholars',
      path: '/scholars',
      icon: Users,
      color: 'gold',
      description: 'Read authentic quotes from respected scholars'
    },
    {
      key: 'glossary',
      path: '/glossary',
      icon: BookMarked,
      color: 'navy',
      description: 'Comprehensive dictionary of Islamic terms'
    },
    {
      key: 'quiz',
      path: '/quiz',
      icon: HelpCircle,
      color: 'primary',
      description: 'Test your knowledge with interactive quizzes'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'gold':
        return 'bg-gold-500 text-white';
      case 'navy':
        return 'bg-navy-600 text-white';
      default:
        return 'bg-primary-600 text-white';
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t('home.modules_title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('home.intro')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => {
            const IconComponent = module.icon;
            return (
              <Card key={module.key} delay={index * 0.1}>
                <Link to={module.path} className="block p-6 group">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-lg ${getColorClasses(module.color)} group-hover:scale-110 transition-transform`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-700 transition-colors">
                      {t(`navigation.${module.key}`)}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {module.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary-600 font-medium">
                    <span>{t('common.learn_more')}</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ModuleGrid;