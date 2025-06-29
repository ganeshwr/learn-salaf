import React from 'react';
import { useTranslation } from 'react-i18next';
import { BookMarked } from 'lucide-react';
import ComingSoon from '../components/Common/ComingSoon';

const Glossary: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    t('glossary.features.comprehensive_terms'),
    t('glossary.features.arabic_pronunciation'),
    t('glossary.features.search_functionality'),
    t('glossary.features.category_filters'),
    t('glossary.features.related_terms')
  ];

  return (
    <ComingSoon
      title={t('navigation.glossary')}
      description={t('glossary.description')}
      icon={BookMarked}
      features={features}
      expectedDate={t('glossary.expected_date')}
      color="navy"
    />
  );
};

export default Glossary;