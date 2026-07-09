export const bg = {
  nav: {
    links: [
      { href: '#about',    label: 'За мен' },
      { href: '#skills',   label: 'Умения' },
      { href: '#projects', label: 'Проекти' },
      { href: '#contact',  label: 'Контакт' },
    ],
  },
  hero: {
    badge: 'Отворена за нови проекти',
    name: 'Галина Балева',
    role: 'Full-Stack Developer & ИИ интегратор & SEO Specialist',
    description:
      'Изграждам мащабируеми уеб приложения, интегрирам ИИ решения и оптимизирам за търсачки — с фокус върху скорост, чистота и резултат.',
    cta: {
      primary: 'Моите проекти',
      secondary: 'Свържи се с мен',
    },
    stats: [
      { value: '5',   suffix: '+', label: 'Години опит' },
      { value: '30',  suffix: '+', label: 'Завършени проекти' },
      { value: '100', suffix: '%', label: 'Доволни клиенти' },
    ],
    scroll: 'Scroll',
  },
  about: {
    label: 'За мен',
    title: 'Здравей, аз съм Галина',
    bio1: 'Аз съм <strong>Галина Балева</strong> — Full-Stack разработчик, ИИ интегратор и SEO специалист, базирана във Виена. Страстта ми е да изграждам интелигентни дигитални продукти, които не само са технически издържани, но и носят реална стойност.',
    bio2: 'С над <strong>5 години опит</strong> свързвам съвременните уеб технологии с ИИ решения и SEO стратегии, базирани на данни. Вярвам, че добрият софтуер обединява технологията и човечността.',
    chips: [
      { icon: '📍', text: 'Виена, Австрия' },
      { icon: '💼', text: 'Отворена за проекти' },
      { icon: '🌍', text: 'BG · DE · RU · EN' },
      { icon: '🤖', text: 'ИИ мениджър' },
    ],
    cta1: 'Нека си сътрудничим',
    cta2: 'Виж проектите',
  },
  skills: {
    label: 'Умения',
    title: 'Какво нося със себе си',
    sub: 'От фронтенд до бекенд, от SEO до ИИ интеграция — широк спектър за вашия дигитален проект.',
    items: [
      { icon: '🖥️', iconBg: 'rgba(0,229,255,.1)',   name: 'Frontend разработка',  desc: 'Модерни, responsive интерфейси с React, TypeScript и CSS анимации.',             level: 92, tags: ['React','TypeScript','Next.js','CSS'] },
      { icon: '⚙️', iconBg: 'rgba(124,77,255,.1)',  name: 'Backend разработка',   desc: 'Мащабируеми REST API и сървърна логика с Node.js и Python.',                      level: 88, tags: ['Node.js','Python','PostgreSQL','REST'] },
      { icon: '🤖', iconBg: 'rgba(0,229,255,.1)',   name: 'ИИ интеграция',        desc: 'Интеграция на LLM API, чатботове, автоматизации и ИИ функционалности.',           level: 85, tags: ['OpenAI','LangChain','RAG','Agents'] },
      { icon: '📈', iconBg: 'rgba(255,107,107,.1)', name: 'SEO оптимизация',      desc: 'Техническо SEO, Core Web Vitals, структурирани данни и контент стратегия.',       level: 90, tags: ['Core Web Vitals','Schema.org','Analytics'] },
      { icon: '☁️', iconBg: 'rgba(124,77,255,.1)',  name: 'DevOps & Cloud',        desc: 'CI/CD пайплайни, Docker контейнеризация и Cloud деплойменти.',                    level: 78, tags: ['Docker','GitHub Actions','Vercel'] },
      { icon: '🎨', iconBg: 'rgba(0,229,255,.1)',   name: 'UI/UX дизайн',         desc: 'Wireframing, прототипиране и дизайн системи за консистентно потребителско изживяване.', level: 80, tags: ['Figma','Design Systems','Accessibility'] },
    ],
  },
}
