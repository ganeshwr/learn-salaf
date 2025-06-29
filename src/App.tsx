import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import WhatIsSalafiyyah from './pages/WhatIsSalafiyyah';
import Misconceptions from './pages/Misconceptions';
import CoreBeliefs from './pages/CoreBeliefs';
import Timeline from './pages/Timeline';
import Scholars from './pages/Scholars';
import Glossary from './pages/Glossary';
import Quiz from './pages/Quiz';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="what-is-salafiyyah" element={<WhatIsSalafiyyah />} />
          <Route path="core-beliefs" element={<CoreBeliefs />} />
          <Route path="misconceptions" element={<Misconceptions />} />
          <Route path="timeline" element={<Timeline />} />
          <Route path="scholars" element={<Scholars />} />
          <Route path="glossary" element={<Glossary />} />
          <Route path="quiz" element={<Quiz />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;