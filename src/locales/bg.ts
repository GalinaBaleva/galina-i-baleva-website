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
      { icon: '🖥️', iconBg: 'rgba(0,229,255,.1)',   name: 'Frontend разработка',  desc: 'Модерни, responsive интерфейси с React и TypeScript — управление на състоянието, интеграция с API, тестване, производителност и достъпност.', level: 92, tags: ['React','TypeScript','JavaScript ES6+','Next.js','HTML5 / CSS3','Tailwind CSS','Redux','REST API','Jest','Responsive Design','Accessibility'] },
      { icon: '⚙️', iconBg: 'rgba(124,77,255,.1)',  name: 'Backend разработка',   desc: 'Надеждни REST API, сървърна логика и пълен бекенд за MERN и Next.js приложения: Node.js, Express, MongoDB, автентикация, WebSockets и Server Actions.', level: 88, tags: ['Node.js','Express.js','MongoDB','Mongoose','REST API','Next.js API Routes','TypeScript','JWT','WebSockets','Server Actions','MVC','Middleware'] },
      { icon: '📈', iconBg: 'rgba(255,107,107,.1)', name: 'SEO/GEO оптимизация',      desc: 'Пълен SEO одит и стратегия: техническо SEO, Core Web Vitals, структурирани данни, ключови думи, on-page оптимизация, контент стратегия и локално SEO с гео-насочване — за устойчив органичен ръст.', level: 92, tags: ['Technical SEO','Core Web Vitals','Schema.org','GA4','Google Search Console','Keyword Research','On-Page SEO','Content Strategy','Local SEO','Google My Business','Geo-targeting','Local Citations'] },
      { icon: '🧠', iconBg: 'rgba(124,77,255,.1)',  name: 'AI бизнес стратегия',  desc: 'Разработване на бизнес стратегии с ИИ инструменти — анализ, планиране и автоматизация на процеси.', level: 88, tags: ['ChatGPT','AI Automation','Roadmapping','Consulting'] },
    ],
  },
  projects: {
    label: 'Проекти',
    title: 'Избрани проекти',
    sub: 'Подборка от последните ми проекти — от е-commerce до платформи с изкуствен интелект.',
    items: [
      { title: 'E-Commerce платформа',       desc: 'Пълноценен онлайн магазин с интеграция на плащания, управление на продукти и техническо SEO. Core Web Vitals: 98/100.', live: '#', code: '#' },
      { title: 'ИИ обслужване на клиенти',   desc: 'Интелигентен чатбот с RAG архитектура за средно предприятие. Намали заявките към поддръжката с 60 %.', live: '#', code: '#' },
      { title: 'Корпоративен SEO рестарт',   desc: 'Пълен редизайн на сайт с SEO фокус. Органичният трафик нарасна с 240 % за 3 месеца.', live: '#', code: '#' },
    ],
  },
}
