import React from 'react';
import Hero from '../components/Home/Hero';
import ModuleGrid from '../components/Home/ModuleGrid';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <ModuleGrid />
    </div>
  );
};

export default Home;