# Manhaj Salaf - Educational Platform

An interactive educational platform dedicated to clarifying misconceptions and providing authentic knowledge about the methodology of the Salaf as-Salih (Righteous Predecessors) in Islam.

## 🎯 Project Overview

**Manhaj Salaf** is a comprehensive web application designed to educate Muslims about the authentic methodology of following Islam according to the understanding of the first three generations of Muslims (Salaf as-Salih). The platform addresses common misconceptions, provides structured learning paths, and offers authentic Islamic knowledge based on the Quran and Sunnah.

### 🌟 Key Features

- **📚 Interactive Learning Modules**: Comprehensive educational content covering various aspects of Salafi methodology
- **🔍 Misconception Clarification**: Evidence-based responses to common myths and false claims
- **📖 Scholar Quotes**: Authentic quotes from respected classical and contemporary scholars
- **📅 Historical Timeline**: Interactive journey through the blessed generations
- **🧭 Learning Roadmap**: Structured learning paths for beginners to advanced students
- **📚 Book Recommendations**: Curated collection of authentic Islamic literature
- **🧩 Interactive Quiz**: Test and reinforce knowledge with comprehensive quizzes
- **📝 Glossary**: Extensive dictionary of Islamic terms and terminology
- **✅ Practical Checklists**: Tools to distinguish authentic from fake practices
- **🚫 Bid'ah Guide**: Comprehensive guide to religious innovations to avoid
- **🌍 Multilingual Support**: Available in English, Indonesian (Bahasa Indonesia), and Malay (Bahasa Melayu)

## 🛠️ Tech Stack

### Frontend Framework
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development with enhanced developer experience
- **Vite** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, customizable icons

### Routing & Navigation
- **React Router DOM** - Client-side routing for single-page application

### Internationalization
- **React i18next** - Comprehensive internationalization framework
- **i18next** - Translation management and language switching

### Development Tools
- **ESLint** - Code linting and quality assurance
- **TypeScript ESLint** - TypeScript-specific linting rules
- **PostCSS** - CSS processing with Autoprefixer
- **Vite Plugin React** - React support for Vite

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Common/          # Shared components (Card, IslamicPattern, etc.)
│   ├── Home/            # Homepage-specific components
│   └── Layout/          # Layout components (Header, Footer)
├── pages/               # Page components
│   ├── Home.tsx         # Homepage
│   ├── WhatIsSalafiyyah.tsx
│   ├── CoreBeliefs.tsx
│   ├── Misconceptions.tsx
│   ├── Timeline.tsx
│   ├── Scholars.tsx
│   ├── Comparison.tsx
│   ├── Bidah.tsx
│   ├── Checklist.tsx
│   ├── Glossary.tsx
│   ├── Quiz.tsx
│   ├── Books.tsx
│   └── Roadmap.tsx
├── i18n/                # Internationalization
│   ├── index.ts         # i18n configuration
│   └── locales/         # Translation files
│       ├── en.json      # English translations
│       ├── id.json      # Indonesian translations
│       └── ms.json      # Malay translations
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd manhaj-salaf-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🌍 Internationalization

The platform supports three languages:

- **English** (`en`) - Primary language
- **Indonesian** (`id`) - Bahasa Indonesia
- **Malay** (`ms`) - Bahasa Melayu

### Adding New Languages

1. Create new translation file in `src/i18n/locales/`
2. Add language configuration in `src/i18n/index.ts`
3. Update language selector in `src/components/Layout/Header.tsx`

## 🎨 Design System

### Color Palette
- **Primary**: Green tones representing growth and knowledge
- **Gold**: Highlighting important content and achievements
- **Navy**: Professional and trustworthy elements
- **Semantic Colors**: Success, warning, error states

### Typography
- **Inter**: Primary font for UI elements
- **Noto Sans Arabic**: Arabic text and Islamic terminology

### Components
- **Card**: Consistent container component with hover effects
- **Islamic Pattern**: Decorative background pattern for sections
- **Responsive Design**: Mobile-first approach with breakpoints

## 📚 Educational Content

### Learning Modules
1. **Foundation**: What is Salafiyyah, Core Beliefs, Misconceptions
2. **Learning**: Timeline, Scholar Quotes, Comparison
3. **Practical Tools**: Bid'ah Guide, Checklist, Glossary, Quiz
4. **Resources**: Book Recommendations, Learning Roadmap

### Content Principles
- **Authentic Sources**: All content based on Quran, Sunnah, and Salaf understanding
- **Evidence-Based**: Claims supported by authentic Islamic sources
- **Educational Approach**: Wisdom and gradual learning emphasized
- **Respectful Tone**: Maintaining Islamic etiquette and scholarly approach

## 🔮 Future Plans

### Phase 1: Content Enhancement (Q1 2024)
- [ ] Complete Glossary with 500+ terms
- [ ] Expand Quiz system with 200+ questions
- [ ] Add audio pronunciations for Arabic terms
- [ ] Implement progress tracking system

### Phase 2: Interactive Features (Q2 2024)
- [ ] User accounts and progress saving
- [ ] Interactive Timeline with detailed events
- [ ] Advanced search functionality
- [ ] Bookmark and favorites system
- [ ] Study notes and personal annotations

### Phase 3: Community Features (Q3 2024)
- [ ] Discussion forums moderated by qualified scholars
- [ ] Q&A section with scholarly responses
- [ ] Study groups and learning circles
- [ ] Peer learning and mentorship system

### Phase 4: Advanced Learning (Q4 2024)
- [ ] Video lectures integration
- [ ] Live streaming of educational sessions
- [ ] Certificate programs for completed paths
- [ ] Advanced assessment and evaluation tools

### Phase 5: Mobile & Accessibility (2025)
- [ ] React Native mobile application
- [ ] Offline content access
- [ ] Enhanced accessibility features
- [ ] Voice navigation and audio content
- [ ] Integration with Islamic calendar

### Technical Improvements
- [ ] Performance optimization and caching
- [ ] SEO enhancement for better discoverability
- [ ] Analytics and learning insights
- [ ] Content management system for scholars
- [ ] API development for third-party integrations

## 🤝 Contributing

We welcome contributions from the Muslim community, especially:

- **Content Reviewers**: Scholars and students of knowledge to verify authenticity
- **Translators**: Native speakers for additional language support
- **Developers**: Frontend/backend developers for technical improvements
- **Designers**: UI/UX designers for enhanced user experience

### Contribution Guidelines
1. All content must be verified by qualified scholars
2. Follow Islamic etiquette in all communications
3. Maintain high code quality and documentation standards
4. Respect the educational and non-commercial nature of the project

## 📄 License

This project is developed for educational purposes to benefit the Muslim Ummah. Please ensure any use aligns with Islamic principles and educational goals.

## 🤲 Du'a

*"Rabbana atina fi'd-dunya hasanatan wa fi'l-akhirati hasanatan wa qina 'adhab an-nar"*

*"Our Lord, give us good in this world and good in the hereafter, and save us from the punishment of the Fire."*

---

**May Allah accept this effort and make it beneficial for the Ummah. Ameen.**

*Developed with ❤️ for the Muslim Ummah*