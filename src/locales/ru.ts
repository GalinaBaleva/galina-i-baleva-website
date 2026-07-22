export const ru = {
  nav: {
    links: [
      { href: '#about',    label: 'Обо мне' },
      { href: '#skills',   label: 'Навыки' },
      { href: '#projects', label: 'Проекты' },
      { href: '#contact',  label: 'Контакт' },
    ],
  },
  hero: {
    badge: 'Открыта для новых проектов',
    name: 'Галина Балева',
    role: 'Full-Stack разработчик & ИИ-интегратор & SEO-специалист',
    description:
      'Создаю масштабируемые веб-приложения, интегрирую ИИ-решения и оптимизирую для поисковых систем — с фокусом на скорость, чистоту и результат.',
    cta: {
      primary: 'Мои проекты',
      secondary: 'Связаться со мной',
    },
    stats: [
      { value: '5',   suffix: '+', label: 'Лет опыта' },
      { value: '30',  suffix: '+', label: 'Завершённых проектов' },
      { value: '100', suffix: '%', label: 'Довольных клиентов' },
    ],
    scroll: 'Scroll',
  },
  about: {
    label: 'Обо мне',
    title: 'Привет, я Галина',
    bio1: 'Я <strong>Галина Балева</strong> — Full-Stack разработчик, ИИ-интегратор и SEO-специалист, работаю из Вены. Моя страсть — создавать интеллектуальные цифровые продукты, которые не только технически безупречны, но и приносят реальную ценность.',
    bio2: 'С более чем <strong>5-летним опытом</strong> я объединяю современные веб-технологии с ИИ-решениями и SEO-стратегиями на основе данных. Я верю, что хорошее ПО объединяет технологии и человечность.',
    chips: [
      { icon: '📍', text: 'Вена, Австрия' },
      { icon: '💼', text: 'Открыта для проектов' },
      { icon: '🌍', text: 'BG · DE · RU · EN' },
      { icon: '🤖', text: 'ИИ-менеджер' },
    ],
    cta1: 'Давайте сотрудничать',
    cta2: 'Смотреть проекты',
  },
  skills: {
    label: 'Навыки',
    title: 'Что я предлагаю',
    sub: 'От фронтенда до бэкенда, от SEO до интеграции ИИ — широкий спектр для вашего цифрового проекта.',
    items: [
      { icon: '🖥️', iconBg: 'rgba(0,229,255,.1)',   name: 'Frontend-разработка',   desc: 'Современные, адаптивные интерфейсы на React и TypeScript — управление состоянием, интеграция с API, тестирование, производительность и доступность.', level: 92, tags: ['React','TypeScript','JavaScript ES6+','Next.js','HTML5 / CSS3','Tailwind CSS','Redux','REST API','Jest','Responsive Design','Accessibility'] },
      { icon: '⚙️', iconBg: 'rgba(124,77,255,.1)',  name: 'Backend-разработка',    desc: 'Надёжные REST API, серверная логика и полный бэкенд для MERN и Next.js приложений: Node.js, Express, MongoDB, аутентификация, WebSockets и Server Actions.', level: 88, tags: ['Node.js','Express.js','MongoDB','Mongoose','REST API','Next.js API Routes','TypeScript','JWT','WebSockets','Server Actions','MVC','Middleware'] },
      { icon: '📈', iconBg: 'rgba(255,107,107,.1)', name: 'SEO/GEO-оптимизация',        desc: 'Полный SEO-аудит и стратегия: техническое SEO, Core Web Vitals, структурированные данные, ключевые слова, on-page оптимизация, контент-стратегия и локальное SEO с гео-таргетингом — для устойчивого органического роста.', level: 92, tags: ['Technical SEO','Core Web Vitals','Schema.org','GA4','Google Search Console','Keyword Research','On-Page SEO','Content Strategy','Local SEO','Google My Business','Geo-targeting','Local Citations'] },
      { icon: '🧠', iconBg: 'rgba(124,77,255,.1)',  name: 'AI бизнес-стратегия',   desc: 'Разработка бизнес-стратегий с помощью инструментов ИИ — анализ, планирование и автоматизация процессов.', level: 88, tags: ['ChatGPT','AI Automation','Roadmapping','Consulting'] },
    ],
  },
  projects: {
    label: 'Проекты',
    title: 'Избранные работы',
    sub: 'Подборка последних проектов — от электронной коммерции до платформ на базе ИИ.',
    items: [
      { title: 'E-Commerce платформа',       desc: 'Полноценный интернет-магазин с интеграцией оплаты, управлением товарами и техническим SEO. Оценка Core Web Vitals: 98/100.', live: '#', code: '#' },
      { title: 'ИИ-поддержка клиентов',      desc: 'Интеллектуальный чат-бот с RAG-архитектурой для среднего бизнеса. Снизил количество обращений в поддержку на 60 %.', live: '#', code: '#' },
      { title: 'Корпоративный SEO-перезапуск', desc: 'Полный редизайн сайта с SEO-фокусом. Органический трафик вырос на 240 % за 3 месяца.', live: '#', code: '#' },
    ],
  },
}
