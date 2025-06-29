import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users } from 'lucide-react';
import ComingSoon from '../components/Common/ComingSoon';

const Scholars: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    t('scholars.features.authentic_quotes'),
    t('scholars.features.scholar_biographies'),
    t('scholars.features.topic_categories'),
    t('scholars.features.search_filter'),
    t('scholars.features.audio_recitations')
  ];

  return (
    <ComingSoon
      title={t('navigation.scholars')}
      description={t('scholars.description')}
      icon={Users}
      features={features}
      expectedDate={t('scholars.expected_date')}
      color="gold"
    />
  );
};

export default Scholars;