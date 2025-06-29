import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Book, Menu, X, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = React.useState(false);
  const [isLearningOpen, setIsLearningOpen] = React.useState(false);
  const [isToolsOpen, setIsToolsOpen] = React.useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = React.useState(false);

  const mainNavigationItems = [
    { key: 'home', path: '/' },
    { key: 'what_is_salafiyyah', path: '/what-is-salafiyyah' },
    { key: 'core_beliefs', path: '/core-beliefs' },
    { key: 'misconceptions', path: '/misconceptions' },
  ];

  const learningModules = [
    { key: 'timeline', path: '/timeline' },
    { key: 'scholars', path: '/scholars' },
    { key: 'comparison', path: '/comparison' },
  ];

  const practicalTools = [
    { key: 'bidah', path: '/bidah' },
    { key: 'checklist', path: '/checklist' },
    { key: 'glossary', path: '/glossary' },
    { key: 'quiz', path: '/quiz' },
  ];

  const resources = [
    { key: 'books', path: '/books' },
    { key: 'roadmap', path: '/roadmap' },
  ];

  const allNavigationItems = [
    ...mainNavigationItems,
    ...learningModules,
    ...practicalTools,
    ...resources
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
    { code: 'ms', name: 'Bahasa Melayu', flag: '🇲🇾' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLanguageOpen(false);
  };

  const closeAllDropdowns = () => {
    setIsLearningOpen(false);
    setIsToolsOpen(false);
    setIsResourcesOpen(false);
    setIsLanguageOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b border-primary-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group" onClick={closeAllDropdowns}>
            <div className="bg-primary-600 p-2 rounded-lg group-hover:bg-primary-700 transition-colors">
              <Book className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-semibold text-primary-800">Manhaj Salaf</h1>
              <p className="text-xs text-primary-600">Path of the Salaf</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {/* Main Navigation Items */}
            {mainNavigationItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                onClick={closeAllDropdowns}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'bg-primary-100 text-primary-800'
                    : 'text-gray-600 hover:text-primary-700 hover:bg-primary-50'
                }`}
              >
                {t(`navigation.${item.key}`)}
              </Link>
            ))}

            {/* Learning Modules Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsLearningOpen(!isLearningOpen);
                  setIsToolsOpen(false);
                  setIsResourcesOpen(false);
                  setIsLanguageOpen(false);
                }}
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary-700 hover:bg-primary-50 transition-colors"
              >
                <span>Learning</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLearningOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLearningOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                  >
                    <div className="py-1">
                      {learningModules.map((item) => (
                        <Link
                          key={item.key}
                          to={item.path}
                          onClick={() => {
                            setIsLearningOpen(false);
                            closeAllDropdowns();
                          }}
                          className={`block px-4 py-2 text-sm hover:bg-primary-50 ${
                            location.pathname === item.path ? 'bg-primary-100 text-primary-800' : 'text-gray-700'
                          }`}
                        >
                          {t(`navigation.${item.key}`)}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Practical Tools Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsToolsOpen(!isToolsOpen);
                  setIsLearningOpen(false);
                  setIsResourcesOpen(false);
                  setIsLanguageOpen(false);
                }}
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary-700 hover:bg-primary-50 transition-colors"
              >
                <span>Tools</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isToolsOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isToolsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                  >
                    <div className="py-1">
                      {practicalTools.map((item) => (
                        <Link
                          key={item.key}
                          to={item.path}
                          onClick={() => {
                            setIsToolsOpen(false);
                            closeAllDropdowns();
                          }}
                          className={`block px-4 py-2 text-sm hover:bg-primary-50 ${
                            location.pathname === item.path ? 'bg-primary-100 text-primary-800' : 'text-gray-700'
                          }`}
                        >
                          {t(`navigation.${item.key}`)}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsResourcesOpen(!isResourcesOpen);
                  setIsLearningOpen(false);
                  setIsToolsOpen(false);
                  setIsLanguageOpen(false);
                }}
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary-700 hover:bg-primary-50 transition-colors"
              >
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isResourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                  >
                    <div className="py-1">
                      {resources.map((item) => (
                        <Link
                          key={item.key}
                          to={item.path}
                          onClick={() => {
                            setIsResourcesOpen(false);
                            closeAllDropdowns();
                          }}
                          className={`block px-4 py-2 text-sm hover:bg-primary-50 ${
                            location.pathname === item.path ? 'bg-primary-100 text-primary-800' : 'text-gray-700'
                          }`}
                        >
                          {t(`navigation.${item.key}`)}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-2">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => {
                  setIsLanguageOpen(!isLanguageOpen);
                  setIsLearningOpen(false);
                  setIsToolsOpen(false);
                  setIsResourcesOpen(false);
                }}
                className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-primary-700 hover:bg-primary-50 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{languages.find(l => l.code === i18n.language)?.name}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                  >
                    <div className="py-1">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={`w-full text-left px-4 py-2 text-sm flex items-center space-x-2 hover:bg-primary-50 ${
                            i18n.language === lang.code ? 'bg-primary-100 text-primary-800' : 'text-gray-700'
                          }`}
                        >
                          <span>{lang.flag}</span>
                          <span>{lang.name}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
                closeAllDropdowns();
              }}
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-primary-700 hover:bg-primary-50"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-primary-100 bg-white"
          >
            <div className="px-4 py-2 space-y-1 max-h-96 overflow-y-auto">
              {/* Main Navigation */}
              <div className="py-2">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Main</h3>
                {mainNavigationItems.map((item) => (
                  <Link
                    key={item.key}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'bg-primary-100 text-primary-800'
                        : 'text-gray-600 hover:text-primary-700 hover:bg-primary-50'
                    }`}
                  >
                    {t(`navigation.${item.key}`)}
                  </Link>
                ))}
              </div>

              {/* Learning Modules */}
              <div className="py-2 border-t border-gray-100">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Learning</h3>
                {learningModules.map((item) => (
                  <Link
                    key={item.key}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'bg-primary-100 text-primary-800'
                        : 'text-gray-600 hover:text-primary-700 hover:bg-primary-50'
                    }`}
                  >
                    {t(`navigation.${item.key}`)}
                  </Link>
                ))}
              </div>

              {/* Practical Tools */}
              <div className="py-2 border-t border-gray-100">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Tools</h3>
                {practicalTools.map((item) => (
                  <Link
                    key={item.key}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'bg-primary-100 text-primary-800'
                        : 'text-gray-600 hover:text-primary-700 hover:bg-primary-50'
                    }`}
                  >
                    {t(`navigation.${item.key}`)}
                  </Link>
                ))}
              </div>

              {/* Resources */}
              <div className="py-2 border-t border-gray-100">
                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Resources</h3>
                {resources.map((item) => (
                  <Link
                    key={item.key}
                    to={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      location.pathname === item.path
                        ? 'bg-primary-100 text-primary-800'
                        : 'text-gray-600 hover:text-primary-700 hover:bg-primary-50'
                    }`}
                  >
                    {t(`navigation.${item.key}`)}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;