import React from 'react';
import { useTranslation } from 'react-i18next';
import { HelpCircle } from 'lucide-react';
import ComingSoon from '../components/Common/ComingSoon';

const Quiz: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    t('quiz.features.interactive_questions'),
    t('quiz.features.progress_tracking'),
    t('quiz.features.difficulty_levels'),
    t('quiz.features.instant_feedback'),
    t('quiz.features.knowledge_certificates')
  ];

  return (
    <ComingSoon
      title={t('navigation.quiz')}
      description={t('quiz.description')}
      icon={HelpCircle}
      features={features}
      expectedDate={t('quiz.expected_date')}
      color="primary"
    />
  );
};

export default Quiz;