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
import Comparison from './pages/Comparison';
import Bidah from './pages/Bidah';
import Checklist from './pages/Checklist';
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
          <Route path="comparison" element={<Comparison />} />
          <Route path="bidah" element={<Bidah />} />
          <Route path="checklist" element={<Checklist />} />
          <Route path="glossary" element={<Glossary />} />
          <Route path="quiz" element={<Quiz />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;